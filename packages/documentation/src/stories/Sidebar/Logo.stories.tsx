import { Logo, LogoImageElementProps, LogoProps } from "@medical-registration/react-components"
import { Meta, StoryObj } from "@storybook/react"
import React from "react"

export default {
  title: "Sidebar/Logo",
  component: Logo,
  argTypes: {
    isSidebarCollapsed: {
      control: {
        type: "boolean",
      }
    },
    ImageElement: {
      table: {
        disable: true,
      },
    },
    logoText: {
      control: {
        type: "text"
      }
    },
    imageSrc: {
      control: {
        type: "file",
        accept: [".png", ".jpg"]
      },
    },
    imageAlt: {
      control: {
        type: "text",
      },
    }
  },
  args: {
    imageAlt: "Hospital São Luiz",
    logoText: "São Luiz",
    ImageElement({...props}: LogoImageElementProps) {
      return <img {...props}/>
    },
    isSidebarCollapsed: false,
  }
} as Meta<LogoProps>

export const Primary: StoryObj<LogoProps> = {
}