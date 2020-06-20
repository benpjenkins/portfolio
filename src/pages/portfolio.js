/* eslint-disable prettier */
import React from "react"
import styled from "styled-components"
import reactfx from "../images/reactfx.png"
import stroll from "../images/stroll.png"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Title = styled.h2`
  font-family: Avenir;
`

const Description = styled.h5`
  font-family: Avenir;
`

const P = styled.p`
  font-family: Avenir;
`
const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />

    <Title>Stroll - Developer </Title>

    <Description>
      A React Native app that allows you to create and find walks in your area.
    </Description>

    <img src={stroll} alt="stroll screenshot" />
    <P>
      Stroll's walks focus on attractions and points of interested and can be
      filtered by category. Some of these categories include historical walks,
      architectural walks, scenic walks, and more. Stroll sits on the React
      Native Maps and Google Directions APIs to create a slick and intuitive
      user experience.
    </P>
    <a href="https://github.com/stroll-io/capstone-project">Github</a>
    <br></br>
    <br></br>
    <br></br>

    <Title>React FX - Sole Developer</Title>
    <Description>
      Realtime audio processing emulating electric guitar effects.
    </Description>

    <img src={reactfx} alt="Reactfx screenshot" />
    <P>
      React FX uses React, ToneJS, and Styled Components to replicate the
      experience of using electric guitar effects pedals. I only used function
      components so that I could learn Hooks to manage state and implement a
      custom data layer modeled after Redux.
    </P>
    <a href="https://github.com/benpjenkins/react-fx">Github</a>
    <br></br>
    <a href="https://thirsty-ride-5066a2.netlify.com/">Deployed</a>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </Layout>
)

export default Portfolio
