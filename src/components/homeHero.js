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

  console.log("hero", props)
  console.log("image", getImage(props.image.gatsbyImageData))
  const { contactCard } = props
  const backgroundImage = getImage(props.image.gatsbyImageData)
  const bgImage = convertToBgImage(backgroundImage)
  return (
    <BackgroundImage tag="section" {...bgImage} preserveStackingContext>
      {/* <Gradient/> */}
      
        <Container width="wide">

        <Flex gap={0} variant="responsive">
          <Box width="half">
            <Heading as="h1" style={{ color: "white" }}>
              {props.kicker && <Kicker>{props.kicker}</Kicker>}
              {props.h1}
            </Heading>
            <Subhead as="h2" style={{ color: "white" }}>
              {props.subhead}
            </Subhead>
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
