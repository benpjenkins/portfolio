import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: Avenir;
  &:hover {
    text-decoration: underline;
  }
`

const H2 = styled.h2`
  font-family: Avenir;
  font-weight: bolder;
`

const Container = styled.div`
  /* margin-top: 6em; */
  margin-right: 2em;
`

const Date = styled.span`
  color: #4d4a46;
  font-family: Avenir;
  font-weight: bolder;
`

const P = styled.p`
  font-family: Avenir;
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
              <H2>{node.frontmatter.title}</H2>
              <P>{node.frontmatter.description}</P>
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
