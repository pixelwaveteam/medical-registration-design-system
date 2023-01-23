import { styled } from "../../../../styles";

export const StyledDesktopSidebarContainer = styled("aside", {
  display: "none",
  flexDirection: "column",
  justifyContent: "space-between",
  paddingInline: "$4",
  minHeight: "100vh",
  color: "$cyan-50",
  backgroundColor: "$default-brand-900",
  transitionProperty: "all, align-items",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "150ms, 0",
  overflowX: "hidden",
  overflowY: "auto",
  width: "$64",

  variants: {
    isCollapsed: {
      true: {
        width: "$20"
      }
    }
  },

  "@md": {
    display: "flex"
  },
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