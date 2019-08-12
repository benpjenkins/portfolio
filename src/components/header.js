import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
const Links = styled.div`
  padding: 1.8rem 1.0875rem;
`
const StyledLink = styled(Link)`
  padding: 1em;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: "#24292E",
      marginBottom: `1.45rem`,
    }}
  >
    <Flex>
      <div
        style={{
          // margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <Links>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="portfolio">Portfolio</StyledLink>
      </Links>
    </Flex>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
