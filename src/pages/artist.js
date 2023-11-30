import * as React from "react";
// Components/Fragments
import Form from "../components/Form";
import Gallery from "../components/Gallery";
import { Link } from "gatsby";
import Page from "../layouts/Page";
import Profiles from "../fragments/Profiles";
import { StaticImage } from "gatsby-plugin-image";
// CSS
import "../css/reel.css";
// Impages
import dragon from "../images/dragon-both-ends.webp";
import kinggamagama from "../images/king-gama-gama.webp";
import samuraistanding from "../images/samurai-standing.webp";
import samuraionhorseback from "../images/samurai-on-horseback.webp";
import samuraikiller from "../images/samurai-killer.webp";
import samuraikillertrees from "../images/samurai-killer-trees.webp";
import samuraikillermoon from "../images/samurai-killer-moon.webp";
import skippinggirl from "../images/skipping-girl-sprite.webp";
import warrioroftytoria from "../images/warrior-of-tytoria.webp";

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
            <h2>I &hearts; to Draw!</h2>
            <p>
              This collection of art will include work I've done professionally
              and on my own time... Patience, my friend. I'm afraid coding is a
              higher priority right now. 🤪
            </p>
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
                src={skippinggirl}
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </article>
        </section>
        <Gallery>
          <div className="layer" style={{ flex: "0 0 100vw" }}></div>
          <div className="layer l125">
            <img
              alt="Illustration of a dragon passing through a typhoon."
              src={dragon}
              style={{
                width: "174vh",
              }}
            />
          </div>
          <div
            className="layer l0"
            style={{
              alignItems: "end",
              display: "flex",
              marginLeft: "-20vh",
              width: "53vh",
            }}
          >
            <img
              src={kinggamagama}
              alt="Hawaiian fisherman, holding a giant tuna."
              style={{ height: "90vh" }}
            />
          </div>
          <div
            className="layer l25"
            style={{ alignItems: "end", display: "flex", width: "42vh" }}
          >
            <img
              src={warrioroftytoria}
              alt="A warrior holding a book and a sword."
              style={{ alignSelf: "bottom", height: "85vh" }}
            />
          </div>
          <div
            className="layer l100"
            style={{ paddingLeft: "10vh", width: "49vh" }}
          >
            <img
              src={samuraistanding}
              alt="A samurai ready to fight."
              style={{ height: "90vh" }}
            />
          </div>
          <div
            className="layer l125"
            style={{ alignItems: "center", display: "flex", width: "59vh" }}
          >
            <img
              src={samuraionhorseback}
              alt="A samurai on horseback, charging."
              style={{ height: "75vh" }}
            />
          </div>
          <div
            className="layer l1000"
            style={{
              marginTop: "-360vh",
              position: "relative",
              width: "86vh",
            }}
          >
            <img
              src={samuraikillermoon}
              alt="The moon and clouds."
              style={{
                width: "86vh",
              }}
            />
          </div>
          <div
            className="layer l175"
            style={{
              marginRight: "-25vh",
              marginTop: "-36vh",
              position: "relative",
              width: "86vh",
            }}
          >
            <img
              src={samuraikillertrees}
              alt="Trees and crows."
              style={{
                width: "86vh",
              }}
            />
          </div>
          <div
            className="layer l150"
            style={{
              height: "81vh",
              marginRight: "50vh",
              marginLeft: "-75vh",
              paddingTop: "32vh",
              position: "relative",
              width: "86vh",
            }}
          >
            <img
              src={samuraikiller}
              alt="A samurai amongst other dead samurai."
              style={{
                width: "86vh",
              }}
            />
          </div>
        </Gallery>
        <section className="alignable skew_b cta_b" id="contact">
          <article className="self-center">
            <h2>Let's Talk Art!</h2>
            <p>
              I have been practicing my whole life. I wrote&nbsp;
              <Link to="/story">a page on that</Link>, but I'm interested in
              connecting. So please send me a message below.
            </p>
            <div className="columns-2 bottomXS topXS">
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
          <Form className="bottomS" />
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
