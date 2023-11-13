import * as React from "react";
import Page from "../layouts/Page";
import team from "../images/team.webp";
import { Parallax } from "react-scroll-parallax";
import Form from "../components/Form";
import Profiles from "../fragments/Profiles";
import { Link } from "gatsby";

const artistPage = () => {
  return (
    <Page>
      <div className="hero">
        <img
          alt="Illustration of a team of charicters"
          placeholder="blurred"
          src={team}
        />
        <h1>Artist</h1>
      </div>
      <section className="alignable bottomL" id="skills">
        <article className="self-center">
          <Parallax speed={-5}>
            <h2>I ❤️ to Draw!</h2>
            <p>
              This collection of art will include work I've done professionally
              and on my own time... Patients, my friend. I'm afraid coding is a
              higher priority right now. 🤪
            </p>
          </Parallax>
        </article>
      </section>
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
                I am also open for service as a freelance web developer. Send me
                your project ideas and I'll help you hash out the web solutions
                you need. 💡
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
  );
};

export default artistPage;

export const Head = () => (
  <>
    <title>Artist | :joe rhoney</title>
  </>
);
