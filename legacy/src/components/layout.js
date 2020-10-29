/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"

const Flex = styled.div`
  display: flex;
  flex-direction: row;
`

const MaxWidth = styled.div`
  position: absolute;
  max-width: 300px;
`
const Padding = styled.div`
  padding-left: 450px;
  margin-top: 6em;
  margin-right: 10em;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Flex>
      <MaxWidth>
        <Header siteTitle={data.site.siteMetadata.title} />
      </MaxWidth>
      <main>
        <Padding>{children}</Padding>
      </main>
    </Flex>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
