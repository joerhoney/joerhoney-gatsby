import * as React from "react";
// Components
import Form from "@components/FormNetlify";
// Layouts
import Page from "@layouts/Page";
// Fragments
import Profiles from "@fragments/Profiles";
// Images
import cherryBlossom from "@images/heros/cherry-blossom-half.webp";

const Solutions = () => {
  return (
    <>
      <section className="hero page">
        <div className="hero__bg">
          <img
            alt="Watercolor of a woman in a kamono next to a cherry blossom."
            loading="lazy"
            src={cherryBlossom}
            style={{ placeItems: "flex-end" }}
          />
        </div>
        <h1>Solutions</h1>
      </section>
      <Page>
        <section className="alignable">
          <article className="self-center">
            <h3>Coming Soon</h3>
            <p>Lots of solutions... Stay tuned. 🙂</p>
          </article>
        </section>
        <section className="alignable skew_b cta_b u-jump-link" id="contact">
          <article>
            <h2>Contact Me</h2>
            <p>
              Whether you need help building something or just want to connect…
              well, I want to connect, too! So drop me an email.
            </p>
          </article>
          <Form className="compensateBHalf" />
        </section>
        <section className="alignable">
          <Profiles className="article reveal" />
        </section>
      </Page>
    </>
  );
};

export default Solutions;

export const Head = () => (
  <>
    <title>Solutions | :joe rhoney</title>
  </>
);
