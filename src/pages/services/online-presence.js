import React from "react";
// Components
import Form from "@components/Form";
// Layouts
import Page from "@layouts/Page";
// Fragments
import Profiles from "@fragments/Profiles";
// Images
import storeFront from "@images/heros/store-front-transparent.webp";

const presencePage = () => {
  return (
    <>
      <section className="hero">
        <img
          alt="Mouse clicks swarming into your store."
          loading="lazy"
          src={storeFront}
        />
        <h1>Presence</h1>
      </section>
      <Page>
        <section className="alignable bottomM skew_b tint3_b" id="skills">
          <article className="self-center">
            <h2>Get Found</h2>
            <p>
              I love helping small to mid-sized businesses grow! Independent,
              privately-owned shops are the backbone of our economy (and our
              country! 🇺🇸). If your business isn't flourishing and prospering
              enough for your liking, keep reading to see how a good online
              presence can help you with that.
            </p>
          </article>
        </section>
        <section className="alignable skew_b cta_b" id="contact">
          <article className="self-center">
            <h2>Contact Me</h2>
            <p class="text">
              Please let me know the reason you are contacting me. I will
              respond to your message as soon as possible.
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

export default presencePage;
