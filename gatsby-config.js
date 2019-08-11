module.exports = {
  siteMetadata: {
    title: `Jason Bodman`,
    description: `Freelance Web Developer - Hi, I'm Jason and together we can build a website that fits your brand while helping engage your customers in ways that help your business be more successful.`,
    author: `@bodmand1`,
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
        overlayDrafts: true,
        watchMode: true,
        token:
          process.env
            .skjRztiT1u2ljmtonfZxGrK5RNDKbflTnMNyyJZsBmLCBGmZ5ZmEjTArkHfVfluCANwUm2eEENFJXSan0A1sis3ONiJuaPsq70EtjyTLgr61SLaILP2oeqXIPF1CY9Y8XQCgO8hKI4bzi6LoM1SY4VnVPTACDE1VV5HCs3MYFWyZL6HPAkhr,
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
