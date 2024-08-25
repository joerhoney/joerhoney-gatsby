import React from "react";
// Components
import Form from "@components/FormNetlify";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Profiles from "@fragments/Profiles";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// Layouts
import Page from "@layouts/Page";

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
  // console.log(props.data.contentfulPost);
  const { title } = props.data.markdownRemark.frontmatter;
  const { html } = props.data.markdownRemark;
  // const featurl = `https:${props.data.contentfulPost.featuredImage?.file.url}`;
  // const featdesc = props.data.contentfulPost.featuredImage?.description;
  console.log("html: ", html);
  // const refs = props.data.contentfulPost.body.references || null;
  // console.log("refs: ", refs);
  // console.log(refs);
  // const options = {
  //   renderNode: {
  //     "embedded-asset-block": (node) => {
  //       const nodeid = node.data.target.sys.id;
  //       const asset =
  //         refs !== null
  //           ? refs.filter((ref) => ref && ref.contentful_id === nodeid)[0]
  //           : {};
  //       if (Object.keys(asset).length === 0) {
  //         return null;
  //       }
  //       return (
  //         <GatsbyImage image={asset.gatsbyImageData} alt={asset.description} />
  //       );
  //     },
  //     "embedded-entry-block": (node) => {
  //       const nodeid = node.data.target.sys.id;
  //       console.log("nodeid: ", nodeid);
  //       // const trefs = [];
  //       // const tasset =
  //       //   trefs.filter((tref) => tref.contentful_id === nodeid)[0] ?? {};
  //       // console.log("tasset: ", tasset);
  //       const entry =
  //         refs !== null
  //           ? refs.filter((ref) => ref && ref.contentful_id === nodeid)[0]
  //           : {};
  //       console.log("entry: ", typeof entry, entry);
  //       if (Object.keys(entry).length === 0) {
  //         return null;
  //       }
  //       return (
  //         <pre className={`language-${entry.language}`}>
  //           {entry.snippet.snippet}
  //         </pre>
  //       );
  //     },
  //   },
  // };
  return (
    <>
      <section className="hero post">
        <div className="hero__bg">
          {/* {console.log("Post.js: featurl: ", featurl)} */}
          {/* <img alt={featdesc} loading="lazy" src={featurl} /> */}
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
        <section className="alignable">
          <article>
            {/* <p className="date">Published: {date}</p> */}
            <div dangerouslySetInnerHTML={{ __html: html }} />
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
          <Profiles className="article reveal-child-b self-center compensateBHalf" />
        </section>
      </Page>
    </>
  );
};

export default Post;

export const Head = (props) => {
  // const { description, title } = props.data.contentfulPost;
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
