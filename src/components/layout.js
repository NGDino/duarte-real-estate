import * as React from "react"
import Header from "./header"
import Footer from "./footer"
import Head from "./head"
import "../styles.css"
import MobileBottomCta from "./mobileBottomCta"

const Layout = (props) => {
  return (
    <>
      <Head {...props} />
      <Header />
      {props.children}
      <MobileBottomCta/>
      <Footer />
    </>
  )
}

export default Layout
