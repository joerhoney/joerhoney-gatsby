import React from "react";
import dragon from "@images/art/dragon-both-ends.webp";
import kinggamagama from "@images/art/king-gama-gama.webp";
import samuraidead1 from "@images/art/samurai-dead-1.webp";
import samuraidead2 from "@images/art/samurai-dead-2.webp";
import samuraidead3 from "@images/art/samurai-dead-3.webp";
import samuraimoon from "@images/art/samurai-moon.webp";
import samuraionhorseback from "@images/art/samurai-on-horseback.webp";
import samuraistanding from "@images/art/samurai-standing.webp";
import samuraitrees from "@images/art/samurai-trees.webp";
import samuraiwithhead from "@images/art/samurai-with-head.webp";
import warrioroftytoria from "@images/art/warrior-of-tytoria.webp";

/**
 * Side-scrolling parallax scene of the character/creature art.
 *
 * Scrolling down eases the scene to a stop and pans it sideways, then eases
 * it back into scrolling down. The motion is CSS only (scroll-driven
 * animations): see src/css/components/_art-parallax.scss. Browsers without
 * them, and visitors who prefer reduced motion, get a still panorama they can
 * scroll sideways.
 *
 * Each piece, listed back to front (the list order is the stacking order:
 * later pieces paint on top):
 *   depth: 0 = front. Further back pans slower: speed = 100 / (100 + depth)
 *   x:     where its left edge is when the scene settles at the top,
 *          measured from the left edge of the screen (negative = off-screen
 *          to the left). As the scene pans, each piece slides left at its own
 *          speed. Changing x by 10 moves the piece 10 to the right for the
 *          whole pan, and nothing else moves.
 *   y:     distance from the top
 *   h, w:  height and width (w is only used to work out where the pan ends)
 *   still: where it sits in the still panorama
 * All sizes are in % of the scene's height, so it scales with the screen.
 *
 * To move a piece, change its x (or still). To add one, add an entry; the
 * pan's end adjusts itself (see panEnd below).
 */
const pieces = [
  {
    src: samuraimoon,
    alt: "The moon and clouds.",
    depth: 2000,
    x: 13.7,
    still: 89.9,
    y: 0,
    h: 16.9,
    w: 85.8,
  },
  {
    src: samuraitrees,
    alt: "Trees and crows.",
    depth: 442,
    x: 158.3,
    still: 503.3,
    y: 0.3,
    h: 57.7,
    w: 86,
  },
  {
    src: dragon,
    alt: "Illustration of a dragon passing through a tsunami.",
    depth: 540,
    x: -9.5,
    still: -24,
    y: 0.2,
    h: 75,
    w: 130.1,
  },
  {
    src: samuraidead3,
    alt: "A wounded samurai kneeling.",
    depth: 316,
    x: 197.5,
    still: 607.8,
    y: 36.8,
    h: 27.2,
    w: 24.5,
  },
  {
    src: samuraidead1,
    alt: "A fallen samurai.",
    depth: 263,
    x: 254.2,
    still: 546.4,
    y: 53.2,
    h: 15.3,
    w: 30.2,
  },
  {
    src: samuraidead2,
    alt: "A fallen samurai, face down.",
    depth: 249,
    x: 300.7,
    still: 590.8,
    y: 58.1,
    h: 17.7,
    w: 38.3,
  },
  {
    src: samuraionhorseback,
    alt: "A samurai on horseback, charging.",
    depth: 300,
    x: 144.9,
    still: 407.5,
    y: 23.3,
    h: 58.7,
    w: 44.4,
  },
  {
    src: samuraiwithhead,
    alt: "A samurai holding a severed head, standing over a fallen samurai.",
    depth: 179,
    x: 296.5,
    still: 555.9,
    y: 20.3,
    h: 79.5,
    w: 74.7,
  },
  {
    src: samuraistanding,
    alt: "A samurai ready to fight.",
    depth: 260,
    x: 111.4,
    still: 270.2,
    y: 0,
    h: 90,
    w: 46,
  },
  {
    src: kinggamagama,
    alt: "Hawaiian fisherman, holding a giant tuna.",
    depth: 200,
    x: 44,
    still: 167.4,
    y: 3.2,
    h: 89,
    w: 52.1,
  },
  {
    src: warrioroftytoria,
    alt: "A warrior holding a book and a sword.",
    depth: 180,
    x: -1.2,
    still: 130,
    y: 9.3,
    h: 89.7,
    w: 39.9,
  },
];

export const speed = (depth) => 100 / (100 + depth);
export const round = (n) => Math.round(n * 1000) / 1000;

// The pan ends when the right edge of the last character (depth under 500;
// the dragon, trees and sky don't count) reaches endAt % of the screen's
// width. That depends on the screen's shape, so it's a CSS max() over the
// characters.
export const endAt = 85;
export const panEndFor = (list, at = endAt) =>
  `max(${list
    .filter(({ depth }) => depth < 500)
    .map(
      ({ depth, x, w }) =>
        `(${round(x + w)}cqh - ${at}cqw) / ${round(speed(depth))}`,
    )
    .join(", ")}, 100cqh)`;

// Dev only: click a piece in the browser to tune it (src/sections/
// ArtParallaxTuner.js). The require sits in a branch that production builds
// drop, so the tuner never ships.
const Tuner =
  process.env.NODE_ENV === "development"
    ? require("./ArtParallaxTuner").default
    : null;

const ArtParallax = ({ id }) => (
  <div
    className="art-parallax"
    id={id}
    style={{ "--pan-end": panEndFor(pieces) }}
  >
    <div className="art-parallax__stage">
      {pieces.map(({ src, alt, depth, x, still, y, h }, index) => (
        <img
          key={src}
          className="art-parallax__piece"
          src={src}
          alt={alt}
          draggable="false"
          data-piece={index}
          style={{
            "--v": round(speed(depth)),
            "--x": x,
            "--still": still,
            "--y": y,
            "--h": h,
          }}
        />
      ))}
    </div>
    {Tuner && (
      <Tuner
        pieces={pieces}
        endAt={endAt}
        panEndFor={panEndFor}
        speed={speed}
        round={round}
      />
    )}
  </div>
);

export default ArtParallax;
