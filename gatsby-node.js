const path = require("path");

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
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const Post = path.resolve("src/templates/post.js");
  const results = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  results.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      component: Post,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    });
  });
};
