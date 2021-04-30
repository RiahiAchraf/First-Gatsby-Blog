/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Gatsby Workshop",
    description: "My first gatsby site Frontend Masters Gatsby Workshop!",
  },
  /* Your site config here */
  plugins: [
    // MDX Plugin
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
      },
    },
    // Gtasby Source File System
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "posts",
      },
    },
    // Gatsby Plugin Emotion
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
