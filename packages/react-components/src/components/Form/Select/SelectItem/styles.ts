import * as SelectPrimitive from "@radix-ui/react-select";
import { styled } from "../../../../styles";

export const StyledSelectItem = styled(SelectPrimitive.Item, {
  display: "flex",
  alignItems: "center",
  height: "$11",
  paddingInline: "$3",
  justifyContent: "space-between",
  flexDirection: "row",
  color: "$gray-800",
  fontSize: "$textSm",
  cursor: "pointer",
  fontFamily: "$default",

  "&:hover": {
    backgroundColor: "$gray-100",
  },

  "&[data-disabled]": {
    cursor: "not-allowed",
  }
})  
