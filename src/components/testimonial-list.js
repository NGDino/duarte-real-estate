import * as React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Section,
  Heading,
  Kicker,
  Flex,
  Box,
  FlexList,
  Blockquote,
  Text,
  Avatar,
} from "./ui"
import { testimonial, testimonialAvatar, testimonialContainer } from "./ui.css"

function Testimonial(props) {
  return (
    <Flex variant="start" className={testimonial}>
      {props.avatar && (
        <Avatar alt={props.avatar.alt} image={props.avatar.gatsbyImageData} className={testimonialAvatar}/>
      )}
      <Blockquote>
        <Text as="p" variant="lead">
          {props.quote}
        </Text>
        <figcaption>
          <Text as="cite" bold variant="caps">
            {props.source}
          </Text>
        </figcaption>
      </Blockquote>
    </Flex>
  )
}

export default function TestimonialList(props) {
  return (
    <Section className={testimonialContainer}>
      <Container width="wide">
        <Box center padding={3}>
          <Heading as="h2">{props.kicker && <Kicker>{props.kicker}</Kicker>}</Heading>
        </Box>
        <FlexList gutter={3} variant="start" responsive wrap>
          {props.content.map((testimonial, index) => (
            <Box as="li" key={testimonial.id + index} width="half" padding={3}>
              <Testimonial {...testimonial} />
            </Box>
          ))}
        </FlexList>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageTestimonialListContent on HomepageTestimonialList {
    id
    kicker
    heading
    content {
      id
      quote
      source
      avatar {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
