import React from "react"
import MainLayout from "../components/mainLayout"
import SEO from "../components/seo"

const success = () => (
  <MainLayout>
    <SEO title="Success" />
    <h1>Your submission has been received!</h1>
  </MainLayout>
)

export default success
