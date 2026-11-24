import React from "react";
//Utilities
import dateFormat from "@utils/dateFormat";
// Components
import { graphql } from "gatsby";
// Layouts
import PageLayout from "@layouts/Page";
// Sections
import ContactSection from "@sections/ContactSection";
import Hero from "@sections/Hero";

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

const Page = (props) => {
  const { description, published, title, featimg, featalt } =
    props.data.markdownRemark.frontmatter;
  const { html } = props.data.markdownRemark;
  return (
    <PageLayout
      hero={<Hero title={title} img={`/blog/${featimg}`} alt={featalt} />}
      navItems={{
        Blog: "/blog",
        Dev: "/developer",
        Art: "/artist",
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
    </PageLayout>
  );
};

export default Page;

export const Head = (props) => {
  const { description, published, title, featimg, featalt } =
    props.data.markdownRemark.frontmatter;
  return (
    <>
      <title>{title} | :joe rhoney</title>
      <meta name="description" content={description} />
      <meta property="og:image" content={`${featimg}`} />
      <meta
        property="og:keywords"
        content="Joe Rhoney, Developer, Illustrator"
      />
      <meta property="og:type" content="website" />
    </>
  );
};
