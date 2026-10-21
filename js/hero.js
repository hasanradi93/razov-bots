/* The portal, drawn on one canvas.
 *
 * A starfield drifting toward the centre, a clock ring whose hands show the visitor's own time,
 * an eight-pointed star turning slowly, an iris over the core that opens once on load, and four
 * planets — one per bot — on tilted orbits that pass in front of and behind the dial. Clicking a
 * planet opens that bot's world further down the page.
 *
 * Behind it, when the browser has WebGL, js/portal-gl.js draws the light inside the portal: a
 * whirlpool in the four worlds' colours, and streaks while the page is scrolled fast ("warp").
 *
 * Nothing here is needed to use the page: every planet is also a tab in the worlds section.
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

  // The light behind the line work, when the graphics card can draw it.
  const glCanvas = hero.querySelector("[data-hero-gl]");
  let gl = glCanvas && window.PortalGL ? window.PortalGL.create(glCanvas, (window.BOTS || []).map((bot) => bot.hue)) : null;
  if (!gl && glCanvas) glCanvas.remove();
  // The shader builds in the background; until it is ready the 2D glow stands in.
  const glOn = () => Boolean(gl && !gl.lost && gl.ready());

  // Warp: how fast the page is being scrolled, eased, 0 to 1.
  let warp = 0;
  let warpTarget = 0;

  const orbits = (window.BOTS || []).map((bot, i) => ({
    id: bot.id,
    name: bot.short,
    rgb: hexToRgb(bot.hue),
    rx: [1.2, 1.46, 1.04, 1.68][i % 4],
    flat: [0.36, 0.27, 0.5, 0.2][i % 4],
    tilt: [-0.34, 0.2, 0.66, -0.1][i % 4],
    speed: [0.15, -0.1, 0.19, -0.075][i % 4],
    phase: i * (TAU / 4) + 0.5,
    size: [9, 8, 10, 7.5][i % 4],
  }));

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
  let placed = [];
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

  function hexToRgb(hex) {
    const n = parseInt(hex.slice(1), 16);
    return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
  }
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const easeOut = (x) => 1 - Math.pow(1 - x, 3);
  const easeInOut = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
  const polar = (r, a) => [cx + r * Math.cos(a), cy + r * Math.sin(a)];

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
    R = wide ? Math.min(w * 0.2, h * 0.3) : Math.min(w * 0.3, h * 0.19);
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
    // The world beyond: a glow, a slow rosette and four coloured currents.
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
    orbits.forEach((o, i) => {
      const turns = 22;
      ctx.strokeStyle = `rgba(${o.rgb}, ${0.35 * open})`;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      for (let k = 0; k <= turns * 6; k++) {
        const f = k / (turns * 6);
        const a = i * (TAU / 4) + f * TAU * 1.4 - t * 0.35;
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

  function planetAt(o, t) {
    const a = o.phase + t * o.speed;
    const ex = Math.cos(a) * R * o.rx;
    const ey = Math.sin(a) * R * o.rx * o.flat;
    const x = cx + ex * Math.cos(o.tilt) - ey * Math.sin(o.tilt);
    const y = cy + ex * Math.sin(o.tilt) + ey * Math.cos(o.tilt);
    return { x, y, depth: Math.sin(a), a };
  }

  function drawOrbitPath(o, appear) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(o.tilt);
    ctx.strokeStyle = `rgba(${o.rgb}, ${0.16 * appear})`;
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 6]);
    ctx.beginPath();
    ctx.ellipse(0, 0, R * o.rx, R * o.rx * o.flat, 0, 0, TAU);
    ctx.stroke();
    ctx.restore();
  }

  function drawPlanet(o, p, i, t, appear) {
    const scale = 0.72 + 0.28 * (p.depth * 0.5 + 0.5);
    const r = o.size * scale * (R / 160) * (hover === i ? 1.35 : 1) * appear;
    if (r <= 0.2) return;
    // A short trail behind it on its orbit.
    for (let k = 1; k <= 10; k++) {
      const q = planetAt(o, t - (k * 0.06) / Math.abs(o.speed) * 0.3);
      ctx.fillStyle = `rgba(${o.rgb}, ${(0.18 * (1 - k / 11) * appear).toFixed(3)})`;
      ctx.beginPath();
      ctx.arc(q.x, q.y, r * (1 - k / 13), 0, TAU);
      ctx.fill();
    }
    const halo = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 4);
    halo.addColorStop(0, `rgba(${o.rgb}, 0.35)`);
    halo.addColorStop(1, `rgba(${o.rgb}, 0)`);
    ctx.fillStyle = halo;
    ctx.beginPath();
    ctx.arc(p.x, p.y, r * 4, 0, TAU);
    ctx.fill();
    const body = ctx.createRadialGradient(p.x - r * 0.35, p.y - r * 0.4, r * 0.1, p.x, p.y, r);
    body.addColorStop(0, "rgba(255,255,255,0.95)");
    body.addColorStop(0.35, `rgb(${o.rgb})`);
    body.addColorStop(1, `rgba(${o.rgb}, 0.55)`);
    ctx.fillStyle = body;
    ctx.beginPath();
    ctx.arc(p.x, p.y, r, 0, TAU);
    ctx.fill();
    placed[i] = { x: p.x, y: p.y, r: Math.max(r, 6) + 12 };

    if (hover === i) {
      ctx.font = `600 ${Math.round(clamp(R / 9, 13, 17))}px Anybody, sans-serif`;
      ctx.fillStyle = `rgb(${MIST})`;
      ctx.textAlign = "center";
      ctx.fillText(o.name, p.x, p.y - r - 12);
    }
  }

  // ── Frame ──────────────────────────────────────────────────────────────

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

    ctx.save();
    ctx.translate(pointer.x * -8, pointer.y * -8);
    const positions = orbits.map((o) => planetAt(o, t));
    orbits.forEach((o) => drawOrbitPath(o, appear));
    orbits.forEach((o, i) => positions[i].depth < 0 && drawPlanet(o, positions[i], i, t, appear));
    drawCore(t, open);
    drawIris(t, open);
    drawStar(t, draw);
    drawClock(t, draw);
    drawHands(t);
    orbits.forEach((o, i) => positions[i].depth >= 0 && drawPlanet(o, positions[i], i, t, appear));
    ctx.restore();
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

  function hitTest(clientX, clientY) {
    const box = canvas.getBoundingClientRect();
    const scale = box.width / w || 1;
    const x = (clientX - box.left) / scale + pointer.x * 8;
    const y = (clientY - box.top) / scale + pointer.y * 8;
    return placed.findIndex((p) => p && Math.hypot(p.x - x, p.y - y) <= p.r);
  }

  hero.addEventListener("pointermove", (event) => {
    pointer.tx = event.clientX / window.innerWidth - 0.5;
    pointer.ty = event.clientY / window.innerHeight - 0.5;
    hover = event.target === canvas ? hitTest(event.clientX, event.clientY) : -1;
    canvas.style.cursor = hover >= 0 ? "pointer" : "default";
    if (reduce.matches) draw(99);
  });
  hero.addEventListener("pointerleave", () => {
    hover = -1;
    pointer.tx = pointer.ty = 0;
  });
  canvas.addEventListener("click", (event) => {
    const i = hitTest(event.clientX, event.clientY);
    if (i < 0) return;
    window.dispatchEvent(new CustomEvent("bots:open", { detail: { id: orbits[i].id, scroll: true } }));
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
      const layers = gl ? [canvas, glCanvas] : [canvas];
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

  new IntersectionObserver((entries) => {
    onScreen = entries[0].isIntersecting;
    if (onScreen) play();
  }).observe(hero);
  document.addEventListener("visibilitychange", () => !document.hidden && play());
  reduce.addEventListener?.("change", () => { resize(); play(); });

  let resizeTimer = 0;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 120);
  });

  resize();
  const begin = () => {
    start = performance.now();
    hero.classList.add("is-ready");
    window.dispatchEvent(new Event("hero:ready"));
    play();
  };
  // Start once the display font is in, so the title opens in its own face; never wait long.
  Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise((r) => setTimeout(r, 900))]).then(begin);
})();
