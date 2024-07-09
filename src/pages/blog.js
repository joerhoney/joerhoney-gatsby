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
      allContentfulPost(sort: { date: DESC }) {
        edges {
          node {
            createdAt(formatString: "YYYY.MM.DD")
            date(formatString: "YYYY.MM.DD")
            description
            slug
            title
            featuredImage {
              file {
                url
              }
              description
            }
          }
        }
      }
    }
  `);
  const posts = data.allContentfulPost.edges;
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
          const { createdAt, date, description, title, slug } = post.node;
          const feat = post.node.featuredImage;
          const posted = date !== null ? date : createdAt;
          return (
            <article key={posted}>
              <Link className="post-link" to={`/blog/${slug}`}>
                <h2 className="post-title tilt">{title}</h2>
                <p className="post-date">{posted}</p>
                <p className="post-desc">{description}</p>
                {feat != null && (
                  <img
                    alt={feat.description}
                    loading="lazy"
                    src={feat.file.url}
                  />
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
