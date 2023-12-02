import * as React from "react";
import Form from "../components/Formspree";
import { Link } from "gatsby";
import Page from "../layouts/Page";
import Profiles from "../fragments/Profiles";

const NotFoundPage = () => {
  return (
    <>
      <section className="hero">
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
              <Link className="button" to="/resume">
                Résumé
              </Link>
              <Link className="button" to="/story">
                My Story
              </Link>
            </p>
          </article>
        </section>
        <section className="alignable skew_b cta_b compensateT" id="contact">
          <article className="self-center">
            <h2>...Or Contact Me</h2>
            <p>
              If you just wanted to contact me, use the form below to send me an
              email. I'd be happy to connect!
            </p>
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

export default NotFoundPage;

export const Head = () => (
  <>
    <title>Page Not Found | :joe rhoney</title>
  </>
);
