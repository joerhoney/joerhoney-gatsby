import React from "react";
// Utilities
import workImage from "@utils/workImage";
// Components
import { graphql, Link } from "gatsby";
// Layouts
import Page from "@layouts/Page";
// Images
import allears from "@images/portrait-photo.webp";
import storeFront from "@images/heros/store-front-transparent.gif";
// Sections
import ContactSection from "@sections/ContactSection";
import GlyphHero from "@sections/GlyphHero";
import Seo from "@components/Seo";

// All of this page's words live in src/content/freelance.md.
export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/content/freelance.md$/" }) {
      html
      frontmatter {
        title
        description
        hero {
          h1
          hook
          h2
          promises
          button
          link
        }
        benefits {
          heading
          stars
          items {
            title
            text
          }
        }
        services {
          heading
          items {
            title
            text
          }
        }
        process {
          heading
          items {
            title
            text
          }
        }
        work {
          heading
          items {
            title
            text
            img
            link
          }
        }
        contact {
          heading
          text
          button
          subject
        }
      }
    }
  }
`;

const has = (section) => section?.items?.length > 0;

const SmartLink = ({ to, children, ...rest }) =>
  /^https?:/.test(to) ? (
    <a href={to} target="_blank" rel="noreferrer" {...rest}>
      {children}
    </a>
  ) : (
    <Link to={to} {...rest}>
      {children}
    </Link>
  );

const FreelancePage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;
  const { hero, benefits, services, process, work, contact } = frontmatter;
  return (
    <Page
      hero={
        <GlyphHero door="freelance">
          <div className="hire-hero">
            <div className="hire-hero__words">
              <h1 className="hire-hero__h1" style={{ "--row": 0 }}>
                {hero.h1}
              </h1>
              <p className="hire-hero__hook" style={{ "--row": 1 }}>
                {hero.hook}
              </p>
              <h2 className="hire-hero__h2" style={{ "--row": 2 }}>
                {hero.h2}
              </h2>
              {hero.promises?.length > 0 && (
                <ul className="hire-hero__promises" style={{ "--row": 3 }}>
                  {hero.promises.map((promise) => (
                    <li key={promise}>{promise}</li>
                  ))}
                </ul>
              )}
              <p className="hire-hero__actions" style={{ "--row": 4 }}>
                <a className="button" href="#contact">
                  {hero.button}
                </a>
                {has(work) && (
                  <a className="hire-hero__more" href="#work">
                    {hero.link}
                  </a>
                )}
              </p>
            </div>
            <div className="hire-hero__stage">
              <img
                className="hire-hero__art"
                src={storeFront}
                alt="Mouse cursors streaming into a storefront."
              />
            </div>
          </div>
        </GlyphHero>
      }
    >
      {/* Intro (Markdown body) */}
      {html && (
        <section className="alignable pt-md pb-md">
          <article
            className="text"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </section>
      )}

      {/* Benefits band */}
      {has(benefits) && (
        <section className="half2 layer-skew text-color1 freelance-benefits">
          <div className="tilted-row freelance-wide">
            <div className="freelance-flush-bottom">
              <h2 className="tilt text-left">{benefits.heading}</h2>
            </div>
            {benefits.stars && (
              <div className="freelance-flush-bottom">
                <h2 className="tilt text-color2">{benefits.stars}</h2>
              </div>
            )}
          </div>
          <div className="tilted-row freelance-wide">
            {benefits.items.map((item) => (
              <div className="column freelance-flush-top" key={item.title}>
                <h3 className="text-color1 tilt">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Services */}
      {has(services) && (
        <section className="alignable pt-md jump-target" id="services">
          <div className="article">
            <h2 className="tilt">{services.heading}</h2>
          </div>
          <div className="columns-few columns-few--tilt pb-md">
            {services.items.map((item) => (
              <div className="column" key={item.title}>
                <h3 className="tilt">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Process */}
      {has(process) && (
        <section
          className="alignable layer-skew layer-tint1 pt-sm pb-md jump-target"
          id="process"
        >
          <article>
            <h2 className="tilt">{process.heading}</h2>
            <ol className="freelance-steps">
              {process.items.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ol>
          </article>
        </section>
      )}

      {/* Recent work */}
      {has(work) && (
        <section className="alignable pt-sm pb-md jump-target" id="work">
          <div className="article">
            <h2 className="tilt">{work.heading}</h2>
          </div>
          <ul className="freelance-work">
            {work.items.map((item) => (
              <li key={item.title}>
                <SmartLink to={item.link} className="freelance-work__link">
                  {item.img && (
                    <img
                      alt={`Screenshot of ${item.title}.`}
                      loading="lazy"
                      src={workImage(item.img)}
                    />
                  )}
                  <h3>{item.title}</h3>
                </SmartLink>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Contact */}
      <ContactSection
        heading={contact.heading}
        className="layer-skew layer-cta pb-xl"
        subject={contact.subject}
        button={contact.button}
        aside={
          <div className="wrapper-joe">
            <img
              alt="Portrait of Joe Rhoney."
              className="self-right translucent"
              height="290"
              loading="lazy"
              src={allears}
              width="240"
            />
          </div>
        }
      >
        <p className="text">
          {contact.text}&nbsp;
          <b className="font-heading">:j</b>
        </p>
      </ContactSection>
      <section className="alignable mt-tilt layer-tint3"></section>
    </Page>
  );
};

export default FreelancePage;

export const Head = ({ data, location }) => (
  <Seo
    title={data.markdownRemark.frontmatter.title}
    description={data.markdownRemark.frontmatter.description}
    keywords="Freelance, Web Design, Web Development, WordPress, Joe Rhoney"
    pathname={location.pathname}
  />
);
