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
    type ContentfulPost implements Node & ContentfulReference & ContentfulEntry {
      title: String
      slug: String
      date: Date @dateformat
      description: String
      body: ContentfulPostBody
      featuredImage: ContentfulAsset
    }

    type ContentfulPostBody {
      raw: String
      references: [ContentfulAsset]
    }

    type ContentfulAsset implements Node {
      file: ContentfulAssetFile
      description: String
    }

    type ContentfulAssetFile {
      url: String
    }
  `;

  createTypes(typeDefs);
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
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
