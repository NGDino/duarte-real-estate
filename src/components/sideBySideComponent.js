import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Section, Text, SuperHeading } from "./ui"
import * as styles from "./about-hero.css"

const SideBySideComponent = (props) => {
  return <div>side by side</div>
}
export default SideBySideComponent

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
