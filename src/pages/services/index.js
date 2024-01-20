import React from "react";
import Page from "@layouts/Page";
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
            <div className="wizard">
              <ul>
                <li>
                  Do you have a website?
                  <ul>
                    <li>
                      Yes.
                      <ul>
                        <li></li>
                      </ul>
                    </li>
                    <li>
                      No.
                      <ul>
                        <li>I need one.</li>
                        <li>I need help with something else.</li>
                        <li>I need one, plus help with comthing else.</li>
                      </ul>
                    </li>
                    <li>
                      I don't know, or I lost control of it.
                      <ul>
                        <li>
                          I need help finding out.
                          <ul>
                            <li></li>
                          </ul>
                        </li>
                        <li>I need help regaining control over it.</li>
                        <li>I just want a new one.</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <p>
              I love helping small to mid-sized businesses grow! Independent,
              privately-owned shops are the backbone of our economy (and our
              country! 🇺🇸). If your business isn't flourishing and prospering
              enough for your liking, keep reading to see how a good online
              presence can help you with that.
            </p>
          </article>
        </section>
      </Page>
    </>
  );
};

export default servicesPage;
