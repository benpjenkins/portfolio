import React from "react"
import { Helmet } from "react-helmet"

class helmet extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="Free Web tutorials"></meta>
          <title>Ben Jenkins</title>
          <link rel="canonical" href="https://www.benjenkins.dev/" />
          <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet"></link>
        </Helmet>
      </div>
    )
  }
}

export default helmet
