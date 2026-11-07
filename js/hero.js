/* The portal, drawn on one canvas.
 *
 * A starfield drifting toward the centre, a clock ring whose hands show the visitor's own time,
 * an eight-pointed star turning slowly, an iris over the core that opens once on load, and four
 * planets — one per kind of work (window.PLANETS) — on tilted orbits that pass in front of and
 * behind the dial. Each planet's bots circle it as comets: a bright head and a fading tail.
 *
 * Each planet is also a real link (#booking, #shops…), laid over the canvas and moved with it, so it
 * can be pointed at, tabbed to and read aloud: pointing at one or focusing it names the planet and
 * slows it down; choosing it opens that planet's bots further down the page.
 *
 * Behind it, when the browser has WebGL, js/portal-gl.js draws the light inside the portal: a
 * whirlpool in the planets' colours, and streaks while the page is scrolled fast ("warp").
 *
 * Nothing here is needed to use the page: every planet and every bot is also a tab in the worlds
 * section. For visitors who ask for less motion it is one still picture.
 */
(function () {
  "use strict";

  const canvas = document.querySelector("[data-hero-canvas]");
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext("2d");
  const hero = canvas.closest("[data-hero]");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const TAU = Math.PI * 2;
  const MIST = "230, 242, 238";
  const TEAL = "34, 195, 176";

  const BOTS = window.BOTS || [];
  const PLANETS = (window.PLANETS || []).filter((p) => p.bots && p.bots.length);
  const botOf = (id) => BOTS.find((b) => b.id === id);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  // The whirlpool takes six colours: spread over the planets and their comets, in their order.
  const swirl = (() => {
    const all = PLANETS.flatMap((p) => [p.hue, ...p.bots.map((id) => (botOf(id) || {}).hue).filter(Boolean)]);
    if (all.length <= 6) return all;
    return Array.from({ length: 6 }, (_, i) => all[Math.round((i * all.length) / 6)]);
  })();

  // The light behind the line work, when the graphics card can draw it.
  const glCanvas = hero.querySelector("[data-hero-gl]");
  let gl = glCanvas && window.PortalGL ? window.PortalGL.create(glCanvas, swirl) : null;
  if (!gl && glCanvas) glCanvas.remove();
  // The shader builds in the background; until it is ready the 2D glow stands in.
  const glOn = () => Boolean(gl && !gl.lost && gl.ready());

  // Warp: how fast the page is being scrolled, eased, 0 to 1.
  let warp = 0;
  let warpTarget = 0;

  // Where each planet flies. Outer orbits lean more, so the widest still fit beside the dial.
  const LAYOUT = [
    { rx: 1.3, flat: 0.36, tilt: -0.32, speed: 0.07, phase: 0.4, size: 13 },
    { rx: 1.58, flat: 0.26, tilt: 0.24, speed: -0.05, phase: 2.3, size: 13.5 },
    { rx: 1.14, flat: 0.5, tilt: 0.7, speed: 0.085, phase: 3.9, size: 11.5 },
    { rx: 1.74, flat: 0.21, tilt: -0.44, speed: -0.04, phase: 5.4, size: 11.5 },
  ];
  const orbits = PLANETS.map((planet, i) => {
    const l = LAYOUT[i % LAYOUT.length];
    const lap = Math.floor(i / LAYOUT.length);
    return {
      id: planet.id,
      rgb: hexToRgb(planet.hue),
      ...l,
      rx: l.rx + lap * 0.12,
      a: l.phase + lap * 1.3,
      comets: planet.bots.map((id, k) => ({
        id,
        rgb: hexToRgb((botOf(id) || planet).hue),
        // Each a little further out and a little slower than the one inside it.
        r: 2.5 + k * 0.95,
        flat: 0.5 - k * 0.07,
        tilt: -0.55 + k * 0.62 + i * 0.4,
        speed: 0.62 / (1 + k * 0.45),
        a: k * 2.1 + i * 0.9,
      })),
    };
  });

  let w = 0;
  let h = 0;
  let cx = 0;
  let cy = 0;
  let R = 0;
  let stars = [];
  let start = performance.now();
  let last = start;
  let frame = 0;
  let onScreen = true;
  let hover = -1;
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

  function hexToRgb(hex) {
    const n = parseInt(hex.slice(1), 16);
    return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
  }
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const easeOut = (x) => 1 - Math.pow(1 - x, 3);
  const easeInOut = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
  const polar = (r, a) => [cx + r * Math.cos(a), cy + r * Math.sin(a)];

  // ── The planets as links ───────────────────────────────────────────────

  const nav = hero.querySelector("[data-hero-planets]");
  const links = nav
    ? PLANETS.map((planet, i) => {
        const its = planet.bots.map(botOf).filter(Boolean);
        const link = document.createElement("a");
        link.className = "hero-planet";
        link.href = `#${planet.id}`;
        link.style.setProperty("--p", planet.hue);
        link.setAttribute("aria-label", `${planet.name.en}: ${its.map((b) => b.name).join(", ")}`);
        link.innerHTML = `<span class="hero-planet-label" aria-hidden="true"><strong>${esc(planet.name.en)}</strong><span>${esc(planet.tag)} · ${its.length} ${its.length === 1 ? "bot" : "bots"}</span></span>`;
        const point = (on) => {
          if (on) hover = i;
          else if (hover === i) hover = -1;
          if (reduce.matches) draw(99);
        };
        link.addEventListener("pointerenter", () => point(true));
        link.addEventListener("pointerleave", () => point(link === document.activeElement));
        link.addEventListener("focus", () => point(true));
        link.addEventListener("blur", () => point(false));
        link.addEventListener("click", (event) => {
          event.preventDefault();
          window.dispatchEvent(new CustomEvent("bots:open", { detail: { id: planet.id, scroll: true } }));
        });
        nav.append(link);
        return link;
      })
    : [];

  // On a phone the dial is small; the planets shrink less than it does, so they stay worth a tap.
  // Each planet's name label, and its size, measured when the layout changes: a label is kept on
  // the screen however near the edge its planet flies (it slides along, or drops below the planet
  // when there is no room above it under the bar).
  const labels = links.map((link) => link.querySelector(".hero-planet-label"));
  const barEl = document.querySelector("[data-bar]");
  // Measured on resize and once the fonts are in, never in the frame loop (that would force a
  // layout every frame).
  let labelSize = [];
  let hitSize = 48;
  let barBottom = 64;
  function measureLabels() {
    labelSize = labels.map((label) => (label ? [label.offsetWidth, label.offsetHeight] : [0, 0]));
    barBottom = barEl ? barEl.offsetHeight : 64;
  }
  function placeLabel(i, x, y) {
    if (!labels[i] || !labelSize[i]) return;
    const [lw, lh] = labelSize[i];
    const edge = 8;
    const half = lw / 2;
    const shift = lw + edge * 2 >= w ? w / 2 - x : Math.min(w - edge - half, Math.max(edge + half, x)) - x;
    links[i].style.setProperty("--dx", `${shift.toFixed(1)}px`);
    links[i].classList.toggle("is-low", y - hitSize / 2 - 4 - lh < barBottom + edge);
  }

  function planetRadius(o, scale = 1) {
    return o.size * scale * Math.max(R / 160, 0.74);
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    // clientWidth, not getBoundingClientRect: the scroll zoom scales the canvas, and the drawing
    // must be laid out for its own box, not the zoomed one.
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (gl) gl.resize(w, h);
    const wide = w >= 900;
    cx = wide ? w * 0.68 : w * 0.5;
    cy = wide ? h * 0.47 : h * 0.3;
    R = wide ? Math.min(w * 0.2, h * 0.3) : Math.min(w * 0.28, h * 0.19);
    // An orbit never takes its planet off the side of the screen.
    const room = Math.min(cx, w - cx);
    for (const o of orbits) {
      o.fit = Math.min(o.rx, (room - 12 - planetRadius(o) * 1.3) / Math.max(R, 1));
    }
    // A target a finger can find: at least 48 px, and a little more than the planet.
    hitSize = Math.round(Math.max(48, planetRadius({ size: 13.5 }) * 3.2));
    for (const link of links) link.style.setProperty("--hit", `${hitSize}px`);
    measureLabels();
    seedStars();
    if (reduce.matches) draw(99);
  }

  function seedStars() {
    const count = Math.round(clamp((w * h) / 5200, 90, 280));
    const far = Math.hypot(w, h) * 0.6;
    stars = Array.from({ length: count }, () => ({
      a: Math.random() * TAU,
      d: R * 0.5 + Math.random() * far,
      s: 0.3 + Math.random() * 1.2,
      v: 4 + Math.random() * 14,
      tw: Math.random() * TAU,
      far,
    }));
  }

  // ── Layers ──────────────────────────────────────────────────────────────

  function drawStars(t, dt, open) {
    const px = pointer.x * 18;
    const py = pointer.y * 18;
    for (const s of stars) {
      // Drawn in toward the portal, faster once it is open.
      if (!reduce.matches) s.d -= s.v * dt * (0.35 + open * 0.9) * (0.4 + s.d / s.far);
      if (s.d < R * 0.42) {
        s.d = s.far * (0.8 + Math.random() * 0.2);
        s.a = Math.random() * TAU;
      }
      const near = clamp((s.d - R * 0.42) / (R * 0.9));
      const alpha = (0.25 + 0.55 * (0.5 + 0.5 * Math.sin(t * 1.3 + s.tw))) * near;
      const x = cx + Math.cos(s.a) * s.d + px * (s.s / 1.5);
      const y = cy + Math.sin(s.a) * s.d + py * (s.s / 1.5);
      if (x < -4 || y < -4 || x > w + 4 || y > h + 4) continue;
      if (warp > 0.03) {
        // At speed, a star is a streak pointing away from the portal.
        const len = warp * 70 * s.s * (0.3 + s.d / s.far);
        ctx.strokeStyle = `rgba(${MIST}, ${Math.min(1, alpha + warp * 0.4).toFixed(3)})`;
        ctx.lineWidth = s.s;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(s.a) * len, y + Math.sin(s.a) * len);
        ctx.stroke();
        continue;
      }
      ctx.fillStyle = `rgba(${MIST}, ${alpha.toFixed(3)})`;
      ctx.beginPath();
      ctx.arc(x, y, s.s, 0, TAU);
      ctx.fill();
    }
  }

  // One coloured current per bot, for the 2D glow.
  const currents = orbits.flatMap((o) => o.comets.map((c) => c.rgb));

  function drawCore(t, open) {
    const rc = R * 0.4;
    if (glOn()) {
      // The shader draws the world beyond; only the rosette is line work.
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, rc, 0, TAU);
      ctx.clip();
      drawRosette(rc * 0.62, -t * 0.12, `rgba(${MIST}, ${0.34 * open})`, 1);
      ctx.restore();
      return;
    }
    // The world beyond: a glow, a slow rosette and one coloured current per bot.
    const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, rc * (1.6 + 0.8 * open));
    glow.addColorStop(0, `rgba(${TEAL}, ${0.55 * open + 0.08})`);
    glow.addColorStop(0.45, `rgba(${TEAL}, ${0.16 * open})`);
    glow.addColorStop(1, `rgba(${TEAL}, 0)`);
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(cx, cy, rc * 2.6, 0, TAU);
    ctx.fill();

    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, rc, 0, TAU);
    ctx.clip();
    ctx.globalCompositeOperation = "lighter";
    currents.forEach((rgb, i) => {
      const turns = 22;
      ctx.strokeStyle = `rgba(${rgb}, ${0.35 * open})`;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      for (let k = 0; k <= turns * 6; k++) {
        const f = k / (turns * 6);
        const a = i * (TAU / currents.length) + f * TAU * 1.4 - t * 0.35;
        const r = rc * (1 - f) * (0.92 + 0.08 * Math.sin(t * 2 + f * 9));
        const [x, y] = polar(r, a);
        k ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      }
      ctx.stroke();
    });
    ctx.globalCompositeOperation = "source-over";
    drawRosette(rc * 0.62, -t * 0.12, `rgba(${MIST}, ${0.28 * open})`, 1);
    ctx.restore();
  }

  function drawIris(t, open) {
    if (open >= 1) return;
    const rc = R * 0.4 + 0.5;
    const spin = open * 0.9;
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, rc, 0, TAU);
    ctx.clip();
    for (let i = 0; i < 8; i++) {
      const b = i * (TAU / 8) + spin;
      const tipR = rc * easeInOut(open);
      const tipA = b + (TAU / 8) * 1.3 + open * 0.7;
      ctx.beginPath();
      const [ax, ay] = polar(rc + 2, b);
      ctx.moveTo(ax, ay);
      ctx.arc(cx, cy, rc + 2, b, b + (TAU / 8) * 1.7);
      const [tx, ty] = polar(tipR, tipA);
      ctx.lineTo(tx, ty);
      ctx.closePath();
      const shade = 22 + i * 1.6;
      ctx.fillStyle = `rgb(${shade - 12}, ${shade + 14}, ${shade + 18})`;
      ctx.fill();
      ctx.strokeStyle = `rgba(${MIST}, 0.22)`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawRosette(r, rot, style, width, inner = true) {
    // Two squares make the eight-pointed star; a star of eight lines, every third point joined,
    // lies inside it. Together they are the khatam of Levantine tilework.
    ctx.strokeStyle = style;
    ctx.lineWidth = width;
    for (const off of [0, TAU / 8]) {
      ctx.beginPath();
      for (let k = 0; k <= 4; k++) {
        const [x, y] = polar(r, rot + off + k * (TAU / 4));
        k ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      }
      ctx.stroke();
    }
    if (!inner) return;
    ctx.beginPath();
    for (let k = 0; k <= 8; k++) {
      const [x, y] = polar(r * 0.97, rot + TAU / 16 + ((k * 3) % 8) * (TAU / 8));
      k ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
    }
    ctx.stroke();
  }

  function drawStar(t, draw) {
    const r = R * 0.86;
    const rot = t * 0.04;
    ctx.save();
    // Drawn in, as if by a compass, during the opening.
    const length = r * 8 * Math.SQRT2 + r * 8 * 2;
    ctx.setLineDash([length * draw, length]);
    drawRosette(r, rot, `rgba(${MIST}, 0.42)`, 1.25, false);
    ctx.setLineDash([]);
    ctx.restore();

    // The octagon that frames the core.
    ctx.strokeStyle = `rgba(${MIST}, ${0.16 * draw})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let k = 0; k <= 8; k++) {
      const [x, y] = polar(R * 0.4 / Math.cos(TAU / 16), -rot * 0.5 + TAU / 16 + k * (TAU / 8));
      k ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
    }
    ctx.stroke();
  }

  function drawClock(t, draw) {
    // Sixty marks, twelve of them long: a dial, because these bots keep appointments.
    for (let k = 0; k < 60; k++) {
      if (k / 60 > draw) break;
      const a = -TAU / 4 + k * (TAU / 60);
      const major = k % 5 === 0;
      const [x1, y1] = polar(R * (major ? 0.9 : 0.95), a);
      const [x2, y2] = polar(R, a);
      ctx.strokeStyle = `rgba(${MIST}, ${major ? 0.62 : 0.24})`;
      ctx.lineWidth = major ? 2 : 1;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
    ctx.strokeStyle = `rgba(${MIST}, ${0.1 * draw})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(cx, cy, R * 1.04, 0, TAU);
    ctx.stroke();
  }

  function drawHands(t) {
    const now = new Date();
    const minutes = now.getMinutes() + now.getSeconds() / 60;
    const hours = (now.getHours() % 12) + minutes / 60;
    const sweep = easeOut(clamp((t - 0.6) / 2.2));
    const hand = (turn, len, width, alpha) => {
      const a = -TAU / 4 + TAU * turn * sweep;
      const [x, y] = polar(len, a);
      ctx.strokeStyle = `rgba(${MIST}, ${alpha})`;
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(x, y);
      ctx.stroke();
    };
    hand(hours / 12, R * 0.5, 2.4, 0.8);
    hand(minutes / 60, R * 0.74, 1.5, 0.7);
    ctx.fillStyle = `rgb(${MIST})`;
    ctx.beginPath();
    ctx.arc(cx, cy, 3.2, 0, TAU);
    ctx.fill();
  }

  // ── Planets and their comets ────────────────────────────────────────────

  function planetAt(o) {
    const ex = Math.cos(o.a) * R * o.fit;
    const ey = Math.sin(o.a) * R * o.fit * o.flat;
    const x = cx + ex * Math.cos(o.tilt) - ey * Math.sin(o.tilt);
    const y = cy + ex * Math.sin(o.tilt) + ey * Math.cos(o.tilt);
    return { x, y, depth: Math.sin(o.a) };
  }

  function drawOrbitPath(o, i, appear) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(o.tilt);
    ctx.strokeStyle = `rgba(${o.rgb}, ${((hover === i ? 0.42 : 0.16) * appear).toFixed(3)})`;
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 6]);
    ctx.beginPath();
    ctx.ellipse(0, 0, R * o.fit, R * o.fit * o.flat, 0, 0, TAU);
    ctx.stroke();
    ctx.restore();
  }

  // A comet's place on its little orbit round the planet at (px, py), radius pr.
  function cometAt(c, a, px, py, pr) {
    const r = pr * c.r;
    const ex = Math.cos(a) * r;
    const ey = Math.sin(a) * r * c.flat;
    return [px + ex * Math.cos(c.tilt) - ey * Math.sin(c.tilt), py + ex * Math.sin(c.tilt) + ey * Math.cos(c.tilt)];
  }

  function drawComet(c, px, py, pr, near, appear) {
    const head = Math.max(1.3, pr * 0.2) * (near ? 1.2 : 1);
    // The tail: the way it came, fading.
    const STEPS = 18;
    const back = 0.075 * Math.sign(c.speed || 1);
    let [x0, y0] = cometAt(c, c.a, px, py, pr);
    const [hx, hy] = [x0, y0];
    ctx.lineCap = "round";
    for (let j = 1; j <= STEPS; j++) {
      const [x1, y1] = cometAt(c, c.a - j * back, px, py, pr);
      const fade = Math.pow(1 - j / (STEPS + 1), 1.6);
      ctx.strokeStyle = `rgba(${c.rgb}, ${(0.75 * fade * appear * (near ? 1 : 0.85)).toFixed(3)})`;
      ctx.lineWidth = head * 1.5 * fade + 0.3;
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y1);
      ctx.stroke();
      x0 = x1;
      y0 = y1;
    }
    // The head: a white-hot point in the bot's own colour.
    const glow = ctx.createRadialGradient(hx, hy, 0, hx, hy, head * 4.5);
    glow.addColorStop(0, `rgba(${c.rgb}, ${0.55 * appear})`);
    glow.addColorStop(1, `rgba(${c.rgb}, 0)`);
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(hx, hy, head * 4.5, 0, TAU);
    ctx.fill();
    const core = ctx.createRadialGradient(hx, hy, 0, hx, hy, head);
    core.addColorStop(0, `rgba(255, 255, 255, ${appear})`);
    core.addColorStop(1, `rgba(${c.rgb}, ${appear})`);
    ctx.fillStyle = core;
    ctx.beginPath();
    ctx.arc(hx, hy, head, 0, TAU);
    ctx.fill();
  }

  function drawPlanet(o, p, i, appear) {
    const near = hover === i;
    const scale = 0.76 + 0.24 * (p.depth * 0.5 + 0.5);
    const r = planetRadius(o, scale) * (near ? 1.22 : 1) * appear;
    if (r <= 0.2) return;

    // The paths of its comets, faint until it is pointed at.
    for (const c of o.comets) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(c.tilt);
      ctx.strokeStyle = `rgba(${c.rgb}, ${((near ? 0.3 : 0.07) * appear).toFixed(3)})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(0, 0, r * c.r, r * c.r * c.flat, 0, 0, TAU);
      ctx.stroke();
      ctx.restore();
    }
    // Comets on the far side of it first.
    for (const c of o.comets) if (Math.sin(c.a) < 0) drawComet(c, p.x, p.y, r, near, appear);

    const halo = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 3.6);
    halo.addColorStop(0, `rgba(${o.rgb}, ${near ? 0.5 : 0.34})`);
    halo.addColorStop(1, `rgba(${o.rgb}, 0)`);
    ctx.fillStyle = halo;
    ctx.beginPath();
    ctx.arc(p.x, p.y, r * 3.6, 0, TAU);
    ctx.fill();
    const body = ctx.createRadialGradient(p.x - r * 0.35, p.y - r * 0.4, r * 0.1, p.x, p.y, r);
    body.addColorStop(0, "rgba(255,255,255,0.95)");
    body.addColorStop(0.35, `rgb(${o.rgb})`);
    body.addColorStop(1, `rgba(${o.rgb}, 0.6)`);
    ctx.fillStyle = body;
    ctx.beginPath();
    ctx.arc(p.x, p.y, r, 0, TAU);
    ctx.fill();
    if (near) {
      ctx.strokeStyle = `rgba(${o.rgb}, 0.8)`;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(p.x, p.y, r * 1.5, 0, TAU);
      ctx.stroke();
    }

    for (const c of o.comets) if (Math.sin(c.a) >= 0) drawComet(c, p.x, p.y, r, near, appear);
  }

  // ── Frame ──────────────────────────────────────────────────────────────

  function move(dt) {
    if (reduce.matches || !dt) return;
    orbits.forEach((o, i) => {
      // The one pointed at all but stops, so it is easy to take.
      const pace = hover === i ? 0.12 : 1;
      o.a += o.speed * dt * pace;
      for (const c of o.comets) c.a += c.speed * dt * (hover === i ? 0.35 : 1);
    });
  }

  function draw(t, dt = 0) {
    ctx.clearRect(0, 0, w, h);
    pointer.x += (pointer.tx - pointer.x) * 0.06;
    pointer.y += (pointer.ty - pointer.y) * 0.06;
    warp += (warpTarget - warp) * 0.12;
    warpTarget *= 0.92;
    if (warp < 0.002) warp = 0;

    const draw = easeOut(clamp(t / 1.5));
    const open = easeInOut(clamp((t - 0.7) / 1.8));
    const appear = easeOut(clamp((t - 1.6) / 1.4));

    if (glOn()) {
      gl.render({ t, open, warp, cx: cx - pointer.x * 8, cy: cy - pointer.y * 8, R, px: pointer.x, py: pointer.y });
    }

    drawStars(t, dt, open);

    move(dt);
    ctx.save();
    ctx.translate(pointer.x * -8, pointer.y * -8);
    const positions = orbits.map((o) => planetAt(o));
    orbits.forEach((o, i) => drawOrbitPath(o, i, appear));
    orbits.forEach((o, i) => positions[i].depth < 0 && drawPlanet(o, positions[i], i, appear));
    drawCore(t, open);
    drawIris(t, open);
    drawStar(t, draw);
    drawClock(t, draw);
    drawHands(t);
    orbits.forEach((o, i) => positions[i].depth >= 0 && drawPlanet(o, positions[i], i, appear));
    ctx.restore();

    // The links follow their planets (and the same small lean toward the pointer).
    positions.forEach((p, i) => {
      if (!links[i]) return;
      const x = p.x - pointer.x * 8;
      const y = p.y - pointer.y * 8;
      links[i].style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      placeLabel(i, x, y);
    });
    if (nav) nav.classList.toggle("is-on", appear > 0.3);
  }

  function loop(now) {
    frame = 0;
    if (!onScreen || document.hidden) return;
    const t = (now - start) / 1000;
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    draw(t, dt);
    frame = requestAnimationFrame(loop);
  }

  function play() {
    if (reduce.matches) {
      draw(99);
      return;
    }
    if (!frame) {
      last = performance.now();
      frame = requestAnimationFrame(loop);
    }
  }

  // ── Interaction ────────────────────────────────────────────────────────

  hero.addEventListener("pointermove", (event) => {
    pointer.tx = event.clientX / window.innerWidth - 0.5;
    pointer.ty = event.clientY / window.innerHeight - 0.5;
  });
  hero.addEventListener("pointerleave", () => {
    pointer.tx = pointer.ty = 0;
  });

  // Scrolling away flies through the portal: the dial grows and fades.
  let ticking = false;
  let lastY = window.scrollY;
  let lastAt = performance.now();
  function onScroll() {
    // Speed, for the warp: a fast scroll is a jump.
    const at = performance.now();
    const speed = Math.abs(window.scrollY - lastY) / Math.max(16, at - lastAt);
    lastY = window.scrollY;
    lastAt = at;
    if (!reduce.matches) warpTarget = Math.max(warpTarget, clamp(speed / 2.4));
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const p = clamp(window.scrollY / (hero.offsetHeight * 0.9));
      const layers = [canvas, gl && glCanvas, nav].filter(Boolean);
      for (const layer of layers) {
        if (reduce.matches) {
          layer.style.transform = "";
          layer.style.opacity = String(1 - p * 0.6);
        } else {
          layer.style.transform = `scale(${1 + p * 0.55})`;
          layer.style.opacity = String(1 - p * 0.92);
        }
      }
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  // On screen means below the fixed bar: a portal whose last strip sits behind the bar is out of
  // sight, and both canvases stop drawing.
  const barHeight = Math.ceil(barEl ? barEl.offsetHeight : 64) + 8;
  new IntersectionObserver(
    (entries) => {
      onScreen = entries[0].isIntersecting;
      if (onScreen) play();
    },
    { rootMargin: `-${barHeight}px 0px 0px 0px` },
  ).observe(hero);
  document.addEventListener("visibilitychange", () => !document.hidden && play());
  reduce.addEventListener?.("change", () => { resize(); play(); });

  let resizeTimer = 0;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 120);
  });

  resize();
  const begin = () => {
    measureLabels(); // the display font is in now: the labels have their real width
    start = performance.now();
    hero.classList.add("is-ready");
    window.dispatchEvent(new Event("hero:ready"));
    play();
  };
  // Start once the display font is in, so the title opens in its own face; never wait long.
  Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise((r) => setTimeout(r, 900))]).then(begin);
})();
