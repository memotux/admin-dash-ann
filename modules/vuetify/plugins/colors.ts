const colorTokens = {
  dark: {
    grey: {
      0: "#ffffff", // manually adjusted
      10: "#f6f6f6", // manually adjusted
      50: "#f0f0f0", // manually adjusted
      100: "#e0e0e0",
      200: "#c2c2c2",
      300: "#a3a3a3",
      400: "#858585",
      500: "#666666",
      600: "#525252",
      700: "#3d3d3d",
      800: "#292929",
      900: "#141414",
      1000: "#000000", // manually adjusted
    },
    primary: {
      // blue
      100: "#d3d4de",
      200: "#a6a9be",
      300: "#7a7f9d",
      400: "#4d547d",
      500: "#21295c",
      600: "#191F45", // manually adjusted
      700: "#141937",
      800: "#0d1025",
      900: "#070812",
    },
    secondary: {
      // yellow
      50: "#f0f0f0", // manually adjusted
      100: "#fff6e0",
      200: "#ffedc2",
      300: "#ffe3a3",
      400: "#ffda85",
      500: "#ffd166",
      600: "#cca752",
      700: "#997d3d",
      800: "#665429",
      900: "#332a14",
    },
  },
  light: {}
}

type Colors = keyof typeof colorTokens.dark

colorTokens.light = Object.entries(colorTokens.dark).reduce<Record<Colors, Record<string, unknown>>>((acc, [color, shades]) => {

  const keys = Object.keys(shades)
  const values = Object.values(shades)

  keys.forEach((_, i) => {
    acc[color as Colors][keys[i]] = values[keys.length - i - 1]
  })

  return acc
}, { grey: {}, primary: {}, secondary: {} })

export const genColors = (theme: keyof typeof colorTokens) => {
  return Object.entries(colorTokens[theme]).reduce<Record<string, string>>((acc, cur) => {
    const colors = Object.entries(cur[1])
    colors.forEach((val) => {
      acc[`${cur[0]}-${val[0]}`] = val[1]
    })
    return acc
  }, {})
}