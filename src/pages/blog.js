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
  // allContentfulPost(sort: { date: DESC }) {
  //     date(formatString: "YYYY.MM.DD")
  // description
  // slug
  // title
  // featuredImage {
  //   file {
  //     url
  //   }
  //   description
  // }

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
              feat {
                absolutePath
              }
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
                <h2>
                  <Link
                    className="post-featured"
                    to={`/blog/${post.node.fields.slug}`}
                  >
                    {post.node.frontmatter.title}
                  </Link>
                </h2>
                <p>
                  <Link
                    className="post-featured"
                    to={`/blog/${post.node.fields.slug}`}
                  >
                    {post.node.frontmatter.description}
                  </Link>
                </p>
                <p>{post.node.frontmatter.date}</p>
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
