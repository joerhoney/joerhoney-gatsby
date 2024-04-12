import React from "react";
// Components
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// Layouts
import Page from "@layouts/Page";
// Images
// import team from "@images/heros/team.webp";

export const query = graphql`
  query ($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      date(formatString: "YYYY.MM.DD")
      description
      body {
        raw
      }
      slug
      title
    }
  }
`;

const Post = (props) => {
  const { date, title } = props.data.contentfulPost;
  const html = JSON.parse(props.data.contentfulPost.body.raw);
  return (
    <>
      <section className="hero post">
        <h1>{title}</h1>
      </section>
      <Page>
        <section className="alignable skew_b tint1_b">
          <article>
            <div>Published: {date}</div>
            {documentToReactComponents(html)}
          </article>
        </section>
      </Page>
    </>
  );
};

export default Post;

export const Head = (props) => {
  const { description, title } = props.data.contentfulPost;
  return (
    <>
      <title>{title} | :joe rhoney</title>
      <meta name="description" content={description} />
      <meta
        property="og:keywords"
        content="Joe Rhoney, Developer, Illustrator"
      />
      <meta property="og:type" content="website" />
    </>
  );
};
