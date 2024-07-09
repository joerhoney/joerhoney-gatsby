import React from "react";
// Layouts
import Page from "@layouts/Page";
// Fragments
import Arrow from "@fragments/Arrow";
import Profiles from "@fragments/Profiles";

const ThanksContact = () => {
  return (
    <>
      <section className="hero page">
        <h1>Thanks!</h1>
      </section>
      <Page>
        <section className="alignable">
          <article className="self-center">
            <h2>...for reaching out!</h2>
            <p>
              I look forward to reading your message and I will get back to you
              as soon as possble.
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
