import React from "react";
// Utilities
import workImage from "@utils/workImage";
// Components
import { graphql, Link } from "gatsby";
import Mailto from "@components/Mailto";
// Layouts
import Page from "@layouts/Page";
// Fragments
import Arrow from "@fragments/Arrow";
import Profiles from "@fragments/Profiles";
// Images
import allears from "@images/portrait-photo.webp";
import storeFront from "@images/heros/store-front-transparent.gif";

// All of this page's words live in src/content/freelance.md.
export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/content/freelance.md$/" }) {
      html
      frontmatter {
        title
        description
        hero {
          kicker
          heading
          subheading
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
    <Page>
      {/* Hero */}
      <section className="heroLP trim tilted-row tilted-row--reversed freelance-hero">
        <div className="layer-page freelance-hero__main">
          <h1 className="heading-sm">{hero.kicker}</h1>
          <h2 className="tilt">{hero.heading}</h2>
          <img
            alt="Mouse clicks swarming into your store."
            className="column-width translucent freelance-hero__img"
            loading="lazy"
            src={storeFront}
          />
        </div>
        <div className="half1">
          <h3>{hero.subheading}</h3>
        </div>
      </section>

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
      <section
        className="alignable layer-skew layer-cta pb-xl jump-target"
        id="contact"
      >
        <article className="self-center">
          <h2>{contact.heading}</h2>
          <p className="text">
            {contact.text}&nbsp;
            <b className="font-heading">:j</b>
          </p>
          <Arrow
            className="self-right"
            style={{
              bottom: "150%",
              left: "-114px",
              rotate: "280deg",
            }}
            inward
          >
            <Mailto className="button" subject={contact.subject}>
              {contact.button}
            </Mailto>
          </Arrow>
        </article>
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
      </section>
      <section className="alignable mt-tilt layer-tint3"></section>
      <section className="alignable">
        <Profiles className="article reveal-child-b self-center" />
      </section>
    </Page>
  );
};

export default FreelancePage;

export const Head = ({ data }) => (
  <>
    <title>{data.markdownRemark.frontmatter.title} | :joe rhoney</title>
    <meta
      name="description"
      content={data.markdownRemark.frontmatter.description}
    />
    <meta
      property="og:keywords"
      content="Freelance, Web Design, Web Development, WordPress, Joe Rhoney"
    />
    <meta property="og:type" content="website" />
  </>
);
