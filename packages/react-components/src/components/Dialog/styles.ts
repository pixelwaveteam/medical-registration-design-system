import { styled } from "../../styles";

export const StyledDialogOverlay = styled("div", {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 20,
  backgroundColor: "$colors$gray-900",
  opacity: 0.9,
})


export const StyledDialogPanel = styled("div", {
  position: "fixed",
  zIndex: 50,
  width: "100%",
  maxWidth: "var(--panel-size)",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontFamily: "$default",
  padding: "$6",
  borderRadius: "$roundedMd",
  backgroundColor: "White",
  "&:focus": {
    outline: "none",
  },
  "&:focus-within": {
    boxShadow: "0px 0px 0px 2px $colors$default-brand-400",
  }
})

export const StyledDialogTitle = styled("h2", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "$textLg",
  fontWeight: "$medium",
  color: "$gray-800",
})

export const StyledCloseDialogButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$gray-800",
  transition: "opacity 500ms ease-in-out",
  outline: "none",
  fontSize: "$text2xl",
  lineHeight: "$leadingNone",
  cursor: "pointer",
  backgroundColor: "transparent",
  border: "none",
  padding: "$0",
  borderRadius: "$roundedSm",
  "&:hover": {
    opacity: 0.3,
  },
  "&:focus": {
    boxShadow: "0px 0px 0px 2px $colors$default-brand-800",
  }
})

export const StyledDialogDescription = styled("div", {
  marginTop: "$6",
  fontSize: "$textSm",
  fontWeight: "$regular",
  color: "$gray-600",
  lineHeight: "$leadingRelaxed",
})