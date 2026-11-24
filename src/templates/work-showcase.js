import React from "react";
// Utilities
import dateFormat from "@utils/dateFormat";
import workImage from "@utils/workImage";
// Components
import { graphql, Link } from "gatsby";
import Button from "@components/Button";
import Mailto from "@components/Mailto";
// Layouts
import Page from "@layouts/Page";
// Fragments
import Arrow from "@fragments/Arrow";
import Profiles from "@fragments/Profiles";

/*
  Showcase work item. Frontmatter (all optional except title/type):

  type: showcase
  title, description, published, ogimg
  client:  Who it was for
  role:    What you did ("Design & development")
  feat1img / feat1alt   Main screenshot (shown large, under the hero)
  feat2img / feat2alt   Optional second screenshot (e.g. an animated one)
  gallery:              Optional list of extra screenshots:
    - img: screenshots/foo.webp
      alt: Screenshot of …
      caption: Short note shown beside the image
  buttontext / buttonlink
  skills: Comma, separated, list

  Image paths: "screenshots/x.webp" or "work/x.webp" load from /src/images;
  a bare "x.webp" loads from /static/work. See src/utils/workImage.js.
*/

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        published
        ogimg
        client
        role
        feat1img
        feat1alt
        feat2img
        feat2alt
        gallery {
          img
          alt
          caption
        }
        buttontext
        buttonlink
        skills
      }
      html
    }
  }
`;

const Shot = ({ img, alt, caption, className }) => (
  <figure className={`showcase-shot ${className ?? ""}`}>
    <img alt={alt ?? ""} loading="lazy" src={workImage(img)} />
    {caption && <figcaption>{caption}</figcaption>}
  </figure>
);

const WorkShowcase = (props) => {
  const {
    title,
    description,
    published,
    client,
    role,
    feat1img,
    feat1alt,
    feat2img,
    feat2alt,
    gallery,
    buttonlink,
  } = props.data.markdownRemark.frontmatter;
  const buttontext =
    props.data.markdownRemark.frontmatter.buttontext || "See Project";
  const skills = (props.data.markdownRemark.frontmatter.skills ?? "")
    .split(",")
    .map((skill) => skill.trim())
    .filter(Boolean);
  const { html } = props.data.markdownRemark;
  const shots = [
    ...(feat2img ? [{ img: feat2img, alt: feat2alt }] : []),
    ...(gallery ?? []),
  ];
  return (
    <>
      <section className="hero page showcase-hero">
        <h1>{title}</h1>
      </section>
      <Page>
        {feat1img && (
          <section className="alignable showcase-lead">
            <Shot img={feat1img} alt={feat1alt} className="showcase-shot--lead" />
          </section>
        )}
        <section className="alignable pb-md">
          <article>
            {description && <p className="showcase-desc">{description}</p>}
            {(client || role || published) && (
              <dl className="showcase-facts">
                {client && (
                  <div>
                    <dt>Client</dt>
                    <dd>{client}</dd>
                  </div>
                )}
                {role && (
                  <div>
                    <dt>Role</dt>
                    <dd>{role}</dd>
                  </div>
                )}
                {published && (
                  <div>
                    <dt>Launched</dt>
                    <dd>{dateFormat(published)}</dd>
                  </div>
                )}
              </dl>
            )}
            <div
              className="text"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            {skills.length > 0 && (
              <ul className="skills items">
                {skills.map((skill) => (
                  <li key={skill}>
                    <b>{skill}</b>
                  </li>
                ))}
              </ul>
            )}
            {buttonlink && (
              <Button className="self-left" href={buttonlink}>
                {buttontext}
              </Button>
            )}
          </article>
        </section>
        {shots.length > 0 && (
          <section className="alignable layer-skew layer-tint1 pb-md showcase-gallery">
            {shots.map((shot, i) => (
              <Shot
                key={shot.img}
                {...shot}
                className={i % 2 ? "showcase-shot--flip" : ""}
              />
            ))}
          </section>
        )}
        <section
          className="alignable layer-skew layer-cta pb-sm mt-tilt-half jump-target"
          id="contact"
        >
          <article className="self-center">
            <h2>Like What You See?</h2>
            <p className="text">
              I can build something like this for you too. Tell me about your
              project, or see more of my work on the&nbsp;
              <Link to="/developer/">developer</Link> and&nbsp;
              <Link to="/creative/">creative</Link> pages.
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
              <Mailto className="button" subject={`Project like ${title}`}>
                Email Me
              </Mailto>
            </Arrow>
          </article>
        </section>
        <section className="alignable">
          <Profiles className="article reveal-child-b self-center" />
        </section>
      </Page>
    </>
  );
};

export default WorkShowcase;

export const Head = (props) => {
  const { description, title, ogimg, feat1img } =
    props.data.markdownRemark.frontmatter;
  return (
    <>
      <title>{title} | Work by :joe rhoney</title>
      <meta name="description" content={description} />
      <meta property="og:image" content={workImage(ogimg || feat1img)} />
      <meta
        property="og:keywords"
        content="Joe Rhoney, Designer, Developer, Engineer, Front-End, UX, UI"
      />
      <meta property="og:type" content="website" />
    </>
  );
};
