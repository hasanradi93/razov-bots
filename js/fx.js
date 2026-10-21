/* The touches that make the page feel alive under the hand.
 *
 * - The title decodes itself: each letter of "Meet the bots" flickers through Arabic, Latin and
 *   French letters — the three languages the bots speak — before it settles.
 * - Light follows the pointer across a world's panel and the price list.
 * - The phone leans toward the pointer, a little, as a thing held in the hand would.
 * - The main buttons lean toward the pointer as it comes near.
 *
 * Only on a screen with a mouse or trackpad, and never for visitors who ask for less motion. The
 * title is read by screen readers as plain text throughout.
 */
(function () {
  "use strict";

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)");

  // ── The title decodes ──────────────────────────────────────────────────
  const GLYPHS = "ابتثجحخدذرزسشصضطظعغفقكلمنهويABCDEFGHJKLMNPRSTUVWXYZabdeghkmnpqrsuvwxyzéèêàâçôûœ";
  const title = document.querySelector("[data-decode]");
  if (title && !reduce.matches) {
    const text = title.textContent.trim();
    const sr = document.createElement("span");
    sr.className = "sr-only";
    sr.textContent = text;
    const visual = document.createElement("span");
    visual.setAttribute("aria-hidden", "true");
    const letters = [];
    text.split(/(\s+)/).forEach((part) => {
      if (/^\s+$/.test(part)) {
        visual.append(document.createTextNode(" "));
        return;
      }
      const word = document.createElement("span");
      word.className = "dw";
      for (const ch of part) {
        const box = document.createElement("span");
        box.className = "dc";
        const real = document.createElement("span");
        real.className = "dc-real";
        real.textContent = ch;
        const ghost = document.createElement("span");
        ghost.className = "dc-ghost";
        box.append(real, ghost);
        word.append(box);
        letters.push(box);
      }
      visual.append(word);
    });
    title.replaceChildren(sr, visual);

    const pick = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    const decode = () => {
      const began = performance.now();
      letters.forEach((box, i) => {
        box.settleAt = 950 + i * 75 + Math.random() * 180; // the title fades in at 0.7 s
      });
      let lastSwap = 0;
      const tick = (now) => {
        const t = now - began;
        const swap = now - lastSwap > 55;
        if (swap) lastSwap = now;
        let open = 0;
        for (const box of letters) {
          if (box.classList.contains("is-set")) continue;
          if (t >= box.settleAt) {
            box.classList.add("is-set");
            box.lastChild.remove(); // the page's text is the title again, for anyone reading or copying it
            continue;
          }
          open++;
          if (swap) box.lastChild.textContent = pick();
        }
        if (open) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    // The portal may already have opened (a cached font) before this script ran.
    if (document.querySelector("[data-hero].is-ready")) decode();
    else window.addEventListener("hero:ready", decode, { once: true });
  }

  if (reduce.matches || !fine.matches) return;

  // ── Light that follows the pointer, and the phone that leans ───────────
  let pending = null;
  let tilted = null;

  function frame() {
    const event = pending;
    pending = null;
    if (!event) return;
    const target = event.target instanceof Element ? event.target : null;

    const lit = target && target.closest(".world, .plan, .every-list li");
    if (lit) {
      const box = lit.getBoundingClientRect();
      lit.style.setProperty("--mx", `${event.clientX - box.left}px`);
      lit.style.setProperty("--my", `${event.clientY - box.top}px`);
    }

    const phone = target && target.closest(".phone");
    if (tilted && tilted !== phone) {
      tilted.style.removeProperty("--tx");
      tilted.style.removeProperty("--ty");
      tilted = null;
    }
    if (phone) {
      const box = phone.getBoundingClientRect();
      phone.style.setProperty("--tx", ((event.clientX - box.left) / box.width - 0.5).toFixed(3));
      phone.style.setProperty("--ty", ((event.clientY - box.top) / box.height - 0.5).toFixed(3));
      tilted = phone;
    }
  }

  document.addEventListener(
    "pointermove",
    (event) => {
      if (!pending) requestAnimationFrame(frame);
      pending = event;
    },
    { passive: true },
  );

  // ── Buttons that lean toward the pointer ───────────────────────────────
  const PULL = 0.28;
  const REACH = 40;
  function magnetise(button) {
    if (button.dataset.magnet) return;
    button.dataset.magnet = "1";
    const zone = button;
    zone.addEventListener("pointermove", (event) => {
      const box = button.getBoundingClientRect();
      const dx = event.clientX - (box.left + box.width / 2);
      const dy = event.clientY - (box.top + box.height / 2);
      button.style.setProperty("--pull-x", `${Math.max(-REACH, Math.min(REACH, dx * PULL))}px`);
      button.style.setProperty("--pull-y", `${Math.max(-REACH, Math.min(REACH, dy * PULL))}px`);
    });
    zone.addEventListener("pointerleave", () => {
      button.style.removeProperty("--pull-x");
      button.style.removeProperty("--pull-y");
    });
  }
  const magnetiseAll = () => document.querySelectorAll(".hero-actions .button, .get-actions .button").forEach(magnetise);
  magnetiseAll();
  // The contact buttons are drawn by js/page.js; catch any that arrive later.
  setTimeout(magnetiseAll, 500);
})();
