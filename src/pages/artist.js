import * as React from "react";
import Form from "../components/Form";
import { Link } from "gatsby";
import Page from "../layouts/Page";
import Gallery from "../components/Gallery";
import Profiles from "../fragments/Profiles";
import "../css/reel.css";

import { StaticImage } from "gatsby-plugin-image";
import skippingGirl from "../images/skipping-girl-sprite.webp";
import team from "../images/team.webp";
import dragonBack from "../images/dragon_back.webp";
import dragonFront from "../images/dragon_front.webp";

const artistPage = (props) => {
  return (
    <>
      <section className="hero">
        <StaticImage
          alt="Illustration of a team of charicters"
          placeholder="blurred"
          src="../images/team.webp"
        />
        <h1>Artist</h1>
      </section>
      <Page>
        <section className="alignable bottomL" id="skills">
          <article className="self-center">
            <h2>I ❤️ to Draw!</h2>
            <p>
              This collection of art will include work I've done professionally
              and on my own time... Patience, my friend. I'm afraid coding is a
              higher priority right now. 🤪
            </p>
          </article>
        </section>
        <Gallery>
          <div className="exhibit" style={{ flex: "0 0 100vw" }}>
            <p>
              This was originally a flipbook I made. I scanned all of the pages
              into Photoshop, where I added color and fabricated the background,
              a combination of digital montage, brush strokes, glow effects and
              transforms.
            </p>
            <div
              className="reel f26"
              style={{ height: "205px", width: "100%" }}
            >
              <img
                alt="Animated loop of a girl skipping through a big city."
                src={skippingGirl}
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
          <div className="exhibit">
            <img
              alt="Illustration of the front end of a dragon"
              src={dragonFront}
            />
          </div>
          <div className="exhibit">
            <img
              alt="Illustration of the back end of a dragon"
              src={dragonBack}
            />
          </div>
          <div className="exhibit">
            <img alt="Illustration of a team of charicters" src={team} />
          </div>
        </Gallery>
        <section className="alignable skewC cta_b" id="contact">
          <article className="self-center">
            <h2>Let's Talk Art!</h2>
            <p>
              I have been practicing my whole life. I wrote&nbsp;
              <Link to="/story">a page on that</Link>, but I'm interested in
              connecting. So please send me a message below.
            </p>
            <div className="columns-2 topXS">
              <div className="pull tint2">
                <h4>Hire me! 😄</h4>
                <p>
                  I am currently available for hire! Not for long though, so act
                  fast if you want me on your team! 🙌
                </p>
              </div>
              <div className="pull tint3">
                <h4>Contract me! 👍</h4>
                <p>
                  I am also open for service as a freelance web developer. Send
                  me your project ideas and I'll help you hash out the web
                  solutions you need. 💡
                </p>
              </div>
            </div>
          </article>
          <Form className="topXS" />
        </section>
        <section className="alignable">
          <Profiles className="article reveal self-center" />
        </section>
      </Page>
    </>
  );
};

export default artistPage;

export const Head = () => (
  <>
    <title>Artist | :joe rhoney</title>
  </>
);
