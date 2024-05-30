import React from "react";
// Components
import Form from "@components/Form";
// import { Split, Half } from "@components/Split";
// Layouts
import Page from "@layouts/Page";
// Fragments
import Profiles from "@fragments/Profiles";
import QWebsite from "@fragments/QWebsite";
// CSS
import "@css/solutions.scss";
// Images
import allears from "@images/portrait.webp";
import storeFront from "@images/heros/store-front-transparent.webp";
// import dragonSplit1 from "@images/dragon-split1.webp";
// import dragonSplit2 from "@images/dragon-split2.webp";

const solutionsPage = () => {
  return (
    <>
      <section className="hero page">
        <div className="hero__bg">
          <img
            alt="Mouse clicks swarming into your store."
            loading="lazy"
            src={storeFront}
          />
        </div>
        <h1>Services</h1>
      </section>
      <Page>
        <section className="alignable">
          <article className="self-center">
            <p>
              Most likely, you've come here because you need web or creative
              solutions. While I can list all of the solutions I can offer, I
              think it would prove more efficient to listen to your needs. Let's
              start with one of these options:
            </p>
          </article>
          <img
            alt="Illustration"
            className="all-ears self-right transluscent"
            height="290"
            loading="lazy"
            src={allears}
            width="240"
          />
        </section>
        <section
          className="skew_b compensateTHalf topS cta_b"
          style={{ position: "relative" }}
        >
          <div className="columns-few bottomS coluns-few__tilt">
            <div className="column">
              <h3>Questionnaire</h3>
              <p>
                Zero in on the solutions that would best address your problems
                by answering a few questions.
              </p>
            </div>
            <div className="column">
              <h3>Contact Me</h3>
              <p>
                Don't hesitate to reach out. I'm a listener and I'm eager to
                hear all of your online and creative needs, so I can provide the
                most suitable solutions to your problems.
              </p>
            </div>
            <div className="column">
              <h3>Still Not Sure?</h3>
              <p>
                Fair enough. You can learn more about me and my services here.
              </p>
            </div>
          </div>
        </section>
        <section>
          <article className="self-center topS bottomS">
            <h2 className="tilt">Questionnaire</h2>
            <QWebsite />
          </article>
        </section>

        {/* <section className="alignable bottomM">
          <article className="self-center">
            <h2>Grow Online</h2>
            <p>
              Today, it is rare that a business can succeed without some kind of
              online presence, whether it's a good Yelp!<sup>®</sup> page, a
              business profile on Google<sup>®</sup> Maps, or a website,
              complete with an address, a presentation of products/solutions,
              etc. But these things are not hard to obtain. In fact, you've
              found the right place to get answers and real help. :j
            </p>
            <p>
              If you need a website, need a better one, or just need a web
              solution, here are my basic website packages to get your started.
            </p>
            <h4>Set it &amp; forget it! 👏</h4>
            <p>
              Many web developers want to charge a steady monthly rate,
              regardless of how much work they do for you. I only charge for
              what I deliver. Once your website is built you can let it sit
              there as long as you want at no cost from me. I'm here if you ever
              need me.
            </p>
          </article>
        </section> */}
        {/* <section className="alignable">
          <article className="self-center z10">
            <QWebsite />
          </article>
        </section> */}
        {/* <Split>
          <Half
            alt="Illustration of the front end of a dragon."
            button="Website Services"
            className="half1 u-jump-link"
            heading="Web"
            id="websites"
            position="top right"
            src={dragonSplit1}
            speed={9}
            to="/solutions/website"
          >
            <p>
              Choose from my versatile website packages and see the additional
              web services I can provide.
            </p>
          </Half>
          <Half
            alt="Illustration of the back end of a dragon."
            button="Art Services"
            className="half2 u-jump-link"
            heading="Art"
            id="art"
            position="top left"
            src={dragonSplit2}
            speed={-9}
            to="/solutions/art"
          >
            <p>See my illustration, graphic, and branding services.</p>
          </Half>
        </Split> */}
        <section className="alignable skew_b cta_b u-jump-link" id="contact">
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

export default solutionsPage;

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
