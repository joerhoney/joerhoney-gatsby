/*
  "The shutter" page transition.

  1. A panel in the destination door's gradient slides in from the left
     (its edges cut at the site slant).
  2. The destination's name crosses the panel in one move, from the bottom
     left to the top right along the panel's slanted edge, slowing in the
     middle so it can be read. The door's text art, faint, behind it, fades
     in and out as it drifts the same way, a shorter distance (parallax). The route changes underneath meanwhile.
  3. The panel slides off to the right.
  The new page's own entrance (e.g. GlyphHero printing) waits for step 4.

  Only plain left-clicks on same-site links to another page are taken over.
  Hash links, new-tab clicks, files and reduced-motion users get the normal
  instant navigation. A click during a transition skips to the end.
*/
import { navigate } from "gatsby";
import { creativeGlyph, developerGlyph } from "../content/glyphs";

const EXPO_IN_OUT = "cubic-bezier(0.87, 0, 0.13, 1)";
// Fast, slow, fast: the name and text art rush in, drift slowly through
// the middle (where the name is read), then rush out.
const DRIFT = "cubic-bezier(0.05, 0.85, 0.95, 0.15)";
const TILT = "14.125deg";
// Moving "up" along the panel's slanted edge: for every 1 up, 0.2516 right
// (tan 14.125deg).
const RUN = 0.2516;

// Text art behind the name (doors without one show the name alone).
const art = { creative: creativeGlyph, developer: developerGlyph };

const doors = [
  ["/creative", "creative", "creative"],
  ["/developer", "developer", "developer"],
  ["/solutions", "freelance", "freelance"],
  ["/freelance", "freelance", "freelance"],
  ["/work", "work", "work"],
  ["/blog", "blog", "blog"],
  ["/projects", "projects", "projects"],
];
const doorFor = (pathname) => {
  const hit = doors.find(([prefix]) => pathname.startsWith(prefix));
  return hit ? { word: hit[1], door: hit[2] } : { word: ":j", door: "home" };
};

let panel, word, glyph, running, arrived;
const current = [];

const play = (el, keyframes, options) => {
  const animation = el.animate(keyframes, { fill: "forwards", ...options });
  current.push(animation);
  return animation.finished.catch(() => {});
};

const build = () => {
  panel = document.createElement("div");
  panel.className = "shutter";
  panel.setAttribute("aria-hidden", "true");
  glyph = document.createElement("pre");
  glyph.className = "shutter__glyph";
  word = document.createElement("span");
  word.className = "shutter__word";
  panel.append(glyph, word);
  document.body.append(panel);
};

// y in vh: positive is down. x follows the slant.
const along = (y) => `translate(${-y * RUN}vh, ${y}vh)`;
const at = (y) => `${along(y)} skewY(${TILT})`;

async function run(url) {
  running = true;
  const { word: label, door } = doorFor(url.pathname);
  panel.dataset.door = door;
  word.textContent = label;
  glyph.textContent = (art[door] || []).join("\n");
  word.style.transform = at(110);
  glyph.style.transform = along(30);
  document.documentElement.dataset.shutter = "covering";

  // 1. Panel slides in from the left.
  await play(
    panel,
    [{ transform: "translateX(-100%)" }, { transform: "translateX(0)" }],
    {
      duration: 480,
      easing: EXPO_IN_OUT,
    },
  );
  // 2. Name and text art cross the panel along its slant; the route
  // changes underneath.
  const routed = new Promise((resolve) => (arrived = resolve));
  navigate(url.pathname + url.search + url.hash);
  const cross = { duration: 1000, easing: DRIFT };
  await Promise.all([
    play(word, [{ transform: at(110) }, { transform: at(-130) }], cross),
    play(glyph, [{ transform: along(30) }, { transform: along(-30) }], cross),
    // The text art fades in and back out as it drifts, so it never sits
    // still on the panel while the panel slides.
    play(
      glyph,
      [
        { opacity: 0 },
        { opacity: 0.16, offset: 0.3 },
        { opacity: 0.16, offset: 0.7 },
        { opacity: 0 },
      ],
      { duration: cross.duration },
    ),
    Promise.race([routed, new Promise((r) => setTimeout(r, 4000))]),
  ]);
  // 3. Panel slides off to the right; the new page starts its entrance.
  document.documentElement.dataset.shutter = "leaving";
  await play(
    panel,
    [{ transform: "translateX(0)" }, { transform: "translateX(100%)" }],
    {
      duration: 480,
      easing: EXPO_IN_OUT,
    },
  );
  current.forEach((a) => a.cancel());
  current.length = 0;
  delete document.documentElement.dataset.shutter;
  running = false;
}

const onClick = (event) => {
  if (running) {
    // Skip ahead: finish whatever step is playing.
    current.forEach((a) => a.finish());
    return;
  }
  if (event.defaultPrevented || event.button !== 0) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const link = event.target.closest && event.target.closest("a[href]");
  if (
    !link ||
    (link.target && link.target !== "_self") ||
    link.hasAttribute("download")
  )
    return;
  const url = new URL(link.href, window.location.href);
  if (url.origin !== window.location.origin) return;
  if (url.pathname === window.location.pathname) return; // same page / hash
  if (/\.[a-z0-9]+$/i.test(url.pathname)) return; // files
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  event.preventDefault();
  event.stopPropagation();
  run(url);
};

export const installShutter = () => {
  if (panel) return;
  build();
  // Capture phase: runs before Gatsby's <Link> handler.
  document.addEventListener("click", onClick, true);
};

export const shutterRouteUpdated = () => {
  if (arrived) {
    arrived();
    arrived = null;
  }
};
