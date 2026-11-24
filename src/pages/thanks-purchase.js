import React from "react";
// Layouts
import Page from "@layouts/Page";
// Sections
import Hero from "@sections/Hero";

const ThanksContact = () => {
  return (
    <Page hero={<Hero title="Thank You!" />}>
      <section className="alignable">
        <article className="self-center">
          <h2>...for your purchase!</h2>
          <p>
            I'm excited to get started on your project. I will reach out to you
            for details as soon as possible.
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
