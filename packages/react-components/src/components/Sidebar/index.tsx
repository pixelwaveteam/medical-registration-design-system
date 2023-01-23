import { BaseHTMLAttributes, ImgHTMLAttributes, ReactNode } from "react";
import { DesktopSidebar } from "./components/Desktop";
import { MobileSidebar } from "./components/Mobile";

export interface sidebarNavLinkElementProps extends BaseHTMLAttributes<any> {
  children: ReactNode[];
}

type sidebarPagesNavLinkProps = {
  label: string;
  pageAddress: string;
  icon: React.ReactElement;
}

export interface sidebarLogoImageElementProps extends ImgHTMLAttributes<any> {}

export type sidebarLogoProps = {
  ImageElement: (args: sidebarLogoImageElementProps) => JSX.Element;
  imageSrc: string;
  logoText: string;
  imageAlt: string;
}

export interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (arg: boolean) => void;
  sidebarPagesNavLinks: sidebarPagesNavLinkProps[]
  sidebarLogo: sidebarLogoProps;
  PageNavLinkElement: (args: sidebarNavLinkElementProps) => JSX.Element;
  username: string;
}

export function Sidebar({ setIsCollapsed, ...sidebarProps }: SidebarProps) {
  return (
    <>
      <DesktopSidebar {...sidebarProps} />

      <MobileSidebar {...sidebarProps} setIsCollapsed={setIsCollapsed} />
    </>
  );
}

Sidebar.displayName = "Sidebar";
