import { css, styled } from "../../../../styles";

export const StyledLogoContainer = styled("div", {
  display: "flex",
  gap: "$4",
  justifyContent: "start",
  alignItems: "center",
  paddingInline: "$2",
  paddingBlock: "$4",
  borderBottom: "1px solid $colors$gray-400",
  fontFamily: "$default",
})

export const LogoImageStyles = css({
  padding: "$1",
  width: "$8",
  height: "$8",
  backgroundColor: "White",
  borderRadius: "$roundedFull",
  objectFit: "cover",
  objectPosition: "center",
})

export const StyledLogText = styled("span", {
  fontSize: "$textSm",
  fontWeight: "$medium",
  color: "$gray-100",
  textTransform: "uppercase",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
})