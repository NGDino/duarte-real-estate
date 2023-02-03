import * as React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Section,
  FlexList,
  Box,
  Icon,
  InfoCard,
  Text,
  Space,
  Heading,
} from "./ui"
import { centerMe, infoCard } from "./ui.css"

function Benefit(props) {
  return (
    <InfoCard
      width="third"
      radius="large"
      padding={3}
      paddingY={4}
      background="darkGray"
      className={infoCard}
    >
      {/* <Icon size="medium" image /> */}

      <Icon
        alt="buying icon"
        image={props.image.gatsbyImageData}
        size="large"
      />
      <Text variant="subheadSmall" bold>
        {props.heading}
      </Text>
      <Text variant="lead">{props.kicker}</Text>
      <Text variant="body">{props.text}</Text>
    </InfoCard>
  )
}

export default function BenefitList(props) {
  return (
    <Section>
      <Container width="narrow" className={centerMe}>
        <Box center>
          {props.heading && <Heading>{props.heading}</Heading>}
          {props.text && <Text variant="lead">{props.text}</Text>}
        </Box>
        <Space size={3} />
        <Box>
          <FlexList gap={0} variant="center" responsive wrap>
            {props.content.map((benefit) => (
              <Benefit key={benefit.id} {...benefit} />
            ))}
          </FlexList>
        </Box>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment ServicesListContent on ServicesList {
    id
    heading
    text
    kicker
    content {
      id
      heading
      text
      kicker
      image {
        id
        gatsbyImageData
        alt
      }
      links {
        id
        text
        href
      }
    }
  }
`
