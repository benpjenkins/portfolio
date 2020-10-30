import React from 'react'
import { Reset } from 'styled-reset'

const Layout = ({children}) => {
  return (
    <>
      <Reset />
      {children}
    </>
  )
}

export default Layout
