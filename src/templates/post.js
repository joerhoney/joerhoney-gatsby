import React from "react";
// Components
import Form from "@components/Formspree";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Profiles from "@fragments/Profiles";
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
      featuredImage {
        file {
          url
        }
        description
      }
      slug
      title
    }
  }
`;

const Post = (props) => {
  // console.log(props.data.contentfulPost);
  const { date, title } = props.data.contentfulPost;
  const featurl = `https:${props.data.contentfulPost.featuredImage?.file.url}`;
  const featdesc = props.data.contentfulPost.featuredImage?.description;
  console.log(featurl);
  const html = JSON.parse(props.data.contentfulPost.body.raw);
  const refs = props.data.contentfulPost.body.references;
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const nodeid = node.data.target.sys.id;
        const asset = {};
        asset.data = refs.filter((ref) => ref.contentful_id === nodeid)[0];
        // console.log("asset.data: ", typeof asset.data, asset.data);
        if (Object.keys(asset.data).length === 0) {
          return null;
        }
        return (
          <GatsbyImage
            image={asset.data.gatsbyImageData}
            alt={asset.data.description}
          />
        );
      },
    },
  };
  return (
    <>
      <section className="hero post">
        <div className="hero__bg">
          <img alt={featdesc} loading="lazy" src={featurl} />
        </div>
        <h1>{title}</h1>
      </section>
      <Page>
        <section className="alignable">
          <article>
            <p className="date">Published: {date}</p>
            <div>{html && documentToReactComponents(html, options)}</div>
          </article>
        </section>
        <section
          className="alignable skew_b cta_b compensateTHalf u-jump-link"
          id="contact"
        >
          <article className="self-center">
            <h2>Contact Me</h2>
            <p>
              Whether you need help building something or you just want to
              connect... well I want to connect, so drop me an email!
            </p>
          </article>
          {/* <Query /> */}
          <Form className="compensateBHalf" />
        </section>
        <section className="alignable">
          <Profiles className="article reveal self-center compensateBHalf" />
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
