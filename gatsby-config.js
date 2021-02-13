module.exports = {
  siteMetadata: {
    title: `Bun Colak Blog`,
    description: `Personal Blog`,
    author: `@buncolak`,
    url: "https://buncolak.com"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `uecnm5a8`,
        dataset: `production`,
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        pluginConfig: {
          head: true
        },
        trackingIds: [
          "G-YX5WY7D3VM", // Google Analytics / GA
        ],
      },
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
        icon: `${__dirname}/src/images/icon.png`
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}

