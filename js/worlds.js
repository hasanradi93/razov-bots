/* The worlds: one planet per bot (a tab), one panel per bot (its world).
 *
 * Choosing a planet opens its world as a circle growing out of that planet, over the world that
 * was there before. The section's light changes to the new world's colour at the same time.
 * Everything is built from window.BOTS, so a price or a reply is changed in js/bots.js alone.
 */
(function () {
  "use strict";

  const ICONS = {
    tooth: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 3C4.9 3 3 4.9 3 7.4c0 2.1 1 3.5 1.6 5.2.6 1.7.6 3.7 1.1 5.5.3 1.3.8 2.9 1.9 2.9 1.4 0 1.6-2.3 2-4 .3-1.3.8-2.4 2.4-2.4s2.1 1.1 2.4 2.4c.4 1.7.6 4 2 4 1.1 0 1.6-1.6 1.9-2.9.5-1.8.5-3.8 1.1-5.5.6-1.7 1.6-3.1 1.6-5.2C21 4.9 19.1 3 16.8 3c-2 0-2.8 1.2-4.8 1.2S9.2 3 7.2 3Z"/></svg>',
    scissors: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12"/></svg>',
    stethoscope: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3H4a1.5 1.5 0 0 0-1.5 1.5V9a5.5 5.5 0 0 0 11 0V4.5A1.5 1.5 0 0 0 12 3h-1"/><path d="M8 14.5v1a5.5 5.5 0 0 0 11 0v-3"/><circle cx="19" cy="10.5" r="2"/></svg>',
    crate: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5 3.5 7v10l8.5 4.5 8.5-4.5V7z"/><path d="m3.5 7 8.5 4.5L20.5 7M12 11.5v10M7.8 4.8l8.4 4.5"/></svg>',
    device: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="4" width="13" height="9.5" rx="1.5"/><path d="M1 16.5h12"/><rect x="16" y="7.5" width="6.5" height="12.5" rx="1.6"/><path d="M18.6 17.6h1.3"/></svg>',
  };
  window.BotIcons = ICONS;

  const bots = window.BOTS || [];
  const orbit = document.querySelector("[data-orbit]");
  const stage = document.querySelector("[data-stage]");
  const section = document.querySelector("[data-worlds]");
  if (!orbit || !stage || !bots.length) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const tg = (bot) => `https://t.me/${bot.username}`;

  const tabs = new Map();
  const panels = new Map();
  const chats = new Map();
  let current = null;
  let running = null;

  // ── Building ───────────────────────────────────────────────────────────

  function buildTab(bot, index) {
    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = "planet";
    tab.id = `tab-${bot.id}`;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", `world-${bot.id}`);
    tab.setAttribute("aria-selected", "false");
    tab.tabIndex = index === 0 ? 0 : -1;
    tab.style.setProperty("--p", bot.hue);
    tab.innerHTML = `
      <span class="planet-body"><span class="planet-ring"></span>${ICONS[bot.icon] || ""}</span>
      <span class="planet-name">${esc(bot.short)}</span>
      <span class="planet-state">${bot.status === "live" ? "Live on Telegram" : "Demo here, Telegram soon"}</span>`;
    tab.addEventListener("click", () => open(bot.id, { from: tab, user: true }));
    return tab;
  }

  function buildMenu(bot) {
    const b = bot.business;
    if (!b.menu || !b.menu.length) return "";
    const rows = b.menu
      .map((m) => `<tr><th scope="row">${esc(m.name)}</th><td>${esc(m.detail || "")}</td><td class="price">${esc(m.price)}</td></tr>`)
      .join("");
    return `
      <div class="world-block">
        <h4>${esc(b.menuTitle || "Services and prices")}</h4>
        <table class="menu">
          ${b.menuNote ? `<caption>${esc(b.menuNote)}</caption>` : ""}
          <tbody>${rows}</tbody>
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
            <p>Scan with your phone or press the button. Press <strong>Start</strong>, then write anything — in Arabic, English or French. <span class="live-handle">@${esc(bot.username)}</span></p>
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
          <h4>On Telegram soon</h4>
          <p>${esc(bot.soonNote || "This bot is built and tested, and goes live on Telegram next. Until then, the conversation on this page is its real replies.")}</p>
        </div>
      </div>`;
  }

  function buildPanel(bot) {
    const b = bot.business;
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
        ${buildMenu(bot)}
        ${buildLive(bot)}
      </div>
      <div class="try" data-try></div>`;
    return panel;
  }

  bots.forEach((bot, i) => {
    const tab = buildTab(bot, i);
    const panel = buildPanel(bot);
    tabs.set(bot.id, tab);
    panels.set(bot.id, panel);
    orbit.append(tab);
    stage.append(panel);
  });

  // ── Opening a world ────────────────────────────────────────────────────

  function settle() {
    if (!running) return;
    running.animation.cancel();
    running.done();
    running = null;
  }

  function open(id, { from, user = false, scroll = false } = {}) {
    const bot = bots.find((b) => b.id === id);
    if (!bot) return;
    if (scroll) section.scrollIntoView({ behavior: reduce.matches ? "auto" : "smooth", block: "start" });
    if (id === current) return;
    settle();

    const next = panels.get(id);
    const prev = current ? panels.get(current) : null;
    const previousId = current;
    current = id;

    for (const [key, tab] of tabs) {
      const on = key === id;
      tab.setAttribute("aria-selected", String(on));
      tab.tabIndex = on ? 0 : -1;
    }
    section.style.setProperty("--world", bot.hue);

    if (!chats.has(id)) {
      chats.set(id, window.mountChat(next.querySelector("[data-try]"), bot, ICONS[bot.icon] || ""));
    }
    if (previousId && chats.has(previousId)) chats.get(previousId).stop();

    next.hidden = false;
    const name = next.querySelector(".world-name");
    name.classList.remove("is-open");
    requestAnimationFrame(() => requestAnimationFrame(() => name.classList.add("is-open")));

    if (user && history.replaceState) history.replaceState(null, "", `#${id}`);

    if (!prev || reduce.matches || !next.animate) {
      if (prev) prev.hidden = true;
      return;
    }

    // The new world opens as a circle growing out of the planet that was chosen.
    const origin = (from || tabs.get(id)).querySelector(".planet-body") || from;
    const o = origin.getBoundingClientRect();
    const s = stage.getBoundingClientRect();
    const x = o.left + o.width / 2 - s.left;
    const y = o.top + o.height / 2 - s.top;
    const far = Math.hypot(Math.max(x, s.width - x), Math.max(y, s.height - y)) + 40;

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

  // Arrow keys move between planets, as in any set of tabs.
  orbit.addEventListener("keydown", (event) => {
    const order = bots.map((b) => b.id);
    const at = order.indexOf(current);
    let to = -1;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") to = (at + 1) % order.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") to = (at - 1 + order.length) % order.length;
    else if (event.key === "Home") to = 0;
    else if (event.key === "End") to = order.length - 1;
    if (to < 0) return;
    event.preventDefault();
    const tab = tabs.get(order[to]);
    tab.focus();
    open(order[to], { from: tab, user: true });
  });

  window.addEventListener("bots:open", (event) => {
    const { id, scroll } = event.detail || {};
    open(id, { user: true, scroll });
  });

  function fromHash() {
    let id;
    try {
      id = decodeURIComponent(location.hash.slice(1)).replace(/^world-/, "");
    } catch {
      return null; // a hash like #100% is not one of ours
    }
    return bots.some((b) => b.id === id) ? id : null;
  }
  window.addEventListener("hashchange", () => {
    const id = fromHash();
    if (id) open(id, { scroll: true });
  });

  const first = fromHash();
  open(first || bots[0].id);
  if (first) requestAnimationFrame(() => section.scrollIntoView({ block: "start" }));
})();
