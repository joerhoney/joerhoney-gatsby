import React from "react";
// Components
import Form from "@components/FormNetlify";
// Layouts
import Page from "@layouts/Page";
// Fragments
import Profiles from "@fragments/Profiles";
// Images
import storeFront from "@images/heros/store-front-transparent.webp";
import { Link } from "gatsby";

const webMaintenancePage = () => {
  return (
    <>
      <Page
        // id="top"
        navItems={{
          Solutions: "/solutions",
          Websites: "/solutions/website",
          // Presence: "/solutions/web-presence",
          // Design: "/solutions/web-design",
          Contact: "#contact",
        }}
      >
        <section className="alignable compensateB u-jump-section" id="plans">
          <h1>Web Maintenance</h1>
          <article>
            <table className="compare bottomS ">
              <tr>
                <th scope="col">
                  <h2 className="unposition">Plans</h2>
                  {/* <p>Choose the best website packages that fits you.</p> */}

                  <h4>Features</h4>
                </th>
                <th
                  className="compact"
                  scope="col"
                  aria-label="The Set and Forget Plan"
                >
                  <div>
                    <span className="subtle">The </span>
                    <h4>Set & Forget</h4>
                    <span className="subtle">Plan</span>
                  </div>
                </th>
                <th
                  className="compact"
                  scope="col"
                  aria-label="The Auto-Pilot Plan"
                >
                  <div>
                    <span className="subtle">The </span>
                    <h4>4U</h4>
                    <span className="subtle">Plan</span>
                  </div>
                </th>
                <th
                  className="compact"
                  scope="col"
                  aria-label="The Auto-Pilot Plus Plan"
                >
                  <div>
                    <span className="subtle">The </span>
                    <h4>Auto-Pilot</h4>
                    <span className="subtle">Plan</span>
                  </div>
                </th>
              </tr>
              <tr className="checkmarks">
                <th scope="row">Domain, hosting and email</th>
                <td aria-label="Included">✔</td>
                <td aria-label="Included">✔</td>
                <td aria-label="Included">✔</td>
              </tr>
              <tr className="checkmarks">
                <th scope="row">Text changes*</th>
                <td aria-label="Not included"></td>
                <td aria-label="Included">✔</td>
                <td aria-label="Included">✔</td>
              </tr>
              <tr className="checkmarks">
                <th scope="row">Image swaps*</th>
                <td aria-label="Not included"></td>
                <td aria-label="Included">✔</td>
                <td aria-label="Included">✔</td>
              </tr>
              <tr className="checkmarks">
                <th scope="row">1 new entry (page, product, etc.)*</th>
                <td aria-label="Not included"></td>
                <td aria-label="Not included"></td>
                <td aria-label="Included">✔</td>
              </tr>
              <tr className="stretch">
                <th scope="row">Price</th>
                <td>
                  <h4 className="price">$50/mo</h4>
                </td>
                <td>
                  <h4 className="price">$300/mo</h4>
                </td>
                <td>
                  <h4 className="price">$600/mo</h4>
                </td>
              </tr>
              <tr aria-hidden="true" className="association">
                <td aria-label="Intended for visual correlation only.">
                  <div className="compare-cta">
                    <div>
                      <h4>Set & Forget</h4>
                    </div>
                    <div className="indicator-gradient"></div>
                  </div>
                </td>
                <td
                  aria-label="Intended for visual correlation only."
                  className="indicator-corner"
                ></td>
                <td
                  aria-label="Intended for visual correlation only."
                  className="indicator-line"
                ></td>
                <td
                  aria-label="Intended for visual correlation only."
                  className="indicator-line"
                ></td>
              </tr>
              <tr aria-hidden="true" className="association">
                <td
                  aria-label="Intended for visual correlation only."
                  colSpan={2}
                >
                  <div className="compare-cta">
                    <div>
                      <h4>4U</h4>
                    </div>
                    <div className="indicator-gradient"></div>
                  </div>
                </td>
                <td
                  aria-label="Intended for visual correlation only."
                  className="indicator-corner"
                ></td>
                <td
                  aria-label="Intended for visual correlation only."
                  className="indicator-line"
                ></td>
              </tr>
              <tr aria-hidden="true" className="association">
                <td
                  aria-label="Intended for visual correlation only."
                  colSpan={3}
                >
                  <div className="compare-cta">
                    <div>
                      <h4>Auto-Pilot</h4>
                    </div>
                    <div className="indicator-gradient"></div>
                  </div>
                </td>
                <td
                  aria-label="Intended for visual correlation only."
                  className="indicator-corner"
                ></td>
              </tr>
            </table>
            <div className="topXS z10" style={{ display: "inline-block" }}>
              <div className="pull tint2" style={{ display: "inline-block" }}>
                <p className="topXS">To get started:</p>
                <p>
                  <a href="#contact" className="button">
                    Contact Me
                  </a>
                </p>
              </div>
            </div>
          </article>
          <article>
            <h3 className="bottomXS">Details</h3>
          </article>
        </section>
        <section className="alignable skew_b cta_b u-jump-section" id="contact">
          <article className="self-center">
            <h2>Contact Me</h2>
            <p>
              Whether you need help building something or you just want to
              connect... well I want to connect, so drop me an email!
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

export default webMaintenancePage;

export const Head = () => (
  <>
    <title>Web Maintenance | :joe rhoney</title>
    <meta name="description" content="." />
    <meta property="og:keywords" content="Web Maintenance" />
    <meta property="og:type" content="website" />
  </>
);
