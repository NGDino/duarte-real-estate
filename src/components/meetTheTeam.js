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
  Flex,
  Kicker,
  Avatar,
  InfoCard,
  Subhead,
} from "./ui"
import {centerMe, realtorAvatar, realtorCard, realtorDetails, testimonial } from "./ui.css"
import BrandLogo from "./brand-logo";


function AboutProfile(props) {
  return (
    <Box width="" padding={1}>
      <InfoCard
        className={realtorCard}
        background="darkGray"
        width="fitContent"
        radius="large"
        padding={3}
        paddingY={4}
        
      >
      <Flex variant="start" className={testimonial}>
        <Box className={realtorAvatar}>
          {props.image && (
            <Avatar
              alt="agent image"
              image={getImage(props.image.gatsbyImageData)}
            />
          )}

          {props.name && (
            <Text variant="medium" bold color="black">
              {props.name}
            </Text>
          )}
          {props.jobTitle && (
            <Text variant="medium" color="black">
              {props.jobTitle}
            </Text>
          )}
        </Box>
        <Box className={realtorDetails} variant="start">
          <BrandLogo />
          <Subhead variant="medium" color="black">
            Duarte Family Real Estate 
            </Subhead>
            <Text variant="small">Cell: 775-678-8905 </Text>
            <Text variant="small">Office: 866-720-8403</Text>
            <Text variant="small">Fax: 783-263-7482 </Text>
            <Text variant="small">Email: david@realstate.com</Text>
            
            <Text variant="small">Web: www.duarterealstate.comm</Text>
          {/*<Text center>{props.about}</Text>*/}
    
          <Text variant="small" center color="black">
            {props.mlsId}
          </Text>
        </Box>
        </Flex>
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
