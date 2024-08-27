import React from "react";
// Components
import Mailto from "@components/Mailto";
import { graphql } from "gatsby";
// import { GatsbyImage } from "gatsby-plugin-image";
import Arrow from "@fragments/Arrow";
import Profiles from "@fragments/Profiles";
// Layouts
import Page from "@layouts/Page";

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date
        description
        published
        title
        feat {
          absolutePath
        }
        featalt
      }
      html
    }
  }
`;

const Post = (props) => {
  const { date, description, published, title, feat, featalt } =
    props.data.markdownRemark.frontmatter;
  const { html } = props.data.markdownRemark;
  console.log("date: ", date);
  console.log("description: ", description);
  console.log("published: ", published);
  console.log("title: ", title);
  console.log("feat: ", feat.absolutePath);
  console.log("featalt: ", featalt);
  console.log("html: ", html);
  return (
    <>
      <section className="hero post">
        <div className="hero__bg">
          {/* {console.log("Post.js: featurl: ", featurl)} */}
          <img alt={featalt} loading="lazy" src={feat.absolutePath} />
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
  return (
    <>
      <title>{props.title} | :joe rhoney</title>
      <meta name="description" content={props.description} />
      <meta
        property="og:keywords"
        content="Joe Rhoney, Developer, Illustrator"
      />
      <meta property="og:type" content="website" />
    </>
  );
};
