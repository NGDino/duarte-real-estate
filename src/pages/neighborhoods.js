import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"

export default function Neighborhoods(props) {
  const { neighborhoodsPage } = props.data

  return (
    <Layout {...neighborhoodsPage}>
      {neighborhoodsPage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...componentProps} />
      })}
    </Layout>
  )
}

export const query = graphql`
  {
    neighborhoodsPage {
      id
      title
      description
      image {
        id
        url
      }
      blocks: content {
        id
        blocktype
        ...NeighborhoodsHeroContent
        ...SideBySideComponentContent
      }
    }
  }
`
