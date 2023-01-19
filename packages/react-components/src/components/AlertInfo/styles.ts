import { X } from "phosphor-react";
import { styled } from "../../styles";

export const AlertInfoContainer = styled("div", {
  borderRadius: "$roundedMd",
  padding: "$4",
  display: "flex",
  fontFamily: "$default",

  variants: {
    typeOfAlert: {
      success: {
        backgroundColor: "$green-100"
      },
      error: {
        backgroundColor: "$red-100"
  
      },
      info: {
        backgroundColor: "$blue-100"
  
      },
      warning: {
        backgroundColor: "$yellow-100"
      }
    }
  }
});

export const AlertInfoIconContainer = styled("div", {
  flexShrink: 0,
  height: "$6",
  width: "$6",

  variants: {
    typeOfAlert: {
      success: {
        color: "$green-600"
      },
      error: {
        color: "$red-600"
  
      },
      info: {
        color: "$blue-600"
  
      },
      warning: {
        color: "$yellow-600"
      }
    }
  }
});

export const AlertInfoContentContainer = styled("section", {
  marginLeft: "$3",
  width: "100%",
});

export const AlertInfoContentTitle = styled("h3", {
  fontSize: "$textSm",
  fontWeight: "$medium",

  variants: {
    typeOfAlert: {
      success: {
        color: "$green-800"
      },
      error: {
        color: "$red-800"
      },
      info: {
        color: "$blue-800"
  
      },
      warning: {
        color: "$yellow-800"
      }
    }
  }
});

export const AlertInfoContentDescription = styled("p", {
  fontSize: "$textSm",
  marginTop: "$2",

  variants: {
    typeOfAlert: {
      success: {
        color: "$green-700"
      },
      error: {
        color: "$red-700"
      },
      info: {
        color: "$blue-700"
  
      },
      warning: {
        color: "$yellow-700"
      }
    }
  }
});

export const CloseAlertInfoContainer = styled("div", {
  marginLeft: "auto",
  paddingLeft: "$3",

  "&>div": {
    marginInline: "calc(-1*$1.5)",
    marginBlock: "calc(-1*$1.5)",
  }
});

export const CloseAlertInfoButton = styled("button", {
  display: 'inline-flex',
  borderRadius: "$roundedMd",
  border: "none",
  padding: "$1-5",
  cursor: "pointer",

  '&:focus': {
    outline: 'none',
  },

  "&>span": {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    borderWidth: "0"
  },

  variants: {
    typeOfAlert: {
      info: {
        $$currentBackgroundColor: "$colors$blue-50",
        backgroundColor: "$$currentBackgroundColor",
        color: "$blue-500",
        '&:hover': {
          backgroundColor: "$blue-200",
        },
        '&:focus': {
          boxShadow: "0px 0px 0px 2px $colors$blue-600, 0px 0px 0px 2px $$currentBackgroundColor",
        },
      },
      success: {
        $$currentBackgroundColor: "$colors$green-50",
        backgroundColor: "$$currentBackgroundColor",
        color: "$green-500",
        '&:hover': {
          backgroundColor: "$green-200",
        },
        '&:focus': {
          boxShadow: "0px 0px 0px 2px $colors$green-600, 0px 0px 0px 2px $$currentBackgroundColor",
        },
      },
      error: {
        $$currentBackgroundColor: "$colors$red-50",
        backgroundColor: "$$currentBackgroundColor",
        color: "$red-500",
        '&:hover': {
          backgroundColor: "$red-200",
        },
        '&:focus': {
          boxShadow: "0px 0px 0px 2px $colors$red-600, 0px 0px 0px 2px $$currentBackgroundColor",
        },
      },
      warning: {
        $$currentBackgroundColor: "$colors$yellow-50",
        backgroundColor: "$$currentBackgroundColor",
        color: "$yellow-500",
        '&:hover': {
          backgroundColor: "$yellow-200",
        },
        '&:focus': {
          boxShadow: "0px 0px 0px 2px $colors$yellow-600, 0px 0px 0px 2px $$currentBackgroundColor",
        },
      },
    }
  }
});

export const CloseAlertInfoButtonIcon = styled(X , {
  height: "$5",
  width: "$5",
})