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

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions;

//   const typeDefs = `
//     type ContentfulPost implements Node & ContentfulReference & ContentfulEntry {
//       title: String
//       slug: String
//       date: Date @dateformat
//       description: String
//       body: ContentfulPostBody
//       featuredImage: ContentfulAsset @link(by: "id", from: "featuredImage___NODE")
//     }

//     union BodyReference = ContentfulAsset | ContentfulCode

//     type ContentfulPostBody {
//       raw: String
//       references: [BodyReference] @link(by: "id", from: "references___NODE")
//     }

//     type ContentfulAsset implements Node & ContentfulReference {
//       file: ContentfulAssetFile
//       description: String
//     }

//     type ContentfulCode implements Node & ContentfulReference {
//       title: String
//       description: String
//       language: String
//     }

//     type ContentfulAssetFile {
//       url: String
//     }
//   `;

//   createTypes(typeDefs);
// };
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    console.log("node.fileAbsolutePath: ");
    console.log(node.fileAbsolutePath);
    const slug = path.basename(node.fileAbsolutePath, ".md");
    // console.log("@@@@@@@@@@@@@@@@@@@", slug);
    // console.log(JSON.stringify(node, undefined, 4));
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
    console.log("edge: ");
    console.log(edge);

    createPage({
      component: Post,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    });
  });
};
