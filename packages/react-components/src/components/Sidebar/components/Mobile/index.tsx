import { List, Password, X } from "phosphor-react";
import { BaseHTMLAttributes, ImgHTMLAttributes, ReactNode } from "react";
import { AvatarContainer } from "../AvatarContainer";
import { Logo } from "../Logo";
import { NavLink } from "../NavLink";
import { CloseMobileSidebarButtonIconStyles, StyledBottomSidebarSection, StyledCloseMobileSidebarButton, StyledForgotNavLinkContainer, StyledMobileSidebarContainer, StyledNavLinksContainer, StyledTopSidebarSection } from "./styles";

export interface mobileSidebarNavLinkElementProps extends BaseHTMLAttributes<any> {
  children: ReactNode[];
}

type sidebarPagesNavLinkProps = {
  label: string;
  pageAddress: string;
  icon: React.ReactElement;
}

export interface mobileSidebarLogoImageElementProps extends ImgHTMLAttributes<any> {}

export type mobileSidebarLogoProps = {
  ImageElement: (args: mobileSidebarLogoImageElementProps) => JSX.Element;
  imageSrc: string;
  logoText: string;
  imageAlt: string;
}

export interface MobileSidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (arg: boolean) => void;
  sidebarPagesNavLinks: sidebarPagesNavLinkProps[]
  sidebarLogo: mobileSidebarLogoProps; 
  PageNavLinkElement: (args: mobileSidebarNavLinkElementProps) => JSX.Element;
  username: string;
}

export function MobileSidebar({ isCollapsed, setIsCollapsed, PageNavLinkElement, sidebarLogo, sidebarPagesNavLinks, username }: MobileSidebarProps) {
  function handleCollapse() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <StyledMobileSidebarContainer
      isCollapsed={isCollapsed}
      aria-label="MobileSidebarContainer"
    >
      <StyledCloseMobileSidebarButton
        type="button"
        onClick={handleCollapse}
        aria-label="ColapseSidebarButton"
      >
        {isCollapsed ? (
          <List aria-label="isCollapsedButtonIcon" className={CloseMobileSidebarButtonIconStyles()} />
        ) : (
          <X aria-label="isNotCollapsedButtonIcon" className={CloseMobileSidebarButtonIconStyles()} />
        )}
      </StyledCloseMobileSidebarButton>

      <StyledTopSidebarSection>
        <Logo ImageElement={sidebarLogo.ImageElement} imageAlt={sidebarLogo.imageAlt} imageSrc={sidebarLogo.imageSrc} logoText={sidebarLogo.logoText}  isSidebarCollapsed={isCollapsed} />

          {
            sidebarPagesNavLinks && 
              <StyledNavLinksContainer>
                {
                  sidebarPagesNavLinks.map(({ icon, label, pageAddress }) => {
                    return (
                      <NavLink isSidebarCollapsed={isCollapsed} icon={icon} label={label} src={pageAddress} key={label} LinkElement={PageNavLinkElement} />
                    )
                  })
                }
              </StyledNavLinksContainer>
          }
      </StyledTopSidebarSection>
      

      <StyledBottomSidebarSection>
        <StyledForgotNavLinkContainer>
          <NavLink
            isSidebarCollapsed={isCollapsed}
            label="Alterar Senha"
            src="/change-password"
            icon={<Password size="24" />}
            LinkElement={PageNavLinkElement}
          />
        </StyledForgotNavLinkContainer>

        <AvatarContainer username={username} isSidebarCollapsed={isCollapsed} />
      </StyledBottomSidebarSection>
    </StyledMobileSidebarContainer>
  )
}

MobileSidebar.displayName = "MobileSidebar";