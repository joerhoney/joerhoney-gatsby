import React from "react";
// Components
import Form from "@components/Form";
// import { Split, Half } from "@components/Split";
// Layouts
import Page from "@layouts/Page";
// Fragments
import Profiles from "@fragments/Profiles";
// import QWebsite from "@fragments/QWebsite";
// Images
import storeFront from "@images/heros/store-front-transparent.webp";
// import dragonSplit1 from "@images/dragon-split1.webp";
// import dragonSplit2 from "@images/dragon-split2.webp";

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
        <section className="alignable bottomM" id="skills">
          <article className="self-center">
            <h2>Grow Online</h2>
            <p>
              Today, it is rare that a business can succeed without some kind of
              online presence, whether it's a good Yelp!<sup>®</sup> page, a
              business profile on Google<sup>®</sup> Maps, or a website,
              complete with an address, a presentation of products/services,
              etc. But these things are not hard to obtain. In fact, you've
              found the right place to get answers and real help. :j
            </p>
          </article>
        </section>
        {/* <section className="alignable">
          <article className="self-center z10">
            <QWebsite />
          </article>
        </section> */}
        {/* <Split>
          <Half
            alt="Illustration of the front end of a dragon."
            button="Website Services"
            className="half1_b"
            heading="Web"
            id="websites"
            position="top right"
            src={dragonSplit1}
            speed={9}
            to="/services/website"
          >
            <p>
              Choose from my versatile website packages and see the additional
              web services I can provide.
            </p>
          </Half>
          <Half
            alt="Illustration of the back end of a dragon."
            button="Art Services"
            className="half2_b"
            heading="Art"
            id="art"
            position="top left"
            src={dragonSplit2}
            speed={-9}
            to="/services/art"
          >
            <p>See my illustration, graphic, and branding services.</p>
          </Half>
        </Split> */}
        <section className="alignable skew_b cta_b" id="contact">
          <article className="self-center">
            <h2>Contact Me</h2>
            <p className="text">
              Please let me know your general online needs. I will respond to
              your message as soon as possible.
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

export const Head = () => (
  <>
    <title>Services | :joe rhoney</title>
    <meta
      name="description"
      content="Get an overview of my website and art services."
    />
    <meta
      property="og:keywords"
      content="Services, Website Services, Art Services"
    />
    <meta property="og:type" content="website" />
  </>
);
