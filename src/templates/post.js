import React from "react";
// Components
import Mailto from "@components/Mailto";
import { graphql } from "gatsby";
import Arrow from "@fragments/Arrow";
import Profiles from "@fragments/Profiles";
// Layouts
import Page from "@layouts/Page";

// const path = inclue("path");

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date
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

const Post = (props) => {
  const { date, description, published, title, featimg, featalt } =
    props.data.markdownRemark.frontmatter;
  const { html } = props.data.markdownRemark;
  return (
    <>
      <section className="hero post">
        <div className="hero__bg">
          <img alt={featalt} loading="lazy" src={`/blog/${featimg}`} />
        </div>
        <h1>{title}</h1>
      </section>
      <Page
        navItems={{
          Blog: "/blog",
          Dev: "/developer",
          Art: "/artist",
          Contact: "#contact",
        }}
      >
        <section className="alignable bottomS">
          <article>
            {/* <p className="date">Published: {date}</p> */}
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </article>
        </section>
        <section
          className="alignable skew_b cta_b bottomS compensateTHalf u-jump-section"
          id="contact"
        >
          <article className="self-center">
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
          <Profiles className="article reveal-child-b self-center compensateBHalf" />
        </section>
      </Page>
    </>
  );
};

export default Post;

export const Head = (props) => {
  const { date, description, published, title, featimg, featalt } =
    props.data.markdownRemark.frontmatter;
  return (
    <>
      <title>{title} | :joe rhoney</title>
      <meta name="description" content={description} />
      <meta property="og:image" content={`/blog/${featimg}`} />
      <meta
        property="og:keywords"
        content="Joe Rhoney, Developer, Illustrator"
      />
      <meta property="og:type" content="website" />
    </>
  );
};
