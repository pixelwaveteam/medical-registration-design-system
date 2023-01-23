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
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    print: "print",
  },
})