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
 * Each piece, listed back to front (the DOM order is also sorted by depth,
 * so the closest piece always paints on top):
 *   depth: 0 = front. Further back pans slower: speed = 100 / (100 + depth)
 *   x:     where it sits along the scene: how far the scene has panned when
 *          the piece's left edge reaches the left edge of the screen. The pan
 *          is 0 when the scene settles at the top, so x: 0 starts flush left.
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
    depth: 1900,
    x: 915.4,
    still: 89.9,
    y: 0,
    h: 16.9,
    w: 85.8,
  },
  {
    src: samuraitrees,
    alt: "Trees and crows.",
    depth: 410,
    x: 628.2,
    still: 503.3,
    y: 0.3,
    h: 57.7,
    w: 86,
  },
  {
    src: dragon,
    alt: "Illustration of a dragon passing through a tsunami.",
    depth: 400,
    x: 0,
    still: -24,
    y: 0.2,
    h: 75,
    w: 130.1,
  },
  {
    src: samuraionhorseback,
    alt: "A samurai on horseback, charging.",
    depth: 200,
    x: 394.2,
    still: 407.5,
    y: 19.3,
    h: 58.7,
    w: 44.4,
  },
  {
    src: samuraidead1,
    alt: "A fallen samurai.",
    depth: 190,
    x: 521.9,
    still: 546.4,
    y: 53.2,
    h: 15.3,
    w: 30.2,
  },
  {
    src: samuraidead3,
    alt: "A wounded samurai kneeling.",
    depth: 190,
    x: 700.1,
    still: 607.8,
    y: 36.8,
    h: 27.2,
    w: 24.5,
  },
  {
    src: samuraidead2,
    alt: "A fallen samurai, face down.",
    depth: 175,
    x: 642.7,
    still: 590.8,
    y: 59,
    h: 19.1,
    w: 41.2,
  },
  {
    src: samuraiwithhead,
    alt: "A samurai holding a severed head, standing over a fallen samurai.",
    depth: 160,
    x: 544.2,
    still: 555.9,
    y: 18.5,
    h: 80.6,
    w: 75.7,
  },
  {
    src: samuraistanding,
    alt: "A samurai ready to fight.",
    depth: 150,
    x: 232,
    still: 270.2,
    y: 0,
    h: 90,
    w: 46,
  },
  {
    src: kinggamagama,
    alt: "Hawaiian fisherman, holding a giant tuna.",
    depth: 25,
    x: 67.1,
    still: 167.4,
    y: 6,
    h: 87,
    w: 51,
  },
  {
    src: warrioroftytoria,
    alt: "A warrior holding a book and a sword.",
    depth: 0,
    x: 17.2,
    still: 130,
    y: 10.7,
    h: 94,
    w: 41.8,
  },
];

const speed = (depth) => 100 / (100 + depth);
const round = (n) => Math.round(n * 1000) / 1000;

// The pan ends when the right edge of the last character (depth <= 200; the
// sky and trees don't count) reaches endAt % of the screen's width. That
// depends on the screen's shape, so it's a CSS max() over the characters.
const endAt = 85;
const panEnd = `max(${pieces
  .filter(({ depth }) => depth <= 200)
  .map(
    ({ depth, x, w }) =>
      `${x}cqh + (${w}cqh - ${endAt}cqw) / ${round(speed(depth))}`,
  )
  .join(", ")}, 100cqh)`;

const ArtParallax = ({ id }) => (
  <div className="art-parallax" id={id} style={{ "--pan-end": panEnd }}>
    <div className="art-parallax__stage">
      {[...pieces]
        .sort((a, b) => b.depth - a.depth)
        .map(({ src, alt, depth, x, still, y, h }) => (
          <img
            key={src}
            className="art-parallax__piece"
            src={src}
            alt={alt}
            draggable="false"
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
  </div>
);

export default ArtParallax;
