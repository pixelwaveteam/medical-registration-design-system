import { styled } from "../../../../styles"

export const StyledAvatarContainer = styled("div", {
  display: "flex",
  gap: "$4",
  justifyContent: "start",
  alignItems: "center",
  paddingInline: "$2",
  paddingTop: "$4",
  borderTop: "1px solid $colors$gray-400",
  fontFamily: "$default",
})


export const StyledAvatarUsername = styled("span", {
  fontSize: "$textSm",
  fontWeight: "$medium",
  color: "$gray-100",
  textTransform: "uppercase",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
})