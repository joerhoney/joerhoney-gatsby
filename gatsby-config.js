/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Joe Rhoney`,
    description: `Web Developer and Artist.`,
    siteUrl: `https://joerhoney.com`,
    author: `Joe Rhoney`,
    pets: { name: "Kermit", age: "unknown" },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "Kermit", age: "unknown" },
      { name: "P-wigeon", age: "4?" },
      { name: "Snow", age: "4?" },
      { name: "Mocki", age: "2?" },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Rubik\:400,700`],
        display: "swap",
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
  ],
};
