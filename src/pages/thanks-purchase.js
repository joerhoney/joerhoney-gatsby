import React from "react";
// Layouts
import Page from "@layouts/Page";
// Fragments
import Profiles from "@fragments/Profiles";

const ThanksContact = () => {
  return (
    <>
      <section className="hero page">
        <h1>Thank You!</h1>
      </section>
      <Page>
        <section className="alignable">
          <article className="self-center">
            <h2>...for your purchase!</h2>
            <p>
              I'm excited to get started on your project. I will reach out to
              you for details as soon as possible.
            </p>
          </article>
        </section>
        <section className="alignable">
          <Profiles className="article reveal-child-b self-center compensateBHalf" />
        </section>
      </Page>
    </>
  );
};

export default ThanksContact;

export const Head = () => (
  <>
    <title>Thank you! | :joe rhoney</title>
  </>
);
