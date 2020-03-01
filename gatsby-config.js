module.exports = {
  siteMetadata: {
    title: `Bun Colak Blog`,
    description: `Personal Blog`,
    author: `@buncolak`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-vscode`,
          // All options are optional. Defaults shown here.
          options: {
            theme: 'Dark+ (default dark)', // Read on for list of included themes. Also accepts object and function forms.
            wrapperClassName: '',   // Additional class put on 'pre' tag. Also accepts function to set the class dynamically.
            injectStyles: true,     // Injects (minimal) additional CSS for layout and scrolling
            extensions: [],         // Extensions to download from the marketplace to provide more languages and themes
            languageAliases: {},    // Map of custom/unknown language codes to standard/known language codes
            logLevel: 'warn'       // Set to 'info' to debug if something looks wrong
          }
        },
        {
          resolve: "gatsby-remark-external-links",
          options: {
            target: "_blank",
            rel: "nofollow noopener noreferrer"
          }
        }]
      }
    },
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
  ],
}
