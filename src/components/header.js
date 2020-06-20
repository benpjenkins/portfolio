import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Ben from "../images/ben.jpeg"

const Fixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 260px;
  padding-top: 6em;
`
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 10%;
`
const Links = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledLink = styled(Link)`
  padding: 1em;
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const ProfilePic = styled.img`
  width: 88px;
  height: auto;
  border-radius: 50%;
`
const Header = ({ siteTitle }) => (
  <Fixed>
    <header
      style={{
        paddingRight: "1.3rem",
        paddingLeft: "1.3rem",
        marginBottom: `1.45rem`,
        width: `100%`,
        fontFamily: "Oswald",
      }}
    >
      <Flex>
        <div
          style={{
            // margin: `0 auto`,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <ProfilePic src={Ben} alt="Ben's headshot" />
          <h2 style={{ margin: 0 }}>{siteTitle}</h2>
          <br />
          <p>Software Developer</p>
        </div>
        <Links>
          <StyledLink to="/">Blog</StyledLink>
          <StyledLink to="portfolio">Portfolio</StyledLink>
          <StyledLink to="about">About</StyledLink>
          <StyledLink to="contact">Contact</StyledLink>
        </Links>
      </Flex>
    </header>
  </Fixed>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
