// import * as React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/layout"
// import * as sections from "../components/sections"
// import Fallback from "../components/fallback"

// export default function Team(props) {
//   const { meetTheTeam } = props.data
//   console.log(meetTheTeam)
//   return (
//     <Layout {...meetTheTeam}>
//       {meetTheTeam.blocks.map((block) => {
//         const { id, blocktype, ...componentProps } = block
//         const Component = sections[blocktype] || Fallback
//         return <Component key={id} {...componentProps} />
//       })}
//     </Layout>
//   )
// }

// export const query = graphql`
//   {
//     meetTheTeam {
//       id
//       title
//       description
//       image {
//         id
//         url
//       }
//       blocks: content {
//         id
//         blocktype
//         ...NeighborhoodsHeroContent
//         ...TeamLeadershipContent
//       }
//     }
//   }
// `