import React from "react";
//Utilities
import dateFormat from "@utils/dateFormat";
// Components
import { Link, graphql, useStaticQuery } from "gatsby";
// Layouts
import Footer from "@layouts/Footer";
import Nav from "@layouts/Nav";
// import NavIndicator from "@layouts/NavIndicator";
import Scheme from "@layouts/Scheme";
// CSS
import "@css/buttons.scss";
import "@css/colors-default.css";
import "@css/global.scss";
import "@css/units.css";
import "@css/blog.css";

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { frontmatter: { published: DESC } }
        filter: { frontmatter: { draft: { eq: false } } }
      ) {
        edges {
          node {
            frontmatter {
              published
              title
              description
              featimg
              featalt
              draft
            }
            fields {
              parent
              slug
            }
          }
        }
      }
    }
  `);
  const projects = data.allMarkdownRemark.edges;
  return (
    <>
      <Scheme />
      <Nav
        items={{
          Projects: "/projects",
          Blog: "/blog",
          Dev: "/developer",
          Contact: "#contact",
        }}
      />
      <main className="blog">
        <h1 className="h1 square">Projects</h1>
        {projects.map((project) => {
          console.log("parent: " + post.node.fields.parent);
          console.log("slug: " + post.node.fields.slug);
          const { description, featimg, featalt, title } =
            project.node.frontmatter;
          const published = dateFormat(project.node.frontmatter.published);
          return (
            <article key={published}>
              <Link className="post-link" to={`${project.node.fields.slug}`}>
                <h2 className="post-title tilt">{title}</h2>
                <p className="post-date">{published}</p>
                <p className="post-desc">{description}</p>
                {featimg != null && (
                  <img alt={featalt} loading="lazy" src={`${featimg}`} />
                )}
              </Link>
            </article>
          );
        })}
      </main>
      <Footer />
    </>
  );
};

export default Blog;
