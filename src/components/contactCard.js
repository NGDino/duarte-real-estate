import React from 'react'
import {
    Box,
    ButtonList,
    Container,
    Flex,
    Heading,
    Kicker,
    Section,
    Subhead,
    Text,
  } from "./ui"

const ContactCard = (props) => {
    const {contactCard} = props
    console.log('contactyyy', contactCard)
  return (
    <Box width="half">
                <Heading as="h1" style={{ color: "white" }}>
              {contactCard.name && <Kicker>{contactCard.name}</Kicker>}
              {contactCard.h1}
            </Heading>
            <Subhead as="h2" style={{ color: "white" }}>
              {contactCard.description}
            </Subhead>
  </Box>
  )
}

export default ContactCard
