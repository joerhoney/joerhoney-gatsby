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

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md");
    console.log("@@@@@@@@@@@@@@@@@@@", slug);
    // console.log(JSON.stringify(node, undefined, 4));
  }
};
