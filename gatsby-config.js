module.exports = {
  siteMetadata: {
    title: 'JoshMDiaz Portfolio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JoshMDiaz`,
        short_name: `JoshMDiaz`,
        start_url: `/`,
        background_color: `#cfcfcf`,
        theme_color: `#cfcfcf`,
        display: `minimal-ui`,
        icon: `src/images/manifest-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline'
  ],
}
