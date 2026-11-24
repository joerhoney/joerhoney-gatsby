import React from "react";
// Layouts
import Page from "@layouts/Page";
// Sections
import Hero from "@sections/Hero";

const ThanksContact = () => {
  return (
    <Page hero={<Hero title="Thanks!" />}>
      <section className="alignable">
        <article className="self-center">
          <h2>...for reaching out!</h2>
          <p>
            I look forward to reading your message and I will get back to you as
            soon as possble.
          </p>
        </article>
      </section>
    </Page>
  );
};

export default ThanksContact;

export const Head = () => (
  <>
    <title>Thank you! | :joe rhoney</title>
  </>
);
