import React from "react";
import Page from "@layouts/Page";
import Form from "@components/Form";
import storeFront from "@images/heros/store-front-transparent.webp";
// import { loadStripe } from "@stripe/stripe-js";

// let stripePromise;
// const getStripe = () => {
//   if (!stripePromise) {
//     stripePromise = loadStripe("<YOUR STRIPE PUBLISHABLE KEY>");
//   }
//   return stripePromise;
// };

const websitePage = () => {
  return (
    <>
      <section className="hero">
        <img
          alt="Mouse clicks swarming into your store."
          loading="lazy"
          src={storeFront}
        />
        <h1>Websites</h1>
      </section>
      <Page>
        <section className="alignable compensateB" id="packages">
          <div className="article">
            <h2>Packages</h2>
          </div>
          <table className="compare bottomS ">
            <tr>
              <th scope="col">
                <h4>Features</h4>
              </th>
              <th
                class="compact"
                scope="col"
                aria-label="The Dirt Cheap Package"
              >
                <div>
                  <span className="subtle">The </span>
                  <h4>Dirt Cheap </h4>
                  <span className="subtle">Package</span>
                </div>
              </th>
              <th class="compact" scope="col" aria-label="The U Drive Package">
                <div>
                  <span className="subtle">The </span>
                  <h4>U Drive </h4>
                  <span className="subtle">Package</span>
                </div>
              </th>
              <th class="compact" scope="col" aria-label="The Sell It! Package">
                <div>
                  <span className="subtle">The </span>
                  <h4>Sell it! </h4>
                  <span className="subtle">Package</span>
                </div>
              </th>
            </tr>
            <tr className="checkmarks">
              <th scope="row">No annual hosting cost!</th>
              <td aria-label="Included">✔</td>
              <td aria-label="Not included"></td>
              <td aria-label="Not included"></td>
            </tr>
            <tr className="checkmarks">
              <th scope="row">Basic SEO</th>
              <td aria-label="Included">✔</td>
              <td aria-label="Included">✔</td>
              <td aria-label="Included">✔</td>
            </tr>
            <tr className="checkmarks">
              <th scope="row">
                <a href="#ssl">SSL Certificate</a>
              </th>
              <td aria-label="Included">✔</td>
              <td aria-label="Included">✔</td>
              <td aria-label="Included">✔</td>
            </tr>
            <tr className="checkmarks">
              <th scope="row">Contact form</th>
              <td aria-label="Not included"></td>
              <td aria-label="Included">✔</td>
              <td aria-label="Included">✔</td>
            </tr>
            <tr className="checkmarks">
              <th scope="row">Add your own info pages</th>
              <td aria-label="Not included"></td>
              <td aria-label="Included">✔</td>
              <td aria-label="Included">✔</td>
            </tr>
            <tr className="checkmarks">
              <th scope="row">Manage your own blog</th>
              <td aria-label="Not included"></td>
              <td aria-label="Included">✔</td>
              <td aria-label="Not included"></td>
            </tr>
            <tr className="checkmarks">
              <th scope="row">Manage your own products</th>
              <td aria-label="Not included"></td>
              <td aria-label="Not included"></td>
              <td aria-label="Included">✔</td>
            </tr>
            <tr className="checkmarks">
              <th scope="row">
                <a href="#pages-added">Up to 10 info pages</a>
              </th>
              <td aria-label="Included">✔</td>
              <td aria-label="Included">✔</td>
              <td aria-label="Included">✔</td>
            </tr>
            <tr className="checkmarks">
              <th scope="row">
                <a href="#pages-added">Up to 5 products</a>
              </th>
              <td aria-label="Not included"></td>
              <td aria-label="Not included"></td>
              <td aria-label="Included">✔</td>
            </tr>
            <tr className="checkmarks">
              <th scope="row">Free add-ons available</th>
              <td aria-label="Not included"></td>
              <td aria-label="Included">✔</td>
              <td aria-label="Included">✔</td>
            </tr>
            <tr className="checkmarks">
              <th scope="row">Instructions for pages</th>
              <td aria-label="Not included"></td>
              <td aria-label="Included">✔</td>
              <td aria-label="Included">✔</td>
            </tr>
            <tr className="checkmarks">
              <th scope="row">Instructions for products</th>
              <td aria-label="Not included"></td>
              <td aria-label="Not included"></td>
              <td aria-label="Included">✔</td>
            </tr>
            <tr className="checkmarks">
              <th scope="row">Payment gateway setup</th>
              <td aria-label="Not included"></td>
              <td aria-label="Not included"></td>
              <td aria-label="Included">✔</td>
            </tr>
            <tr className="stretch">
              <th scope="row">Price</th>
              <td>
                <h4 className="price">
                  <sup>$</sup>600
                </h4>
              </td>
              <td>
                <h4 className="price">
                  <sup>$</sup>1,800
                </h4>
              </td>
              <td>
                <h4 className="price">
                  <sup>$</sup>3,600
                </h4>
              </td>
            </tr>
            <tr>
              <th scope="row">Plus hosting cost?</th>
              <td>
                <div className="price-plus small-text">Nope. FREE!</div>
              </td>
              <td>
                <div className="price-plus small-text">Yes.&nbsp;</div>
              </td>
              <td>
                <div className="price-plus small-text">Yes.&nbsp;</div>
              </td>
            </tr>
          </table>
          <div className="article">
            <h4 id="ssl">SSL Certificates</h4>
            <p>
              SSL Based on hosting service. Note: Cost is baked into the the
              estimated hosting cost where applicable.
            </p>
            <h4 id="pages-added">Pages/Products Added for You</h4>
            <p>Plus $60 for each additional page/product added for you.</p>
          </div>
        </section>
        <section className="alignable skew_b cta_b" id="contact">
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

export default websitePage;
