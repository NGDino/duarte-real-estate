import React from "react"
import { Avatar, Box, Button, Flex, Kicker, Subhead, Text } from "./ui"
import { contactBg } from "./ui.css"

const ContactCard = (props) => {
  const { contactCard } = props
  return (
    <Box className={contactBg} heroBox center width="half" background="conCard">
      <Flex variant="center" responsive gap={2}>
        <Subhead as="h1" color="white">
          {contactCard.name && <Kicker color="white">Realtor</Kicker>}
          {contactCard.name}
        </Subhead>
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
        <Button to={contactCard.contactButton.href} variant="primary">
          {contactCard.contactButton.text}
        </Button>
      </Flex>
    </Box>
  )
}

export default ContactCard
