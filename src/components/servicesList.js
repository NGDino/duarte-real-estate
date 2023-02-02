import * as React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Section,
  FlexList,
  Box,
  Icon,
  InfoCard,
  Heading,
  Text,
  Space,
  Flex,
} from "./ui";
import { boxShadow, centerMe } from "./ui.css";
import * as styles from "./ui.css.ts"

function Benefit(props) {
  return (

        <InfoCard width="third" radius= "large" padding= {3} paddingY= {4} background = "darkGray" >
          {/* <Icon size="medium" image /> */}

          <Icon alt="buying icon" image={props.image.gatsbyImageData}  size="large"/>
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
      <Container width="narrow" className={centerMe} >
        <Box center>
          {props.heading && <Heading>{props.heading}</Heading>}
          {props.text && <Text variant="lead">{props.text}</Text>}
        </Box>
        <Space size={3} />
        <Box>
        <FlexList gap={0} variant="center" responsive wrap className ={styles.cardContainer}>
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
