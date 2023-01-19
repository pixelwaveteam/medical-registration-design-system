import { colors, fontFamilies, fontSizes, fontWeights, lineHeights, radii, spacing } from '@medical-registration/tokens';
import { createStitches, defaultThemeMap } from '@stitches/react';

export const { 
  createTheme,
  css,
  globalCss,
  keyframes,
  styled,
  theme,
  config,
  getCssText,
  prefix,
  reset,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space"
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space: spacing,
    fonts: fontFamilies,
  },
  media: {
    md: "(min-width: 768px)",
  },
  utils: {
    "dynamic-size": (value: any) => ({
      width: value*0.4 + "px",
      height: value*0.4 + "px"
    })
  }
})