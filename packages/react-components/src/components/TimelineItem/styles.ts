import { styled } from "../../styles";

export const StyledTimelineItemTitleContainer = styled("span", {
  display: "flex",
  alignItems: "center",
  fontSize: "$textLg",
  color: "White",
  fontFamily: "$default",
})

export const StyledTimelineItemTextContainer = styled("p", {
  paddingLeft: "$10",
  marginTop: "$2",
  fontSize: "$textSm",
  color: "$gray-100",
  fontFamily: "$default",
})