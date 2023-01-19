import { styled } from "../../styles";

export const ButtonAddContainer = styled("button", {
  paddingInline: "$4",
  paddingBlock: "$1",
  color: "$DEFAULT",
  fontWeight: "$semibold",
  backgroundColor: "transparent",
  borderRadius: "$roundedFull",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "$2",
  border: "1px solid $DEFAULT",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "$default-brand-50",
  },
  "&:focus": {
    outline: "none",
    boxShadow: "0px 0px 0px 2px $colors$default-brand-50",
  }
})