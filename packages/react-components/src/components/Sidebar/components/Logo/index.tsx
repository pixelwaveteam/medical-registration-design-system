import { ImgHTMLAttributes } from "react";
import { LogoImageStyles, StyledLogoContainer, StyledLogText } from "./styles";

export interface LogoImageElementProps extends ImgHTMLAttributes<any> {}

export interface LogoProps {
  isSidebarCollapsed: boolean;
  ImageElement: (args: LogoImageElementProps) => JSX.Element;
  imageSrc: string;
  logoText: string;
  imageAlt: string;
}

export function Logo({ isSidebarCollapsed, ImageElement, imageSrc, logoText, imageAlt }: LogoProps) {
  const src = Array.isArray(imageSrc) ? imageSrc[imageSrc.length - 1] : imageSrc;

  return (
    <StyledLogoContainer aria-label="LogoContainer">
      <ImageElement
        src={src}
        className={LogoImageStyles()}
        alt={imageAlt}
      />
      {!isSidebarCollapsed && (
        <StyledLogText>
          {logoText}
        </StyledLogText>
      )}
    </StyledLogoContainer>
  );
}

Logo.displayName ="Logo"