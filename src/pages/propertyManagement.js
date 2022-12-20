// import * as React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/layout"
// import * as sections from "../components/sections"
// import Fallback from "../components/fallback"

// export default function PropertyManagmentPage(props) {
//   console.log('just props management', props)
//   const { propertyManagmentPage } = props.data
//   console.log('prop property',propertyManagmentPage)
//   return (
//     <Layout {...propertyManagmentPage}>
//       {propertyManagmentPage.blocks.map((block) => {
//         const { id, blocktype, ...componentProps } = block
//         const Component = sections[blocktype] || Fallback
//         return <Component key={id} {...componentProps} />
//       })}
//     </Layout>
//   )
// }

// export const query = graphql`
//   {
//     propertyManagmentPage {
//       id
//       title
//       description
//       blocks: content {
//         id
//         blocktype
//         ...NeighborhoodsHeroContent
//         ...SideBySideComponentContent
//       }
//     }
//   }
// `
