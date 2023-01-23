import { Password } from "phosphor-react";
import { BaseHTMLAttributes, ImgHTMLAttributes, ReactNode } from "react";
import { AvatarContainer } from "../AvatarContainer";
import { Logo } from "../Logo";
import { NavLink } from "../NavLink";
import { StyledBottomSidebarSection, StyledDesktopSidebarContainer, StyledForgotNavLinkContainer, StyledNavLinksContainer, StyledTopSidebarSection } from "./styles";

export interface desktopSidebarNavLinkElementProps extends BaseHTMLAttributes<any> {
  children: ReactNode[];
}

type sidebarPagesNavLinkProps = {
  label: string;
  pageAddress: string;
  icon: React.ReactElement;
}

export interface desktopSidebarLogoImageElementProps extends ImgHTMLAttributes<any> {}

export type desktopSidebarLogoProps = {
  ImageElement: (args: desktopSidebarLogoImageElementProps) => JSX.Element;
  imageSrc: string;
  logoText: string;
  imageAlt: string;
}

export interface DesktopSidebarProps {
  isCollapsed: boolean;
  sidebarPagesNavLinks: sidebarPagesNavLinkProps[]
  sidebarLogo: desktopSidebarLogoProps;
  PageNavLinkElement: (args: desktopSidebarNavLinkElementProps) => JSX.Element;
  username: string;
}

export function DesktopSidebar({ isCollapsed, sidebarPagesNavLinks, sidebarLogo, PageNavLinkElement, username }: DesktopSidebarProps) {
  return(
    <StyledDesktopSidebarContainer
      aria-label="DesktopSidebarContainer"
      isCollapsed={isCollapsed}
    >
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
    </StyledDesktopSidebarContainer>
  )
}

DesktopSidebar.displayName = "DesktopSidebar"