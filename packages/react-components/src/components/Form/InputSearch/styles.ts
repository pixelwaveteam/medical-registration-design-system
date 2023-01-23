import { MagnifyingGlass } from "phosphor-react"
import { styled } from "../../../styles"

export const StyledInputSearchContainer = styled("div", {
  position: "relative",
  width: "$60",
  marginTop: "$1",
  borderRadius: "$roundedMd",
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  fontFamily: "$default",
})


export const StyledInputSearchIconContainer = styled("div", {
  pointerEvents: "none",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  display: "flex",
  alignItems: "center",
  paddingLeft: "$3"
})

export const StyledInputSearchIcon = styled(MagnifyingGlass, {
  marginRight: "$3",
  height: "$4",
  width: '$4',
  color: "$gray-500",

  ".group:hover": {
    color: "$gray-800",
  }
})

export const StyledSearchInput = styled("input", {
  display: "block",
  width: "100%",
  height: "$11",
  borderRadius: "$roundedMd",
  border: "1px solid $colors$gray-400",
  color: "$gray-800",
  paddingLeft: "$9",
  fontSize: "$textSm",


  "&::placeholder": {
    color: "$gray-500",
  },

  "&:focus": {
    outline: 'none',
    borderColor: "$DEFAULT",
    boxShadow: "0px 0px 0px 2px $colors$default-brand-50",
  }
})