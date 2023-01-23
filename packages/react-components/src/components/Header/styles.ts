import { css, styled } from "../../styles";

export const StyledHeader = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "$4 $6",
  height: "100%",
  maxHeight: "$sizes$60",
  borderBottom: "1px solid $gray-200",
  fontFamily: "$default",
});

export const StyledHeaderContentContainer = styled("div", {
  display: "flex",
  alignItems: "center",
});

export const StyledCollapseSidebarButton = styled("button", {
  display: "none",
  padding: "$0-5",
  marginRight: "$4",
  color: "$green-100",
  backgroundColor: "$default-brand-800",
  borderRadius: "$roundedFull",
  transition: "colors 200ms ease-in-out",
  cursor: "pointer",
  border: "none",

  "&:hover": {
    opacity: 0.6
  },
  
  "@md": {
    display: "block",
  },
  
  variants: {
    isSidebarCollapsed: {
      true: {
        display: "block",
      },
    }
  }
})

export const StylesCollapseSidebarIcons = css({
  padding: "$0-5",
  width: "$6",
  height: "$6",
  display: "block",
  variants: {
    isMobileSidebarIcon: {
      true: {
        "@md": {
            display: "none"
        }
      },
      false: {
        "@md": {
          display: "block"
        }
      }
    }
  }
});

export const StyledHeaderTitle = styled("h1", {
  display: "none",
  overflow: "hidden",
  fontSize: "$textLg",
  color: "$gray-800",

  "@md": {
      display: "block"
  },
});

export const StyledHeaderLogoutButton = styled("button", {
  color: "$default-brand-800",
  transition: "color 200ms ease-in-out",
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",

  "&:hover": {
    opacity: 0.6
  },
});