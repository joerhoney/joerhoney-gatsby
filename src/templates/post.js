import React from "react";
// Components
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// Layouts
import Page from "@layouts/Page";

export const query = graphql`
  query ($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      date(formatString: "YYYY.MM.DD")
      description
      body {
        raw
        references {
          contentful_id
          gatsbyImageData
          ... on ContentfulAsset {
            contentful_id
            __typename
            description
            gatsbyImageData
          }
        }
      }
      slug
      title
    }
  }
`;

const Post = (props) => {
  const { date, title } = props.data.contentfulPost;
  const html = JSON.parse(props.data.contentfulPost.body.raw);
  const refs = props.data.contentfulPost.body.references;
  console.log(refs);
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const nodeid = node.data.target.sys.id;
        const asset = refs.filter((ref) => ref.contentful_id === nodeid)[0];
        if (!asset.gatsbyImageData) {
          // asset is not an image
          return null;
        }
        return (
          <GatsbyImage image={asset.gatsbyImageData} alt={asset.description} />
        );
      },
    },
  };
  return (
    <>
      <section className="hero post">
        <h1>{title}</h1>
      </section>
      <Page>
        <section className="alignable skew_b tint1_b">
          <article>
            <div>Published: {date}</div>
            {/* {html && renderRichText(html, options)} */}
            <div>{html && documentToReactComponents(html, options)}</div>
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
