/*
  "The shutter" page transition.

  1. A panel in the destination door's gradient slides in from the left
     (its edges cut at the site slant).
  2. The destination's name slides up into it, already at the slant;
  3. the route changes underneath.
  4. The panel (name and all) slides off to the right.
  The new page's own entrance (e.g. GlyphHero printing) waits for step 4.

  Only plain left-clicks on same-site links to another page are taken over.
  Hash links, new-tab clicks, files and reduced-motion users get the normal
  instant navigation. A click during a transition skips to the end.
*/
import { navigate } from "gatsby";

const EXPO_IN_OUT = "cubic-bezier(0.87, 0, 0.13, 1)";
const EXPO_OUT = "cubic-bezier(0.16, 1, 0.3, 1)";
const TILT = "14.125deg";

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

let panel, word, running, arrived;
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
  word = document.createElement("span");
  word.className = "shutter__word";
  panel.append(word);
  document.body.append(panel);
};

const at = (y) => `translateY(${y}) skewY(${TILT})`;

async function run(url) {
  running = true;
  const { word: label, door } = doorFor(url.pathname);
  panel.dataset.door = door;
  word.textContent = label;
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
  // 2. Name slides up.
  await play(word, [{ transform: at("110vh") }, { transform: at("0") }], {
    duration: 320,
    easing: EXPO_OUT,
  });
  // 3. The route changes underneath.
  const routed = new Promise((resolve) => (arrived = resolve));
  navigate(url.pathname + url.search + url.hash);
  await Promise.race([routed, new Promise((r) => setTimeout(r, 4000))]);
  // 4. Panel slides off to the right; the new page starts its entrance.
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
