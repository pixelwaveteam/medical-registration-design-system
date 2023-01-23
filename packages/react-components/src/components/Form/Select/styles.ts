import * as SelectPrimitive from "@radix-ui/react-select";
import { styled } from "../../../styles";
import { Label } from "../Label";

export const StyledSelectLabel = styled(Label, {
  color: "$gray-600",
  fontSize: "$textSm",
  fontWeight: "$medium",
})

export const StyledSelectTrigger = styled(SelectPrimitive.Trigger, {
  marginTop: "$1",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  height: "$11",
  paddingInline: "$3",
  borderRadius: "$roundedMd",
  border: "1px solid $colors$gray-400",
  fontSize: "$textSm",
  width: "100%",
  gap: "$4",
  transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
  backgroundColor: "White",
  fontFamily: "$default",
  cursor: "pointer",
  color: "$gray-800",

  "&:focus": {
    boxShadow: "0px 0px 0px 2px $colors$DEFAULT",
    borderColor: "$DEFAULt"
  },

  variants: {
    empty: {
      true: {
        color: "$gray-500",
      }
    }
  },
})

export const StyledSelectIconContainer = styled(SelectPrimitive.Icon, {
  ".group:hover": {
    color: "$gray-600",
  }

  //arrumar
})


export const StyledSelectContentContainer = styled(SelectPrimitive.Content, {
  backgroundColor: "White",
  zIndex: 50,
  overflow: "hidden",
  borderRadius: "$rounded",
  marginTop: "$11",
})

export const StyledSelectViewport = styled(SelectPrimitive.Viewport, {
  backgroundColor: "White",
  borderRadius: "$roundedMd",
  border: "1px solid $colors$gray-400",
})
