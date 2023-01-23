import { CaretLeft, CaretRight, List, Power } from 'phosphor-react';
import { StyledCollapseSidebarButton, StyledHeader, StyledHeaderContentContainer, StyledHeaderLogoutButton, StyledHeaderTitle, StylesCollapseSidebarIcons } from './styles';

export interface HeaderProps {
  isSidebarCollapsed: boolean;
  setIsSidebarCollapsed: (arg: boolean) => void;
  doSignOut: () => void
}

export function Header({
  isSidebarCollapsed,
  setIsSidebarCollapsed,
  doSignOut
}: HeaderProps) {
  function handleCollapse() {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  }

  return (
    <StyledHeader>
      <StyledHeaderContentContainer>
        <StyledCollapseSidebarButton
          type="button"
          onClick={handleCollapse}
          aria-label="collapseButton"
        >
          {isSidebarCollapsed ? (
            <>
              <CaretRight data-testid="caretRightElement" className={StylesCollapseSidebarIcons({ isMobileSidebarIcon: false })} />

              <List data-testid="listElement" className={StylesCollapseSidebarIcons({ isMobileSidebarIcon: true })} />
            </>
          ) : (
            <CaretLeft data-testid="caretLeftElement" className={StylesCollapseSidebarIcons({ isMobileSidebarIcon: false })} />
          )}
        </StyledCollapseSidebarButton>
        <StyledHeaderTitle>
          Sistema de Cadastro Médico
        </StyledHeaderTitle>
      </StyledHeaderContentContainer>
      <StyledHeaderLogoutButton
        onClick={doSignOut}
        aria-label='signOutButton'
      >
        <Power size={24} />
      </StyledHeaderLogoutButton>
    </StyledHeader>
  );
}

Header.displayName = "Header"