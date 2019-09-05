import React from "react"
import { Link, graphql } from "gatsby"
import LandingLayout from "../components/landingLayout"
import styled from 'styled-components'


const StyledLink = styled(Link)`
  text-decoration: none;
  color: #f92300;
`
const Background = styled.div`
  background: #f92300;
  width: 100vw;
  height: 85vh;
  text-align: center
`
const Text = styled.h1`
  color: white;
  font-family: "Oswald";
  font-size: 5em;
  padding: 1.5em;
  @media (max-width: 920px) {
    font-size: 3em;
  }
  @media (max-width: 430px) {
    font-size: 2.5em;
  }
`


export default ({ data }) => {
  return (
    <LandingLayout>
      <Background>
        <Text>Ben Jenkins is a software engineer from Chicago, IL</Text>
      </Background>
    </LandingLayout>
  )
}

