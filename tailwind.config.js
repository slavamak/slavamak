import colors from "tailwindcss/colors"

/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false,
  },
  content: ['./src/**/*.{astro,js,jsx,md,mdx}'],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      yellow: colors.amber,
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "940px",
      lg: "1240px",
      xl: "1440px",
      xxl: "1600px",
      "xs-down": { max: "479px" },
      "sm-down": { max: "767px" },
      "md-down": { max: "939px" },
      "lg-down": { max: "1239px" },
      "xl-down": { max: "1439px" },
      "xxl-down": { max: "1599px" },
    },
    fontSize: {
      inherit: "inherit",
      none: "0",
      xs: "1rem",
      sm: "1.2rem",
      tiny: "1.4rem",
      base: "1.6rem",
      lg: "1.8rem",
      xl: "2.4rem",
      "2xl": "3rem",
      "3xl": "3.2rem",
      "4xl": "5rem",
      "5xl": "5.8rem",
      "6xl": "10rem",
      "7xl": "11rem",
      "8xl": "12rem",
    },
    extend: {
      fontFamily: {
        inherit: "inherit",
        body: ["Hind", "sans-serif"],
        heading: ["Hind", "sans-serif"],
      },
      lineHeight: {
        inherit: "inherit",
      },
      padding: {
        full: "100%",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
}
