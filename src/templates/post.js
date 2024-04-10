import React from "react";
// Components
import { graphql } from "gatsby";
// Layouts
import Page from "@layouts/Page";
// Images
// import team from "@images/heros/team.webp";

export const query = graphql`
  query ($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      date(formatString: "YYYY.MM.DD")
      description
      slug
      title
    }
  }
`;

const Post = (props) => {
  const { date, description, slug, title } = props.data.contentfulPost;
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
          {/* <article dangerouslySetInnerHTML={{ __html: html }} /> */}
          {date}
          <br />
          {slug}
          <br />
          {description} {slug}
        </section>
      </Page>
    </>
  );
};

export default Post;
