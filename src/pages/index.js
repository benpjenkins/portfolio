import React from "react"
import Layout from "../components/layout"
import styled from 'styled-components'
import SEO from '../components/seo'
import Ben from '../images/ben.jpeg'


const Background = styled.div`
  background: #667ecc;
  width: 100vw;
  height: 90vh;
  text-align: center;
  @media (min-width: 800px) {
    display:flex
  }
`
const Text = styled.h1`
  color: white;
  font-size: 4em;
  padding: 1em;
  font-family: 'Oswald', serif;
  flex: 2;
   @media (max-width: 800px) {
    font-size: 2.5em;
  }
  @media (min-width: 800px) {
    margin-top: 7%;
  }
  @media (max-width: 430px) {
    font-size: 2em;
  }
`

const ProfilePic = styled.img`
  border-radius: 50%;
  width: 40%;
  height: auto;
  margin-top: 10%;
  flex: 1;

  @media (max-width: 430px) {
    width: 35%;
  }
  @media (min-width: 800px) {
    width: 1%;
    height: auto;
    margin-left: 5%;
    align-self: center;
    flex: 1 1 auto;
    margin-top: 0%
  }
`


export default ({ data }) => {
  return (
    <div>
    <SEO title="Home"/>
    <Layout>
      <Background>
        <ProfilePic src={Ben} alt="Ben's headshot"></ProfilePic>
        <Text>Ben Jenkins is a software engineer from Chicago, IL</Text>
      </Background>
    </Layout>
    </div>
  )
}

