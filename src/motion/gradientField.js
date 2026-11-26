/*
  WebGPU gradient field: the door's gradient rendered as a slow, warped field
  that always runs hue -> different hue (never to a pale tint of itself).

  startGradientField(canvas) returns a stop() function. It does nothing when
  WebGPU is unavailable, so the section's CSS gradient simply stays visible.
  Colours come from the canvas's CSS custom properties --field-a/b/c (hex),
  which change with the light/dark scheme.
*/

const SHADER = /* wgsl */ `
struct U {
  res: vec2f,
  time: f32,
  scroll: f32,
  a: vec4f,
  b: vec4f,
  c: vec4f,
};
@group(0) @binding(0) var<uniform> u: U;

@vertex
fn vs(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {
  var p = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0));
  return vec4f(p[i], 0.0, 1.0);
}

fn hash(p: vec2f) -> f32 {
  return fract(sin(dot(p, vec2f(127.1, 311.7))) * 43758.5453);
}

fn noise(p: vec2f) -> f32 {
  let i = floor(p);
  let f = fract(p);
  let s = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2f(1.0, 0.0)), s.x),
    mix(hash(i + vec2f(0.0, 1.0)), hash(i + vec2f(1.0, 1.0)), s.x),
    s.y
  );
}

fn fbm(p0: vec2f) -> f32 {
  var p = p0;
  var v = 0.0;
  var amp = 0.5;
  for (var k = 0; k < 5; k++) {
    v += amp * noise(p);
    p = p * 2.03 + vec2f(1.7, 9.2);
    amp *= 0.5;
  }
  return v;
}

@fragment
fn fs(@builtin(position) pos: vec4f) -> @location(0) vec4f {
  let uv = pos.xy / u.res;
  let aspect = u.res.x / u.res.y;
  // Same direction as the site's CSS gradients (70deg).
  let dir = vec2f(0.9397, -0.3420);
  var q = vec2f(uv.x * aspect, uv.y) * 1.8;
  let warp = vec2f(
    fbm(q + vec2f(0.0, u.time * 0.1 + u.scroll * 0.6)),
    fbm(q + vec2f(5.2, 1.3) - vec2f(u.time * 0.024, 0.0))
  );
  let swirl = fbm(q + warp * 1.6);
  let t = clamp(dot(uv - vec2f(0.5), dir) + 0.5 + (swirl - 0.5) * 0.55, 0.0, 1.0);
  var col = mix(u.a.rgb, u.b.rgb, smoothstep(0.0, 0.6, t));
  col = mix(col, u.c.rgb, smoothstep(0.42, 1.0, t));
  // Faint grain so large flat areas don't band.
  col += (hash(pos.xy + u.time) - 0.5) / 255.0;
  return vec4f(col, 1.0);
}
`;

const hex = (value, fallback) => {
  const m = /^#?([0-9a-f]{6})$/i.exec((value || "").trim());
  const n = parseInt(m ? m[1] : fallback, 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255, 1];
};

export default function startGradientField(canvas) {
  if (!canvas || typeof navigator === "undefined" || !navigator.gpu) {
    return () => {};
  }
  let stopped = false;
  let frame = 0;
  let visible = true;
  let cleanup = () => {};

  (async () => {
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter || stopped) return;
    const device = await adapter.requestDevice();
    if (stopped) return;
    const context = canvas.getContext("webgpu");
    if (!context) return;
    const format = navigator.gpu.getPreferredCanvasFormat();
    context.configure({ device, format, alphaMode: "opaque" });

    const module = device.createShaderModule({ code: SHADER });
    const pipeline = device.createRenderPipeline({
      layout: "auto",
      vertex: { module, entryPoint: "vs" },
      fragment: { module, entryPoint: "fs", targets: [{ format }] },
      primitive: { topology: "triangle-list" },
    });
    const uniforms = new Float32Array(16);
    const buffer = device.createBuffer({
      size: uniforms.byteLength,
      usage: window.GPUBufferUsage.UNIFORM | window.GPUBufferUsage.COPY_DST,
    });
    const bindGroup = device.createBindGroup({
      layout: pipeline.getBindGroupLayout(0),
      entries: [{ binding: 0, resource: { buffer } }],
    });

    const readColors = () => {
      const style = getComputedStyle(canvas);
      uniforms.set(hex(style.getPropertyValue("--field-a"), "feeaa8"), 4);
      uniforms.set(hex(style.getPropertyValue("--field-b"), "ffa082"), 8);
      uniforms.set(hex(style.getPropertyValue("--field-c"), "ff3f55"), 12);
    };
    readColors();

    // Smooth fields need few pixels: half resolution, DPR capped at 1.5.
    const resize = () => {
      const scale = Math.min(window.devicePixelRatio || 1, 1.5) * 0.5;
      canvas.width = Math.max(1, Math.round(canvas.clientWidth * scale));
      canvas.height = Math.max(1, Math.round(canvas.clientHeight * scale));
    };
    resize();

    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    const start = performance.now();
    const draw = (now) => {
      uniforms[0] = canvas.width;
      uniforms[1] = canvas.height;
      uniforms[2] = still.matches ? 0 : (now - start) / 1000;
      uniforms[3] = window.scrollY / window.innerHeight;
      device.queue.writeBuffer(buffer, 0, uniforms);
      const encoder = device.createCommandEncoder();
      const pass = encoder.beginRenderPass({
        colorAttachments: [
          {
            view: context.getCurrentTexture().createView(),
            loadOp: "clear",
            storeOp: "store",
            clearValue: { r: 0, g: 0, b: 0, a: 1 },
          },
        ],
      });
      pass.setPipeline(pipeline);
      pass.setBindGroup(0, bindGroup);
      pass.draw(3);
      pass.end();
      device.queue.submit([encoder.finish()]);
    };
    const loop = (now) => {
      if (stopped) return;
      if (visible && !document.hidden) draw(now);
      if (!still.matches) frame = requestAnimationFrame(loop);
    };
    canvas.dataset.gpu = "on";
    frame = requestAnimationFrame(loop);

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(canvas);
    const onScheme = () =>
      requestAnimationFrame(() => {
        readColors();
        if (still.matches) draw(performance.now());
      });
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", onScheme);
    document.addEventListener("change", onScheme);
    window.addEventListener("resize", resize);
    cleanup = () => {
      observer.disconnect();
      media.removeEventListener("change", onScheme);
      document.removeEventListener("change", onScheme);
      window.removeEventListener("resize", resize);
      device.destroy();
    };
  })().catch(() => {
    // Any WebGPU failure leaves the CSS gradient in place.
  });

  return () => {
    stopped = true;
    cancelAnimationFrame(frame);
    cleanup();
  };
}
