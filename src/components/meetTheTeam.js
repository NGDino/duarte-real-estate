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
  Flex,
  Avatar,
  InfoCard,
  Subhead,
} from "./ui"
import {
  aboutSection,
  aboutTitle,
  avatar,
  card,
  cardContainer,
  cardTeam,
  centerMe,
} from "./ui.css"
import BrandLogo from "./brand-logo"
import Contact from "../pages/contact"
import TestimonialList from "./testimonial-list"

function AboutProfile(props) {
  return (
    <Box width="third" padding={3}>
      <InfoCard
        center
        background="darkGray"
        width="fitContent"
        radius="large"
        padding={3}
        paddingY={4}
      >
        {props.image && (
          <Avatar
            alt="agent image"
            image={getImage(props.image.gatsbyImageData)}
          />
        )}

        {props.name && (
          <Text variant="medium" bold center color="black">
            {props.name}
          </Text>
        )}
        {props.jobTitle && (
          <Text variant="medium" center color="black">
            {props.jobTitle}
          </Text>
        )}
        <Text center>{props.about}</Text>
        <Text variant="small" center color="black">
          {props.mlsId}
        </Text>
      </InfoCard>
    </Box>
  )
}

export default function AboutLeadership(props) {
  return (
    <Section>
      <Container width="narrow" className={centerMe}>
        <Box center paddingY={1}>
          <BrandLogo />
          {props.kicker && <Kicker>{props.kicker}</Kicker>}
          {props.heading && <Heading as="h1">{props.heading}</Heading>}
          {props.subhead && <Text>{props.subhead}</Text>}
        </Box>
        <FlexList gap={2} variant="center" responsive wrap>
          {props.content.map((profile) => (
            <AboutProfile key={profile.id} {...profile} />
          ))}
        </FlexList>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment TeamLeadershipContent on TeamLeadership {
    id
    kicker
    heading
    content {
      id
      name
      jobTitle
      mlsId
      about
      image {
        gatsbyImageData
        alt
      }
    }
  }
`
