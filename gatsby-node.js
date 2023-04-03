const sanityBlockContentToHTML = require("@sanity/block-content-to-html")

exports.createSchemaCustomization = async ({ actions }) => {
  actions.createFieldExtension({
    name: "blocktype",
    extend(options) {
      return {
        resolve(source) {
          // capitalize
          const type = source._type
          const cap = type.charAt(0).toUpperCase() + type.slice(1)
          return cap
        },
      }
    },
  })

  actions.createFieldExtension({
    name: "sanityBlockContent",
    args: {
      fieldName: "String",
    },
    extend(options) {
      // console.log('options', options)
      return {
        resolve(source) {
          const html = sanityBlockContentToHTML({
            blocks: source[options.fieldName],
          })
          return html
        },
      }
    },
  })

  actions.createFieldExtension({
    name: "navItemType",
    args: {
      name: {
        type: "String!",
        defaultValue: "Link",
      },
    },
    extend(options) {
      return {
        resolve() {
          switch (options.name) {
            case "Group":
              return "Group"
            default:
              return "Link"
          }
        },
      }
    },
  })

  actions.createTypes(/* GraphQL */ `
    interface HomepageBlock implements Node {
      id: ID!
      blocktype: String
    }

    interface NeighborhoodsPage implements Node {
      id: ID!
      title: String
      description: String
      image: HomepageImage
      content: [HomepageBlock]
    }

    interface HomepageHero implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String!
      kicker: String
      subhead: String
      image: HomepageImage
      text: String
      contactCard: HeroContactCard
    }

    interface HeroContactCard implements Node {
      id: ID!
      blocktype: String
      headshot: HomepageImage
      name: String
      licenseNumber: String
      description: String
      contactButton: HomepageLink
    }

    interface HomepageLink implements Node {
      id: ID!
      href: String
      text: String
    }

    interface HeaderNavItem implements Node {
      id: ID!
      navItemType: String
    }

    interface NavItem implements Node & HeaderNavItem {
      id: ID!
      navItemType: String
      href: String
      text: String
      icon: HomepageImage
      description: String
    }

    interface ServicesList implements Node & HomepageBlock {
      id: ID!
      heading: String
      blocktype: String
      kicker: String
      text: String
      content: [ServiceCard]
    }

    interface ServiceCard implements Node {
      id: ID!
      heading: String
      kicker: String
      image: HomepageImage
      text: String
      links: [HomepageLink]
    }

    interface SideBySideList implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      text: String
      sideBySideComponents: [SideBySideComponent]
    }

    interface SideBySideComponent implements Node {
      id: ID!
      alt: String
      heading: String
      description: String
      image: HomepageImage
    }

    interface HomepageImage implements Node {
      id: ID!
      alt: String
      gatsbyImageData: GatsbyImageData
      url: String
    }

    interface HomepageLogo implements Node {
      id: ID!
      image: HomepageImage
      alt: String
    }

    interface HomepageTestimonial implements Node {
      id: ID!
      quote: String
      source: String
      avatar: HomepageImage
    }

    interface HomepageTestimonialList implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      kicker: String
      heading: String
      content: [HomepageTestimonial]
    }

    interface Homepage implements Node {
      id: ID!
      title: String
      description: String
      image: HomepageImage
      content: [HomepageBlock]
    }

    interface LayoutHeader implements Node {
      id: ID!
      navItems: [HeaderNavItem]
      cta: HomepageLink
    }

    enum SocialService {
      TWITTER
      FACEBOOK
      INSTAGRAM
      YOUTUBE
      LINKEDIN
      GITHUB
      DISCORD
      TWITCH
    }

    interface SocialLink implements Node {
      id: ID!
      username: String!
      service: SocialService!
    }

    interface LayoutFooter implements Node {
      id: ID!
      links: [HomepageLink]
      meta: [HomepageLink]
      socialLinks: [SocialLink]
      copyright: String
    }

    interface Layout implements Node {
      id: ID!
      header: LayoutHeader
      footer: LayoutFooter
    }

    interface NeighborhoodsHero implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String
      text: String
      image: HomepageImage
    }

    interface TeamProfile implements Node {
      id: ID!
      image: HomepageImage
      name: String
      jobTitle: String
      about: String
      mlsId: String
    }

    interface TeamLeadership implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String
      kicker: String
      content: [TeamProfile]
    }

    interface MeetTheTeam implements Node {
      id: ID!
      title: String
      description: String
      image: HomepageImage
      content: [HomepageBlock]
    }

    interface Page implements Node {
      id: ID!
      slug: String!
      title: String
      description: String
      image: HomepageImage
      html: String!
    }

    interface PropertyManagmentPage implements Node {
      id: ID!
      title: String
      description: String
      content: [HomepageBlock]
    }

    interface ContactInfo implements Node {
      id: ID!
      name: String
      phone: String
      email: String
      socialLinks: [SocialLink]
    }
  `)

  
  actions.createTypes(/* GraphQL */ `
    type SanityHomepageLink implements Node & HomepageLink {
      id: ID!
      href: String
      text: String
    }

    type SanityNeighborhoodsPage implements Node & NeighborhoodsPage {
      id: ID!
      title: String
      description: String
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
      content: [HomepageBlock]
    }

    type SanityHeroContactCard implements Node & HeroContactCard @dontInfer {
      id: ID!
      blocktype: String @blocktype
      headshot: HomepageImage @link(by: "id", from: "headshot.asset._ref")
      name: String
      licenseNumber: String
      description: String
      contactButton: HomepageLink @link
    }

    type SanityNeighborhoodsHero implements Node & NeighborhoodsHero & HomepageBlock {
      id: ID!
      blocktype: String @blocktype
      heading: String!
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
      text: String
    }

    type SanityServicesList implements Node & ServicesList & HomepageBlock
      @dontInfer {
      id: ID!
      heading: String
      blocktype: String @blocktype
      kicker: String
      text: String
      content: [ServiceCard]
    }

    type SanityServiceCard implements Node & ServiceCard {
      id: ID!
      heading: String
      kicker: String
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
      text: String
      links: [HomepageLink]
    }

    type SanitySideBySideList implements Node & SideBySideList & HomepageBlock {
      id: ID!
      blocktype: String @blocktype
      text: String
      sideBySideComponents: [SideBySideComponent]
    }

    type SanitySideBySideComponent implements Node & SideBySideComponent {
      id: ID!
      alt: String
      heading: String
      description: String
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
    }

    type SanityImageAsset implements Node & HomepageImage {
      id: ID!
      alt: String
      gatsbyImageData: GatsbyImageData
      url: String
    }

    type SanityHomepage implements Node & Homepage {
      id: ID!
      title: String
      description: String
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
      content: [HomepageBlock] @link
    }

    type SanityHomepageHero implements Node & HomepageHero & HomepageBlock {
      id: ID!
      _type: String
      blocktype: String @blocktype
      heading: String!
      kicker: String
      subhead: String
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
      text: String
      contactCard: HeroContactCard
    }

    type SanityHomepageTestimonial implements Node & HomepageTestimonial {
      id: ID!
      quote: String
      source: String
      avatar: HomepageImage @link(by: "id", from: "avatar.asset._ref")
    }

    type SanityHomepageTestimonialList implements Node & HomepageTestimonialList & HomepageBlock {
      id: ID!
      blocktype: String @blocktype
      kicker: String
      heading: String
      content: [HomepageTestimonial]
    }

    type SanityNavItem implements Node & NavItem & HeaderNavItem {
      id: ID!
      navItemType: String @navItemType(name: "Link")
      href: String
      text: String
      icon: HomepageImage @link(by: "id", from: "icon.asset._ref")
      description: String
    }

    type SanityLayoutHeader implements Node & LayoutHeader {
      id: ID!
      navItems: [HeaderNavItem] @link(from: "navItems._ref")
      cta: HomepageLink @link
    }

    type SanitySocialLink implements Node & SocialLink {
      id: ID!
      username: String!
      service: SocialService!
    }

    type SanityLayoutFooter implements Node & LayoutFooter {
      id: ID!
      links: [HomepageLink] @link
      meta: [HomepageLink] @link
      socialLinks: [SocialLink] @link
      copyright: String
    }

    type SanityLayout implements Node & Layout {
      id: ID!
      header: LayoutHeader
      footer: LayoutFooter
    }

    type SanityPage implements Node & Page {
      id: ID!
      slug: String! @proxy(from: "slug.current")
      title: String
      description: String
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
      html: String! @sanityBlockContent(fieldName: "content")
    }

    type SanityMeetTheTeam implements Node & MeetTheTeam {
      id: ID!
      title: String
      description: String
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
      content: [HomepageBlock]
    }

    type SanityContactInfo implements Node & ContactInfo {
        id: ID!
        name: String
        phone: String
        email: String
        socialLinks: [SocialLink]
    }

    type SanityTeamProfile implements Node & TeamProfile {
      id: ID!
      name: String
      jobTitle: String
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
      about: String
      mlsId: String
    }

    type SanityTeamLeadership implements Node & TeamLeadership & HomepageBlock
      @dontInfer {
      id: ID!
      heading: String
      blocktype: String @blocktype
      kicker: String
      content: [TeamProfile]
    }

    type SanityPropertyManagmentPage implements Node & PropertyManagmentPage {
      id: ID!
      title: String
      description: String
      content: [HomepageBlock]
    }
  `)
}

// type SanityNavItemGroup implements Node & NavItemGroup & HeaderNavItem {
//   id: ID!
//   navItemType: String @navItemType(name: "Group")
//   name: String
//   navItems: [NavItem] @link
// }


