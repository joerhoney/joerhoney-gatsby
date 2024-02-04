import React from "react";
import Form from "@components/Form";
import Page from "@layouts/Page";
import Profiles from "@fragments/Profiles";
/* Fragments */
import QWebsite from "@fragments/QWebsite";
/* Images */
import storeFront from "@images/heros/store-front-transparent.webp";

const servicesPage = () => {
  return (
    <>
      <section className="hero">
        <img
          alt="Mouse clicks swarming into your store."
          loading="lazy"
          src={storeFront}
        />
        <h1>Services</h1>
      </section>
      <Page>
        <section className="alignable bottomM skew_b tint3_b" id="skills">
          <article className="self-center">
            <h2>Grow Online</h2>
            <p className="">
              Today, it is rare that a business can succeed without some kind of
              online presence, whether it's a good Yelp!<sup>®</sup> page, a
              business profile on Google<sup>®</sup> Maps, or a website,
              complete with an address, a presentation of products/services,
              etc. But these things are not hard to obtain. In fact, you've
              found the right place to get answers and real help. :j
            </p>
          </article>
        </section>
        <section className="alignable">
          <article className="self-center">
            <QWebsite />
          </article>
        </section>
        <section className="alignable bottomM topS">
          <article className="self-center">
            <p className="">
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

export default servicesPage;
