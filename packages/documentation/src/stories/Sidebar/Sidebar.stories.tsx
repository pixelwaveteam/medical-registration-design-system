import { Sidebar, sidebarLogoImageElementProps, sidebarNavLinkElementProps, SidebarProps } from "@medical-registration/react-components";
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from "@storybook/react";
import { GraduationCap, House, IdentificationBadge, User } from "phosphor-react";

import React from "react";

export default {
  title: "Sidebar/Sidebar",
  component: Sidebar,
  argTypes: {
    isCollapsed: {
      control: {
        type: "boolean",
      },
    },
    username: {
      control: {
        type: "text",
      },
    },
    sidebarLogo: {
      table: {
        disable: true
      }
    },
    sidebarPagesNavLinks: {
      table: {
        disable: true
      }
    },
    PageNavLinkElement: {
      table: {
        disable: true
      }
    },
    
  },
  args: {
    PageNavLinkElement: (props: sidebarNavLinkElementProps) => <a {...props}></a>,
    sidebarPagesNavLinks: [
      {
        icon: <House size="24" />,
        label: "Dashboard",
        pageAddress: "/",
      },
      {
        icon: <User size="24" />,
        label: "Usuários",
        pageAddress: "/",
      },
      {
        icon: <GraduationCap size="24" />,
        label: "Especialidades",
        pageAddress: "/",
      },
      {
        icon: <IdentificationBadge size="24" />,
        label: "Cadastro médico",
        pageAddress: "/",
      },
    ],
    sidebarLogo: {
      imageAlt: "Hospital X",
      ImageElement: (props: sidebarLogoImageElementProps) => <img {...props} />,
      imageSrc: "/",
      logoText: "Hospital X"
    },
    username: "John Doe",
    isCollapsed: false,
    setIsCollapsed: action("Close sidebar")
  }
} as Meta<SidebarProps>

export const Primary: StoryObj<SidebarProps> = {
}