import React from "react"
import { Link, graphql } from "gatsby"
import MainLayout from "../components/mainLayout"
import styled from "styled-components"
import SEO from "../components/seo"

const StyledLink = styled(Link)`
  text-decoration: none;

`

export default ({ data }) => {
  return (
    <MainLayout>
      <SEO title="Blog" />
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <StyledLink to={node.fields.slug}>
              <h2>{node.frontmatter.title}</h2>
            </StyledLink>
            {node.frontmatter.date}
            <p>{node.frontmatter.description}</p>
            <br></br>
          </div>
        ))}
      </div>
    </MainLayout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            description
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
