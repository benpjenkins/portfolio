import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const Container = styled.div`
  /* margin-top: 6em; */
  margin-right: 2em;
`

const Date = styled.span`
  color: #4d4a46;
`

const Home = ({ data }) => {
  return (
    <div>
      <SEO title="Home" />
      <Layout>
        <Container>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Date>{node.frontmatter.date}</Date>
              <h2>{node.frontmatter.title}</h2>
              <p>{node.frontmatter.description}</p>
              <StyledLink to={node.fields.slug}>Read</StyledLink>
              <br />
              <br />
              <br />
            </div>
          ))}
        </Container>
      </Layout>
    </div>
  )
}

export default Home

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
