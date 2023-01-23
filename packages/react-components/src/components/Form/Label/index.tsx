import { HTMLAttributes, ReactNode } from 'react';
import { StyledLabel } from './styles';

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  htmlFor: string;
}

export function Label({ children, htmlFor, ...props }: LabelProps) {
  return (
    <StyledLabel
      htmlFor={htmlFor}
      aria-label='LabelContainer'
      {...props}
    >
      {children}
    </StyledLabel>
  );
}
