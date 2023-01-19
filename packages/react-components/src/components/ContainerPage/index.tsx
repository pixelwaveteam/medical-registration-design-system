import { ReactNode } from "react";
import { ContainerPageContainer, ContainerPageTitle } from "./styles";

export interface ContainerPageProps {
  title?: string;
  children: ReactNode;
}

export function ContainerPage({ title, children }: ContainerPageProps) {
  return (
    <ContainerPageContainer>
      {title && <ContainerPageTitle aria-label="ContainerTitle">{title}</ContainerPageTitle>}

      {children}
    </ContainerPageContainer>
  );
}

ContainerPage.displayName = "ContainerPage"
