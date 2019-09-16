import React from "react"
import { Helmet } from "react-helmet"

class helmet extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="Ben Jenkins Portfolio"></meta>
          <title>Ben Jenkins</title>
          <link rel="canonical" href="https://www.benjenkins.dev/" />
        </Helmet>
      </div>
    )
  }
}

export default helmet
