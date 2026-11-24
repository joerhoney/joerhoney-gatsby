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
// Optional /work frontmatter fields. Declared here so pages can query them even
// when no markdown file uses them yet (everything else is still inferred).
exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: MarkdownRemarkFrontmatter
    }
    type MarkdownRemarkFrontmatter {
      type: String
      client: String
      role: String
      feat2img: String
      feat2alt: String
      gallery: [WorkGalleryImage]
    }
    type WorkGalleryImage {
      img: String
      alt: String
      caption: String
    }
  `);
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const Page = path.resolve("src/templates/page.js");
  const Post = path.resolve("src/templates/post.js");
  const WorkCompare = path.resolve("src/templates/work-compare.js");
  const WorkShowcase = path.resolve("src/templates/work-showcase.js");
  const results = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
              parent
            }
            frontmatter {
              type
            }
          }
        }
      }
    }
  `);
  results.data.allMarkdownRemark.edges.forEach((edge) => {
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
    if (edge.node.fields.parent === "work") {
      createPage({
        component:
          edge.node.frontmatter.type === "showcase"
            ? WorkShowcase
            : WorkCompare,
        path: `/work/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug,
        },
      });
    }
  });
};
