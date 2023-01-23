import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { styled } from "../../../styles";
import { Label } from "../Label";

export const StyledCheckboxContainer = styled("div", {
  display: "flex",
  alignItems: "start",
  gap: "$1"
})

export const StyledCheckboxRoot = styled(CheckboxPrimitive.Root , {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid $colors$DEFAULT',
  width: '$4',
  minWidth: '20px',
  height: '$5',
  minHeight: '20px',
  borderRadius: "$rounded",
  marginTop: '$1',
  backgroundColor: 'White',

  "&:hover": {
    backgroundColor: "$default-brand-100",
  },
  "&:focus": {
    outline: "none",
    boxShadow: "0px 0px 0px 2px $colors$default-brand-500",
  }
})

export const StyledCheckboxIndicator = styled(CheckboxPrimitive.Indicator, {
  width: "$4",
  height: "$4",
})

export const StyledCheckboxIndicatorIcon = styled(Check, {
  width: "$4",
  height: "$4",
})

export const StyledCheckboxLabel = styled(Label, {
  marginLeft: "$2",
  color: "$blue-700",
  cursor: "pointer",

  "&:hover": {
    color: "$blue-500",
  }
})