import { styled } from "../../styles";

export const StyledPaginationDataInfo = styled("div", {
  display: "none",
  fontSize: "$textSm",
  fontWeight: "$medium",
  color: "$gray-800",
  fontFamily: "$default",

  "@sm": {
    display: "block",
  }
})

export const StyledPaginationContainer = styled("nav", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "White",
})


export const StyledButtonsContainer = styled("div", {
  display: "flex",
  flex: 1,
  justifyContent: "space-between",

  "@sm": {
    justifyContent: "flex-end",
  },
})

export const StyledButton = styled("button", {
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  borderRadius: "$roundedFull",
  border: "1px solid $colors$DEFAULT",
  backgroundColor: "White",
  padding: "$2 $4",
  fontSize: "$textXs",
  fontWeight: "$medium",
  color: "$DEFAULT",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "$gray-50",
  },

  "&:disabled": {
    opacity: 0.3,
    cursor: "not-allowed",
  },
})