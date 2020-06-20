import React from "react"
import { graphql } from "gatsby"
import MainLayout from "../components/mainLayout"
import styled from "styled-components"

const Title = styled.h1`
  font-family: Avenir;
`

const Date = styled.h2`
  font-family: Avenir;
`

const Content = styled.div`
  font-family: Avenir;
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <MainLayout>
      <div>
        <Title>{post.frontmatter.title}</Title>
        <Date>{post.frontmatter.date}</Date>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </MainLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
