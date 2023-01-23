import { StyledErrorContainer } from "./styles";

export interface ErrorMessageProps {
  error: string;
}

export function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <StyledErrorContainer
      aria-label="ErrorContainer"
      className="text-sm text-red-600"
    >
      {error}
    </StyledErrorContainer>  
  )
}

ErrorMessage.displayName = "ErrorMessage"