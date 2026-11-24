import React from "react";

/**
 * Standard page hero: a tilted band with a faint illustration behind the
 * page title. Pass it to <Page hero={…}> (or render it before <Page>).
 *
 *   <Hero title="Creative" img={team} alt="Illustration of a team." />
 *
 * variant="post" uses the blog-post hero styling.
 */
const Hero = ({ title, img, alt = "", variant = "page", className }) => (
  <section className={["hero", variant, className].filter(Boolean).join(" ")}>
    {img && (
      <div className="hero__bg">
        <img alt={alt} loading="lazy" src={img} />
      </div>
    )}
    <h1>{title}</h1>
  </section>
);

export default Hero;
