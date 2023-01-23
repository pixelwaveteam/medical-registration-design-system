import * as SelectPrimitive from "@radix-ui/react-select";
import { CaretDown } from "phosphor-react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { StyledSelectContentContainer, StyledSelectIconContainer, StyledSelectLabel, StyledSelectTrigger, StyledSelectViewport } from "./styles";


export interface SelectStructureProps extends SelectPrimitive.SelectProps {
  children: React.ReactNode;
  label?: string;
  errorMessage?: string;
  onValueChange: (arg: string) => void;
  value?: string
}

const SelectBase: ForwardRefRenderFunction<HTMLButtonElement, SelectStructureProps> = (
  { name, label = null, children, errorMessage = null, onValueChange, value, ...props },
  ref
) => {



  return (
    <div className="group" aria-label="SelectContainer">
      {label && 
        <StyledSelectLabel
          htmlFor={String(name)}
          aria-label="SelectLabelContainer"
        >
          {label}
        </StyledSelectLabel>
      }
      <div>
        <SelectPrimitive.Root name={String(name)}  {...props} value={value} onValueChange={value => onValueChange(value)}>
          <StyledSelectTrigger
            ref={ref}
            empty={!value}
          >
            <SelectPrimitive.Value
              placeholder="Selecionar…"
            />
            <StyledSelectIconContainer>
              <CaretDown />
            </StyledSelectIconContainer>
          </StyledSelectTrigger>
          <SelectPrimitive.Portal>
            <StyledSelectContentContainer>
              <SelectPrimitive.ScrollUpButton />
              <StyledSelectViewport>
                {children}
              </StyledSelectViewport>
              <SelectPrimitive.ScrollDownButton />
            </StyledSelectContentContainer>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
      </div>
      {errorMessage && 
        <ErrorMessage error={errorMessage.toString()} />
      }
    </div>
  );
};

SelectBase.displayName = "SelectStructure"

export const SelectStructure = forwardRef(SelectBase);