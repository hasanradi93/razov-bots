/* The phone: a guided replay of a real conversation with one bot.
 *
 * The visitor plays the customer. Their next message waits in the box at the bottom and goes
 * when they press it; when the bot has offered buttons, the one to tap glows in the chat. The bot
 * "types" for about as long as a person would take to read its reply. "Play it for me" runs the
 * customer's side by itself.
 *
 * A conversation is a list of steps, recorded from the bot itself (js/recorded.js, written by
 * tools/record.ts from each chat's script in js/bots.js):
 *   { me: "text" }                 the customer writes
 *   { tap: "label" }               the customer taps a button the bot offered
 *   { bot: "text", keys: [[…]] }   the bot replies, optionally with rows of buttons
 *   { photo: "src", caption }      the bot sends a picture
 *   { album: ["src", …], caption } the bot sends several pictures at once
 *   { alert: "text", keys }        what reaches the business's own Telegram, with its buttons
 *   { teamTap: "label" }           the business taps one of them — the visitor plays it too
 *   { team: "text" }               the business writes in its own chat
 *   { teamBot: "text", keys }      the bot answers the business, in the business's chat
 *
 * Live: when the bots' live server answers (live/server.ts, or SITE.liveApi), the phone also gets
 * a "Live" tab where the visitor writes whatever they like and the real bot answers.
 */
(function () {
  "use strict";

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const SEND_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.4 20.4 21 12 3.4 3.6l.1 6.5L16 12 3.5 13.9z"/></svg>';

  function el(tag, cls, text) {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  function isUserStep(step) {
    return step && ("me" in step || "tap" in step || "team" in step || "teamTap" in step);
  }
  const isDeskStep = (step) => "alert" in step || "teamBot" in step;

  /** The bots' own row rule: three short buttons across, two of middling length, a long one alone. */
  function rows(labels) {
    const across = (label) => {
      const length = [...label].length;
      return length <= 6 ? 3 : length <= 16 ? 2 : 1;
    };
    const out = [];
    let room = 0;
    for (const label of labels) {
      const row = out[out.length - 1];
      const fits = Math.min(room, across(label));
      if (row && row.length < fits) {
        row.push(label);
        room = fits;
      } else {
        out.push([label]);
        room = across(label);
      }
    }
    return out;
  }

  // The live bots: SITE.liveApi when set; on this machine, the server's usual address. One check
  // for the whole page, and nothing changes if it does not answer.
  const LIVE = (() => {
    const site = window.SITE || {};
    const local = location.protocol === "file:" || /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
    const base = String(site.liveApi || (local ? "http://127.0.0.1:8790" : "")).replace(/\/+$/, "");
    const wait = (ms) => (window.AbortSignal && AbortSignal.timeout ? AbortSignal.timeout(ms) : undefined);
    const ready = base
      ? fetch(`${base}/live/health`, { signal: wait(2500) }).then((r) => (r.ok ? r.json() : null)).catch(() => null)
      : Promise.resolve(null);
    return { base, ready, wait };
  })();

  function sessionId() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    return `s-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
  }

  /** Mounts a phone for one bot into `host`. Returns { stop }. */
  function mountChat(host, bot, icon) {
    const langs = Object.keys(bot.chats);
    const recorded = (window.RECORDED || {})[bot.id] || {};
    const stepsOf = (lang) => recorded[lang] || bot.chats[lang].steps || [];
    const business = (bot.business && bot.business.name) || "the business";
    const state = {
      lang: langs[0],
      steps: [],
      i: 0,
      busy: false,
      auto: false,
      timers: new Set(),
      keys: null,
      // The business's side: its chat as last shown, and the buttons under its latest message.
      desk: null,
      deskKeys: null,
      run: 0,
    };

    // ── Structure ────────────────────────────────────────────────────────
    const bar = el("div", "try-bar");
    bar.append(el("h4", null, "Talk to it here"));
    const langBox = el("div", "langs");
    langBox.setAttribute("role", "group");
    langBox.setAttribute("aria-label", "Conversation language");
    for (const code of langs) {
      const b = el("button", null, bot.chats[code].label);
      b.type = "button";
      b.lang = code;
      b.setAttribute("aria-pressed", String(code === state.lang));
      b.addEventListener("click", () => {
        if (state.lang === code) return;
        state.lang = code;
        for (const other of langBox.children) other.setAttribute("aria-pressed", String(other === b));
        reset();
      });
      langBox.append(b);
    }
    if (langs.length > 1) bar.append(langBox);

    const phone = el("div", "phone");
    const head = el("div", "phone-head");
    const avatar = el("div", "avatar");
    avatar.innerHTML = icon;
    const who = el("div", "phone-who");
    const name = el("strong", null, bot.display);
    const sub = el("span", null, "bot");
    who.append(name, sub);
    head.append(avatar, who);

    const log = el("div", "log");
    log.setAttribute("role", "log");
    log.setAttribute("aria-live", "polite");
    log.setAttribute("aria-label", `Conversation with ${bot.display}`);
    log.tabIndex = 0;

    const composer = el("div", "composer");
    const hint = el("p", "composer-hint");
    const send = el("button", "send");
    send.type = "button";
    const sendText = el("span", "send-text");
    const sendGo = el("span", "send-go");
    sendGo.innerHTML = SEND_ICON;
    send.append(sendText, sendGo);
    const end = el("a", "button end");
    end.hidden = true;
    if (bot.status === "live") {
      end.href = `https://t.me/${bot.username}`;
      end.target = "_blank";
      end.rel = "noopener";
      end.textContent = "Now talk to the real one on Telegram";
    }
    // Live: a box to write in, and a few ways to begin.
    const chips = el("div", "chips");
    chips.hidden = true;
    const form = el("form", "live-form");
    form.hidden = true;
    const input = el("input", "live-input");
    input.type = "text";
    input.maxLength = 600;
    input.autocomplete = "off";
    input.setAttribute("aria-label", `Message to ${bot.display}`);
    input.placeholder = "Write a message…";
    input.dir = "auto";
    const go = el("button", "send-go live-go");
    go.type = "submit";
    go.setAttribute("aria-label", "Send");
    go.innerHTML = SEND_ICON;
    form.append(input, go);
    composer.append(hint, send, end, chips, form);
    phone.append(head, log, composer);

    const tools = el("div", "try-tools");
    const autoBtn = el("button", "tool");
    autoBtn.type = "button";
    autoBtn.setAttribute("aria-pressed", "false");
    autoBtn.innerHTML = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2.5v11l9-5.5z"/></svg><span>Play it for me</span>';
    const againBtn = el("button", "tool");
    againBtn.type = "button";
    againBtn.innerHTML = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2.5a5.5 5.5 0 1 1-5.2 3.7l1.4.5A4 4 0 1 0 8 4v2L4.8 3.2 8 .5z"/></svg><span>Start again</span>';
    tools.append(autoBtn, againBtn);

    const note = el("p", "try-note", bot.chatNote || "A replay of the real bot's replies. To write your own messages, open it on Telegram.");

    const modes = el("div", "modes");
    modes.setAttribute("role", "group");
    modes.setAttribute("aria-label", "How to talk to it");
    modes.hidden = true;
    const replayTab = el("button", null, "Guided replay");
    const liveTab = el("button", null, "Live");
    for (const b of [replayTab, liveTab]) {
      b.type = "button";
      modes.append(b);
    }
    replayTab.setAttribute("aria-pressed", "true");
    liveTab.setAttribute("aria-pressed", "false");
    liveTab.prepend(el("i", "live-dot"));

    host.append(bar, modes, phone, tools, note);

    // ── Timing ───────────────────────────────────────────────────────────
    function wait(ms) {
      const run = state.run;
      return new Promise((resolve, reject) => {
        const id = setTimeout(() => {
          state.timers.delete(id);
          run === state.run ? resolve() : reject(new Error("stale"));
        }, reduce.matches ? Math.min(ms, 120) : ms);
        state.timers.add(id);
      });
    }

    function typingTime(step) {
      const text = step.bot || step.caption || "";
      return Math.min(2300, Math.max(650, 380 + text.length * 13));
    }

    function scrollDown() {
      log.scrollTo({ top: log.scrollHeight, behavior: reduce.matches ? "auto" : "smooth" });
    }

    // ── Rendering ────────────────────────────────────────────────────────
    // Arabic is set right-to-left by hand (not dir="auto") so that its own type size applies.
    const direction = (text) => (/[؀-ۿ]/.test(text) ? "rtl" : "auto");

    function bubble(cls, text) {
      const node = el("div", `msg ${cls}`, text);
      node.dir = direction(text);
      return node;
    }

    // As the bots do on Telegram: once tapped, the buttons under a message become one,
    // "✓ what was chosen".
    function collapse(keys, label) {
      const row = el("div", "keys-row");
      const chosen = el("button", "key is-chosen is-collapsed", `✓ ${label}`);
      chosen.type = "button";
      chosen.tabIndex = -1;
      chosen.dir = "auto";
      row.append(chosen);
      keys.replaceChildren(row);
      keys.classList.add("is-spent");
    }

    function keyRows(keyLabels, cls) {
      const keys = el("div", cls);
      for (const row of keyLabels) {
        const r = el("div", "keys-row");
        for (const label of row) {
          const k = el("button", "key", label);
          k.type = "button";
          k.dir = "auto";
          k.tabIndex = -1;
          r.append(k);
        }
        keys.append(r);
      }
      return keys;
    }

    // The business's own chat, shown as a box in the customer's: its messages, its buttons, what
    // it writes and what the bot answers it. Steps that follow one another share one box.
    function desk() {
      if (state.desk && log.lastElementChild === state.desk) return state.desk;
      const node = el("div", "msg msg-alert");
      node.append(el("b", null, bot.alertLabel || "Sent to the business's Telegram"));
      log.append(node);
      state.desk = node;
      return node;
    }

    function renderDesk(step) {
      const box = desk();
      if ("team" in step) {
        const said = el("p", "desk-me", step.team);
        said.dir = direction(step.team);
        box.append(said);
        return;
      }
      // The label is English and the message is usually Arabic: each gets its own direction.
      const text = step.alert != null ? step.alert : step.teamBot;
      const body = el("p", step.alert != null ? null : "desk-bot", text);
      body.dir = direction(text);
      box.append(body);
      if (step.keys) {
        const keys = keyRows(step.keys, "keys desk-keys");
        box.append(keys);
        state.deskKeys = keys;
      }
    }

    function renderBotStep(step) {
      if (isDeskStep(step)) {
        renderDesk(step);
        return;
      }
      if ("photo" in step) {
        const node = el("div", "msg msg-bot msg-photo");
        const img = el("img");
        img.src = step.photo;
        img.alt = step.alt || step.caption || "";
        img.loading = "lazy";
        node.append(img);
        if (step.caption) {
          const p = el("p", null, step.caption);
          p.dir = direction(step.caption);
          node.append(p);
        }
        log.append(node);
      } else if ("album" in step) {
        const node = el("div", "msg msg-bot msg-album");
        for (const src of step.album) {
          const img = el("img");
          img.src = src;
          img.alt = "";
          img.loading = "lazy";
          node.append(img);
        }
        log.append(node);
        if (step.caption) log.append(bubble("msg-bot", step.caption));
      } else {
        log.append(bubble("msg-bot", step.bot));
      }
      if (step.keys) {
        const keys = keyRows(step.keys, "keys");
        log.append(keys);
        state.keys = keys;
      }
    }

    function setComposer(mode, text) {
      if (live.on) return;
      // aria-disabled, not disabled: a disabled button drops keyboard focus on every turn.
      send.setAttribute("aria-disabled", String(!["send", "start", "tap", "team", "teamTap"].includes(mode)));
      const finished = mode === "done" && bot.status === "live";
      const hadFocus = document.activeElement === send;
      send.hidden = finished;
      end.hidden = !finished;
      if (finished && hadFocus) end.focus();
      send.classList.toggle("is-start", mode === "start");
      send.classList.toggle("is-team", mode === "team" || mode === "teamTap");
      if (mode === "start") {
        sendText.textContent = "Start";
        hint.textContent = "Press Start, as you would on Telegram.";
      } else if (mode === "send") {
        sendText.textContent = text;
        sendText.dir = "auto";
        hint.textContent = state.auto ? "Sending by itself…" : "Your next message. Press to send.";
      } else if (mode === "tap") {
        sendText.textContent = text;
        hint.textContent = `Tap “${text}” in the chat, or here.`;
      } else if (mode === "teamTap") {
        sendText.textContent = text;
        sendText.dir = "auto";
        hint.textContent = `Now you are ${business}: tap “${text}” in its chat, or here.`;
      } else if (mode === "team") {
        sendText.textContent = text;
        sendText.dir = "auto";
        hint.textContent = `Now you are ${business}, writing in its own chat. Press to send.`;
      } else if (mode === "wait") {
        sendText.textContent = "…";
        hint.textContent = `${bot.short} is writing…`;
      } else if (mode === "done") {
        sendText.textContent = "That's the whole conversation";
        hint.textContent = bot.status === "live"
          ? "That's the whole conversation. Write your own messages to the live bot:"
          : "That's the whole conversation. Start again, or switch language above.";
      }
    }

    // ── Flow ─────────────────────────────────────────────────────────────
    async function botTurns() {
      state.busy = true;
      setComposer("wait");
      try {
        while (state.i < state.steps.length && !isUserStep(state.steps[state.i])) {
          const step = state.steps[state.i];
          if (!isDeskStep(step)) {
            await wait(260);
            const typing = el("div", "typing");
            typing.setAttribute("aria-label", `${bot.short} is typing`);
            typing.append(el("i"), el("i"), el("i"));
            log.append(typing);
            sub.textContent = "typing…";
            sub.classList.add("is-typing");
            scrollDown();
            await wait(typingTime(step));
            typing.remove();
            sub.textContent = "bot";
            sub.classList.remove("is-typing");
          } else {
            await wait(500);
          }
          renderBotStep(step);
          scrollDown();
          state.i++;
        }
      } catch {
        return; // a reset happened while we waited
      }
      state.busy = false;
      offerNext();
    }

    function offerNext() {
      const step = state.steps[state.i];
      if (!step) {
        setComposer("done");
        return;
      }
      if ("me" in step) {
        setComposer(state.i === 0 && step.me === "/start" ? "start" : "send", step.me);
      } else if ("team" in step) {
        setComposer("team", step.team);
      } else if ("tap" in step || "teamTap" in step) {
        const label = "tap" in step ? step.tap : step.teamTap;
        const keys = "tap" in step ? state.keys : state.deskKeys;
        setComposer("tap" in step ? "tap" : "teamTap", label);
        const key = keys && [...keys.querySelectorAll(".key")].find((k) => k.textContent === label);
        if (key) {
          key.classList.add("is-next");
          key.tabIndex = 0;
          key.onclick = () => userTurn();
        }
      }
      if (state.auto) {
        const at = state.i;
        wait(1500).then(() => state.i === at && state.auto && userTurn(), () => {});
      }
    }

    function userTurn() {
      if (state.busy) return;
      const step = state.steps[state.i];
      if (!isUserStep(step)) return;
      if ("me" in step) {
        log.append(bubble("msg-me", step.me));
      } else if ("team" in step) {
        renderDesk(step);
      } else {
        const keys = "tap" in step ? state.keys : state.deskKeys;
        if (keys) {
          // A tapped key is about to go; keep the keyboard in the phone.
          if (document.activeElement && document.activeElement.classList.contains("key")) send.focus();
          collapse(keys, "tap" in step ? step.tap : step.teamTap);
        }
      }
      state.i++;
      scrollDown();
      botTurns();
    }

    function reset() {
      state.run++;
      for (const id of state.timers) clearTimeout(id);
      state.timers.clear();
      state.steps = stepsOf(state.lang);
      state.i = 0;
      state.busy = false;
      state.keys = null;
      state.desk = null;
      state.deskKeys = null;
      log.replaceChildren();
      sub.textContent = "bot";
      sub.classList.remove("is-typing");
      // Telegram shows a bot's description in an empty chat; this card plays that part.
      if (bot.chats[state.lang].intro) {
        const intro = el("div", "log-intro");
        intro.append(el("strong", null, "In this conversation"), el("p", null, bot.chats[state.lang].intro));
        log.append(intro);
      }
      offerNext();
    }

    // ── Live ─────────────────────────────────────────────────────────────
    const live = { on: false, session: "", busy: false, keys: null };
    const replayNote = note.textContent;
    const liveHint = "You are talking to the real bot. The business is made up: nothing you book is real.";

    function liveNote(text) {
      log.append(el("p", "msg-note", text));
      scrollDown();
    }

    function renderLive(reply) {
      const base = LIVE.base;
      if (reply.album) renderBotStep({ album: reply.album.photos.map((p) => base + p), caption: reply.album.caption });
      if (reply.photo) renderBotStep({ photo: base + reply.photo, caption: reply.text });
      else if (reply.text) renderBotStep({ bot: reply.text });
      if (reply.buttons && reply.buttons.length) {
        const keys = el("div", "keys");
        // Laid out as the bots lay them out on Telegram.
        const layout = rows(reply.buttons.map((b) => b.label));
        let i = 0;
        for (const rowLabels of layout) {
          const row = el("div", "keys-row");
          for (const button of reply.buttons.slice(i, (i += rowLabels.length))) {
            const k = el("button", "key is-live", button.label);
            k.type = "button";
            k.dir = "auto";
            k.addEventListener("click", () => {
              if (live.busy || keys.classList.contains("is-spent")) return;
              liveSend(button.send, null, k);
            });
            row.append(k);
          }
          keys.append(row);
        }
        log.append(keys);
        live.keys = keys;
      }
      if (reply.business) {
        state.desk = null; // each message to the business in a box of its own
        renderBotStep({ alert: reply.business });
      }
      input.placeholder = reply.askPhone ? "Type your number (on Telegram it is a button)" : "Write a message…";
    }

    async function liveSend(text, shown = text, tapped = null) {
      if (live.busy || !text.trim()) return;
      live.busy = true;
      chips.hidden = true;
      if (tapped) tapped.classList.add("is-pressed");
      if (shown != null) log.append(bubble("msg-me", shown));
      const typing = el("div", "typing");
      typing.setAttribute("aria-label", `${bot.short} is typing`);
      typing.append(el("i"), el("i"), el("i"));
      log.append(typing);
      sub.textContent = "typing…";
      sub.classList.add("is-typing");
      hint.textContent = `${bot.short} is writing… The real bot can take a few seconds.`;
      scrollDown();
      const session = live.session;
      try {
        const response = await fetch(`${LIVE.base}/live/message`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ bot: bot.id, session, text }),
          signal: LIVE.wait(45000),
        });
        const body = await response.json().catch(() => ({}));
        if (session !== live.session) return; // a new conversation was started meanwhile
        typing.remove();
        if (!response.ok) liveNote(body.message || "The live bot could not answer that one.");
        else {
          // The conversation has moved on: buttons under older replies are spent. Not before —
          // after a failure the visitor can tap them again.
          if (live.keys) live.keys.classList.add("is-spent");
          if (tapped && tapped.closest(".keys")) collapse(tapped.closest(".keys"), tapped.textContent);
          if (body.reply) renderLive(body.reply);
          else liveNote("The bot had nothing to say to that. Try writing it another way.");
        }
      } catch {
        if (session !== live.session) return;
        typing.remove();
        liveNote(bot.status === "live"
          ? "The live bot is not answering just now. Try again in a moment, or open it on Telegram."
          : "The live bot is not answering just now. Try again in a moment, or switch to the replay.");
      } finally {
        if (tapped) tapped.classList.remove("is-pressed");
        if (session === live.session) {
          live.busy = false;
          sub.textContent = "bot";
          sub.classList.remove("is-typing");
          hint.textContent = liveHint;
          scrollDown();
          if (live.on && !window.matchMedia("(hover: none)").matches) input.focus({ preventScroll: true });
        }
      }
    }

    function startLive() {
      live.session = sessionId();
      live.busy = false;
      live.keys = null;
      log.replaceChildren();
      sub.textContent = "bot";
      sub.classList.remove("is-typing");
      const intro = el("div", "log-intro");
      intro.append(
        el("strong", null, "Live: the real bot"),
        el("p", null, "Write anything, in Arabic, English or French, as you would on Telegram. Or begin with one of these."),
      );
      log.append(intro);
      // Ways to begin: Start, then each language's first message from the replays.
      chips.replaceChildren();
      // Start, and the request of each conversation that opens by writing it rather than by buttons
      // (a bare greeting is not one: Start already says hello).
      const greeting = /^(hello|hi|bonjour|مرحبا)$/i;
      const opening = (lang) => {
        for (const st of stepsOf(lang)) {
          if ("tap" in st) return null;
          if ("me" in st && st.me !== "/start" && !greeting.test(st.me)) return st.me;
        }
        return null;
      };
      const openers = ["/start", ...langs.map(opening).filter(Boolean)];
      for (const text of openers) {
        const chip = el("button", "chip", text === "/start" ? "Start" : text);
        chip.type = "button";
        chip.dir = direction(text);
        chip.addEventListener("click", () => liveSend(text));
        chips.append(chip);
      }
      chips.hidden = false;
      hint.textContent = liveHint;
      input.value = "";
      input.placeholder = "Write a message…";
    }

    function setMode(toLive) {
      if (live.on === toLive) return;
      live.on = toLive;
      replayTab.setAttribute("aria-pressed", String(!toLive));
      liveTab.setAttribute("aria-pressed", String(toLive));
      phone.classList.toggle("is-live", toLive);
      langBox.hidden = toLive;
      send.hidden = toLive;
      end.hidden = true;
      form.hidden = !toLive;
      chips.hidden = !toLive;
      autoBtn.hidden = toLive;
      againBtn.querySelector("span").textContent = toLive ? "New conversation" : "Start again";
      note.textContent = toLive ? "The real bot, answering through this page: the same replies it gives on Telegram." : replayNote;
      if (toLive) {
        state.run++; // stops a replay that was playing
        for (const id of state.timers) clearTimeout(id);
        state.timers.clear();
        state.auto = false;
        autoBtn.setAttribute("aria-pressed", "false");
        autoBtn.querySelector("span").textContent = "Play it for me";
        startLive();
      } else {
        live.session = ""; // an answer still on its way is dropped
        reset();
      }
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const text = input.value.trim();
      if (!text || live.busy) return;
      input.value = "";
      liveSend(text);
    });
    replayTab.addEventListener("click", () => setMode(false));
    liveTab.addEventListener("click", () => setMode(true));

    LIVE.ready.then((health) => {
      if (!health || !Array.isArray(health.bots) || !health.bots.includes(bot.id)) return;
      modes.hidden = false;
      // Straight to the real bot, unless the visitor has already begun the replay.
      if (state.i === 0 && !state.auto) setMode(true);
    });

    send.addEventListener("click", () => {
      if (send.getAttribute("aria-disabled") === "true") return;
      if (isUserStep(state.steps[state.i])) userTurn();
    });
    autoBtn.addEventListener("click", () => {
      state.auto = !state.auto;
      autoBtn.setAttribute("aria-pressed", String(state.auto));
      autoBtn.querySelector("span").textContent = state.auto ? "Pause" : "Play it for me";
      if (state.auto && !state.busy) {
        if (state.i >= state.steps.length) reset();
        userTurn();
      }
    });
    againBtn.addEventListener("click", () => (live.on ? startLive() : reset()));

    reset();

    return {
      stop() {
        if (live.on) return; // a live conversation is kept, as Telegram keeps a chat
        state.auto = false;
        autoBtn.setAttribute("aria-pressed", "false");
        autoBtn.querySelector("span").textContent = "Play it for me";
        reset();
      },
    };
  }

  window.mountChat = mountChat;
})();
