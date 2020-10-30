import React from "react"
import { Helmet as ReactHelmet } from "react-helmet"


const Helmet = () => (
  <div className="application">
    <ReactHelmet>
      <meta charSet="utf-8" />
      <meta name="description" content="Ben Jenkins Portfolio"></meta>
      <title>Ben Jenkins</title>
      <link rel="canonical" href="https://www.benjenkins.dev/" />
    </ReactHelmet>
  </div>
)

export default Helmet
