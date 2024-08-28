import React from "react";
// Components
import { Link, graphql, useStaticQuery } from "gatsby";
// Layouts
import Footer from "../layouts/Footer";
import Nav from "../layouts/Nav";
// import NavIndicator from "../layouts/NavIndicator";
import Scheme from "../layouts/Scheme";
// CSS
import "@css/buttons.scss";
import "@css/colors-default.css";
import "@css/global.scss";
import "@css/units.css";
import "@css/blog.css";

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              published
              title
              description
              featimg
              featalt
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  const posts = data.allMarkdownRemark.edges;
  return (
    <>
      <Scheme />
      <Nav
        items={{
          Blog: "/blog",
          Dev: "/developer",
          Art: "/artist",
          Contact: "#contact",
        }}
      />
      <main className="blog">
        <h1 className="h1 square">Blog</h1>
        {posts.map((post) => {
          if (post.node.frontmatter.published) {
            return (
              <article key={post.node.frontmatter.date}>
                <Link
                  className="post-link"
                  to={`/blog/${post.node.fields.slug}`}
                >
                  <h2 className="post-title tilt">
                    {post.node.frontmatter.title}
                  </h2>
                  <p className="post-date">{post.node.frontmatter.date}</p>
                  <p className="post-desc">
                    {post.node.frontmatter.description}
                  </p>
                  {post.node.frontmatter.featimg != null && (
                    <img
                      alt={post.node.frontmatter.featalt}
                      loading="lazy"
                      src={`./${post.node.frontmatter.featimg}`}
                    />
                  )}
                </Link>
              </article>
            );
          } else {
            return null;
          }
        })}
      </main>
      <Footer />
    </>
  );
};

export default Blog;
