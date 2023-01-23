import { Check } from "phosphor-react"
import { styled } from "../../styles"

export const StyledStepItemContainer = styled("div", {
  position: "relative",
  zIndex: 10,
  display: "flex",
  justifyContent: "end",
  flex: 1,
  fontSize: "$textSm",
  fontWeight: "$bold",
  fontFamily: "$default",
  lineHeight: "1.125rem",
  color: "White",

  "&:first-child": {
    flex: "none",

  },

  "@print": {
    display: "none",
  },

  "&::after": {
    content: "",
    position: "absolute",
    right: 0,
    top: "50%",
    height: "$0-5",
    width: "100%",
  },

  variants: {
    isOutOfFocus: {
      true: {
        "&::after": {
          backgroundColor: "$default-brand-500"
        }
      },

      false: {
        "&::after": {
          backgroundColor: "$gray-300"
        }
      },
    }
  }
})


export const StyledStepItemStatusIndicator = styled("div", {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 10,
  height: "$5",
  width: "$5",
  borderRadius: "$roundedFull",
  padding: "$0-5",
  
  variants: {
    isOutOfFocus: {
      true: {
        backgroundColor: "$default-brand-500",
      },
      false: {
        backgroundColor: "$gray-300",
      }
    }
  }
})


export const StyledStepItemIcon = styled(Check, {
  color: "White",
})

export const StyledStepItemLabel = styled("span", {
  visibility: "hidden",
  position: "absolute",
  bottom: "calc(-1*$6)",
  whiteSpace: "nowrap",
  fontSize: "$textXs",
  fontWeight: "$semibold",
  textTransform: "uppercase",
  color: "$gray-600",

  "@md": {
    visibility: "visible",
  },

  variants: {
    isCurrent: {
      true: {
        color:"$default-brand-500"
      }
    },
    isCompletedButNotCurrent: {
      true: {
        color: "$gray-600"
      },
      false: {
        color: "$gray-300"
      }
    }
  }
})