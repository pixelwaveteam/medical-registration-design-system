import { styled } from "../../styles"

export const ContainerPageContainer = styled("section", {
  fontFamily: "$default",
  padding: '$4',
  backgroundColor: 'White',
  borderRadius: '$roundedMd',
  boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  '@md': {
      gap: '$6',
      padding: '$8',
  }
})

export const ContainerPageTitle = styled("h1", {
  fontSize: "$textXl",
  "@md": {
    fontSize: "$text2Xl",
  }
})