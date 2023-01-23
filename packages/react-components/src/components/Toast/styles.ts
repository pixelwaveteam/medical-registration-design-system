import { X } from "phosphor-react";
import { css, styled } from "../../styles";

export const StyledToastOuterContainer = styled("div", {
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  top: "$16",
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 50,
  paddingBlock: "$6",
  paddingInline: "$4",
  marginBlock: "$4",
  width: "100%",
  pointerEvents: "none",
  fontFamily: "$default",

  "@sm": {
    alignItems: "end",
    padding: "$6",
  }
})

export const StyledToastContainer = styled("div", {
  display: "flex",
  alignItems: "start",
  overflow: "hidden",
  width: "100%",
  maxWidth: "24rem",
  backgroundColor: "$gray-900",
  borderRadius: "$roundedLg",
  boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  pointerEvents: "auto",
  padding: "$4",
})

export const StyledToastIconContainer = styled("div", {
  flexShrink: 0,
})

export const ToastIconStyles = css({
  height: "$6",
  width: "$6",

  variants: {
    type: {
      success: {
        color: "$green-400",
      },
      error: {
        color:"$red-400"
      }, 
      info: {
        color: "$yellow-200",
      }
    }
  }
})

export const StyledToastContentContainer = styled("div", {
  flex: 1,
  paddingTop: "$0-5",
  marginLeft: "$3",
  width: 0,
})

export const StyledToastTitleContainer = styled("h2", {
  fontSize: "$textSm",
  fontWeight: "$medium",
  color: "$gray-200",
})

export const StyledToastDescriptionContainer = styled("p", {
  marginTop: "$1",
  fontSize: "$textSm",
  color: "$gray-300",
})

export const StyledToastCloseButton = styled("button", {
  display: "inline-flex",
  color: "$gray-200",
  backgroundColor: "$gray-900",
  borderRadius: "$roundedMd",
  flexShrink: 0,
  marginLeft: "$4",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "$gray-800"
  },

  "&:focus": {
    outline: "none",
    boxShadow: "0px 0px 0px 4px $colors$gray-900, 0px 0px 0px 2px $colors$gray-900",
  }
})  

export const StyledToastCloseButtonText = styled("span", {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0",
})

export const StyledToastCloseButtonIcon = styled(X,{
  width: "$5",
  height: "$5"
})