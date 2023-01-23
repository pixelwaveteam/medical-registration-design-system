import { Heart } from "phosphor-react";
import { keyframes, styled } from "../../styles";

const pulse = keyframes({
  "0%, 100%": {
    opacity: 1,
  },

  "50%": {
    opacity: .5,
  }
})

export const StyledFooter = styled("footer", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "baseline",
  fontSize: "$textXs",
  fontFamily: "$default",

  "@md": {
    fontSize: "$textSm"
  },

  variants: {
    theme: {
      dark: {
        color: "$gray-100"
      },
      light: {
        color: "$gray-800"
      },
    }
  },

  "&>span": {
    marginRight: "$1",
  },


  "&>a": {
    fontSize: "$textXs",
    color: "$default-brand-50",

    "&:hover": {
      textDecoration: "underline", 
      textDecorationThickness: "1px"
    },

    "@md": {
      fontSize: "$textSm"
    }
  }
})

export const StyledHeartIcon = styled(Heart , {
  display: "inline-block",
  marginInline: "$1",
  width: "$4",
  height: "$4",
  color: "$red-700",
  animation: `${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,

  "@md": {
    width: "$6",
    height: "$6",
  }
})