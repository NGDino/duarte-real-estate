// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

import imageType from "./imageType"

import homepage from "./homepage"
import homepageLink from "./homepageLink"
import homepageHero from "./homepageHero"

import serviceCard from "./serviceCard"
import servicesList from "./servicesList"

import sideBySideComponent from "./sideBySideComponent"
import sideBySideList from "./sideBySideList"
import homepageTestimonial from "./homepageTestimonial"
import homepageTestimonialList from "./homepageTestimonialList"
import heroContactCard from "./heroContactCard"

import titleWithText from "./titleWithText"

import navItem from "./navItem"
import navItemGroup from "./navItemGroup"
import socialLink from "./socialLink"
import layoutHeader from "./layoutHeader"
import layoutFooter from "./layoutFooter"
import layout from "./layout"

import page from "./page"

import meetTheTeam from "./meetTheTeam"
import teamProfile from "./teamProfile"
import teamLeadership from "./teamLeadership"

import neighborhoodsPage from "./neighborhoodsPage"
// import neighborhoods from "./neighborhoods"
// import neighborhood from "./neighborhood"
import neighborhoodsHero from "./neighborhoodsHero"

import propertyManagmentPage from "./propertyManagmentPage"
import contactInfo from "./contactInfo"


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  //has everything 
  types: schemaTypes.concat([
    contactInfo,
    homepage,
    imageType,
    homepageLink,
    homepageHero,
    serviceCard,
    servicesList,
    sideBySideComponent,
    sideBySideList,
    homepageTestimonial,
    homepageTestimonialList,
    heroContactCard,
    titleWithText,
    navItem,
    navItemGroup,
    socialLink,
    layoutHeader,
    layoutFooter,
    layout,
    page,
    meetTheTeam,
    teamProfile,
    teamLeadership,
    neighborhoodsPage,
    neighborhoodsHero,
    propertyManagmentPage
  ]),
})
