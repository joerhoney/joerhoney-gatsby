import * as React from "react";
import Page from "../layouts/Page";
import HeroHome from "../fragments/HeroHome";
import SubheroHome from "../fragments/SubheroHome";
import portrait from "../images/portrait.webp";
import since from "../utils/since";
import { Link } from "gatsby";
import Form from "../components/Form";
import Profiles from "../fragments/Profiles";
import { Split, Half } from "../components/Split";
import dragonBack from "../images/dragon-back.webp";
import dragonFront from "../images/dragon-front.webp";

const homePage = () => {
  return (
    <Page className="block">
      <HeroHome />
      <SubheroHome>
        <article>
          <img
            alt="Portrait of Joe Rhoney."
            className="self-right transluscent"
            loading="lazy"
            src={portrait}
            style={{ maxWidth: "208px", marginBottom: "-100px" }}
          />
          <h2 className="tilt">Hello, World!</h2>
          <p>
            Pardon my code humor, I've been in this industry for
            {since("Sept, 13, 1999")} years. Because that's how old I am...
            Okay, maybe I'm a little older than that. &#128513;
            <br />
            <br />I design, build and maintain websites and web apps, using
            efficient and cost-effective modern development technologies.
            Resolving difficult UI/UX challenges and creating new and exciting
            experiences makes me tick. Likewise, being the one to zap that bug
            and ward off the hackers is a thrill worth fighting for.
          </p>
        </article>
      </SubheroHome>
      <div className="topL">
        <Split>
          <Half
            alt="Illustration of the front end of a dragon."
            button="View my Work"
            className="half1_b"
            heading="Developer"
            position="top right"
            src={dragonFront}
            speed={9}
            to="/code"
          >
            <p>
              See my arsenal of skills, my work experience and other projects I
              have going on right now.
            </p>
          </Half>
          <Half
            alt="Illustration of the back end of a dragon."
            button="View Portfolio"
            className="half2_b"
            heading="Illustrator"
            position="top left"
            src={dragonBack}
            speed={-9}
            to="/art"
          >
            <p>
              Peruse graphic illus&shy;tra&shy;tions, marketing layouts,
              creature/&#8203;character creations and other artwork I've done in
              my portfolio.
            </p>
          </Half>
        </Split>
      </div>
      <section className="alignable">
        <article>
          <h3>Developer Résumé</h3>
          <p>
            <Link to="/resume" className="button">
              View Résumé
            </Link>
          </p>
          <h3>Work &amp; Projects</h3>
          <p>
            <Link to="/resume" className="button">
              View my Work
            </Link>
          </p>
          <h3>Art Portfolio</h3>
          <p>
            <Link to="/art" className="button">
              View Artwork
            </Link>
          </p>
        </article>
      </section>
      <section className="alignable skewC cta_b" id="contact">
        <article className="self-center">
          <h2>Contact Me</h2>
          <p>
            Whether you need help building something or you just want to
            connect... well I want to connect, so drop me an email!
          </p>
        </article>
        <Form />
      </section>
      <section className="alignable">
        <Profiles className="article reveal self-center" />
      </section>
    </Page>
  );
};

export default homePage;

export const Head = () => (
  <>
    <title>Developer/Artist | :joe rhoney</title>
    <body className="colors-default" />
  </>
);
