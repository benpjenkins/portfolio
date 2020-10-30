import { useStaticQuery, graphql } from "gatsby"

export const { site } = useStaticQuery(
  graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `
)
