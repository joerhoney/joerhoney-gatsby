import * as React from "react";
import Page from "../layouts/Page";
import Form from "../components/Form";
import Profiles from "../fragments/Profiles";

const NotFoundPage = () => {
  return (
    <Page>
      <div className="hero">
        <h1>Page not found</h1>
      </div>
      <p>Sorry 😔, we couldn’t find what you were looking for.</p>
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

export default NotFoundPage;

export const Head = () => (
  <>
    <title>Page Not Found | :joe rhoney</title>
    <body className="colors-default" />
  </>
);
