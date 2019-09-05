import React from "react"
import { Link } from "gatsby"
// import Header from "../components/header"

import Layout from "../components/layout"
import SEO from "../components/seo"
const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Me</h1>
    <p>
      I’m Ben Jenkins, a Fullstack Software Engineer with a passion for helping
      other. I have spent my career thus far working as a youth pastor and
      hospital chaplain and also have experience teaching basic coding skills to
      kindergarten through second grade students.
    </p>
    <p>
      While working at a hospital I started learning Javascript to develop a
      tool for myself which reduced my time doing data entry by 50%. While
      working on this project I found that programming incorporated several
      lifelong interests and skills of mine such as technology, creativity, and
      problem solving while still allowing me to care for others.
    </p>
    <p>
      After completing this simple project I decided to pursue software
      engineering so that I could continue helping others and develop tools to
      further enrich their lives.
    </p>
    <p>
      I am currently studying Fullstack Software Engineering at Fullstack
      Academy in Chicago. When I am done with this program in September I will
      be seeking employment in the area as a Software Engineer. I am open to any
      opportunities but would be particularly excited to be part of a team
      focused on social good.
    </p>

    <p>
      If you would like to contact me feel free to send me an{" "}
      <a href={"mailto: ben@benjenkins.dev"}>Email</a> or follow me on{" "}
      <a href={"https://twitter.com/benjenkinsdev"}>Twitter</a>.
    </p>
  </Layout>
)

export default About