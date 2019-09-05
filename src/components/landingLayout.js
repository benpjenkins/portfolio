/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

import Header from "./header"
import "./layout.css"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Children = styled.div`
  flex: 1 1 auto;
`

const LandingLayout = ({ children }) => {


  return (
    <>
      <Container>
        <Header siteTitle="Ben Jenkins" />
        <Children>
          <main>{children}</main>
        </Children>
      </Container>
    </>
  )
}

LandingLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LandingLayout
