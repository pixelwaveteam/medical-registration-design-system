import * as AvatarRadix from "@radix-ui/react-avatar";
import { styled } from "../../styles";

export const StyledAvatarContainer = styled(AvatarRadix.Root, {
  fontFamily: "$default",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  userSelect: "none",
  borderRadius: "$roundedFull",
  height: "var(--avatar-size)",
  width: "var(--avatar-size)",
})

export const StyledAvatarImage = styled(AvatarRadix.Image, {
  height: "100%",
  width: "100%",
  borderRadius: "$roundedFull",
  objectFit: "cover",
  objectPosition: "center"
})

export const StyledAvatarFallbackContainer = styled("div", {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  borderRadius: '$roundedFull',
  backgroundColor: 'White',
  fontWeight: '$semibold',
  color: '$DEFAULT',
  "&>span": {
    alignItems: "center",
    margin: "auto",
  }
})