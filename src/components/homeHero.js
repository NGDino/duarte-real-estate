import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import { Box, Container, Gradient, Flex, Heading, Kicker, Subhead } from "./ui"
import { addShadow } from "./ui.css"
import ContactCard from "./contactCard"
import { heroSection, homeTitle } from "./homeHero.css"

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
        <Flex gap={2} variant="responsive" className={heroSection}>
          <Box width="half" heroBox center className={homeTitle}>
            <Flex
              variant="center"
              responsive
              gap={2}
              className={addShadow}
              gutter={-3}
            >
              <Heading as="h1" color="white">
                {props.kicker && (
                  <Kicker bold color="white">
                    {props.kicker}
                  </Kicker>
                )}
                {props.h1}
              </Heading>
              <Subhead color="gray">
                {props.subhead}
              </Subhead>
            </Flex>
          </Box>
          {/* <Box width="half" heroBox  center> */}
          <ContactCard contactCard={contactCard} />
          {/* </Box> */}
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
