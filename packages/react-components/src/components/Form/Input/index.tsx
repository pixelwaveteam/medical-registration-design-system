import {
  cloneElement,
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  MouseEvent,
  ReactElement,
  useCallback,
  useState
} from "react";

import { ErrorMessage } from "../ErrorMessage";

import { StyledInput, StyledInputContainer, StyledInputLabel, StyledInputNotVisibleIcon, StyledInputVisibilityButton, StyledInputVisibleIcon } from "./styles";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string | ReactElement;
  type: string;
  icon?: ReactElement<SVGSVGElement>;
  errorMessage?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, type, icon, errorMessage, ...props },
  ref
) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      setShowPassword(!showPassword);
    },
    [showPassword]
  );

  return (
    <div className="group" aria-label="InputContainer">
      {label && 
        <StyledInputLabel htmlFor={name}>
          {label}
        </StyledInputLabel>
      }
      <StyledInputContainer className="group">
        {icon &&
          cloneElement(icon)
        }
        <StyledInput
          id={name}
          name={name}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          isIcon={!!icon}
          ref={ref}
          {...props}
        />

        {type === "password" && (
          <StyledInputVisibilityButton
            type="button"
            onClick={togglePassword}
            className=" "
          >
            {showPassword ? (
              <StyledInputNotVisibleIcon
                weight="fill"
              />
            ) : (
              <StyledInputVisibleIcon
                weight="fill"
              />
            )}
          </StyledInputVisibilityButton>
        )}
      </StyledInputContainer>
      {errorMessage && <ErrorMessage error={errorMessage.toString()} />}
    </div>
  );
};

InputBase.displayName = "Input"

export const Input = forwardRef(InputBase);
