import * as React from "react";
// Utilities
import since from "@utils/since";
// Components
import Button from "@components/Button";
import Form from "@components/Formspree";
import { Link } from "gatsby";
import { Half, Split } from "@components/Split";
// Layouts
import Page from "@layouts/Page";
// Fragments
import HeroHome from "@fragments/HeroHome";
import Profiles from "@fragments/Profiles";
import SubheroHome from "@fragments/SubheroHome";
// Images
import avatar from "@images/avatar.webp";
import dragonSplit1 from "@images/dragon-split1.webp";
import dragonSplit2 from "@images/dragon-split2.webp";
// import Query from "../examples/Query";

const Home = () => {
  return (
    <>
      <HeroHome />
      <SubheroHome>
        <article>
          <img
            alt="Portrait of Joe Rhoney."
            className="self-right transluscent"
            height="208"
            loading="lazy"
            src={avatar}
            style={{
              maxWidth: "153px",
              marginBottom: "-80px",
              marginTop: "20px",
            }}
            width="153"
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
            Resolving difficult UI/UX challenges and creating new and exciting
            experiences makes me tick. Likewise, being the one to zap that bug
            and ward off the hackers is a thrill worth fighting for.
          </p>
        </article>
      </SubheroHome>
      <Page className="block">
        <div className="compensateT">
          <Split>
            <Half
              alt="Illustration of the front end of a dragon."
              button="View Work"
              className="half1_b"
              heading="Developer"
              id="websites"
              position="top right"
              src={dragonSplit1}
              speed={9}
              to="/developer"
            >
              <p>
                See my list of skills, my work expe&shy;ri&shy;ence and projects
                I have going on right now.
              </p>
            </Half>
            <Half
              alt="Illustration of the back end of a dragon."
              button="View Art"
              className="half2_b"
              heading="Illustrator"
              id="illustration"
              position="top left"
              src={dragonSplit2}
              speed={-9}
              to="/artist"
            >
              <p>
                See graph&shy;ic illus&shy;tra&shy;tions,
                creature/&#8203;character creations and other artwork I've done.
              </p>
            </Half>
          </Split>
        </div>
        <section className="alignable topXS">
          <div className="columns-3">
            <div className="column" id="custom-plugins">
              <h3>WordPress Plugins</h3>
              <p>
                I create custom plugins. In fact, I have published 10 in the
                WordPress repository under the name AddFunc. They all have
                ratings, too. Check them out:
              </p>
              <Button href="https://profiles.wordpress.org/addfunc/#content-plugins">
                AddFunc Plugins
              </Button>
            </div>
            <div className="column">
              <h3>Developer Résumé</h3>
              <p>
                You may already have it, but for convenience and to ensure a
                clear correlation, you can find my résumé here:
              </p>
              <Link className="button" to="/resume">
                View Résumé
              </Link>
            </div>
            <div className="column">
              <h3>Journey of an&nbsp;Artist</h3>
              <p>
                Want to know more about me personally? Well, I wrote a bit about
                my life here:
              </p>
              <Link className="button" to="/story">
                My Story
              </Link>
            </div>
          </div>
        </section>
        <section className="alignable skew_b cta_b" id="contact">
          <article className="self-center">
            <h2>Contact Me</h2>
            <p>
              Whether you need help building something or you just want to
              connect... well I want to connect, so drop me an email!
            </p>
          </article>
          {/* <Query /> */}
          <Form className="compensateBHalf" />
        </section>
        <section className="alignable">
          <Profiles className="article reveal self-center compensateBHalf" />
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
