/* The worlds: four planets — the kinds of work — each with its bots circling it as comets.
 *
 * A row of planet tabs; under it, the chosen planet's comets as a second row of tabs; under that,
 * the chosen bot's world. Choosing a comet opens its world as a circle growing out of that comet,
 * over the world that was there before, and the section's light changes to the new world's colour
 * at the same time. Choosing a planet opens the comet last chosen on it (its first, at first).
 * Everything is built from window.PLANETS and window.BOTS (js/bots.js), so a price or a reply is
 * changed there alone; js/planets.js says which link opens what (#dental, #booking, #world-snack).
 */
(function () {
  "use strict";

  const ICONS = {
    tooth: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 3C4.9 3 3 4.9 3 7.4c0 2.1 1 3.5 1.6 5.2.6 1.7.6 3.7 1.1 5.5.3 1.3.8 2.9 1.9 2.9 1.4 0 1.6-2.3 2-4 .3-1.3.8-2.4 2.4-2.4s2.1 1.1 2.4 2.4c.4 1.7.6 4 2 4 1.1 0 1.6-1.6 1.9-2.9.5-1.8.5-3.8 1.1-5.5.6-1.7 1.6-3.1 1.6-5.2C21 4.9 19.1 3 16.8 3c-2 0-2.8 1.2-4.8 1.2S9.2 3 7.2 3Z"/></svg>',
    scissors: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12"/></svg>',
    stethoscope: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3H4a1.5 1.5 0 0 0-1.5 1.5V9a5.5 5.5 0 0 0 11 0V4.5A1.5 1.5 0 0 0 12 3h-1"/><path d="M8 14.5v1a5.5 5.5 0 0 0 11 0v-3"/><circle cx="19" cy="10.5" r="2"/></svg>',
    crate: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5 3.5 7v10l8.5 4.5 8.5-4.5V7z"/><path d="m3.5 7 8.5 4.5L20.5 7M12 11.5v10M7.8 4.8l8.4 4.5"/></svg>',
    burger: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11a8 6.5 0 0 1 16 0z"/><path d="M3 14.5h18M4.5 18h15a1.5 1.5 0 0 1 0 3h-15a1.5 1.5 0 0 1 0-3z"/><path d="M4 14.5c1.3 1.6 2.7 1.6 4 0 1.3 1.6 2.7 1.6 4 0 1.3 1.6 2.7 1.6 4 0 1.3 1.6 2.7 1.6 4 0"/></svg>',
    device: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="4" width="13" height="9.5" rx="1.5"/><path d="M1 16.5h12"/><rect x="16" y="7.5" width="6.5" height="12.5" rx="1.6"/><path d="M18.6 17.6h1.3"/></svg>',
    // A generator's meter: the dial, its needle, and the spark of the current.
    meter: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M7 11.5a5 5 0 0 1 10 0"/><path d="m12 11.5 2.6-2.6"/><path d="M12.6 14.2 10.4 17.4h2.8l-1.1 2.1"/></svg>',
    // A receiver and the voice coming out of it.
    wave: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 3.5h2.6l1.5 3.9-1.9 1.3a10.2 10.2 0 0 0 4.9 4.9l1.3-1.9 3.9 1.5v2.6a1.6 1.6 0 0 1-1.7 1.6C9.6 17.1 3.9 11.4 3.6 5.2a1.6 1.6 0 0 1 1.6-1.7Z"/><path d="M15 4.2v3.6M17.6 2.6v6.8M20.2 4.6v2.8"/></svg>',
  };
  // The planets' own signs: what each kind of work is.
  const PLANET_ICONS = {
    calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4M8.5 14.5l2 2 4-4"/></svg>',
    bag: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 8h15l-1.2 12.5H5.7z"/><path d="M8.8 10.5V7a3.2 3.2 0 0 1 6.4 0v3.5"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.6 2.5 5 13.6h6.1L9.9 21.5l8.9-11.4h-6.3z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.2 3.5h2.9l1.6 4.2-2.1 1.4a11 11 0 0 0 5.3 5.3l1.4-2.1 4.2 1.6v2.9a1.7 1.7 0 0 1-1.8 1.7C10.6 18.1 4.9 12.4 4.5 5.3a1.7 1.7 0 0 1 1.7-1.8Z"/></svg>',
  };
  window.BotIcons = ICONS;
  window.PlanetIcons = PLANET_ICONS;

  const bots = window.BOTS || [];
  const where = window.Planets;
  const planets = (window.PLANETS || []).filter((p) => p.bots && p.bots.length);
  const planetRow = document.querySelector("[data-planets]");
  const cometHost = document.querySelector("[data-comet-panels]");
  const stage = document.querySelector("[data-stage]");
  const section = document.querySelector("[data-worlds]");
  if (!planetRow || !cometHost || !stage || !section || !bots.length || !planets.length || !where) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const bar = document.querySelector("[data-bar]");

  // Brings a row up to just under the fixed bar: the planets for a planet's link, a planet's comets
  // for a bot's (its world then starts right under them). "near" leaves it alone when it is already
  // close to there, so tapping from comet to comet does not jog the page.
  function land(row, how) {
    if (!row || !how) return;
    const under = (bar ? bar.getBoundingClientRect().bottom : 64) + 10;
    const at = row.getBoundingClientRect().top;
    if (how === "near" && at >= under - 12 && at <= under + 140) return;
    const top = Math.max(0, at + window.scrollY - under);
    const behavior = how === "jump" || reduce.matches ? "instant" : "smooth";
    try {
      window.scrollTo({ top, behavior });
    } catch {
      window.scrollTo(0, top);
    }
  }

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const tg = (bot) => `https://t.me/${bot.username}`;
  const botById = new Map(bots.map((b) => [b.id, b]));
  const hasChat = (bot) => Object.values(bot.chats || {}).some((chat) => chat && (chat.script || chat.steps));

  const planetTabs = new Map();
  const cometPanels = new Map();
  const cometTabs = new Map();
  const panels = new Map();
  const tries = new Map();
  const chosen = new Map(); // planet → the comet last opened on it
  let currentPlanet = null;
  let current = null;
  let running = null;

  // ── Building: the planets ──────────────────────────────────────────────

  function stateOf(bot) {
    if (bot.status === "live") return "Live on Telegram";
    return hasChat(bot) ? "Demo here, Telegram soon" : "Soon";
  }

  function buildPlanetTab(planet, index) {
    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = "planet";
    tab.id = `planet-tab-${planet.id}`;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", `planet-${planet.id}`);
    tab.setAttribute("aria-selected", "false");
    tab.tabIndex = index === 0 ? 0 : -1;
    tab.style.setProperty("--p", planet.hue);
    const its = planet.bots.map((id) => botById.get(id)).filter(Boolean);
    // Its comets circle it: one light per bot, each in that bot's colour.
    const comets = its
      .map((bot, i) => `<i style="--i:${i};--c:${esc(bot.hue)}"></i>`)
      .join("");
    const count = `${its.length} ${its.length === 1 ? "bot" : "bots"}`;
    tab.innerHTML = `
      <span class="planet-body">
        <span class="planet-ring"></span>
        <span class="planet-comets" style="--n:${its.length}">${comets}</span>
        ${PLANET_ICONS[planet.icon] || ""}
      </span>
      <span class="planet-name">${esc(planet.name.en)}</span>
      <span class="planet-alt"><span lang="ar" dir="rtl">${esc(planet.name.ar)}</span><span lang="fr">${esc(planet.name.fr)}</span></span>
      <span class="planet-state">${esc(planet.tag)} · ${count}</span>`;
    tab.addEventListener("click", () => openPlanet(planet.id, { user: true }));
    return tab;
  }

  function buildCometPanel(planet) {
    const panel = document.createElement("div");
    panel.className = "comet-panel";
    panel.id = `planet-${planet.id}`;
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", `planet-tab-${planet.id}`);
    panel.hidden = true;
    panel.style.setProperty("--p", planet.hue);
    panel.innerHTML = `
      <p class="planet-line">${esc(planet.line.en)}</p>
      <p class="planet-line-alt"><span lang="ar" dir="rtl">${esc(planet.line.ar)}</span><span lang="fr">${esc(planet.line.fr)}</span></p>`;
    const row = document.createElement("div");
    row.className = "comets";
    row.setAttribute("role", "tablist");
    row.setAttribute("aria-label", `${planet.name.en}: its bots`);
    planet.bots.forEach((id, i) => {
      const bot = botById.get(id);
      if (!bot) return;
      const tab = buildCometTab(bot, i);
      cometTabs.set(id, tab);
      row.append(tab);
    });
    row.addEventListener("keydown", (event) => moveWithin(event, planet.bots, current, (id) => {
      const tab = cometTabs.get(id);
      tab.focus();
      open(id, { from: tab, user: true, scroll: "near" });
    }));
    panel.append(row);
    return panel;
  }

  function buildCometTab(bot, index) {
    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = "comet";
    tab.id = `tab-${bot.id}`;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", `world-${bot.id}`);
    tab.setAttribute("aria-selected", "false");
    tab.tabIndex = index === 0 ? 0 : -1;
    tab.style.setProperty("--p", bot.hue);
    tab.style.setProperty("--i", String(index));
    tab.innerHTML = `
      <span class="comet-head">${ICONS[bot.icon] || ""}</span>
      <span class="comet-text">
        <span class="comet-name">${esc(bot.name)}</span>
        <span class="comet-state" data-state="${bot.status === "live" ? "live" : "soon"}">${esc(stateOf(bot))}</span>
      </span>`;
    tab.addEventListener("click", () => open(bot.id, { from: tab, user: true, scroll: "near" }));
    return tab;
  }

  // ── Building: a bot's world ────────────────────────────────────────────

  function buildTable(title, note, rows) {
    if (!rows || !rows.length) return "";
    const body = rows
      .map((m) => `<tr${m.total ? ' class="is-total"' : ""}><th scope="row">${esc(m.name)}</th><td>${esc(m.detail || "")}</td><td class="price">${esc(m.price)}</td></tr>`)
      .join("");
    return `
      <div class="world-block">
        <h4>${esc(title)}</h4>
        <table class="menu">
          ${note ? `<caption>${esc(note)}</caption>` : ""}
          <tbody>${body}</tbody>
        </table>
      </div>`;
  }

  function buildLive(bot) {
    if (bot.status === "live") {
      return `
        <div class="live">
          <div class="live-qr"><img src="assets/qr-${esc(bot.id)}.svg" width="132" height="132" alt="QR code that opens @${esc(bot.username)} in Telegram"></div>
          <div>
            <h4>Test it live on Telegram</h4>
            <p>${bot.liveNote ? esc(bot.liveNote) : "Scan with your phone or press the button. Press <strong>Start</strong>, then write anything — in Arabic, English or French."} <span class="live-handle">@${esc(bot.username)}</span></p>
            <a class="button" href="${tg(bot)}" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M21.4 4.1 2.9 11.2c-1.3.5-1.2 1.2-.2 1.5l4.7 1.5 1.8 5.6c.2.6.4.8.8.8.4 0 .6-.2.9-.5l2.3-2.2 4.8 3.5c.9.5 1.5.2 1.7-.8l3.1-14.7c.3-1.3-.5-1.9-1.4-1.5ZM9.6 14.2l8.6-5.4c.4-.3.8-.1.5.2l-7.3 6.6-.3 3.2z"/></svg>
              Open in Telegram
            </a>
          </div>
        </div>`;
    }
    return `
      <div class="live live-soon">
        <div>
          <h4>${esc(bot.soonTitle || "On Telegram soon")}</h4>
          <p>${esc(bot.soonNote || "This bot is built and tested, and goes live on Telegram next. Until then, the conversation on this page is its real replies.")}</p>
        </div>
      </div>`;
  }

  function buildPanel(bot) {
    const b = bot.business;
    const planet = where.planetOf(bot.id);
    const panel = document.createElement("div"); // a tab panel: an <article> may not take that role
    panel.className = "world";
    panel.id = `world-${bot.id}`;
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", `tab-${bot.id}`);
    panel.tabIndex = -1;
    panel.hidden = true;
    panel.style.setProperty("--world", bot.hue);

    const people = (b.people || [])
      .map((p) => `<li>${esc(p.name)}${p.role ? ` <span>${esc(p.role)}</span>` : ""}</li>`)
      .join("");
    const facts = (b.facts || [])
      .map((f) => `<div class="fact"><dt>${esc(f.label)}</dt><dd>${esc(f.value)}</dd></div>`)
      .join("");

    panel.innerHTML = `
      <header class="world-intro">
        ${planet ? `<p class="world-planet" style="--p:${esc(planet.hue)}">${PLANET_ICONS[planet.icon] || ""}<span>${esc(planet.name.en)}</span></p>` : ""}
        <h3 class="world-name" data-open-type>${esc(bot.name)}</h3>
        <p class="world-status" data-state="${bot.status === "live" ? "live" : "soon"}">${esc(bot.statusText)}</p>
        <p class="world-pitch">${esc(bot.pitch)}</p>
      </header>
      <div class="world-details">
        <div class="world-block">
          <h4>What it does</h4>
          <ul class="does">${bot.does.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>
        </div>
        <div class="world-block">
          <h4>The demo business</h4>
          <p class="world-biz"><strong>${esc(b.name)}</strong>${b.about ? `. ${esc(b.about)}` : ""}</p>
          ${people ? `<ul class="people" aria-label="Who works there">${people}</ul>` : ""}
          ${facts ? `<dl class="facts">${facts}</dl>` : ""}
        </div>
        ${buildTable(b.menuTitle || "Services and prices", b.menuNote, b.menu)}
        ${b.prices ? buildTable(b.prices.title || "Prices", b.prices.note, b.prices.rows) : ""}
        ${buildLive(bot)}
      </div>
      <div class="try" data-try></div>`;
    return panel;
  }

  // ── The phone, for a bot with no conversation to replay ────────────────

  function phoneHead(bot) {
    return `
      <div class="phone-head">
        <div class="avatar">${ICONS[bot.icon] || ""}</div>
        <div class="phone-who"><strong>${esc(bot.display)}</strong><span>bot</span></div>
      </div>`;
  }

  // Not live yet: the phone says the conversation will be recorded from the bot itself — never one
  // written by hand in its place.
  function mountWaiting(host, bot) {
    const w = bot.waiting || {};
    host.innerHTML = `
      <div class="try-bar"><h4>${esc(w.title || "The conversation")}</h4></div>
      <div class="phone phone-waiting">
        ${phoneHead(bot)}
        <div class="log log-waiting">
          <div class="waiting-mark" aria-hidden="true"><span></span><span></span>${ICONS[bot.icon] || ""}</div>
          <div class="log-intro">
            <strong>${esc(w.heading || "Recorded from the bot itself")}</strong>
            <p>${esc(w.text || "The conversation is recorded from the bot itself once it is live.")}</p>
          </div>
        </div>
        <div class="composer">
          <button class="send" type="button" disabled><span class="send-text">${esc(w.button || "Soon")}</span></button>
        </div>
      </div>
      ${w.note ? `<p class="try-note">${esc(w.note)}</p>` : ""}`;
    return { stop() {} };
  }

  // Voice only: a phone ringing, not a chat. The line is not set up yet, so the button waits.
  function mountCall(host, bot) {
    const c = bot.call || {};
    // A voice's shape: louder in the middle of a word, quieter between.
    const bars = Array.from({ length: 28 }, (_, i) => {
      const h = 0.3 + 0.7 * Math.abs(Math.sin(i * 0.9) * Math.cos(i * 0.37));
      return `<i style="--k:${i};--h:${h.toFixed(2)}"></i>`;
    }).join("");
    host.innerHTML = `
      <div class="try-bar"><h4>${esc(c.title || "Call it")}</h4></div>
      <div class="phone phone-call">
        <div class="call">
          <p class="call-kind"><span class="call-dot" aria-hidden="true"></span>${esc(c.kind || "Demo line")}</p>
          <div class="call-avatar" aria-hidden="true"><span></span><span></span><span></span>${ICONS[bot.icon] || ""}</div>
          <p class="call-who"><strong>${esc(bot.name)}</strong><span>${esc(bot.business.name)} · demo</span></p>
          <div class="call-wave" aria-hidden="true">${bars}</div>
          <p class="call-text">${esc(c.text || "")}</p>
          <button class="call-go" type="button" disabled>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.2 3.5h2.9l1.6 4.2-2.1 1.4a11 11 0 0 0 5.3 5.3l1.4-2.1 4.2 1.6v2.9a1.7 1.7 0 0 1-1.8 1.7C10.6 18.1 4.9 12.4 4.5 5.3a1.7 1.7 0 0 1 1.7-1.8Z"/></svg>
            <span>${esc(c.button || "Call the demo line — soon")}</span>
          </button>
        </div>
      </div>
      ${c.note ? `<p class="try-note">${esc(c.note)}</p>` : ""}`;
    return { stop() {} };
  }

  function mountTry(bot, host) {
    if (bot.call) return mountCall(host, bot);
    if (!hasChat(bot) || !window.mountChat) return mountWaiting(host, bot);
    return window.mountChat(host, bot, ICONS[bot.icon] || "");
  }

  // ── Putting it together ────────────────────────────────────────────────

  planets.forEach((planet, i) => {
    const tab = buildPlanetTab(planet, i);
    planetTabs.set(planet.id, tab);
    planetRow.append(tab);
    const panel = buildCometPanel(planet);
    cometPanels.set(planet.id, panel);
    cometHost.append(panel);
  });
  for (const bot of bots) {
    if (!cometTabs.has(bot.id)) continue; // on no planet: not shown
    const panel = buildPanel(bot);
    panels.set(bot.id, panel);
    stage.append(panel);
  }

  // ── Opening a planet, and a world ──────────────────────────────────────

  function settle() {
    if (!running) return;
    running.animation.cancel();
    running.done();
    running = null;
  }

  function selectPlanet(id) {
    if (id === currentPlanet) return;
    currentPlanet = id;
    const planet = planets.find((p) => p.id === id);
    for (const [key, tab] of planetTabs) {
      const on = key === id;
      tab.setAttribute("aria-selected", String(on));
      tab.tabIndex = on ? 0 : -1;
    }
    for (const [key, panel] of cometPanels) {
      panel.hidden = key !== id;
      if (key === id) {
        // Its comets fly in, one after the other.
        panel.classList.remove("is-arriving");
        void panel.offsetWidth;
        panel.classList.add("is-arriving");
      }
    }
    section.style.setProperty("--planet", planet.hue);
  }

  const cometRow = (planetId) => cometPanels.get(planetId)?.querySelector(".comets");

  function openPlanet(id, options = {}) {
    const planet = planets.find((p) => p.id === id);
    if (!planet) return;
    const bot = chosen.get(id) || planet.bots.find((b) => cometTabs.has(b));
    selectPlanet(id);
    open(bot, { ...options, from: cometTabs.get(bot), to: "planet" });
  }

  // scroll: false, "smooth", "jump" (at once) or "near" (only if the row is not close already);
  // to: which row comes up under the bar — "comets" (a bot's link) or "planet" (a planet's).
  function open(id, { from, user = false, scroll = false, to = "comets" } = {}) {
    const bot = botById.get(id);
    const planet = where.planetOf(id);
    if (!bot || !planet || !panels.has(id)) return;
    selectPlanet(planet.id);
    if (scroll) land(to === "planet" ? planetRow : cometRow(planet.id), scroll);
    chosen.set(planet.id, id);
    for (const other of planet.bots) {
      const tab = cometTabs.get(other);
      if (!tab) continue;
      const on = other === id;
      tab.setAttribute("aria-selected", String(on));
      tab.tabIndex = on ? 0 : -1;
    }
    if (user && history.replaceState) history.replaceState(null, "", `#${id}`);
    if (id === current) return;
    settle();

    const next = panels.get(id);
    const prev = current ? panels.get(current) : null;
    const previousId = current;
    current = id;
    section.style.setProperty("--world", bot.hue);

    if (!tries.has(id)) tries.set(id, mountTry(bot, next.querySelector("[data-try]")));
    if (previousId && tries.has(previousId)) tries.get(previousId).stop();

    next.hidden = false;
    const name = next.querySelector(".world-name");
    name.classList.remove("is-open");
    requestAnimationFrame(() => requestAnimationFrame(() => name.classList.add("is-open")));

    if (!prev || reduce.matches || !next.animate) {
      if (prev) prev.hidden = true;
      return;
    }

    // The new world opens as a circle growing out of the comet that was chosen.
    const tab = from || cometTabs.get(id);
    const origin = (tab && tab.querySelector(".comet-head")) || tab || stage;
    const o = origin.getBoundingClientRect();
    const s = stage.getBoundingClientRect();
    const x = o.left + o.width / 2 - s.left;
    const y = o.top + o.height / 2 - s.top;
    const far = Math.hypot(Math.max(Math.abs(x), Math.abs(s.width - x)), Math.max(Math.abs(y), Math.abs(s.height - y))) + 40;

    next.style.zIndex = "2";
    prev.style.zIndex = "1";
    const animation = next.animate(
      [
        { clipPath: `circle(0px at ${x}px ${y}px)` },
        { clipPath: `circle(${far}px at ${x}px ${y}px)` },
      ],
      { duration: 950, easing: "cubic-bezier(0.65, 0, 0.35, 1)" },
    );
    // A ring of the new world's light runs at the edge of the circle as it grows.
    const ring = document.createElement("span");
    ring.className = "world-ring";
    ring.setAttribute("aria-hidden", "true");
    Object.assign(ring.style, { left: `${x}px`, top: `${y}px` });
    ring.style.setProperty("--ring", bot.hue);
    stage.append(ring);
    // Its size, not its scale, grows: the line stays two pixels thick all the way out.
    ring.animate(
      [
        { width: "0px", height: "0px", opacity: 1 },
        { width: `${far * 1.4}px`, height: `${far * 1.4}px`, opacity: 0.9, offset: 0.7 },
        { width: `${far * 2}px`, height: `${far * 2}px`, opacity: 0 },
      ],
      { duration: 950, easing: "cubic-bezier(0.65, 0, 0.35, 1)" },
    ).onfinish = () => ring.remove();
    const done = () => {
      prev.hidden = true;
      next.style.zIndex = "";
      prev.style.zIndex = "";
    };
    running = { animation, done };
    animation.onfinish = () => {
      if (running && running.animation === animation) {
        running = null;
        done();
      }
    };
  }

  // Arrow keys move along a row, as in any set of tabs; Home and End go to its ends.
  function moveWithin(event, order, at, go) {
    const i = order.indexOf(at);
    let to = -1;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") to = (i + 1) % order.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") to = (i - 1 + order.length) % order.length;
    else if (event.key === "Home") to = 0;
    else if (event.key === "End") to = order.length - 1;
    if (to < 0) return;
    event.preventDefault();
    go(order[to]);
  }
  planetRow.addEventListener("keydown", (event) => moveWithin(event, planets.map((p) => p.id), currentPlanet, (id) => {
    planetTabs.get(id).focus();
    openPlanet(id, { user: true });
  }));

  // focus: the keyboard goes where the page went — onto the planet or the comet that was opened —
  // so the next Tab carries on from there, not from the top of the page.
  function go(target, options, focus = false) {
    if (!target) return false;
    if (target.bot) open(target.bot, options);
    else openPlanet(target.planet, options);
    if (focus) {
      const tab = target.bot ? cometTabs.get(target.bot) : planetTabs.get(target.planet);
      if (tab) tab.focus({ preventScroll: true });
    }
    return true;
  }

  // From the portal above: a planet or a bot, by its id.
  window.addEventListener("bots:open", (event) => {
    const { id, scroll } = event.detail || {};
    go(where.resolve(`#${id}`), { user: true, scroll: scroll ? "smooth" : false }, true);
  });
  window.addEventListener("hashchange", () => go(where.resolve(location.hash), { scroll: "smooth" }, true));

  // Arriving by a link: the row comes up under the bar at once, and again once the fonts are in
  // (they change the heights above it) — unless the visitor has started moving by then.
  const first = where.resolve(location.hash);
  if (!go(first, {})) openPlanet(planets[0].id);
  if (first) {
    let moved = false;
    const stop = () => (moved = true);
    for (const type of ["wheel", "touchstart", "keydown", "pointerdown"]) window.addEventListener(type, stop, { once: true, passive: true });
    const row = () => (first.bot ? cometRow(first.planet) : planetRow);
    requestAnimationFrame(() => land(row(), "jump"));
    if (document.fonts) document.fonts.ready.then(() => !moved && requestAnimationFrame(() => land(row(), "jump")));
  }
})();
