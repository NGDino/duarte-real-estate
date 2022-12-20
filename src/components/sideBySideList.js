import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Container,
  Section,
  Text,
  SuperHeading,
  Box,
  Flex,
  FlexList,
} from "./ui"
import * as styles from "./about-hero.css"

const ImageDiv = ({ image }) => {
  return (
    <Box width="half">
      <GatsbyImage
        alt="house or something"
        image={getImage(image.gatsbyImageData)}
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
    <div>
      {props.idx % 2 === 0 ? (
        <Flex  >
          <ImageDiv image={props.image} />
          <TextDiv {...props} />
        </Flex>
      ) : (
        <Flex >
          
          <TextDiv {...props} /> <ImageDiv image={props.image} />
        </Flex>
      )}
    </div>
  )
}

const SideBySideList = (props) => {
  return (
    <div>
      {props && (
        <Container>
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
