import * as React from "react";
// Utilities
import since from "@utils/since";
// Components
// import Button from "@components/Button";
import Mailto from "@components/Mailto";
import Icon from "@components/Icon";
// import { Link } from "gatsby";
import { Half, Split } from "@components/Split";
// Layouts
import Page from "@layouts/Page";
import Scheme from "../layouts/Scheme";
// Fragments
import HeroHome from "@fragments/HeroHome2";
import Arrow from "@fragments/Arrow";
import Profiles from "@fragments/Profiles";
// Images
import avatar from "@images/portrait-photo.webp";
import dragonSplit1 from "@images/dragon-split1.webp";
import dragonSplit2 from "@images/dragon-split2.webp";
// import Query from "../examples/Query";

const Home = () => {
  return (
    <>
      <HeroHome>
        <div className="subhero">
          <article>
            <img
              alt="Portrait of Joe Rhoney."
              className="self-right transluscent"
              height="290"
              loading="lazy"
              src={avatar}
              style={{
                maxWidth: "240px",
                marginBottom: "-80px",
                marginTop: "20px",
              }}
              width="240"
            />
            <h2 className="tilt" style={{ paddingTop: "0" }}>
              Hello, World!
            </h2>
            <p>
              Yep, still saying that after {since("Jan, 1, 2006")} years—just
              with cleaner code, better design, and fewer all-nighters
              (hopefully).
              <br />
              <br />
              I'm basically a passionate artist and a code junkie combined, so I
              bridge the gap between creativity and functionality. I grew up
              filling sketchbooks, which led me to graphic design, and
              eventually, web development (because someone had to make the
              designs actually work). Now, I create sleek visuals, build
              intuitive digital experiences, and make sure everything runs
              smoother than my morning coffee routine (which is saying a lot).
              Whether it's crafting a brand identity, fine-tuning a website, or
              debugging that one stubborn issue at 2 AM, I bring both artistry
              and technical know-how to the table.
              <br />
              <br />
              Now, what are you here for? <br />
              <br />
              <a
                href="#question"
                title="Jump to Question"
                style={{
                  display: "block",
                  margin: "auto",
                  width: "72px",
                }}
              >
                <Icon
                  name="ArrowDown"
                  label="false"
                  style={{
                    fontSize: "72px",
                  }}
                />
              </a>
            </p>
          </article>
        </div>
      </HeroHome>
      <Scheme style={{ transform: "translate(-10vw, -60px)" }} />
      <Page indicator={false} nav={false} scheme={false}>
        <Split className="compensateTHalf" id="question">
          <Half
            alt="Illustration of the front end of a dragon."
            button="Creative"
            className="half1"
            heading="Creative"
            id="creative"
            position="top right"
            src={dragonSplit1}
            speed={9}
            to="/creative"
          >
            <p style={{ maxWidth: "16.5em" }}>See more of my creative side. </p>
          </Half>
          <Half
            alt="Illustration of the back end of a dragon."
            button="Developer"
            className="half2"
            heading="Developer"
            lift="true"
            id="developer"
            position="top left"
            src={dragonSplit2}
            speed={-9}
            to="/developer"
          >
            <p style={{ maxWidth: "16.5em" }}>
              Learn more about my technical work.{" "}
              <span
                className="written-note with-arrow"
                style={{
                  fontSize: "1.4em",
                  fontWeight: "bold",
                  lineHeight: "1.1",
                  bottom: "-300px",
                  left: "20%",
                  rotate: "342deg",
                  width: "85%",
                }}
              ></span>
            </p>
          </Half>
        </Split>
        <section className="alignable compensateTHalf" id="contact">
          <article className="self-center">
            <h2>Or Contact Me</h2>
            <p>
              Whether you need help with something online, you want to interview
              me, or you just want to connect, drop me an email! I'll get back
              to you within 24 hours and I won't spam you.&nbsp;
              <b className="u-heading-font">:j</b>
            </p>
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
          <Profiles className="article reveal-child-b self-center compensateBHalf" />
        </section>
      </Page>
    </>
  );
};

export default Home;

export const Head = () => (
  <>
    <title>Developer/Illustrator | :joe rhoney</title>
    <meta
      name="description"
      content="Practicing web development since 2006 and visual arts since
               childhood. The perfect combination for a front-end developer."
    />
    <meta property="og:keywords" content="Joe Rhoney, Developer, Illustrator" />
    <meta property="og:type" content="website" />
  </>
);
