import * as React from "react";
// Components
import { Link } from "gatsby";
// Layouts
import Page from "@layouts/Page";
// Sections
import ContactSection from "@sections/ContactSection";
import Hero from "@sections/Hero";
import Seo from "@components/Seo";

const NotFoundPage = () => {
  return (
    <Page hero={<Hero title="Page Not Found" />}>
      <section className="alignable">
        <article className="self-center">
          <h2>¯\_(ツ)_/¯</h2>
          <p>
            Sorry, that page doesn't live here. Please try the navigation menu
            at the top-left. Otherwise, you may have been looking for one of
            these pages:
          </p>
          <p>
            <a className="button" href="/creative">
              Creative
            </a>
            <a className="button" href="/developer">
              Developers
            </a>
            <a className="button" href="/blog/journey-of-an-artist/">
              My Story
            </a>
          </p>
        </article>
      </section>
      <ContactSection
        heading="...Or Contact Me"
        className="layer-skew layer-cta pb-sm mt-tilt"
      >
        <p>
          If you just wanted to contact me, use the form below to send me an
          email. I'd be happy to connect!
        </p>
      </ContactSection>
    </Page>
  );
};

export default NotFoundPage;

export const Head = ({ location }) => (
  <Seo
    title="Page Not Found"
    description="Learn more about Joe Rhoney on the other pages of this website."
    pathname={location.pathname}
  />
);
