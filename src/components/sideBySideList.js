import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Text, Box, Flex } from "./ui"

import { imageTextSwitch, sideImage, sideItem } from "./ui.css"

const ImageDiv = ({ image }) => {
  return (
    <Box width="half" padding={4} >
      <GatsbyImage
        alt="house or something"
        image={getImage(image.gatsbyImageData)}
        className={sideImage}
      />
    </Box>
  )
}
const TextDiv = (props) => {
  return (
    <Box width="half">
      <Text as="h2" variant="h2" center>
        {props.heading}
      </Text>
      <Text center>{props.description}</Text>
    </Box>
  )
}

const SideBySideItem = (props) => {
  return (
    <Box center className={sideItem}>
      {props.idx % 2 === 0 ? (
        <Flex responsive center className={imageTextSwitch}>
          <ImageDiv image={props.image} />
          <TextDiv {...props} />
        </Flex>
      ) : (
        <Flex responsive center>
          <TextDiv {...props} id="text2" />
          <ImageDiv image={props.image} id="image2" />
        </Flex>
      )}
    </Box>
  )
}

const SideBySideList = (props) => {
  return (
    <div>
      {props && (
        <Container width="narrow" center>
          {props.sideBySideComponents.map((info, idx) => (
            <SideBySideItem id={info.id} idx={idx} {...info} />
          ))}
        </Container>
      )}
    </div>
  )
}
export default SideBySideList

export const query = graphql`
  fragment SideBySideComponentContent on SideBySideList {
    id
    text
    sideBySideComponents {
      id
      heading
      description
      image {
        id
        gatsbyImageData
      }
      alt
    }
  }
`
