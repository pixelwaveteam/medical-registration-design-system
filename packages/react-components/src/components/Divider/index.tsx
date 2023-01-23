import { BaseHTMLAttributes } from "react";
import { StyledDivider } from "./styles";

export interface DividerProps extends BaseHTMLAttributes<HTMLDivElement> {}

export function Divider({...props}: DividerProps) {
  return (
    <StyledDivider {...props} aria-label="DividerContainer">
      <div>
        <div/>
      </div>
    </StyledDivider>
  );
}

Divider.displayName = "Divider"