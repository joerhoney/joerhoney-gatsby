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
        feat2img
        feat2alt
        beforetext
        aftertext
        beforedesc
        afterdesc
        buttontext
        buttonlink
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
    feat2img,
    feat2alt,
    beforetext,
    beforedesc,
    bothtext,
    bothdesc,
    aftertext,
    afterdesc,
    buttontext,
    buttonlink,
  } = props.data.markdownRemark.frontmatter;
  beforetext = beforetext || "Before";
  bothtext = bothtext || "Compare";
  aftertext = aftertext || "After";
  buttontext = buttontext || "See Project";
  const { html } = props.data.markdownRemark;
  return (
    <>
      <div className="details">
        <div className="details__inner">
          <h1>{title}</h1>
          <div className="details__content">
            <div dangerouslySetInnerHTML={{ __html: html }} />
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
            title={beforedesc}
            tabIndex={1}
          >
            {beforetext}
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
            title={afterdesc}
            tabIndex={3}
          >
            {aftertext}
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
  );
};

export default Work;

export const Head = (props) => {
  const { description, title, ogimg } = props.data.markdownRemark.frontmatter;
  return (
    <>
      <title>{title} | :joe rhoney</title>
      <meta name="description" content={description} />
      <meta property="og:image" content={`/work/${ogimg}`} />
      <meta property="og:keywords" content="Joe Rhoney, Developer" />
      <meta property="og:type" content="website" />
    </>
  );
};
