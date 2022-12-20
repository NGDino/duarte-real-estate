import React from "react"
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Kicker,
  Section,
  Subhead,
  Text,
} from "./ui"
import { container } from "./ui.css"

const ContactCard = (props) => {
  const { contactCard } = props
  return (
    <Box width="twothirds" center background="black" isCard={true}>
      <Flex variant="center" responsive gap={2}>
        <Heading as="h1" color="white">
          {contactCard.name && <Kicker color="white">Realtor</Kicker>}
          {contactCard.name}
        </Heading>
        <Box>
          <Avatar
            alt="headshot of David Duarte professional realtor"
            image={contactCard.headshot.gatsbyImageData}
          />
        </Box>
        <Text variant="small" bold color="white">
          {contactCard.licenseNumber}
        </Text>
        <Text variant="statLabel" color="white">
          {contactCard.description}
        </Text>
        <Button to={contactCard.contactButton.href} variant= "reversed">
                  {contactCard.contactButton.text}
        </Button>
      </Flex>
    </Box>
  )
}

export default ContactCard
