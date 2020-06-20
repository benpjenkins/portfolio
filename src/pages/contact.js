import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  text-align: center;
`
const Input = styled.input`
  width: 300px;
  @media (min-width: 600px) {
    width: 400px;
  }
  @media (min-width: 1000px) {
    width: 600px;
  }
`
const TextArea = styled.textarea`
  width: 300px;
  @media (min-width: 600px) {
    width: 400px;
  }
  @media (min-width: 1000px) {
    width: 600px;
  }
`

const Submit = styled.button`
  font-family: apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica,
    sans-serif;
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 7rem;
  height: 3.5rem;
  background: #667ecc;
  color: white;
  &:hover {
    color: #667ecc;
    background: white;
    border: 1px solid #667ecc;
  }
`
const Flex = styled.div`
  display: flex;
  width: 300px;
  align-self: center;
  /* @media (min-width: 600px) {
    width: 400px;
  }
  @media (min-width: 1000px) {
    width: 600px;
  } */
`
const Clear = styled.button`
  font-family: apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica,
    sans-serif;
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 7rem;
  height: 3.5rem;
  background: tomato;
  color: white;
  &:hover {
    color: tomato;
    background: white;
    border: 1px solid tomato;
  }
`
const P = styled.h3`
  text-align: center;
`

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <P>
        Have questions? Interested in working together? Feel free to reach out!
      </P>
      <div>
        <Form
          method="post"
          data-netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
          action="/success"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <label>
            Name
            <br />
            <Input type="text" name="name" id="name" />
          </label>
          <label>
            Email
            <br />
            <Input type="email" name="email" id="email" />
          </label>
          <label>
            Subject
            <br />
            <Input type="text" name="subject" id="subject" />
          </label>
          <label>
            Message
            <br />
            <TextArea name="message" id="message" rows="5" />
          </label>
          <Flex>
            <Submit type="submit">Send</Submit>
            <Clear type="reset">Clear</Clear>
          </Flex>
        </Form>
      </div>
    </Layout>
  )
}

export default contact
