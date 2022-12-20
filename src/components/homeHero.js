import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import {
  Box,
  ButtonList,
  Container,
  Gradient,
  Flex,
  Heading,
  Kicker,
  Section,
  Subhead,
  Text,
} from "./ui"
import ContactCard from "./contactCard"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

export default function HomeHero(props) {
  const { contactCard } = props
  const backgroundImage = getImage(props.image.gatsbyImageData)
  const bgImage = convertToBgImage(backgroundImage)
  return (
    <BackgroundImage tag="section" {...bgImage} preserveStackingContext>
      <Gradient />

      <Container width="wide">
        <Flex gap={0} variant="responsive">
          <Box width="half" heroBox center>
            <Flex variant="center" responsive gap={0}>
              <Heading as="h1" color="white">
                {props.kicker && (
                  <Kicker bold color="black">
                    {props.kicker}
                  </Kicker>
                )}
                {props.h1}
              </Heading>
              <Subhead color="gray" as="h2">
                {props.subhead}
              </Subhead>
            </Flex>
          </Box>
          <ContactCard contactCard={contactCard} />
        </Flex>
      </Container>
    </BackgroundImage>
  )
}

export const query = graphql`
  fragment HomepageHeroContent on HomepageHero {
    id
    kicker
    h1: heading
    subhead
    text
    image {
      id
      gatsbyImageData
      alt
    }
    contactCard {
      id
      name
      licenseNumber
      description
      contactButton {
        text
        href
      }
      headshot {
        id
        gatsbyImageData
        alt
        url
      }
    }
  }
`
