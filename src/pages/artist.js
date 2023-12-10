import * as React from "react";
// Components/Fragments
import Form from "../components/Formspree";
import Gallery from "../components/Gallery";
import { Link } from "gatsby";
import Page from "../layouts/Page";
import Profiles from "../fragments/Profiles";
import ScrollIndicator from "../fragments/ScrollIndicator";
import { StaticImage } from "gatsby-plugin-image";
// CSS
import "../css/reel.css";
// Impages
import dragon from "../images/art/dragon-both-ends.webp";
import kinggamagama from "../images/art/king-gama-gama.webp";
import samuraistanding from "../images/art/samurai-standing.webp";
import samuraionhorseback from "../images/art/samurai-on-horseback.webp";
import samuraikiller from "../images/art/samurai-killer.webp";
import samuraitrees from "../images/art/samurai-trees.webp";
import samuraimoon from "../images/art/samurai-moon.webp";
import skippinggirl from "../images/art/skipping-girl-sprite.webp";
import skippingframes from "../images/art/skipping-girl-flipbook.webp";
import warrioroftytoria from "../images/art/warrior-of-tytoria.webp";

const artistPage = (props) => {
  return (
    <>
      <section className="hero">
        <StaticImage
          alt="Illustration of a team of charicters"
          placeholder="blurred"
          src="../images/heros/team.webp"
        />
        <h1>Artist</h1>
      </section>
      <Page>
        <section className="alignable">
          <article>
            <h2>I &#9829; to Draw!</h2>
            <p>
              Let me show you some of the artwork I've done! The collection on
              this page includes art I've done professionally as well as some
              art I created on my own time.
            </p>
          </article>
        </section>
        <section
          className="alignable skew_b tint3_b compensateT"
          id="animation"
        >
          <article className="compensateB">
            <h2>Animation</h2>
            <p>
              I love bringing my illustrations to life. This was originally a
              flipbook I made. I scanned all of the pages into Photoshop, where
              I added color and fabricated the background, a combination of
              digital montage, brush strokes, glow effects and transforms.
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
              className="overlay topXS"
              src={skippingframes}
            />
          </article>
        </section>
        <section className="compensateB">
          <div className="article">
            <h2 className="tilt">Character/&shy;Creature Creation</h2>
            <p>
              I spent many hours of my teenage years coming up with wild
              character ideas and creature concepts. That practice ultimately
              developed into a successful illustration service as a freelancer.
              Here is some of the work I completed for various client projects.
            </p>
          </div>
          <Gallery className="compensateT">
            <div
              className="layer"
              style={{
                display: "flex",
                flex: "0 0 100vw",
                height: "100vh",
                placeItems: "flex-start center",
                zIndex: "20",
              }}
            >
              <ScrollIndicator
                style={{
                  display: "flex",
                  flex: "0 0 50vw",
                  justifyContent: "center",
                  paddingTop: "15vh",
                }}
              />
            </div>
            <div
              className="layer l275"
              style={{
                marginLeft: "60vh",
                marginRight: "-100vh",
                width: "170vh",
              }}
            >
              <img
                alt="Illustration of a dragon passing through a tsunami."
                src={dragon}
                style={{
                  height: "75vh",
                  paddingBottom: "25vh",
                  paddingLeft: "40vh",
                }}
              />
            </div>
            <div
              className="layer l0"
              style={{
                alignItems: "end",
                display: "flex",
                marginRight: "2vh",
                width: "42vh",
              }}
            >
              <img
                src={warrioroftytoria}
                alt="A warrior holding a book and a sword."
                style={{ alignSelf: "bottom", height: "94vh" }}
              />
            </div>
            <div
              className="layer l25"
              style={{
                alignItems: "center",
                display: "flex",
                width: "58vh",
              }}
            >
              <img
                src={kinggamagama}
                alt="Hawaiian fisherman, holding a giant tuna."
                style={{
                  height: "87vh",
                  paddingBottom: "8vh",
                }}
              />
            </div>
            <div
              className="layer l150"
              style={{
                paddingLeft: "80vh",
                paddingRight: "90vh",
                width: "49vh",
              }}
            >
              <img
                src={samuraistanding}
                alt="A samurai ready to fight."
                style={{ height: "90vh", paddingBottom: "35vh" }}
              />
            </div>
            <div
              className="layer l200"
              style={{ alignItems: "center", display: "flex", width: "59vh" }}
            >
              <img
                src={samuraionhorseback}
                alt="A samurai on horseback, charging."
                style={{ height: "88vh", paddingBottom: "6vh" }}
              />
            </div>
            <div
              className="layer l1000"
              style={{
                marginTop: "-410vh",
                position: "relative",
                width: "96vh",
              }}
            >
              <img
                src={samuraimoon}
                alt="The moon and clouds."
                style={{
                  width: "86vh",
                }}
              />
            </div>
            <div
              className="layer l250"
              style={{
                marginRight: "-25vh",
                marginTop: "-53vh",
                position: "relative",
                width: "86vh",
              }}
            >
              <img
                src={samuraitrees}
                alt="Trees and crows."
                style={{
                  width: "86vh",
                }}
              />
            </div>
            <div
              className="layer l175"
              style={{
                height: "81vh",
                marginRight: "50vh",
                marginLeft: "-25vh",
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
        </section>
        <section className="alignable skew_b cta_b" id="contact">
          <article className="self-center">
            <h2>Let's Talk Art!</h2>
            <p>
              I have been practicing my whole life. I wrote&nbsp;
              <Link to="/story">a page on that</Link>, but I'm interested in
              connecting. So please send me a message below.
            </p>
            <div className="columns-2 bottomXS ">
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
          <Form className="compensateBHalf" />
        </section>
        <section className="alignable">
          <Profiles className="article reveal self-center compensateBHalf" />
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
