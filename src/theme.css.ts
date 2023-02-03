import { createGlobalTheme } from "@vanilla-extract/css"
import { colors } from "./colors.css"

export type SpaceTokens = 0 | 1 | 2 | 3 | 4 | 5 | 6
export type Space = Record<SpaceTokens, string>

const space = {
  0: "0",
  1: ".1em",
  2: ".3em",
  3: ".5em",
  4: "32px",
  5: "64px",
  6: "128px",
}

// add negative margins
Object.assign(
  space,
  Object.entries(space).reduce(
    (a, [key, val]) => ({
      ...a,
      [-1 * Number(key)]: `-${val}`,
    }),
    {}
  )
)

const fontSizes = {
  0: ".8em",
  1: "1em",
  2: "1.1em",
  3: "1.2em",
  4: "1.3em",
  5: "1.8em",
  6: "2.5em",
  7: "4.2em",
  
}

const fontWeights = {
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
}

const fonts = {
  text: 'EB Garamond',
  heading: 'Questrial',
  mono: "Questrial",
}

const lineHeights = {
  text: "1.65",
  heading: "1.25",
  tight: "1.1",
  solid: "1",
}

const letterSpacings = {
  normal: "0",
  tight: "-0.02em",
  wide: "0.08em",
}

const sizes = {
  container: "100%",
  narrow: "80%",
  wide: "100%",
  tight: "848px",
  avatar: "14em",
  testimonialAvatar: "6em",
  navGroupBoxMin: "300px",
  navGroupBoxMax: "400px",
  navIcon: "32px",
  navIconSmall: "30px",
}

const border = {
  card: `8px solid red ${colors.border}`
}

export type Radii = "button" | "large" | "circle"

const radii: Record<Radii, string> = {
  button: "10px",
  large: "24px",
  circle: "99999px",
}

const shadows = {
  large:
    "0px 4px 8px 0px #2E29330A, 0px 4px 14px 0px #2E293314, 0px 8px 24px 0px #473F4F29",
}

export const theme = createGlobalTheme(":root", {
  colors,
  space,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  letterSpacings,
  sizes,
  radii,
  shadows,
  border
})


