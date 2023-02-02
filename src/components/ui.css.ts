import { style, styleVariants } from "@vanilla-extract/css"
import { calc } from "@vanilla-extract/css-utils"
import { theme } from "../theme.css"

const breakpoints = ["40em", "55em", "64em"]

export const media = {
  small: `screen and (min-width: ${breakpoints[0]})`,
  medium: `screen and (min-width: ${breakpoints[1]})`,
  large: `screen and (min-width: ${breakpoints[2]})`,
  infoCard: `screen and (max-width: '770px'`,
  maxSmall: `screen and (max-width: ${breakpoints[0]}`
}

export const container = style({
  maxWidth: theme.sizes.container,
  marginLeft: 0,
  marginRight: 0,
  paddingLeft: theme.space[4],
  paddingRight: theme.space[4],
})

export const sideImage = style({
  borderRadius: '10%'
})

//box width for contact card
export const contactBg = style({
  width: '100%',
  padding: '1em',
  opacity: 0.7,
  // "@media": {
  //   [media.small]: {
  //     paddingLeft: '100px'
  //   }
  // },
":hover":{
  opacity: 1
}
}
)

export const addShadow = style({
  textShadow: '0 3px 3px black'
})


export type Containers = "normal" | "wide" | "narrow" | "tight" | "fullbleed"

export const containers: Record<Containers, string> = styleVariants({
  normal: [container],
  wide: [
    container,
    {
      maxWidth: theme.sizes.wide,
      paddingLeft: 0,
      paddingRight: 0,
    },
  ],
  narrow: [
    container,
    {
      maxWidth: theme.sizes.narrow,

    },
  ],
  tight: [
    container,
    {
      maxWidth: theme.sizes.tight,
    },
  ],
  fullbleed: [
    container,
    {
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: theme.space[4],
      paddingBottom: theme.space[4],
      "@media": {
        [media.medium]: {
          paddingLeft: theme.space[4],
          paddingRight: theme.space[4],
          paddingTop: theme.space[5],
          paddingBottom: theme.space[5],
        },
      },
    },
  ],
})
export const listStyle = style({
  listStyle: 'none'
})

export const flex = style({
  display: "flex",
  alignItems: "center",
})

export type FlexVariants =
  | "wrap"
  | "start"
  | "baseline"
  | "columnStart"
  | "column"
  | "end"
  | "stretch"
  | "spaceBetween"
  | "center"
  | "responsive"

export const flexVariants: Record<FlexVariants, string> = styleVariants({
  wrap: {
    flexWrap: "wrap",
  },
  start: {
    alignItems: "flex-start",
  },
  baseline: {
    alignItems: "baseline",
  },
  columnStart: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  column: {
    flexDirection: "column",
  },
  end: {
    alignItems: "flex-end",
  },
  stretch: {
    alignItems: "stretch",
  },
  spaceBetween: {
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  center: {
    // width: "100%",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  },
  responsive: {
    flexDirection: "column",
    "@media": {
      [media.small]: {
        flexDirection: "row",
      },
    },
  },
})

export const centerMe = style({
  margin: 'auto',
  textAlign: 'center'
})

export const flexGap = styleVariants(theme.space, (gap) => ({ gap }))

export type Widths =
  | "full"
  | "half"
  | "quarter"
  | "third"
  | "twothirds"
  | "fitContent"

export const widths: Record<Widths, string> = styleVariants(
  {
    full: "100%",
    half: "50%",
    quarter: "25%",
    third: "30%",
    twothirds: "33.3333%",
    fitContent: "fit-content",
  },
  (width) => [
    {
      width: "100%",
      "@media": {
        [media.small]: {
          width,
        },
      },
    },
  ]
)

export const contactContainer = style({
  height: '80vh',
  borderStyle: 'solid',
  borderRadius: '10%',
  backgroundColor: 'gray',
  padding:'2em'
  
 
})

export const textAreaStyle = style({
  width: '100%',
  height: '150px',
  padding: '12px 20px',
  boxSizing: 'border-box',
  border: '2px solid #ccc',
  borderRadius: '4px',
  backgroundColor: '#f8f8f8',
  fontSize: '16px',
  resize: 'none'
})

export const inputStyle = style({
  
width: '100%',
backgroundColor: theme.colors.white,
color: theme.colors.gray,
padding: '14px 20px',
margin: '8px 0',
border: '1px solid #ccc',
borderRadius: '4px',
display: 'inline-block',
boxSizing: 'border-box'

})

export const cardContainer = style({
  display: 'table',
  borderSpacing: '10px'
})

export const gradient = style({
  backgroundImage: `linear-gradient(to top, #302f2f, #5A5A5A)`,
  backgroundSize: 'cover',
  width: '100%',
  height: '100%',
  position: 'absolute',
  zIndex: -1,
  top: 0,
  left: 0,
  opacity: 0.7,
})
export const list = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
})

export const padding = styleVariants(theme.space, (padding) => ({ padding }))
export const paddingY = styleVariants(theme.space, (padding) => ({
  paddingTop: padding,
  paddingBottom: padding,
}))
export const marginY = styleVariants(theme.space, (margin) => ({
  marginTop: margin,
  marginBottom: margin,
}))

export const gutter = styleVariants(theme.space, (val: string) => ({
  marginLeft: calc.multiply(val, -1),
  marginRight: calc.multiply(val, -1),
}))

export const radii = styleVariants(theme.radii, (borderRadius) => ({
  overflow: "hidden",
  borderRadius,
}))
export const order = styleVariants({ 0: 0, 1: 1, 2: 2, 3: 3 }, (order) => ({
  "@media": {
    [media.small]: {
      order,
    },
  },
}))
export const box = styleVariants({
  center: {
    display: "flex",
    flexDirection: "column",
    justifyContent:'center',
    alignItems: "center",
    textAlign: "center",
  },
})

export const section = style({
  paddingTop: theme.space[4],
  paddingBottom: theme.space[4],
  "@media": {
    [media.small]: {
      paddingTop: theme.space[5],
      paddingBottom: theme.space[5],
    },
  },
})

export const margin = styleVariants(
  {
    ...theme.space,
    auto: "auto",
  },
  (margin) => ({ margin })
)

export const marginLeft = styleVariants(
  {
    ...theme.space,
    auto: "auto",
  },
  (marginLeft) => ({ marginLeft })
)

export const marginRight = styleVariants(
  {
    ...theme.space,
    auto: "auto",
  },
  (marginRight) => ({ marginRight })
)

export const marginTop = styleVariants(
  {
    ...theme.space,
    auto: "auto",
  },
  (marginTop) => ({ marginTop })
)

export const marginBottom = styleVariants(
  {
    ...theme.space,
    auto: "auto",
  },
  (marginBottom) => ({ marginBottom })
)

export const margin0 = style({ margin: 0 })

export const colors = styleVariants({
  white: [{
    color: theme.colors.white
  }],
  black: [{
    color: theme.colors.black
  }],
  gray: [{
    color: theme.colors.gray
  }]
})

export type TextVariants =
  | "body"
  | "lead"
  | "superHeading"
  | "heading"
  | "subhead"
  | "subheadSmall"
  | "kicker"
  | "caps"
  | "stat"
  | "statLabel"
  | "small"
  | "medium"
  | "mega"
  | "center"
  | "bold"


export const text: Record<TextVariants, string> = styleVariants({
  body: [
    margin0,
    {
      marginBottom: theme.space[3],
      fontSize: theme.fontSizes[2],
      fontWeight: theme.fontWeights.normal,
      lineHeight: theme.lineHeights.text,
      letterSpacing: theme.letterSpacings.normal,
    },
  ],
  lead: [
    margin0,
    {
      marginBottom: theme.space[3],
      fontSize: theme.fontSizes[3],
      fontWeight: theme.fontWeights.normal,
      lineHeight: theme.lineHeights.text,
      letterSpacing: theme.letterSpacings.normal,
    },
  ],
  superHeading: [
    margin0,
    {
      marginTop: theme.space[4],
      marginBottom: theme.space[6],
      fontSize: theme.fontSizes[5],
      fontFamily: theme.fonts.heading,
      fontWeight: theme.fontWeights.extrabold,
      lineHeight: theme.lineHeights.heading,
      letterSpacing: theme.letterSpacings.tight,
      "@media": {
        [media.small]: {
          fontSize: theme.fontSizes[7],
        },
      },
    },
  ],
  heading: [
    margin0,
    {
      marginBottom: theme.space[3],
      fontFamily: theme.fonts.heading,
      fontSize: theme.fontSizes[5],
      fontWeight: theme.fontWeights.extrabold,
      lineHeight: theme.lineHeights.tight,
      letterSpacing: theme.letterSpacings.tight,
      "@media": {
        [media.medium]: {
          fontSize: theme.fontSizes[6],
        },
      },
    },
  ],
  subhead: [
    margin0,
    {
      marginBottom: theme.space[3],
      fontSize: theme.fontSizes[5],
      fontWeight: theme.fontWeights.extrabold,
      lineHeight: theme.lineHeights.tight,
      letterSpacing: theme.letterSpacings.tight,
    },
  ],
  subheadSmall: [
    margin0,
    {
      marginBottom: theme.space[3],
      fontSize: theme.fontSizes[4],
      fontWeight: theme.fontWeights.extrabold,
      lineHeight: theme.lineHeights.tight,
      letterSpacing: theme.letterSpacings.tight,
    },
  ],
  kicker: [
    margin0,
    {
      marginBottom: theme.space[2],
      fontFamily: theme.fonts.mono,
      fontSize: theme.fontSizes[1],
      fontWeight: theme.fontWeights.medium,
      lineHeight: theme.lineHeights.tight,
      letterSpacing: theme.letterSpacings.wide,
      // textTransform: "uppercase",
    },
  ],
  caps: [
    margin0,
    {
      marginBottom: theme.space[2],
      fontSize: theme.fontSizes[1],
      fontWeight: theme.fontWeights.semibold,
      letterSpacing: theme.letterSpacings.wide,
      textTransform: "uppercase",
      fontStyle: "normal",
    },
  ],
  stat: [
    margin0,
    {
      fontFamily: theme.fonts.mono,
      fontSize: theme.fontSizes[6],
      fontWeight: theme.fontWeights.medium,
      lineHeight: theme.lineHeights.tight,
    },
  ],
  statLabel: [
    margin0,
    {
      fontWeight: theme.fontWeights.bold,
      fontSize: theme.fontSizes[4],
      lineHeight: theme.lineHeights.heading,
    },
  ],
  small: [
    margin0,
    {
      fontSize: theme.fontSizes[1],
      marginBottom: theme.space[2],
    },
  ],
  medium: [
    margin0,
    {
      fontSize: theme.fontSizes[3],
      color: theme.colors.white
    },
  ],
  mega: [
    margin0,
    {
      fontSize: "180px",
      fontFamily: theme.fonts.mono,
      lineHeight: theme.lineHeights.solid,
      letterSpacing: theme.letterSpacings.tight,
      "@media": {
        [media.medium]: {
          fontSize: "360px",
        },
      },
    },
  ],
  center: {
    textAlign: "center",
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
})

export const link = style({
  color: "inherit",
  ":hover": {
    color: theme.colors.active,
  },
})

export const navlink = style({
  color: "inherit",
  textDecoration: "none",
  transitionProperty: "color",
  transitionDuration: "0.2s",
  transitionTimingFunction: "ease-in-out",
  ":hover": {
    color: theme.colors.active,
  },
})

export const navButtonlink = style({
  color: "inherit",
  fontSize: "inherit",
  fontFamily: theme.fonts.text,
  padding: 0,
  background: "none",
  border: "none",
  textDecoration: "none",
  transitionProperty: "color",
  transitionDuration: "0.2s",
  transitionTimingFunction: "ease-in-out",
  ":hover": {
    color: theme.colors.active,
    cursor: "pointer",
  },
})

export const ctaLink = style({
  color: "inherit",
  fontWeight: theme.fontWeights.bold,
  ":hover": {
    color: theme.colors.active,
  },
})

export const blockLink = style({
  display: "block",
  color: "inherit",
  textDecoration: "none",
})

const button = style({
  display: "inline-flex",
  textDecoration: "none",
  fontWeight: theme.fontWeights.bold,
  fontSize: theme.fontSizes[2],
  lineHeight: theme.lineHeights.solid,
  paddingTop: theme.space[3],
  paddingBottom: theme.space[3],
  paddingLeft: theme.space[3],
  paddingRight: theme.space[3],
  borderRadius: theme.radii.button,
})

export type ButtonVariants = "primary" | "reversed" | "link" | "linkReversed"

export const buttons: Record<ButtonVariants, string> = styleVariants({
  primary: [
    button,
    {
      color: theme.colors.background,
      backgroundColor: theme.colors.primary,
      ":hover": {
        backgroundColor: theme.colors.active,
        color: theme.colors.black,
      },
      ":focus": {
        backgroundColor: theme.colors.active,
      },
    },
  ],
  reversed: [
    button,
    {
      color: theme.colors.primary,
      backgroundColor: theme.colors.background,
      ":hover": {
        color: theme.colors.background,
        backgroundColor: theme.colors.active,
      },
      ":focus": {
        color: theme.colors.background,
        backgroundColor: theme.colors.active,
      },
    },
  ],
  link: [
    button,
    {
      color: "inherit",
      backgroundColor: "transparent",
      ":hover": {
        backgroundColor: theme.colors.muted,
      },
      ":focus": {
        backgroundColor: theme.colors.muted,
      },
    },
  ],
  linkReversed: [
    button,
    {
      color: "inherit",
      backgroundColor: "transparent",
      ":hover": {
        color: theme.colors.primary,
        backgroundColor: theme.colors.muted,
      },
      ":focus": {
        color: theme.colors.primary,
        backgroundColor: theme.colors.muted,
      },
    },
  ],
})

export type Backgrounds = "primary" | "muted" | "black";

export const backgrounds: Record<Backgrounds, string> = styleVariants({
  primary: {
    color: theme.colors.background,
    backgroundColor: theme.colors.primary,
  },
  black: {
    color: theme.colors.primary,
    backgroundColor: theme.colors.primary,
    // border: theme.border.card,
  },
  muted: {
    color: theme.colors.primary,
    backgroundColor: theme.colors.muted,
  },
  conCard: {
    color: theme.colors.muted,
    backgroundColor: theme.colors.black
  },
  darkGray: {
    color: theme.colors.black,
    backgroundColor: theme.colors.gray
  }
})

export const fullHeight = style({
  height: '100vh',
  "@media": {
    [media.medium]: {
      minHeight: '100vh'
    }
  }
})

export const infoCard = style ({
  display: "block",
  // width: '100%',
  // margin: '5px',
  "@media": {
    [media.small]: {
      borderStyle: 'solid',
      display: 'table-cell',
      boxShadow: '0px 3px 15px' ,

    
    }
  }
})

export const card: any = style ({
  width: '50%',
  marginLeft: 'auto',
  marginRight: 'auto',
  height: '100%',
  padding: theme.space[3],
  opacity: '.8',
  justifyContent: 'center',
  "@media": {
    [media.medium]: {
      display: "block",
      width: '100%',
      paddingLeft: theme.space[4],
      paddingRight: theme.space[4],
      paddingTop: theme.space[5],
      paddingBottom: theme.space[5],
    }
  }
})

export const heroBox = style({
  height: '100%',
})


export const blockquote = style({
  margin: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 0,
  paddingBottom: theme.space[4],
})

export const avatar = style({
  minWidth: 0,
  flexShrink: 0,
  width: theme.sizes.avatar,
  height: theme.sizes.avatar,
  borderRadius: theme.radii.circle,

})

export type LogoSizes = "small" | "medium"

export const logos: Record<LogoSizes, string> = styleVariants({
  small: {
    width: "85px",
    height: "20px",
  },
  medium: {
    maxWidth: "128px",
  },
})

export type IconSizes = "small" | "medium" | "large"

export const icons: Record<IconSizes, string> = styleVariants(
  {
    small: ".8rem",
    medium: "32px",
    large: "64px",
  },
  (size) => ({
    width: size,
    height: size,
    marginBottom: theme.space[3],
  })
)

export const iconLink = style({
  color: theme.colors.text,
  marginRight: theme.space[3],
  ":hover": {
    color: theme.colors.active,
  },
  ":focus": {
    color: theme.colors.active,
  },
})

export const interactiveIcon = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  width: 48,
  height: 48,
})

export const visuallyHidden = style({
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
})

// for debugging only
export const debug = style({
  outline: "1px solid tomato",
})


export const imageTextSwitch = style({
  "@media": {
    [media.small]: {
      
    }
  },
  
  display: 'flex',
  flexDirection: 'column-reverse'
  

})