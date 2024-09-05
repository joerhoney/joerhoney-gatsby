const path = require("path");
// const folder = path.resolve(__dirname, "./src/");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "./src/components"),
        "@css": path.resolve(__dirname, "./src/css"),
        "@fragments": path.resolve(__dirname, "./src/fragments"),
        "@images": path.resolve(__dirname, "./src/images"),
        "@layouts": path.resolve(__dirname, "./src/layouts"),
        "@utils": path.resolve(__dirname, "./src/utils"),
      },
    },
  });
};

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md");
    const parent = path.basename(path.dirname(node.fileAbsolutePath));
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
    createNodeField({
      node,
      name: "parent",
      value: parent,
    });
  }
};
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const Post = path.resolve("src/templates/post.js");
  const Page = path.resolve("src/templates/page.js");
  const results = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
              parent
            }
          }
        }
      }
    }
  `);
  results.data.allMarkdownRemark.edges.forEach((edge) => {
    console.log("slug: " + edge.node.fields.slug);
    console.log("parent: " + edge.node.fields.parent);
    if (edge.node.fields.parent === "pages") {
      createPage({
        component: Page,
        path: `/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug,
        },
      });
    }
    if (edge.node.fields.parent === "blog") {
      createPage({
        component: Post,
        path: `/blog/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug,
        },
      });
    }
  });
};
