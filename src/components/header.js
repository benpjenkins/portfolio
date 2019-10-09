import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 530px) {
    flex-direction: column;
  }
`
const Links = styled.div`
  padding: 1.8rem 1.0875rem;
`
const StyledLink = styled(Link)`
  padding: 1em;
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`
const Header = ({ siteTitle }) => (
  <header
    style={{
      paddingRight: "1.3rem",
      paddingLeft: "1.3rem",
      marginBottom: `1.45rem`,
      width: `100vw`,
      fontFamily: "Oswald",
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
              color: `black`,
              textDecoration: `none`,
              fontFamily: "Oswald",
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <Links>
        <StyledLink to="about">About</StyledLink>
        <StyledLink to="portfolio">Portfolio</StyledLink>
        <StyledLink to="blog">Blog</StyledLink>
        <StyledLink to="contact">Contact</StyledLink>
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
