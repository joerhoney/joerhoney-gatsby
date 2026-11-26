import * as React from "react";
// Components
import { Link } from "gatsby";
import Showcase from "@components/Showcase";
// Content
import portfolio from "../content/portfolio";
// Layouts
import Page from "@layouts/Page";
// Impages
import skippinggirl from "@images/art/skipping-girl-sprite.webp";
import skippingframes from "@images/art/skipping-girl-flipbook.webp";
import team from "@images/heros/team-2.webp";
// Sections
import ArtParallax from "@sections/ArtParallax";
import ContactSection from "@sections/ContactSection";
import GlyphHero from "@sections/GlyphHero";
// Content
import { creativeGlyph } from "../content/glyphs";
import Seo from "@components/Seo";

const creativePage = () => {
  return (
    <Page
      hero={
        <GlyphHero
          door="creative"
          title="creative"
          rows={creativeGlyph}
          img={team}
          alt="Illustration of a team of charicters"
        />
      }
    >
      <section className="alignable pb-md">
        <article>
          <p>
            Let me show you some of the creative work I've done! The collection
            on this page includes designs and artwork I did professionally as
            well as some I did on my own time.
          </p>
        </article>
      </section>
      <section className="alignable layer-skew layer-tint1 pb-md" id="work">
        <article className="self-center">
          <h2>UI Design</h2>
          <p>
            Here are some of the website designs I created using Figma. You can
            see a side-by-side comparison of each by clicking the project story
            button.
          </p>
        </article>
        <Showcase {...portfolio.hyperpress} />
        <Showcase {...portfolio.r3risk} />
        <Showcase {...portfolio.santiago} />
      </section>
      <section className="alignable layer-skew layer-tint3" id="animation">
        <article className="pb-md">
          <h2>Animation</h2>
          <p>
            I love bringing my illustrations to life. This was originally a
            flipbook I made. I scanned all of the pages into Photoshop, where I
            added color and fabricated the background, a combination of digital
            montage, brush strokes, glow effects and transforms.
          </p>
          <div className="expand reel f26" style={{ height: "205px" }}>
            <img
              alt="Animated loop of a girl skipping through a big city."
              src={skippinggirl}
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <img
            alt="Individual frames of the animated character"
            className="blend-overlay pt-xs"
            src={skippingframes}
          />
        </article>
      </section>
      <section className="mb-tilt">
        <div className="article pb-sm">
          <h2 className="tilt">Character/&shy;Creature Creation</h2>
          <p>
            I spent many hours of my teenage years coming up with wild character
            ideas and creature concepts. That practice ultimately developed into
            a successful illustration service as a freelancer. Here is some of
            the work I completed for various client projects.
          </p>
        </div>
        <ArtParallax id="illustration" />
      </section>
      <ContactSection heading="Let's Talk Art!">
        <p className="text">
          I have been practicing my whole life. I wrote&nbsp;
          <Link to="/blog/journey-of-an-artist/">a page on that</Link>, but I'm
          interested in connecting. So please send me a message below.
        </p>
        <div className="columns-2 pb-xs ">
          <div className="pull bg-tint1">
            <h4>Hire me! 😄</h4>
            <p>
              I am currently available for hire! Not for long though, so act
              fast if you want me on your team! 🙌
            </p>
          </div>
          <div className="pull bg-tint1">
            <h4>Contract me! 👍</h4>
            <p>
              I am also open for service as a freelance web developer. Send me
              your project ideas and I'll help you hash out the web solutions
              you need. 💡
            </p>
          </div>
        </div>
      </ContactSection>
    </Page>
  );
};

export default creativePage;

export const Head = ({ location }) => (
  <Seo
    title="Artist"
    description="Practicing visual arts since childhood and still enjoying it today."
    keywords="Artist, Illustrator, UI Design, Joe Rhoney"
    pathname={location.pathname}
  />
);
