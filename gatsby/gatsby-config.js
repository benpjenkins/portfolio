require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Ben Jenkins`,
    description: `The portfolio and blog of Ben Jenkins, a fullstack software engineer from Chicago.`,
    author: `Ben Jenkins`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: false,
        anonymize: true
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ]
}
