import * as Tooltip from '@radix-ui/react-tooltip';
import { css, styled } from "../../../../styles";

export const StyledNavLinkListLine = styled("li", {
  listStyle: "none",
  width: "fit-content",
})

export const NavLinkStyles = css({
  display: "flex",
  gap: "$4",
  justifyContent: "start",
  alignItems: "center",
  paddingInline: "$2",
  color: "$gray-100",
  fontFamily: "$default",
  textDecoration: "none",
  cursor: "pointer",

  "&:hover": {
    opacity: 0.8,
  }
})

export const NavLinkIconStyles = css({
  color: "$gray-100",
  width: "$6",
  lineHeight: "$leadingNone",
})


export const StyledNavLinkLabel = styled("span", {
  paddingTop: "$1",
  fontSize: "$textXs",
  fontWeight: "$bold",
  lineHeight: "$leadingHeight",
  textTransform: "uppercase",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  verticalAlign: "baseline",
})

export const StyledTooltipText = styled("span", {
  backgroundColor: "$default-brand-700",
  color: "$gray-50",
  fontFamily: "$default",
  paddingInline: "$5",
  paddingBlock: "$2",
  borderRadius: "$roundedMd"
})

export const StyledTooltipArrow = styled(Tooltip.Arrow, {
  fill: "$default-brand-700",
  width: "$3",
  height: "$2",
})
