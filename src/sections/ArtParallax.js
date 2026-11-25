import React from "react";
import ScrollIndicator from "@fragments/ScrollIndicator";
import dragon from "@images/art/dragon-both-ends.webp";
import kinggamagama from "@images/art/king-gama-gama.webp";
import samuraistanding from "@images/art/samurai-standing.webp";
import samuraionhorseback from "@images/art/samurai-on-horseback.webp";
import samuraikiller from "@images/art/samurai-killer.webp";
import samuraitrees from "@images/art/samurai-trees.webp";
import samuraimoon from "@images/art/samurai-moon.webp";
import warrioroftytoria from "@images/art/warrior-of-tytoria.webp";

/**
 * Side-scrolling parallax scene of the character/creature art.
 *
 * Scrolling down pins the scene and pans it sideways. Each piece slides at
 * its own speed, set by its depth (0 = front, the further back the slower),
 * the same way the old CSS-3D version (perspective: 100px) did:
 *
 *   speed = 100 / (100 + depth)
 *
 * All sizes are in units of the scene's height, so it scales with the screen.
 *   x: where the piece sits on the scene's track, before parallax
 *   y: distance from the top
 *   h: height (width follows the image)
 *
 * The motion is CSS only (scroll-driven animations): see
 * src/css/components/_art-parallax.scss. Browsers without them, and visitors
 * who prefer reduced motion, get a still panorama they can scroll sideways.
 */
const travel = 758; // how far the front layer pans, in scene-height units

const pieces = [
  {
    src: warrioroftytoria,
    alt: "A warrior holding a book and a sword.",
    depth: 0,
    x: 130,
    y: 18.2,
    h: 94,
  },
  {
    src: kinggamagama,
    alt: "Hawaiian fisherman, holding a giant tuna.",
    depth: 25,
    x: 167.4,
    y: 13.5,
    h: 87,
  },
  {
    src: samuraistanding,
    alt: "A samurai ready to fight.",
    depth: 150,
    x: 270.2,
    y: 1,
    h: 90,
  },
  {
    src: samuraikiller,
    alt: "A samurai amongst other dead samurai.",
    depth: 175,
    x: 546.4,
    y: 26.1,
    h: 80.5,
  },
  {
    src: samuraionhorseback,
    alt: "A samurai on horseback, charging.",
    depth: 200,
    x: 407.5,
    y: 26.8,
    h: 58.7,
  },
  {
    src: samuraitrees,
    alt: "Trees and crows.",
    depth: 250,
    x: 478.3,
    y: 7.8,
    h: 57.7,
  },
  {
    src: dragon,
    alt: "Illustration of a dragon passing through a tsunami.",
    depth: 275,
    x: -24,
    y: 7.7,
    h: 75,
  },
  {
    src: samuraimoon,
    alt: "The moon and clouds.",
    depth: 1000,
    x: 69.9,
    y: 7.1,
    h: 16.9,
  },
];

const round = (n) => Math.round(n * 1000) / 1000;

const ArtParallax = ({ id }) => (
  <div className="art-parallax" id={id} style={{ "--travel": travel }}>
    <div className="art-parallax__stage">
      <ScrollIndicator
        className="art-parallax__hint"
        label={
          <>
            <span className="art-parallax__hint-pinned">Scroll down </span>
            <span className="art-parallax__hint-strip">Scroll right</span>
          </>
        }
      />
      {pieces.map(({ src, alt, depth, x, y, h }) => {
        const v = 100 / (100 + depth);
        return (
          <img
            key={src}
            className="art-parallax__piece"
            src={src}
            alt={alt}
            draggable="false"
            style={{
              "--v": round(v),
              "--x": x,
              "--y": y,
              "--h": h,
              zIndex: 1000 - depth,
            }}
          />
        );
      })}
      <div className="art-parallax__progress" aria-hidden="true" />
    </div>
  </div>
);

export default ArtParallax;
