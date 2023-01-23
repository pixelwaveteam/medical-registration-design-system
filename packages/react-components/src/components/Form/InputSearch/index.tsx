import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes
} from "react";
import { StyledInputSearchContainer, StyledInputSearchIcon, StyledInputSearchIconContainer, StyledSearchInput } from "./styles";

export interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputSearchProps> = (
  { ...props },
) => {
  return (
    <StyledInputSearchContainer className="group" aria-label="InputSearchContainer">
      <StyledInputSearchIconContainer
        aria-hidden="true"
      >
        <StyledInputSearchIcon
          aria-hidden="true"
        />
      </StyledInputSearchIconContainer>
      <StyledSearchInput
        type="text"
        name="search"
        id="search"
        placeholder="Buscar"
        {...props}
      />
    </StyledInputSearchContainer>
  );
};

InputBase.displayName = "InputSearch"

export const InputSearch = forwardRef(InputBase);
