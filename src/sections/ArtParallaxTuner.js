import React, { useCallback, useEffect, useRef, useState } from "react";

/**
 * DEV ONLY tuner for the art parallax scene (rendered by ArtParallax.js only
 * when NODE_ENV is "development"; production builds drop it).
 *
 * Click an image in the scene (or pick one from the list) to open the box.
 * Type a number, or drag the grip beside a field: right/up increases,
 * left/down decreases. Hold Shift for 10x, Alt for 0.1x.
 * Everything updates live. "Copy changes" puts a prompt on the clipboard
 * with every value you changed, to paste back to Claude to save.
 */

const pieceFields = [
  {
    key: "depth",
    step: 1,
    note: (v) => `speed ${(100 / (100 + v)).toFixed(3)}`,
  },
  { key: "x", step: 0.5, note: () => "from left at settle" },
  { key: "y", step: 0.1, note: () => "from top" },
  { key: "h", step: 0.1, note: () => "height" },
  { key: "still", step: 0.5, note: () => "still view position" },
];
const sceneFields = [
  { key: "hold", step: 1, note: () => "scroll while panning" },
  { key: "ramp", step: 0.5, note: () => "scroll per hand-off" },
  { key: "endAt", step: 0.1, note: () => "% last right edge" },
];

const fix = (n, key) =>
  key === "depth" ? Math.round(n) : Math.round(n * 10) / 10;

const nameOf = (src) =>
  decodeURIComponent(src)
    .split("/")
    .pop()
    .replace(/-[0-9a-f]{8,}(?=\.\w+$)/, "")
    .replace(/\.\w+$/, "");

// Is the image's pixel under the pointer opaque? (So clicking the empty part
// of the trees picks the moon behind them.)
const canvases = new WeakMap();
const opaqueAt = (img, clientX, clientY) => {
  if (!img.complete || !img.naturalWidth) return true;
  let ctx = canvases.get(img);
  if (!ctx) {
    const c = document.createElement("canvas");
    c.width = img.naturalWidth;
    c.height = img.naturalHeight;
    ctx = c.getContext("2d", { willReadFrequently: true });
    ctx.drawImage(img, 0, 0);
    canvases.set(img, ctx);
  }
  const r = img.getBoundingClientRect();
  const px = Math.floor(((clientX - r.left) / r.width) * img.naturalWidth);
  const py = Math.floor(((clientY - r.top) / r.height) * img.naturalHeight);
  try {
    return ctx.getImageData(px, py, 1, 1).data[3] > 24;
  } catch {
    return true;
  }
};

// Read $hold and $ramp back from the compiled CSS: the section is
// (1 + hold/100) stages tall, and the hold starts at 2*ramp/(hold+2*ramp).
const readScene = (root, stage) => {
  const hold = Math.round((root.offsetHeight / stage.offsetHeight - 1) * 100);
  let share = null;
  const scan = (rules) => {
    for (const rule of rules) {
      if (
        rule.type === CSSRule.KEYFRAMES_RULE &&
        rule.name === "art-parallax-stage"
      )
        share = parseFloat(rule.cssRules[1].keyText) / 100;
      else if (rule.cssRules) scan(rule.cssRules);
    }
  };
  for (const sheet of document.styleSheets) {
    try {
      scan(sheet.cssRules);
    } catch {}
  }
  const ramp = share
    ? Math.round(((share * hold) / (2 * (1 - share))) * 2) / 2
    : 60;
  return { hold, ramp };
};

// Same maths as _art-parallax.scss, for live $hold / $ramp changes.
const sceneCss = ({ hold, ramp }) => {
  const a = (2 * ramp) / (hold + 2 * ramp);
  const hs = a * 100;
  const d = a / (2 * (1 - a));
  const s = 1 / (1 - d);
  const easeIn = "cubic-bezier(0.333, 0, 0.667, 0.333)";
  const easeOut = "cubic-bezier(0.333, 0.667, 0.667, 1)";
  const pan = (k) => `calc(var(--v) * var(--pan-end) * ${-k})`;
  return `
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .art-parallax {
      --ramp: calc(var(--stage-h) * ${ramp / 100});
      height: calc(var(--stage-h) * ${1 + hold / 100});
    }
  }
}
@keyframes art-parallax-stage {
  0% { animation-timing-function: ${easeIn}; translate: 0 0; }
  ${hs}% { animation-timing-function: linear; translate: 0 var(--ramp); }
  ${100 - hs}% { animation-timing-function: ${easeOut}; translate: 0 calc(var(--stage-h) * ${hold / 100} - var(--ramp)); }
  100% { translate: 0 calc(var(--stage-h) * ${hold / 100}); }
}
@keyframes art-parallax-pan {
  0% { animation-timing-function: ${easeIn}; translate: ${pan(-d * s)} 0; }
  ${hs}% { animation-timing-function: linear; translate: ${pan(0)} 0; }
  ${100 - hs}% { animation-timing-function: ${easeOut}; translate: ${pan((1 - 2 * d) * s)} 0; }
  100% { translate: ${pan(1)} 0; }
}`;
};

// "Still view": what visitors who prefer reduced motion (or browsers without
// scroll-driven animations) get, the still panorama placed by --still.
const stillCss = `
.art-parallax[data-tuner-still] { height: auto; }
.art-parallax[data-tuner-still] .art-parallax__stage {
  animation-name: none; overflow-x: auto; overflow-y: hidden; translate: none;
}
.art-parallax[data-tuner-still] .art-parallax__piece {
  animation-name: none; left: calc((var(--still) + 30) * 1cqh); translate: none;
}`;

const Grip = () => (
  <svg width="10" height="14" viewBox="0 0 10 14" aria-hidden="true">
    <path d="M2 2v10M5 2v10M8 2v10" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const Field = ({ label, value, step, note, onChange }) => {
  const [text, setText] = useState(String(value));
  const drag = useRef(null);

  useEffect(() => {
    if (parseFloat(text) !== value) setText(String(value));
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  const start = (e) => {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { x: e.clientX, y: e.clientY, v: value };
  };
  const move = (e) => {
    const d = drag.current;
    if (!d) return;
    const m = e.shiftKey ? 10 : e.altKey ? 0.1 : 1;
    d.v += (e.clientX - d.x - (e.clientY - d.y)) * step * m;
    d.x = e.clientX;
    d.y = e.clientY;
    onChange(d.v);
  };
  const end = () => (drag.current = null);

  return (
    <div style={styles.row}>
      <span style={styles.label}>{label}</span>
      <span
        title="Drag left/right or up/down (Shift 10x, Alt 0.1x)"
        style={styles.grip}
        onPointerDown={start}
        onPointerMove={move}
        onPointerUp={end}
        onPointerCancel={end}
      >
        <Grip />
      </span>
      <input
        type="number"
        step={step}
        value={text}
        style={styles.input}
        onChange={(e) => {
          setText(e.target.value);
          const n = parseFloat(e.target.value);
          if (!Number.isNaN(n)) onChange(n);
        }}
      />
      <span style={styles.note}>{note}</span>
    </div>
  );
};

const ArtParallaxTuner = ({ pieces, endAt, panEndFor, speed, round }) => {
  const anchor = useRef(null);
  const [els, setEls] = useState(null); // { root, stage, imgs }
  const [values, setValues] = useState(() =>
    pieces.map(({ depth, x, y, h, still }) => ({ depth, x, y, h, still })),
  );
  const [scene, setScene] = useState(null);
  const [initialScene, setInitialScene] = useState(null);
  const [selected, setSelected] = useState(null);
  const [copied, setCopied] = useState(false);
  const [still, setStill] = useState(false);

  // Find the scene, make the pieces clickable, read the current settings.
  useEffect(() => {
    const root = anchor.current.closest(".art-parallax");
    const stage = root.querySelector(".art-parallax__stage");
    const imgs = [];
    root.querySelectorAll(".art-parallax__piece").forEach((img) => {
      imgs[+img.dataset.piece] = img;
      img.style.pointerEvents = "auto";
      img.style.cursor = "pointer";
    });
    setEls({ root, stage, imgs });
    const s = { ...readScene(root, stage), endAt };
    setScene(s);
    setInitialScene(s);

    const pick = (e) => {
      const hits = document
        .elementsFromPoint(e.clientX, e.clientY)
        .filter((el) => el.classList?.contains("art-parallax__piece"));
      const hit =
        hits.find((img) => opaqueAt(img, e.clientX, e.clientY)) || hits[0];
      if (hit) setSelected(+hit.dataset.piece);
    };
    const key = (e) => e.key === "Escape" && setSelected(null);
    stage.addEventListener("click", pick);
    window.addEventListener("keydown", key);
    return () => {
      stage.removeEventListener("click", pick);
      window.removeEventListener("keydown", key);
    };
  }, [endAt]);

  // Width from the image's real shape, so the pan's end follows h.
  const widthOf = useCallback(
    (i, h) => {
      const img = els?.imgs[i];
      return img?.naturalWidth
        ? round((h * img.naturalWidth) / img.naturalHeight)
        : pieces[i].w;
    },
    [els, pieces, round],
  );

  // Apply piece values live.
  useEffect(() => {
    if (!els || !scene) return;
    values.forEach(({ depth, x, y, h, still }, i) => {
      const img = els.imgs[i];
      if (!img) return;
      img.style.setProperty("--v", round(speed(depth)));
      img.style.setProperty("--x", x);
      img.style.setProperty("--y", y);
      img.style.setProperty("--h", h);
      img.style.setProperty("--still", still);
      img.style.outline = i === selected ? "1px dashed var(--color3)" : "";
    });
    const list = values.map((v, i) => ({ ...v, w: widthOf(i, v.h) }));
    els.root.style.setProperty("--pan-end", panEndFor(list, scene.endAt));
  }, [els, values, scene, selected, widthOf, panEndFor, speed, round]);

  // Scroll length / hand-off: only override the compiled CSS once changed.
  useEffect(() => {
    if (!scene || !initialScene) return;
    const changed =
      scene.hold !== initialScene.hold || scene.ramp !== initialScene.ramp;
    let tag = document.getElementById("art-parallax-tuner");
    if (!changed) return tag?.remove();
    if (!tag) {
      tag = document.createElement("style");
      tag.id = "art-parallax-tuner";
      document.head.appendChild(tag);
    }
    tag.textContent = sceneCss(scene);
  }, [scene, initialScene]);

  // Still view on/off.
  useEffect(() => {
    if (!els) return;
    let tag = document.getElementById("art-parallax-tuner-still");
    if (!tag) {
      tag = document.createElement("style");
      tag.id = "art-parallax-tuner-still";
      tag.textContent = stillCss;
      document.head.appendChild(tag);
    }
    els.root.toggleAttribute("data-tuner-still", still);
    if (still) els.root.scrollIntoView({ block: "start", behavior: "instant" });
  }, [els, still]);

  // Clean up when the page unmounts.
  useEffect(
    () => () => {
      document.getElementById("art-parallax-tuner")?.remove();
      document.getElementById("art-parallax-tuner-still")?.remove();
    },
    [],
  );

  const setPiece = (key, n) =>
    setValues((vs) =>
      vs.map((v, i) => (i === selected ? { ...v, [key]: fix(n, key) } : v)),
    );
  const setSceneValue = (key, n) =>
    setScene((s) => ({
      ...s,
      [key]: key === "hold" ? Math.max(20, Math.round(n)) : Math.max(0, fix(n)),
    }));

  const changedPieces = values
    .map((v, i) => ({ v, i }))
    .filter(({ v, i }) =>
      pieceFields.some(({ key }) => v[key] !== pieces[i][key]),
    );
  const sceneChanged =
    scene &&
    initialScene &&
    sceneFields.some(({ key }) => scene[key] !== initialScene[key]);

  const copy = async () => {
    const lines = ["Change the art parallax values to this:"];
    if (sceneChanged)
      lines.push(
        `scene: ${sceneFields.map(({ key }) => `${key} ${scene[key]}`).join(", ")}`,
      );
    changedPieces.forEach(({ v, i }) => {
      const w = v.h !== pieces[i].h ? `, w ${widthOf(i, v.h)}` : "";
      lines.push(
        `${nameOf(pieces[i].src)}: ${pieceFields.map(({ key }) => `${key} ${v[key]}`).join(", ")}${w}`,
      );
    });
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      window.prompt("Copy this:", lines.join("\n"));
    }
  };

  const count = changedPieces.length + (sceneChanged ? 1 : 0);

  return (
    <span ref={anchor}>
      {selected !== null && scene && (
        <div style={styles.box} role="dialog" aria-label="Art parallax tuner">
          <div style={styles.head}>
            <select
              value={selected}
              style={styles.select}
              onChange={(e) => setSelected(+e.target.value)}
            >
              {pieces.map(({ src }, i) => (
                <option key={src} value={i}>
                  {nameOf(src)}
                </option>
              ))}
            </select>
            <button
              type="button"
              style={styles.close}
              onClick={() => setSelected(null)}
            >
              Close
            </button>
          </div>

          {pieceFields.map(({ key, step, note }) => (
            <Field
              key={key}
              label={key}
              step={step}
              value={values[selected][key]}
              note={note(values[selected][key])}
              onChange={(n) => setPiece(key, n)}
            />
          ))}

          <div style={styles.section}>Scene</div>
          <button
            type="button"
            aria-pressed={still}
            style={{ ...styles.button, display: "block", margin: "6px 0" }}
            onClick={() => setStill((v) => !v)}
          >
            {still ? "Still view: on (reduced motion)" : "Still view: off"}
          </button>
          {sceneFields.map(({ key, step, note }) => (
            <Field
              key={key}
              label={key}
              step={step}
              value={scene[key]}
              note={note()}
              onChange={(n) => setSceneValue(key, n)}
            />
          ))}

          <div style={styles.actions}>
            <button
              type="button"
              style={styles.button}
              onClick={copy}
              disabled={!count}
            >
              {copied ? "Copied" : `Copy changes (${count})`}
            </button>
            <button
              type="button"
              style={styles.reset}
              onClick={() =>
                setValues((vs) =>
                  vs.map((v, i) => {
                    if (i !== selected) return v;
                    const { depth, x, y, h, still } = pieces[i];
                    return { depth, x, y, h, still };
                  }),
                )
              }
            >
              Reset image
            </button>
          </div>
          <div style={styles.hint}>
            Drag a grip right/up to increase. Shift 10x, Alt 0.1x. Esc closes.
          </div>
        </div>
      )}
    </span>
  );
};

// The site styles every input and button; start the tuner's own controls
// from a clean slate so they stay compact.
const control = {
  all: "unset",
  border: "1px solid var(--color3)",
  boxSizing: "border-box",
  cursor: "pointer",
  font: "inherit",
  lineHeight: 1.4,
  padding: "1px 6px",
};

const styles = {
  box: {
    background: "var(--color1)",
    borderLeft: "1px solid var(--color3)",
    color: "var(--text)",
    font: "12px/1.4 ui-monospace, SFMono-Regular, Menlo, monospace",
    maxHeight: "calc(100vh - 32px)",
    overflowY: "auto",
    padding: "10px 12px",
    position: "fixed",
    right: 16,
    top: 16,
    width: 300,
    zIndex: 100000,
  },
  head: { display: "flex", gap: 8, marginBottom: 8 },
  select: { ...control, appearance: "auto", flex: 1, minWidth: 0 },
  close: control,
  row: { alignItems: "center", display: "flex", gap: 6, margin: "3px 0" },
  label: { width: 52 },
  grip: {
    color: "var(--color3)",
    cursor: "ew-resize",
    display: "inline-flex",
    padding: "2px 3px",
    touchAction: "none",
    userSelect: "none",
  },
  input: { ...control, cursor: "text", textAlign: "right", width: 76 },
  note: { color: "var(--color5)", flex: 1, fontSize: 10 },
  section: {
    borderTop: "1px solid var(--color3)",
    marginTop: 8,
    paddingTop: 6,
    textTransform: "uppercase",
  },
  actions: { display: "flex", gap: 8, marginTop: 10 },
  button: { ...control, flex: 1, textAlign: "center" },
  reset: control,
  hint: { color: "var(--color5)", fontSize: 10, marginTop: 6 },
};

export default ArtParallaxTuner;
