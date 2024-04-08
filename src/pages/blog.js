import React from "react";
// Components
import { Link, graphql, useStaticQuery } from "gatsby";
// Layouts
import Page from "@layouts/Page.js";

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
              thumbnail
              thumbnailAlt
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
      <section className="hero post">
        <img alt="Illustration of a team of charicters" loading="lazy" />
        <h1>Blog</h1>
      </section>
      <Page>
        <section className="alignable skew_b tint1_b">
          <article>
            <div>This is my blog page, so far.</div>
          </article>
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
            }
          })}
        </section>
      </Page>
    </>
  );
};

export default Blog;
