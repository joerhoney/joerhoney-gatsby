import * as React from "react";
// Components
import Mailto from "@components/Mailto";
import Gallery from "@components/Gallery";
import { Link } from "gatsby";
// Layouts
import Page from "@layouts/Page";
// Fragments
import Arrow from "@fragments/Arrow";
import Profiles from "@fragments/Profiles";
import ScrollIndicator from "@fragments/ScrollIndicator";
// CSS
import "@css/reel.css";
// Impages
import dragon from "@images/art/dragon-both-ends.webp";
import kinggamagama from "@images/art/king-gama-gama.webp";
import samuraistanding from "@images/art/samurai-standing.webp";
import samuraionhorseback from "@images/art/samurai-on-horseback.webp";
import samuraikiller from "@images/art/samurai-killer.webp";
import samuraitrees from "@images/art/samurai-trees.webp";
import samuraimoon from "@images/art/samurai-moon.webp";
import skippinggirl from "@images/art/skipping-girl-sprite.webp";
import skippingframes from "@images/art/skipping-girl-flipbook.webp";
import warrioroftytoria from "@images/art/warrior-of-tytoria.webp";
import team from "@images/heros/team.webp";

const artistPage = (props) => {
  return (
    <>
      <section className="hero page">
        <div className="hero__bg">
          <img
            alt="Illustration of a team of charicters"
            loading="lazy"
            src={team}
          />
        </div>
        <h1>Artist</h1>
      </section>
      <Page>
        <section className="bottomM">
          <article>
            <p>
              Let me show you some of the artwork I've done! The collection on
              this page includes art I've done professionally as well as some
              art I created on my own time.
            </p>
          </article>
        </section>
        <section className="tint3_b skew-y-14" id="animation">
          <article className="bottomM -skew-y-14">
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
          <Gallery className="topS">
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
                  paddingTop: "20vh",
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
        <section className="cta bottomS skew-y-14" id="contact">
          <article className="-skew-y-14 self-center">
            <h2>Let's Talk Art!</h2>
            <p className="text">
              I have been practicing my whole life. I wrote&nbsp;
              <Link to="/blog/journey-of-an-artist/">a page on that</Link>, but
              I'm interested in connecting. So please send me a message below.
            </p>
            <div className="bottomXS columns-2">
              <div className="pull tint1">
                <h4>Hire me! 😄</h4>
                <p>
                  I am currently available for hire! Not for long though, so act
                  fast if you want me on your team! 🙌
                </p>
              </div>
              <div className="pull tint1">
                <h4>Contract me! 👍</h4>
                <p>
                  I am also open for service as a freelance web developer. Send
                  me your project ideas and I'll help you hash out the web
                  solutions you need. 💡
                </p>
              </div>
            </div>
            <Arrow
              className="self-right"
              style={{
                bottom: "150%",
                left: "-114px",
                rotate: "280deg",
              }}
              inward
            >
              <Mailto className="button" subject="General Inquiry">
                Email Me
              </Mailto>
            </Arrow>
          </article>
        </section>
        <section className="alignable">
          <Profiles className="article reveal-child-b compensateBHalf self-center" />
        </section>
      </Page>
    </>
  );
};

export default artistPage;

export const Head = () => (
  <>
    <title>Artist | :joe rhoney</title>
    <meta
      name="description"
      content="Practicing visual arts since childhood and still enjoying it today."
    />
    <meta property="og:keywords" content="Artist, Joe Rhoney" />
    <meta property="og:type" content="website" />
  </>
);
