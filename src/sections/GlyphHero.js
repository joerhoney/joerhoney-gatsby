import React, { useEffect, useRef } from "react";
// Motion
import startGradientField from "../motion/gradientField";

/**
 * Door hero: a letterform printed from words (see src/content/glyphs.js),
 * the door's illustration behind it, its name across it, and a WebGPU
 * gradient field behind everything (CSS gradient when WebGPU is missing).
 *
 * On arrival the glyph prints row by row (each row slides in from the
 * left). The title uses the site's heading slant. As the page scrolls, the
 * glyph and the illustration drift down at different speeds.
 *
 *   <Page hero={<GlyphHero door="developer" title="developer" rows={developerGlyph} img={dragon} />}>
 *
 * Without rows, its children take the glyph's place (e.g. the freelance
 * page's heading, see HeroWords below). Give each line a --row style and the
 * glyph-hero__line class to have it print in, one line at a time.
 */
const GlyphHero = ({ door, title, rows, img, alt = "", children }) => {
  const canvas = useRef(null);
  useEffect(() => startGradientField(canvas.current), []);
  return (
    <section className={`glyph-hero glyph-hero--${door}`}>
      <canvas ref={canvas} className="glyph-hero__field" aria-hidden="true" />
      {img && <img className="glyph-hero__art" src={img} alt={alt} />}
      {rows ? (
        <pre className="glyph-hero__glyph" aria-hidden="true">
          {rows.map((row, i) => (
            <span key={i} style={{ "--row": i }}>
              {row || " "}
            </span>
          ))}
        </pre>
      ) : (
        <div className="glyph-hero__text">{children}</div>
      )}
      <h1 className="glyph-hero__title">{title}</h1>
    </section>
  );
};

/**
 * A heading laid out in the glyph's place. Wrap the key phrases in
 * *asterisks*: they're set big, in the heading font; the words between them
 * are set small, in the text art's typewriter font. The sub line goes under.
 *
 *   <HeroWords heading="Turn the *web market* into *walk-in customers*" sub="…" />
 */
export const HeroWords = ({ heading, sub }) => {
  const parts = heading
    .split(/(\*[^*]+\*)/)
    .map((part) => part.trim())
    .filter(Boolean);
  return (
    <>
      <h2 className="glyph-hero__heading">
        {parts.map((part, i) =>
          part.startsWith("*") ? (
            <span
              key={i}
              className="glyph-hero__line glyph-hero__big"
              style={{ "--row": i }}
            >
              {part.slice(1, -1)}
            </span>
          ) : (
            <span
              key={i}
              className="glyph-hero__line glyph-hero__small"
              style={{ "--row": i }}
            >
              {part}
            </span>
          ),
        )}
      </h2>
      {sub && (
        <p
          className="glyph-hero__line glyph-hero__sub"
          style={{ "--row": parts.length + 1 }}
        >
          {sub}
        </p>
      )}
    </>
  );
};

export default GlyphHero;
