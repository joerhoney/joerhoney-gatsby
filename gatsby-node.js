const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "./src/components"),
        "@css": path.resolve(__dirname, "./src/css"),
        "@fragments": path.resolve(__dirname, "./src/fragments"),
        "@images": path.resolve(__dirname, "src/images"),
        "@layouts": path.resolve(__dirname, "./src/layouts"),
        "@utils": path.resolve(__dirname, "./src/utils"),
      },
    },
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
        type ContentfulPostBody {
            references: [ContentfulAsset] @link(by: "id", from: "references___NODE")
        }
    `;

  createTypes(typeDefs);
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  console.log(path.resolve("src/templates/post.js"));
  const Post = path.resolve("src/templates/post.js");
  const results = await graphql(`
    query {
      allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  results.data.allContentfulPost.edges.forEach((edge) => {
    createPage({
      component: Post,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
