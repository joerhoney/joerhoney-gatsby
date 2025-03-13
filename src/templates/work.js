import React from "react";
// Components
import { graphql } from "gatsby";
import Button from "@components/Button";
import Icon from "@components/Icon";
// CSS
import "@css/compare.scss";
import "@css/units.css";

// const path = inclue("path");

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        published
        ogimg
        type
        feat1img
        feat1alt
        feat1btn
        feat1tip
        feat2img
        feat2alt
        feat2btn
        feat2tip
        buttontext
        buttonlink
        skills
      }
      html
    }
  }
`;

const Work = (props) => {
  let {
    description,
    published,
    title,
    type,
    feat1img,
    feat1alt,
    feat1btn,
    feat1tip,
    feat2img,
    feat2alt,
    feat2btn,
    feat2tip,
    bothtext,
    bothdesc,
    buttontext,
    buttonlink,
    skills,
  } = props.data.markdownRemark.frontmatter;
  feat1btn = feat1btn || "Before";
  bothtext = bothtext || "Compare";
  feat2btn = feat2btn || "After";
  buttontext = buttontext || "See Project";
  skills = skills.split(",");
  console.log(skills);
  const { html } = props.data.markdownRemark;
  return (
    <>
      {type === "showcase" && (
        <>
          <div className="">
            <div className="">
              <img alt={feat1alt} loading="lazy" src={`/work/${feat1img}`} />
              <h1 className="">{title}</h1>
              <div className="">
                <div dangerouslySetInnerHTML={{ __html: html }} />
                <ul className="skills items">
                  {skills.map((skill) => (
                    <li key={skill}>
                      <b>{skill}</b>
                    </li>
                  ))}
                </ul>
                {buttonlink && <Button href={buttonlink}>{buttontext}</Button>}
              </div>
            </div>
          </div>
        </>
      )}
      {type === "compare" && (
        <>
          <div className="details">
            <div className="details__inner">
              <h1>{title}</h1>
              <div className="details__content">
                <div
                  dangerouslySetInnerHTML={{ __html: html }}
                  className="content"
                />
                <ul className="skills items">
                  {skills.map((skill) => (
                    <li key={skill}>
                      <b>{skill}</b>
                    </li>
                  ))}
                </ul>
                {buttonlink && <Button href={buttonlink}>{buttontext}</Button>}
              </div>
            </div>
          </div>
          <a
            href="javascript:history.back()"
            title="Return to previous page"
            className="faint"
            style={{
              display: "block",
              color: "unset",
              position: "fixed",
              top: "20px",
              left: "20px",
              zIndex: 10,
            }}
          >
            <Icon
              name="ArrowBack"
              label="false"
              style={{
                fontSize: "72px",
              }}
            />
          </a>
          <section className="compare">
            <div
              className="compare__controls multibutton"
              style={{
                width: "max-content",
                margin: "auto",
                position: "fixed",
                bottom: "132px",
                left: "16px",
                right: "16px",
                zIndex: 4,
              }}
            >
              <div
                className="compare__before-button multibutton__button"
                title={feat1tip}
                tabIndex={1}
              >
                {feat1btn}
              </div>
              <div
                className="compare__before-both multibutton__button"
                title={bothdesc}
                tabIndex={2}
              >
                {bothtext}
              </div>
              <div
                className="compare__after-button multibutton__button"
                title={feat2tip}
                tabIndex={3}
              >
                {feat2btn}
              </div>
            </div>
            <div className="compare__before" id="before">
              {/* See static folder for images */}
              <img alt={feat1alt} loading="lazy" src={`/work/${feat1img}`} />
            </div>
            <div className="compare__after" id="after">
              <img alt={feat2alt} loading="lazy" src={`/work/${feat2img}`} />
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Work;

export const Head = (props) => {
  const { description, title, ogimg } = props.data.markdownRemark.frontmatter;
  return (
    <>
      <title>{title} | Work by :joe rhoney</title>
      <meta name="description" content={description} />
      <meta property="og:image" content={`/work/${ogimg}`} />
      <meta
        property="og:keywords"
        content="Joe Rhoney, Designer, Developer, Engineer, Front-End, UX, UI"
      />
      <meta property="og:type" content="website" />
    </>
  );
};
