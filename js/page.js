/* The rest of the page: the bar, titles that open as they arrive, the steps' line filling as you
 * read them, and the lists built from js/bots.js (what every bot does, the prices, the contact). */
(function () {
  "use strict";

  const SITE = window.SITE || {};
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

  // ── The bar turns solid once the portal is behind you ──────────────────
  const bar = document.querySelector("[data-bar]");
  const solid = () => bar && bar.classList.toggle("is-solid", window.scrollY > 40);
  window.addEventListener("scroll", solid, { passive: true });
  solid();

  // ── Titles open (widen) as they come into view ─────────────────────────
  const titles = document.querySelectorAll("[data-open-type]");
  if ("IntersectionObserver" in window && !reduce.matches) {
    const seen = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-open");
            seen.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -18% 0px", threshold: 0.4 },
    );
    titles.forEach((t) => seen.observe(t));
  } else {
    titles.forEach((t) => t.classList.add("is-open"));
  }

  // ── What every bot does ────────────────────────────────────────────────
  const ICON = {
    languages: '<path d="M4 5h9M8.5 3v2M6 5c.6 3 2.6 5.4 5.5 6.6M11 5c-.8 3.6-3.4 6.4-7 7.6"/><path d="m13 20 3.5-8 3.5 8M14.2 17.5h4.6"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4M8.5 14.5l2 2 4-4"/>',
    bell: '<path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2h-15z"/><path d="M10 20.5a2.2 2.2 0 0 0 4 0"/>',
    shield: '<path d="M12 3 4.5 6v5.5c0 4.4 3.2 8.2 7.5 9.5 4.3-1.3 7.5-5.1 7.5-9.5V6z"/><path d="M12 8.5v4M12 15.5v.01"/>',
    relay: '<path d="M4 6.5h11a3 3 0 0 1 3 3V12M4 6.5 7 3.5M4 6.5l3 3"/><path d="M20 17.5H9a3 3 0 0 1-3-3V12M20 17.5l-3-3M20 17.5l-3 3"/>',
    moon: '<path d="M19.5 14.5A8 8 0 1 1 9.5 4.5a6.5 6.5 0 0 0 10 10Z"/>',
    sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
    photo: '<rect x="3.5" y="5" width="17" height="14" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="m4 17 5-4.5 3.5 3 2.5-2 4.5 3.5"/>',
  };
  const everyList = document.querySelector("[data-every]");
  if (everyList && window.EVERY) {
    everyList.innerHTML = window.EVERY.map(
      (item) => `
      <li>
        <svg viewBox="0 0 24 24" aria-hidden="true">${ICON[item.icon] || ICON.sparkle}</svg>
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.text)}</p>
      </li>`,
    ).join("");
  }

  // ── Prices ─────────────────────────────────────────────────────────────
  const plansBox = document.querySelector("[data-plans]");
  if (plansBox && window.PLANS) {
    plansBox.innerHTML = window.PLANS.tiers
      .map(
        (tier) => `
      <div class="plan${tier.picked ? " is-picked" : ""}">
        <h3 class="plan-name">${esc(tier.name)}${tier.picked ? `<span class="plan-picked">${esc(tier.picked)}</span>` : ""}</h3>
        <p class="plan-price">${esc(tier.price)}<small>once</small></p>
        <p class="plan-days">${esc(tier.days)}</p>
        <ul>${tier.includes.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
      </div>`,
      )
      .join("");
    const note = document.querySelector("[data-plans-note]");
    if (note && window.PLANS.note) note.textContent = window.PLANS.note;
  }

  // ── Contact and the way back to the main site ─────────────────────────
  const contact = document.querySelector("[data-contact]");
  if (contact) {
    const c = SITE.contact || {};
    const subject = encodeURIComponent("A bot for my business");
    let links = [
      c.telegram && { label: "Write to us on Telegram", href: `https://t.me/${c.telegram.number}` },
      c.email && { label: "Email us", href: `mailto:${c.email}?subject=${subject}` },
      c.upwork && { label: "Order on Upwork", href: c.upwork },
    ].filter(Boolean);
    // With no contact details at all, point at what works now.
    if (!links.length) links = [{ label: "Try a bot first", href: "#worlds" }, { label: "See the prices", href: "#plans" }];
    contact.innerHTML = links
      .map(
        (l, i) =>
          `<a class="button${i ? " button-ghost" : ""}" href="${esc(l.href)}"${/^https?:/.test(l.href) ? ' target="_blank" rel="noopener"' : ""}>${esc(l.label)}</a>`,
      )
      .join("");
    // The same details as plain text, for whoever would rather copy them.
    const direct = document.querySelector("[data-contact-direct]");
    if (direct && (c.email || c.telegram)) {
      const parts = [];
      if (c.email) parts.push(`<a href="mailto:${esc(c.email)}?subject=${subject}">${esc(c.email)}</a>`);
      if (c.telegram) parts.push(`<a href="https://t.me/${esc(c.telegram.number)}" target="_blank" rel="noopener">${esc(c.telegram.shown || c.telegram.number)}</a> on Telegram`);
      direct.innerHTML = `Or write directly: ${parts.join(", or ")}.`;
      direct.hidden = false;
    }
  }
  for (const link of document.querySelectorAll("[data-root-href]")) link.href = SITE.rootUrl || "https://razov.tech";
  const root = document.querySelector("[data-root-link]");
  if (root) root.innerHTML = `<a href="${esc(SITE.rootUrl || "https://razov.tech")}">razov.tech</a>`;

  // ── How it works: the line fills as you read down the steps ────────────
  const how = document.querySelector("[data-how]");
  const list = document.querySelector("[data-steps]");
  const track = document.querySelector(".how-track");
  const fill = document.querySelector("[data-how-fill]");
  if (how && list && track && fill) {
    const steps = [...list.children];
    let geometry = null;

    const measure = () => {
      const base = how.getBoundingClientRect();
      const dots = steps.map((s) => s.querySelector(".step-dot").getBoundingClientRect());
      const first = dots[0];
      const lastDot = dots[dots.length - 1];
      const vertical = Math.abs(lastDot.top - first.top) > Math.abs(lastDot.left - first.left);
      const x1 = first.left + first.width / 2 - base.left;
      const y1 = first.top + first.height / 2 - base.top;
      const x2 = lastDot.left + lastDot.width / 2 - base.left;
      const y2 = lastDot.top + lastDot.height / 2 - base.top;
      track.dataset.axis = vertical ? "y" : "x";
      Object.assign(track.style, vertical
        ? { left: `${x1 - 0.75}px`, top: `${y1}px`, width: "1.5px", height: `${y2 - y1}px`, right: "auto" }
        : { left: `${x1}px`, top: `${y1 - 0.75}px`, width: `${x2 - x1}px`, height: "1.5px", right: "auto" });
      geometry = { vertical, dots: dots.map((d) => (vertical ? d.top + d.height / 2 : d.left + d.width / 2) - (vertical ? base.top : base.left)), y1, y2 };
    };

    const update = () => {
      if (!geometry) return;
      const base = how.getBoundingClientRect();
      let p;
      if (geometry.vertical) {
        // The line reaches whatever step is at two thirds of the screen.
        const line = window.innerHeight * 0.66 - base.top;
        p = clamp((line - geometry.y1) / (geometry.y2 - geometry.y1));
      } else {
        const listBox = list.getBoundingClientRect();
        p = clamp((window.innerHeight * 0.82 - listBox.top) / (window.innerHeight * 0.45));
      }
      if (reduce.matches) p = p > 0 ? 1 : 0;
      fill.style.setProperty("--progress", p.toFixed(4));
      const n = steps.length - 1;
      steps.forEach((s, i) => s.classList.toggle("is-lit", p >= i / n - 0.001 && p > 0));
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        update();
      });
    };
    const refresh = () => {
      measure();
      update();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", refresh);
    // The title above the steps widens as it arrives and can wrap onto another line, which moves
    // the dots; measure again whenever the section changes size.
    if ("ResizeObserver" in window) new ResizeObserver(refresh).observe(how);
    if (document.fonts) document.fonts.ready.then(refresh);
    refresh();
  }
})();
