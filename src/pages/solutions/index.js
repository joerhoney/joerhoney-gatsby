import React from "react";
// Components
import Form from "@components/FormNetlify";
import { Link } from "gatsby";
// import { Split, Half } from "@components/Split";
// Layouts
import Page from "@layouts/Page";
// Fragments
import Profiles from "@fragments/Profiles";
import QHelp from "@fragments/QHelp";
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
        <h1>Solutions</h1>
      </section>
      <Page
        navItems={{
          Websites: "/solutions/website",
          Maintenance: "/solutions/web-maintenance",
          // Presence: "/solutions/web-presence",
          // Design: "/solutions/web-design",
          Contact: "#contact",
        }}
      >
        <section className="alignable">
          <article className="self-center">
            <p>
              Most likely, you've come here because you need web or creative
              solutions. While I can list all of the solutions I offer, I think
              it would be more efficient to listen to your needs. Let's start
              with one of these options:
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
          <div className="columns-few bottomS columns-few__tilt">
            <div className="column">
              <h3>Questionnaire</h3>
              <p>
                Zero in on the solution to address your most immediate needs by
                answering a few questions.
              </p>
              <a href="#questionnaire" className="jump-button">
                Jump to Questionnaire
              </a>
            </div>
            <div className="column">
              <h3>Contact Me</h3>
              <p>
                I'm eager to listen to your situation so we can work out the
                best solutions for you.
              </p>
              <a href="#contact" className="jump-button">
                Jump to Contact Info
              </a>
            </div>
            <div className="column">
              <h3>Just Curious?</h3>
              <p>No problem! You can learn more about my services here.</p>
              <a href="#services" className="jump-button">
                Jump to Services
              </a>
            </div>
          </div>
        </section>
        <section>
          <article className="self-center topL bottomL">
            <h2 className="tilt" id="questionnaire">
              Questionnaire
            </h2>
            <QHelp />
          </article>
        </section>
        <section className="alignable skew_b topS tint3_b" id="services">
          <div className="article">
            <h2 className="tilt">Services</h2>
          </div>
          <div className="columns-few columns-few__tilt bottomM">
            <div className="column">
              <h3 className="tilt">Website Creation</h3>
              <p>
                Having a new website built doesn't have to be difficult or
                costly. Whether you need to enable your customer to place orders
                online or you just need a simple place on the web to stake your
                presence, one of these diverse web packages should be just what
                you need.
              </p>
              <p>
                <a href="/solutions/website/" className="button">
                  Website Packages
                </a>
              </p>
            </div>
            <div className="column">
              <h3 className="tilt">Web Maintenance</h3>
              <p>
                As anyone with a website knows, websites need to be updated
                occasionally. Domain names, hosting and SSL certificates need to
                be renewed annually. Your company details can change and you
                need your website to reflect the update. Maybe you want to add a
                new feature, product. But every company has different website
                needs. That's why I put together several packages to cover any
                level of web maintenance.
              </p>
              <p>
                <a href="/solutions/web-maintenance/" className="button">
                  Web Maintenance Packages
                </a>
              </p>
            </div>
            <div className="column">
              <h3 className="tilt">Web Design</h3>
              <p>
                Attraction is the responsibility of design. While any web
                presence is better than nothing, design is one of the main
                factors that governs a first impression, which can make or break
                your contact with a potential customer. A fresh modern look will
                garner new visitors in greater abundance than one that makes
                your business look old and rundown. My&nbsp;
                <a href="/solutions/website/">Website Packages</a> include web
                design, but if you already have a website and it needs a
                facelift, send me your website address for a free consultation
                for a new look.
              </p>
              <p>
                <a href="#contact" className="button">
                  Get a Consultation
                </a>
              </p>
            </div>
            {/* <div className="column">
              <h3 className="tilt">Web Presence</h3>
              <p>
                Except in rare cases, having a website is crucial to establishing
                a presence on the web for any organization. People commonly rely
                on search engines to find you, and if you're not there… 🤷🏻‍♂️
                My&nbsp;
                <Link to="/solutions/website">Website Packages</Link> include
                basic search engine optimization (SEO) to ensure you're not left
                in the dust while your neighbor gets all the clicks. But it is
                also important to recognize that a website isn't the only way your
                potential customers will look for what they need. Many use Yelp!,
                Google Maps (and other map apps), Facebook and other such
                directories. These packages are designed to establish such venues
                as needed and keep them up-to-date, to ensure your prospects get a
                chance to see how you shine.
              </p>
              <p>
                <Link to="/solutions/web-presence" className="button">
                  Web Presence Packages
                </Link>
              </p>
            </div> */}
          </div>
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
        <section className="alignable skew_b cta_b u-jump-section" id="contact">
          <article className="self-center">
            <h2>Contact Me</h2>
            <p className="text">
              Please let me know your general web needs. I will respond to your
              message within 24 hours. No spamming, I promise.{" "}
              <b className="u-heading-font">:j</b>
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
    <title>Solutions | :joe rhoney</title>
    <meta
      name="description"
      content="Get web solutions for your business, including website creation, web maintenance, web design, what presence, web growth."
    />
    <meta
      property="og:keywords"
      content="Services, Website Services, Art Services"
    />
    <meta property="og:type" content="website" />
  </>
);
