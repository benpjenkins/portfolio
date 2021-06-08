import React from "react"
import styled, { createGlobalStyle } from "styled-components"

const Container = styled.div`
  background-color: #4287f5;
  height: 100vh;
  display: flex;
  align-items: center;
`

const P = styled.p`
  color: white;
  font-family: "roboto";
  font-size: 2rem;
  padding: 5%;
`

const A = styled.a`
  color: white;
  font-family: "roboto";
`

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`

const Home = ({ data }) => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <P>
          This site is currently being redesigned. If you would like to contact
          me in the meantime reach out to my{" "}
          <A href="mailto:ben@benjenkins.dev">email</A>.
        </P>
      </Container>
    </>
  )
}

export default Home
