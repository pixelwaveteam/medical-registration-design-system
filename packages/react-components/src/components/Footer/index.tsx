import { StyledFooter, StyledHeartIcon } from "./styles";

export interface FooterProps {
  variant?: "light" | "dark";
}

export function Footer({ variant = "light" }: FooterProps) {
  return (
    <StyledFooter theme={variant}>
      <span className="mr-1">
        © Coded with
        <StyledHeartIcon
          weight="fill"
        />
        by
      </span>
      <a
        href="https://www.imatec.com.br"
        target="_blank"
        rel="noreferrer"
      >
        Imatec
      </a>
    </StyledFooter>
  );
}

Footer.displayName = "Footer"