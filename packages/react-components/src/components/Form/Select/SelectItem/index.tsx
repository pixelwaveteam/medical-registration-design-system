import * as SelectPrimitive from "@radix-ui/react-select";
import { Check } from "phosphor-react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { StyledSelectItem } from "./styles";

interface SelectItemProps extends SelectPrimitive.SelectItemProps {
  children: React.ReactNode;
}

const SelectItemBase: ForwardRefRenderFunction<HTMLDivElement, SelectItemProps> = ({ children, ...props }, ref) => {
  return (
    <StyledSelectItem
      ref={ref}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator>
        <Check />
      </SelectPrimitive.ItemIndicator>
    </StyledSelectItem>
  );
};

SelectItemBase.displayName = "SelectItem"

export const SelectItem = forwardRef(SelectItemBase);