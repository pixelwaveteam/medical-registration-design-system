import { Eye, EyeSlash } from "phosphor-react";
import { styled } from "../../../styles";

import { Label } from "../Label";

export const StyledInputLabel = styled(Label, {
  color: "$gray-600",
  fontSize: "$textSm",
  fontWeight: "$medium",
  fontFamily: "$default",
})

export const StyledInputContainer = styled("div", {
  display: "flex",
  position: "relative",
  marginTop: "$1",
  borderRadius: "$roundedMd",
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",

  "&>svg": {
    position: "absolute",
    marginTop: "$3",
    marginLeft: "$3",
    width: "$5",
    height: "$5",
    color: "$gray-500",

    ".group:hover": {
      color: "$gray-800",
    }
  }
})

export const StyledInput = styled("input", {
  display: "block",
  width: "100%",
  height: "$11",
  borderRadius: "$roundedMd",
  border: "1px solid transparent",
  borderColor: "$gray-400",
  color: "$gray-800",
  paddingLeft: "$3",
  fontSize: "$textSm",
  fontFamily: "$default",
  backgroundColor: "White",

  '&:not(:disabled):focus': {
    outline: 'none',
    boxShadow: "0px 0px 0px 2px $colors$DEFAULT",
  },

  "&:disabled": {
    cursor: "not-allowed",
  },

  variants: {
    isIcon: {
      true: {
        paddingLeft: "$9",
      }
    }
  }
})


export const StyledInputVisibilityButton = styled("button", {
  display: "flex",
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  top: 0,
  bottom: 0,
  right: 0,
  padding: "$1",
  marginRight: "$3",
  borderRadius: "$roundedLg",
  border: "none",
  backgroundColor: "transparent",

  "&::placeholder": {
    color: "$gray-500",
  },

  '&:focus': {
    outline: 'none',
    boxShadow: "0px 0px 0px 2px $colors$DEFAULT",
  },
});

export const StyledInputNotVisibleIcon = styled(EyeSlash, {
  width: "$5",
  height: "$5",
  fontSize: "xl",
  color: "gray-500",
  cursor: "pointer",

  "&:hover": {
    color: "$gray-600"
  }
})

export const StyledInputVisibleIcon = styled(Eye, {
  width: "$5",
  height: "$5",
  fontSize: "xl",
  color: "gray-500",
  cursor: "pointer",

  "&:hover": {
    color: "$gray-600"
  }
})