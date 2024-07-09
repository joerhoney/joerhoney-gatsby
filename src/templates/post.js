import React from "react";
// Components
import Mailto from "@components/Mailto";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Arrow from "@fragments/Arrow";
import Profiles from "@fragments/Profiles";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// Layouts
import Page from "@layouts/Page";

export const query = graphql`
  query ($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      createdAt(formatString: "YYYY.MM.DD")
      date(formatString: "YYYY.MM.DD")
      description
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            description
            gatsbyImageData
          }
          ... on ContentfulCode {
            contentful_id
            __typename
            title
            description
            language
            snippet {
              snippet
            }
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
  const { createdAt, date, title } = props.data.contentfulPost;
  const featurl = `https:${props.data.contentfulPost.featuredImage?.file.url}`;
  const featdesc = props.data.contentfulPost.featuredImage?.description;
  const html = JSON.parse(props.data.contentfulPost.body.raw);
  const refs = props.data.contentfulPost.body.references || null;
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const nodeid = node.data.target.sys.id;
        const asset =
          refs !== null
            ? refs.filter((ref) => ref && ref.contentful_id === nodeid)[0]
            : {};
        if (Object.keys(asset).length === 0) {
          return null;
        }
        return (
          <GatsbyImage image={asset.gatsbyImageData} alt={asset.description} />
        );
      },
      "embedded-entry-block": (node) => {
        const nodeid = node.data.target.sys.id;
        // const trefs = [];
        // const tasset =
        //   trefs.filter((tref) => tref.contentful_id === nodeid)[0] ?? {};
        const entry =
          refs !== null
            ? refs.filter((ref) => ref && ref.contentful_id === nodeid)[0]
            : {};
        if (Object.keys(entry).length === 0) {
          return null;
        }
        return (
          <pre className={`language-${entry.language}`}>
            {entry.snippet.snippet}
          </pre>
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
            <p className="date">
              Published: {date !== null ? date : createdAt}
            </p>
            <div>{html && documentToReactComponents(html, options)}</div>
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
