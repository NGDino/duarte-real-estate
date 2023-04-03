import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"


const MobileBottomCta = (props) => {
    const data = useStaticQuery(graphql`
    query {
        allContactInfo(filter: { name: {eq: "Main"}}) {
           nodes {
            name
            email
            phone
            socialLinks{
                service
                username
            }
           } 
       }
    }
    `)
    console.log(data)
  return (
  
    <div>
       TESTING TESTING 123
    </div>
   
  )
}

export default MobileBottomCta

