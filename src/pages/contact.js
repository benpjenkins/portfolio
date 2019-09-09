import React from 'react'
import MainLayout from '../components/mainLayout'
import SEO from "../components/seo"
import styled from "styled-components"

const Form = styled.form `
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
const Button = styled.button`
  border-radius: 15px;
  color: white;
  background-color: #667ecc;
  padding: 1em;
  text-align: center;
  margin: 20px;
  flex: 1;
  &:hover {
    box-shadow: 0px 0px 3px black;
  }
  &:focus {
    outline: 0;
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
const StyledInput = styled(Input)`
  border-radius: 15px;
  color: white;
  background-color: tomato;
  padding: 1em;
  text-align: center;
  margin: 20px;
  flex: 1;
  &:hover {
    box-shadow: 0px 0px 3px black;
  }
  &:focus {
    outline: 0;
  }
`

const contact = () => {
  return (
    <MainLayout>
      <SEO title="Contact" />
      <div>
        <Form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
          <input type="hidden" name="bot-field" />
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
            <Button type="submit">Send</Button>
            <StyledInput type="reset" value="Clear" />
          </Flex>
        </Form>
      </div>
    </MainLayout>
  )
}

export default contact
