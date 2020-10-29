import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const P = styled.p`
  font-family: Avenir;
`
const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Me</h1>
    <P>
      I’m Ben Jenkins, a Fullstack Software Engineer with a Passion for helPing
      others. I have spent my career thus far working as a youth pastor and
      hospital chaplain and also have experience teaching basic coding skills to
      kindergarten through second grade students.
    </P>
    <P>
      While working at a hospital I started learning Javascript to develop a
      tool for myself which reduced my time doing data entry by 50%. While
      working on this project I found that programming incorporated several
      lifelong interests and skills of mine such as technology, creativity, and
      problem solving while still allowing me to care for others.
    </P>
    <P>
      After completing this simple project I decided to pursue software
      engineering so that I could continue helping others and develop tools to
      further enrich their lives.
    </P>
    <P>
      During the summer of 2019 I studied fullstack software engineering at
      Fullstack Academy in Chicago. Upon completing my studies I was chosen for
      their teaching fellowship, a competitive position where graduates spend
      another 13 weeks at Fullstack Academy teaching and mentoring students.
      When I complete the teaching fellowship in December I will be seeking
      employment in the area as a Software Engineer. I am open to any
      opportunities but would be particularly excited to be part of a team
      focused on social good.
    </P>

    <P>
      If you would like to contact me feel free to send me an{" "}
      <a href={"mailto: ben@benjenkins.dev"}>Email</a> or follow me on{" "}
      <a href={"https://twitter.com/benjenkinsdev"}>Twitter</a>.
    </P>
  </Layout>
)

export default About
