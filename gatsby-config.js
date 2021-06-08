module.exports = {
  siteMetadata: {
    title: `Ben Jenkins`,
    description: `The portfolio and blog of Ben Jenkins, a fullstack software engineer from Chicago.`,
    author: `Ben Jenkins`,
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
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },

    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,

    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ben Jenkins`,
        short_name: `Ben Jenkins`,
        start_url: `/`,
        background_color: `#667ecc`,
        theme_color: `#667ecc`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
