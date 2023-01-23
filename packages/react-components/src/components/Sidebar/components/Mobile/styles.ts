import { css, styled } from "../../../../styles";

export const StyledMobileSidebarContainer = styled("aside", {
  position: "absolute",
  zIndex: 10,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  paddingInline: "$4",
  width: "100vw",
  minHeight: "100vh",
  maxHeight: "100vh",
  color: "$cyan-50",
  backgroundColor: "$default-brand-900",
  transitionProperty: "all, align-items",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "150ms, 0",
  overflowX: "hidden",
  overflowY: "auto",

  variants: {
    isCollapsed: {
      true: {
        transform: "translateX(-100%)",
      }
    }
  },

  "@md": {
    display: "none",
  },
})

export const StyledCloseMobileSidebarButton = styled("button", {
  position: "absolute",
  top: "$4",
  right: "$4",
  padding: "$0-5",
  marginRight: "$4",
  color: "$green-100",
  backgroundColor: "$default-brand-800",
  borderRadius: "$roundedFull",
  transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "$default-brand-700"
  }
})

export const CloseMobileSidebarButtonIconStyles = css({
  display: "block",
  padding: "$0-5",
  width: "$6",
  height: "$6",
})

export const StyledTopSidebarSection = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$6",
});

export const StyledNavLinksContainer = styled("nav", {
  display: "flex",
  flexDirection: "column",
  gap: "$6",
})


export const StyledBottomSidebarSection = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  paddingBottom: "$4",
});

export const StyledForgotNavLinkContainer = styled("nav", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
})