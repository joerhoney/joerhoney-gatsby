import * as React from "react";
// Components
import Mailto from "@components/Mailto";
import { Link } from "gatsby";
// Layouts
import Page from "@layouts/Page";
// Fragments
import Arrow from "@fragments/Arrow";
import Profiles from "@fragments/Profiles";

const NotFoundPage = () => {
  return (
    <>
      <section className="hero page">
        <h1>Page Not Found</h1>
      </section>
      <Page>
        <section className="alignable">
          <article className="self-center">
            <h2>¯\_(ツ)_/¯</h2>
            <p>
              Sorry, that page doesn't live here. Please try the navigation menu
              at the top-left. Otherwise, you may have been looking for one of
              these pages:
            </p>
            <p>
              <a className="button" href="/resume">
                Résumé
              </a>
              <a className="button" href="/blog/journey-of-an-artist/">
                My Story
              </a>
            </p>
          </article>
        </section>
        <section
          className="alignable skew_b cta_b bottomS compensateT"
          id="contact"
        >
          <article className="self-center">
            <h2>...Or Contact Me</h2>
            <p>
              If you just wanted to contact me, use the form below to send me an
              email. I'd be happy to connect!
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

export default NotFoundPage;

export const Head = () => (
  <>
    <title>Page Not Found | :joe rhoney</title>
    <meta
      name="description"
      content="Learn more about Joe Rhoney on the other pages of this website."
    />
    <meta property="og:type" content="website" />
  </>
);
