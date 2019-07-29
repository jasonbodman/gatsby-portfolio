module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "173jiql6",
        dataset: "production",
        // a token with read permissions is required
        // if you have a private dataset
        token:
          process.env
            .skY9olkX4Aip0pyIyzjWvzOf0Jwp6lrhI1Nj2O3l4yIDDETD0J4SyT5chZZPkcr40EDeozdm6OmbzZr3Ra23m2mmkKQXPKEm0WtfVCXBfpaEvFUKQV3INKibwH8e8edKKf6K7kfvJAy0nnBmwEtNEBHEaPM5BP2uWw8LzYOl2m5CE3zpvktO,
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
