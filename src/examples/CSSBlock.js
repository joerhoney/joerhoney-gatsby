import * as React from "react";
import Page from "../layouts/Page";
import Form from "../components/Form";
import Profiles from "../fragments/Profiles";

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

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
        <div className="article in-the-corner self-center">
          <h3>Find me on:</h3>
          <Profiles />
        </div>
      </section>
    </Page>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
