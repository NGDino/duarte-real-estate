import React, { useState } from "react"
import Head from "../components/head"
import Header from "../components/header"
import Footer from "../components/footer"
import { navigate } from "gatsby-link"
import { Box, Heading, Section, Text } from "../components/ui"
import {
  contactContainer,
  inputStyle,
  textAreaStyle,
  buttons,
} from "../components/ui.css"
import ContactCard from "../components/contactCard"
import BrandLogo from "../components/brand-logo"

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Contact = () => {
  const [formState, setFormState] = useState({})

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("sent")
    const form = event.target
    //     fetch("/", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //         body: encode({
    //             "form-name": form.getAttribute("name"),
    //             ...formState,
    //         }),
    //     })
    //         .then(() => navigate(form.getAttribute("action")))
    //         .catch((error) => alert(error));
  }
  return (
    <>
      <Header />

      <Section padding={4}>
        <Box className={contactContainer} width="half">
          <BrandLogo />
          <Heading center>Contact us</Heading>
          <Text>
            Discover a place you'll love to live. Connect with us for any
            questions and inquiries and never miss latest updates and sales! We are more than happy to serve you!
          </Text>
          <form onSubmit={handleSubmit}>
            <label>
              <Text variant="subhead">Name:</Text>
              <input type="text" className={inputStyle} />
            </label>

            <label>
              <Text variant="subhead">Email:</Text>

              <input type="email" className={inputStyle} />
            </label>

            <label>
              <Text variant="subhead">How can we help you?</Text>

              <textarea className={textAreaStyle} />
            </label>
            <button className={buttons["primary"]}>Submit</button>
          </form>
        </Box>

        <Footer />
      </Section>
    </>
  )
}

export default Contact
