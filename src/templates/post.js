import React from "react";
// Components
import { graphql } from "gatsby";
// Layouts
import Page from "@layouts/Page";
// Images
import team from "@images/heros/team.webp";

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date
        published
        title
      }
      html
    }
  }
`;

const Blog = (props) => {
  return (
    <>
      <section className="hero post">
        <img
          alt="Illustration of a team of charicters"
          loading="lazy"
          src={team}
        />
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      </section>
      <Page>
        <section className="alignable skew_b tint1_b">
          <article
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          />
        </section>
      </Page>
    </>
  );
};

export default Blog;
