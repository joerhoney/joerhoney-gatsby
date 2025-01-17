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

const Compare = (props) => {
  let {
    description,
    published,
    title,
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
      <div
        className="multibutton"
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
        <a className="multibutton__button" href="#before" title={beforedesc}>
          {beforetext}
        </a>
        <a className="multibutton__button" href="#both" title={bothdesc}>
          {bothtext}
        </a>
        <a className="multibutton__button" href="#after" title={afterdesc}>
          {aftertext}
        </a>
      </div>
      <section className="compare">
        <div className="compare__before" id="before">
          {/* See static folder for images */}
          <img alt={feat1alt} loading="lazy" src={`/compare/${feat1img}`} />
        </div>
        <div className="compare__after" id="after">
          <img alt={feat2alt} loading="lazy" src={`/compare/${feat2img}`} />
        </div>
      </section>
    </>
  );
};

export default Compare;

export const Head = (props) => {
  const { description, title, ogimg } = props.data.markdownRemark.frontmatter;
  return (
    <>
      <title>{title} | :joe rhoney</title>
      <meta name="description" content={description} />
      <meta property="og:image" content={`/compare/${ogimg}`} />
      <meta property="og:keywords" content="Joe Rhoney, Developer" />
      <meta property="og:type" content="website" />
    </>
  );
};
