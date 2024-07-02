import * as React from "react";
// Utilities
import since from "@utils/since";
// Components
// import Button from "@components/Button";
import Form from "@components/FormNetlify";
import Icon from "@components/Icon";
// import { Link } from "gatsby";
import { Half, Split } from "@components/Split";
// Layouts
import Page from "@layouts/Page";
import Scheme from "../layouts/Scheme";
// Fragments
import HeroHome from "@fragments/HeroHome";
import Profiles from "@fragments/Profiles";
// Images
import avatar from "@images/portrait.webp";
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
              Pardon my code humor, I've been in this industry for
              {since("Jan, 1, 2006")} years. Because that's how old I am… Okay,
              maybe I'm a little older than that. &#128513;
              <br />
              <br />I design, build and maintain websites and web apps, using
              efficient and cost-effective modern development technologies.
              Basically, I provide design and online solutions for your
              business. Now, what are you here for? <br />
              <br />
              <a href="#question" className="jump-button">
                Jump to Question
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
            button="Get Solution"
            className="half1"
            heading="Solutions"
            id="problem-solver"
            position="top right"
            src={dragonSplit1}
            speed={9}
            to="/solutions"
          >
            <p style={{ maxWidth: "16.5em" }}>
              Do you need online solutions for your Business?
            </p>
          </Half>
          <Half
            alt="Illustration of the back end of a dragon."
            button="Fill a Role"
            className="half2"
            heading="Developer"
            lift="true"
            id="Developer"
            position="top left"
            src={dragonSplit2}
            speed={-9}
            to="/developer"
          >
            <p style={{ maxWidth: "16.5em" }}>
              Or are you looking to hire a developer?{" "}
              <span
                className="written-note"
                style={{
                  fontWeight: "bold",
                  bottom: "-240px",
                  left: "20%",
                  width: "85%",
                  rotate: "342deg",
                }}
              >
                <Icon
                  name="ArrowSketch"
                  className="written-note__arrow"
                  style={{ rotate: "352deg", bottom: "116%", right: "50%" }}
                />
                (Recruiters, Hiring Managers, that's you)
              </span>
            </p>
          </Half>
        </Split>
        <section className="alignable compensateTHalf" id="contact">
          <article className="self-center">
            <h2>Or Contact Me</h2>
            <p>
              Whether you need help with something online or you just want to
              connect, drop me an email!
            </p>
          </article>
          {/* <Query /> */}
          <Form />
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
