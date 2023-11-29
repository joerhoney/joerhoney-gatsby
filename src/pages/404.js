import * as React from "react";
import Page from "../layouts/Page";
import Form from "../components/Form";
import Profiles from "../fragments/Profiles";

const NotFoundPage = () => {
  return (
    <Page>
      <div className="hero">
        <h1>Page Not Found</h1>
      </div>
      <section className="alignable">
        <article className="self-center bottomM">
          <h2>¯\_(ツ)_/¯</h2>
          <p>
            Sorry, that page doesn't live here. Please try the navigation menu
            at the top-left.
          </p>
        </article>
      </section>
      <section className="alignable skew_b cta_b" id="contact">
        <article className="self-center">
          <h2>...Or Contact Me</h2>
          <p>
            If you just wanted to contact me, use the form below to send me an
            email. I'd be happy to connect!
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
  </>
);
