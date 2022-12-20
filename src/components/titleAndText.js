import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Container,
  FlexList,
  Heading,
  Section,
  Text,
  Box,
  Kicker,
  Space,
} from "./ui"


export default function TitleAndText(props) {
  console.log('titletext', props)
  return (
    <Section>
      <Container width="tight">
        {/* <Box center paddingY={4}>
          {props.kicker && <Kicker>{props.kicker}</Kicker>}
          {props.heading && <Heading as="h1">{props.heading}</Heading>}
          {props.subhead && <Text>{props.subhead}</Text>}
        </Box>
        <FlexList gap={0} variant="center" alignItems="start">
          {props.content.map((profile) => (
            <AboutProfile key={profile.id} {...profile} />
          ))}
        </FlexList> */}
        checky checky
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment TitleWithTextContent on TitleWithText {
    id
    kicker
    title
    description
    }
  }
`
