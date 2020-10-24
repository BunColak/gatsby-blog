module.exports = {
  siteMetadata: {
    title: `Bun Colak Blog`,
    description: `Personal Blog`,
    author: `@buncolak`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `uecnm5a8`,
        dataset: `production`,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bun Colak Blog`,
        short_name: `BunBlog`,
        start_url: `/`,
        background_color: `#5a67d8`,
        theme_color: `#5a67d8`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}

