import { StyledCheckboxContainer, StyledCheckboxIndicator, StyledCheckboxIndicatorIcon, StyledCheckboxLabel, StyledCheckboxRoot } from "./styles";

export interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  defaultChecked?: boolean;
}

export function Checkbox({
  id,
  label,
  checked,
  onChange,
  defaultChecked = false,
}: CheckboxProps) {
  return (
    <StyledCheckboxContainer aria-label="CheckboxContainer">
      <StyledCheckboxRoot
        defaultChecked={defaultChecked}
        id={id}
        checked={checked}
        onCheckedChange={onChange}
      >
        <StyledCheckboxIndicator className="w-4 h-4">
          <StyledCheckboxIndicatorIcon className="w-4 h-4" />
        </StyledCheckboxIndicator>
      </StyledCheckboxRoot>
      <StyledCheckboxLabel
        htmlFor={id}
        aria-label="CheckboxLabel"
      >
        {label}
      </StyledCheckboxLabel>
    </StyledCheckboxContainer>
  );
}
