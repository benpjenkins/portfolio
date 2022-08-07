import React from "react"
import { Helmet } from "react-helmet"

class helmet extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet title="Ben Jenkins">
          <title>Ben Jenkins</title>
          <meta charSet="utf-8" />
          <meta name="description" content="Ben Jenkins Portfolio"></meta>
          <link rel="canonical" href="https://www.benjenkins.dev/" />
        </Helmet>
      </div>
    )
  }
}

export default helmet
