import React from "react"
import styled from "styled-components"
import Header from "./header"
import Footer from "./footer"

import "../styles/global-styles.css"

const Layout = ({ children }) => {
  return (
    <>
      <Gradient>
        <Header />
        <main>{children}</main>
        <Footer />
      </Gradient>
    </>
  )
}

const Gradient = styled.div`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
  height: 301pt;

  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

export default Layout
