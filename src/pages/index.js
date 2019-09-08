import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from 'styled-components'
import SEO from '../components/seo'


const Background = styled.div`
  background: #667ecc;
  width: 100vw;
  height: 85vh;
  text-align: center;
`
const Text = styled.h1`
  color: white;
  font-size: 5em;
  padding: 1.5em;
  font-family: 'Oswald', serif;
   @media (max-width: 920px) {
    font-size: 3em;
  }
  @media (max-width: 430px) {
    font-size: 2.5em;
  }
`


export default ({ data }) => {
  return (
    <div>
    <SEO title="Home"/>
    <Layout>
      <Background>
        <Text>Ben Jenkins is a software engineer from Chicago, IL</Text>
      </Background>
    </Layout>
    </div>
  )
}

