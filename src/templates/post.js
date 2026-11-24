import React from "react";
//Utilities
import dateFormat from "@utils/dateFormat";
// Components
import { graphql } from "gatsby";
// Layouts
import Page from "@layouts/Page";
// Sections
import ContactSection from "@sections/ContactSection";
import Hero from "@sections/Hero";
import Seo from "@components/Seo";

// const path = inclue("path");

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
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
  const { description, published, title, featimg, featalt } =
    props.data.markdownRemark.frontmatter;
  const { html } = props.data.markdownRemark;
  return (
    <Page
      hero={
        <Hero
          title={title}
          img={`/blog/${featimg}`}
          alt={featalt}
          variant="post"
        />
      }
      navItems={{
        Blog: "/blog",
        Dev: "/developer",
        Art: "/creative",
        Contact: "#contact",
      }}
    >
      <section className="alignable pb-sm">
        <article>
          <p className="date">Published: {dateFormat(published)}</p>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </section>
      <ContactSection className="layer-skew layer-cta pb-sm mt-tilt-half">
        <p>
          Whether you need help building something or you just want to
          connect... well I want to connect, so drop me an email!
        </p>
      </ContactSection>
    </Page>
  );
};

export default Post;

export const Head = ({ data, location }) => {
  const { description, title, featimg } = data.markdownRemark.frontmatter;
  return (
    <Seo
      title={title}
      description={description}
      image={featimg && `/blog/${featimg}`}
      pathname={location.pathname}
    />
  );
};
