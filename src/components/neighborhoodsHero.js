import * as React from "react"
import { graphql } from "gatsby"

import { heroSection, shortHero } from "./homeHero.css"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import { getImage } from "gatsby-plugin-image"
import { Gradient, Flex, SuperHeading, Box, Heading } from "./ui"
import * as styles from "./about-hero.css"

export default function NeighborhoodsHero(props) {
  const backgroundImage = getImage(props.image.gatsbyImageData)
  const bgImage = convertToBgImage(backgroundImage)
  return (
<<<<<<< HEAD
    <BackgroundImage tag="section" {...bgImage} preserveStackingContext>
       <Gradient />
       <Flex gap={2} variant="responsive" className={shortHero}>
       <Box width="full" heroBox center>
          <SuperHeading className={styles.aboutHeroHeader} center color = "white">
            {props.heading}
          </SuperHeading>
          {props.text && (
            <Heading className={styles.aboutHeroText} color="white">{props.text}</Heading>
          )}
          <h2>hello</h2>
        </Box>
      </Flex>
    </BackgroundImage>
=======
    <>
      <BackgroundImage tag="section" {...bgImage} preserveStackingContext>
        <Gradient />
        <Flex gap={2} variant="responsive" className={shortHero}>
          <Box width="full" heroBox center>
            <SuperHeading
              className={styles.aboutHeroHeader}
              center
              color="white"
            >
              {props.heading}
            </SuperHeading>
            {props.text && (
              <Heading className={styles.aboutHeroText} color="white">
                {props.text}
              </Heading>
            )}
          </Box>
        </Flex>
      </BackgroundImage>
    </>
>>>>>>> 41354f1fbeab121171d8eb581379f3105f3fa785
  )
}

export const query = graphql`
  fragment NeighborhoodsHeroContent on NeighborhoodsHero {
    id
    heading
    text
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
