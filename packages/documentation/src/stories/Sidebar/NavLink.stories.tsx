import { NavLink, NavLinkElementProps, NavLinkProps } from "@medical-registration/react-components"
import { Meta, StoryObj } from "@storybook/react"
import { Link } from "phosphor-react"
import React from "react"

export default {
  title: "Sidebar/NavLink",
  component: NavLink,
  argTypes: {
    icon: {
      table: {
        disable: true,
      }
    },
    isSidebarCollapsed: {
      control: {
        type: "boolean",
      }
    },
    label: {
      control: {
        type: "text"
      }
    },
    LinkElement: {
      table: {
        disable: true,
      },
    },
    src: {
      table: {
        disable: true
      }
    }
  },
  args: {
    src: "/",
    LinkElement({children, ...props}: NavLinkElementProps) {
      return <a {...props}>{children}</a>
    },
    label: "Some page",
    isSidebarCollapsed: false,
    icon: <Link />
  }
} as Meta<NavLinkProps>

export const Primary: StoryObj<NavLinkProps> = {
}