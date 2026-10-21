/* The world beyond the portal, drawn by the graphics card.
 *
 * One fragment shader: a whirlpool of light inside the dial, woven from the four worlds' colours,
 * drawn inward and turning; a halo around the rim; and, while the page is scrolled quickly, streaks
 * flying outward — the jump from the portal into the worlds. It sits behind js/hero.js's canvas,
 * which keeps the line work (the star, the clock, the iris, the planets) crisp on top.
 *
 * window.PortalGL.create(canvas, colours) returns { resize(w, h), render(frame) } or null when the
 * browser has no WebGL — js/hero.js then draws its own simpler glow, as it always did.
 */
(function () {
  "use strict";

  const VERTEX = `
    attribute vec2 aPos;
    void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
  `;

  const FRAGMENT = `
    precision mediump float;
    uniform vec2 uRes;
    uniform vec2 uCenter;
    uniform float uR;
    uniform float uTime;
    uniform float uOpen;
    uniform float uWarp;
    uniform vec2 uPointer;
    uniform vec3 uC0;
    uniform vec3 uC1;
    uniform vec3 uC2;
    uniform vec3 uC3;

    const float TAU = 6.2831853;

    float hash(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }
    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));
      return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
    }
    float fbm(vec2 p) {
      float v = 0.0;
      float a = 0.5;
      mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
      for (int i = 0; i < 5; i++) {
        v += a * noise(p);
        p = m * p;
        a *= 0.5;
      }
      return v;
    }
    // The four worlds' colours around the circle, blended smoothly all the way round.
    vec3 worlds(float k) {
      float w0 = pow(0.5 + 0.5 * cos(TAU * (k - 0.00)), 2.0);
      float w1 = pow(0.5 + 0.5 * cos(TAU * (k - 0.25)), 2.0);
      float w2 = pow(0.5 + 0.5 * cos(TAU * (k - 0.50)), 2.0);
      float w3 = pow(0.5 + 0.5 * cos(TAU * (k - 0.75)), 2.0);
      return (uC0 * w0 + uC1 * w1 + uC2 * w2 + uC3 * w3) / (w0 + w1 + w2 + w3);
    }

    void main() {
      vec2 frag = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y);
      vec2 d = (frag - uCenter) / uR;
      float r = length(d);
      if (r > 1.9) { gl_FragColor = vec4(0.0); return; }
      float ang = atan(d.y, d.x);
      float t = uTime;

      // A whirlpool: the nearer the centre, the faster it turns.
      float swirl = t * 0.16 + 1.5 / (r + 0.32);
      vec2 q = vec2(cos(ang + swirl), sin(ang + swirl)) * (r * 2.4) + uPointer * 0.8;
      vec2 warp = vec2(fbm(q + t * 0.06), fbm(q + vec2(5.2, 1.3) - t * 0.05));
      float n = fbm(q * 1.35 + warp * 2.1);
      vec3 hue = worlds(fract(ang / TAU + swirl * 0.08 + n * 0.25));

      float rc = 0.4 * mix(0.04, 1.0, uOpen);
      float inside = 1.0 - smoothstep(rc - 0.035, rc + 0.005, r);
      float density = smoothstep(0.14, 0.78, n);
      // Never a black hole: a base glow fills the portal, the currents ride on it.
      vec3 col = (hue * (0.22 + density * 1.75)) * inside * uOpen;
      // A white-hot heart, the light at the end of the tunnel.
      col += vec3(0.86, 1.0, 0.96) * pow(max(0.0, 1.0 - r / max(rc, 0.001)), 2.2) * 0.85 * inside * uOpen;
      // The halo on the far side of the rim.
      float halo = exp(-max(r - rc, 0.0) * 2.6) * (1.0 - inside) * 0.45 * uOpen;
      col += mix(vec3(0.13, 0.76, 0.69), hue, 0.45) * halo * (0.55 + 0.45 * n);

      // Warp: thin streaks flying outward while the page is scrolled fast.
      if (uWarp > 0.01) {
        float sector = floor((ang / TAU + 0.5) * 140.0);
        float lane = hash(vec2(sector, 7.0));
        float run = fract(r * 0.55 - t * (1.2 + lane) + lane * 9.0);
        float streak = step(0.82, lane) * smoothstep(0.0, 0.08, run) * (1.0 - smoothstep(0.08, 0.5, run));
        col += mix(hue, vec3(1.0), 0.4) * streak * uWarp * smoothstep(1.9, 0.45, r) * 1.6;
      }

      float alpha = clamp(max(max(col.r, col.g), col.b), 0.0, 1.0);
      gl_FragColor = vec4(min(col, vec3(alpha)), alpha);
    }
  `;

  function rgb(hex) {
    const n = parseInt(hex.slice(1), 16);
    return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
  }

  function create(canvas, colours) {
    let gl;
    try {
      gl = canvas.getContext("webgl", { premultipliedAlpha: true, antialias: false, alpha: true, powerPreference: "low-power" });
    } catch {
      gl = null;
    }
    if (!gl) return null;

    // Built in the background where the browser can (KHR_parallel_shader_compile). Asking whether
    // a program has linked waits until it has, and on a slow phone that held the whole page for most
    // of a second; until the shader is ready, js/hero.js draws its simple glow instead.
    const parallel = gl.getExtension("KHR_parallel_shader_compile");
    const vertex = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertex, VERTEX);
    gl.compileShader(vertex);
    const fragment = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragment, FRAGMENT);
    gl.compileShader(fragment);
    const program = gl.createProgram();
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);

    let state = "building"; // then "ready" or "failed"
    const u = {};
    let scale = 1;
    let size = null;
    let lost = false;
    canvas.addEventListener("webglcontextlost", (event) => {
      event.preventDefault();
      lost = true;
    });

    function finish() {
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        const why = gl.getShaderInfoLog(fragment) || gl.getShaderInfoLog(vertex) || gl.getProgramInfoLog(program) || "";
        console.warn("portal: the shader did not build, drawing the simple glow instead.", why);
        state = "failed";
        return;
      }
      gl.useProgram(program);
      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
      const aPos = gl.getAttribLocation(program, "aPos");
      gl.enableVertexAttribArray(aPos);
      gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);
      for (const name of ["uRes", "uCenter", "uR", "uTime", "uOpen", "uWarp", "uPointer", "uC0", "uC1", "uC2", "uC3"]) {
        u[name] = gl.getUniformLocation(program, name);
      }
      [0, 1, 2, 3].map((i) => rgb(colours[i] || "#22c3b0")).forEach((c, i) => gl.uniform3fv(u[`uC${i}`], c));
      if (size) gl.uniform2f(u.uRes, size[0], size[1]);
      state = "ready";
    }

    /** Whether the shader can draw yet; asks without waiting where the browser allows it. */
    function ready() {
      if (lost || state === "failed") return false;
      if (state === "ready") return true;
      if (parallel && !gl.getProgramParameter(program, parallel.COMPLETION_STATUS_KHR)) return false;
      finish();
      return state === "ready";
    }

    return {
      get lost() {
        return lost || state === "failed";
      },
      ready,
      resize(cssW, cssH) {
        // The nebula is soft, so it is drawn at a fraction of the screen's resolution and scaled up.
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        scale = dpr * (cssW < 700 ? 0.6 : 0.5);
        canvas.width = Math.max(1, Math.round(cssW * scale));
        canvas.height = Math.max(1, Math.round(cssH * scale));
        gl.viewport(0, 0, canvas.width, canvas.height);
        size = [canvas.width, canvas.height];
        if (state === "ready") gl.uniform2f(u.uRes, size[0], size[1]);
      },
      render(f) {
        if (!ready()) return;
        gl.uniform2f(u.uCenter, f.cx * scale, f.cy * scale);
        gl.uniform1f(u.uR, f.R * scale);
        gl.uniform1f(u.uTime, f.t);
        gl.uniform1f(u.uOpen, f.open);
        gl.uniform1f(u.uWarp, f.warp);
        gl.uniform2f(u.uPointer, f.px, f.py);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      },
    };
  }

  window.PortalGL = { create };
})();
