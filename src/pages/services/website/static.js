import React from "react";
// Components
import Form from "@components/FormNetlify";
// Layouts
import Page from "@layouts/Page";
// Images
import storeFront from "@images/heros/store-front-transparent.webp";
// import { loadStripe } from "@stripe/stripe-js";

// let stripePromise;
// const getStripe = () => {
//   if (!stripePromise) {
//     stripePromise = loadStripe("<YOUR STRIPE PUBLISHABLE KEY>");
//   }
//   return stripePromise;
// };

const staticWebsitesPage = () => {
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
        <h1>Websites</h1>
      </section>
      <Page>
        <section className="alignable skew_b cta_b u-jump-link" id="contact">
          <article className="self-center bottomM">
            <h2>Seariously Dirt Cheap! 💵</h2>
            <p>
              Hosting costs money every year and the price keeps going up... but
              not with the dirt cheap package. Yep. And it doesn't require
              sacrificing your domain name. If you just need a spot on the web,
              don't pay for a full hosting package. Go dirt cheap!
            </p>
          </article>
        </section>
        <section className="alignable compensateB u-jump-link" id="contact">
          <div className="article">
            <h4 className="u-jump-link" id="ssl">
              SSL Certificates
            </h4>
            <p>
              SSL Based on hosting service. Note: Cost is baked into the the
              estimated hosting cost where applicable.
            </p>
            <h4 className="u-jump-link" id="pages-added">
              Pages/Products Added for You
            </h4>
            <p>Plus $60 for each additional page/product added for you.</p>
          </div>
        </section>
        <section className="alignable skew_b cta_b u-jump-link" id="contact">
          <article className="self-center">
            <h2>Contact Me</h2>
            <p>
              Whether you need help building something or you just want to
              connect... well I want to connect, so drop me an email!
            </p>
          </article>
          <Form className="compensateBHalf" />
        </section>
      </Page>
    </>
  );
};

export default staticWebsitesPage;
