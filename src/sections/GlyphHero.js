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
 */
const GlyphHero = ({ door, title, rows, img, alt = "" }) => {
  const canvas = useRef(null);
  useEffect(() => startGradientField(canvas.current), []);
  return (
    <section className={`glyph-hero glyph-hero--${door}`}>
      <canvas ref={canvas} className="glyph-hero__field" aria-hidden="true" />
      {img && <img className="glyph-hero__art" src={img} alt={alt} />}
      <pre className="glyph-hero__glyph" aria-hidden="true">
        {rows.map((row, i) => (
          <span key={i} style={{ "--row": i }}>
            {row || " "}
          </span>
        ))}
      </pre>
      <h1 className="glyph-hero__title" style={{ "--rows": rows.length }}>
        {title}
      </h1>
    </section>
  );
};

export default GlyphHero;
