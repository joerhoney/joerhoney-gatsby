import React from "react";
// Components
import { Link, graphql, useStaticQuery } from "gatsby";
// Layouts
import Page from "@layouts/Page.js";

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPost(sort: { date: DESC }) {
        edges {
          node {
            date(formatString: "YYYY.MM.DD")
            description
            slug
            title
          }
        }
      }
    }
  `);
  const posts = data.allContentfulPost.edges;
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
            const { date, description, title, slug } = post.node;
            return (
              <article key={date}>
                <h2>
                  <Link className="post-featured" to={`/blog/${slug}`}>
                    {title}
                  </Link>
                </h2>
                <p>
                  <Link className="post-featured" to={`/blog/${slug}`}>
                    {description}
                  </Link>
                </p>
                <p>{date}</p>
              </article>
            );
          })}
        </section>
      </Page>
    </>
  );
};

export default Blog;
