import React from "react";
// Components
import { graphql } from "gatsby";
// Layouts
import Page from "@layouts/Page";
// Images
// import team from "@images/heros/team.webp";

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date
        published
        title
        description
        thumbnail
        thumbnailAlt
      }
      html
    }
  }
`;

const Post = (props) => {
  const { title } = props.data.markdownRemark.frontmatter;
  const { html } = props.data.markdownRemark;
  return (
    <>
      <section className="hero post">
        {/* <img
          // alt="Illustration of a team of charicters"
          loading="lazy"
          // src={team}
          // imgfile={props.data.markdownRemark.frontmatter.thumbnail}
        /> */}
        <h1>{title}</h1>
      </section>
      <Page>
        <section className="alignable skew_b tint1_b">
          <article dangerouslySetInnerHTML={{ __html: html }} />
        </section>
      </Page>
    </>
  );
};

export default Post;
