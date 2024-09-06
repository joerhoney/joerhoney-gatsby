import React from "react";
//Utilities
import dateFormat from "@utils/dateFormat";
// Components
import Mailto from "@components/Mailto";
import { graphql } from "gatsby";
import Arrow from "@fragments/Arrow";
import Profiles from "@fragments/Profiles";
// Layouts
import PageLayout from "@layouts/Page";

// const path = inclue("path");

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        description
        published
        title
        featimg
        featalt
      }
      html
    }
  }
`;

const Page = (props) => {
  const { description, published, title, featimg, featalt } =
    props.data.markdownRemark.frontmatter;
  const { html } = props.data.markdownRemark;
  return (
    <>
      <section className="hero page">
        <div className="hero__bg">
          <img alt={featalt} loading="lazy" src={`/blog/${featimg}`} />
        </div>
        <h1>{title}</h1>
      </section>
      <PageLayout
        navItems={{
          Blog: "/blog",
          Dev: "/developer",
          Art: "/artist",
          Contact: "#contact",
        }}
      >
        <section className="bottomS">
          <article>
            <p className="date">Published: {dateFormat(published)}</p>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </article>
        </section>
        <section
          className="cta bottomS compensateTHalf u-jump-section skew-y-14"
          id="contact"
        >
          <article className="-skew-y-14 self-center">
            <h2>Contact Me</h2>
            <p>
              Whether you need help building something or you just want to
              connect... well I want to connect, so drop me an email!
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
              <Mailto className="button" subject="General Inquiry">
                Email Me
              </Mailto>
            </Arrow>
          </article>
        </section>
        <section className="alignable">
          <Profiles className="article reveal-child-b compensateBHalf self-center" />
        </section>
      </PageLayout>
    </>
  );
};

export default Page;

export const Head = (props) => {
  const { description, published, title, featimg, featalt } =
    props.data.markdownRemark.frontmatter;
  return (
    <>
      <title>{title} | :joe rhoney</title>
      <meta name="description" content={description} />
      <meta property="og:image" content={`${featimg}`} />
      <meta
        property="og:keywords"
        content="Joe Rhoney, Developer, Illustrator"
      />
      <meta property="og:type" content="website" />
    </>
  );
};
