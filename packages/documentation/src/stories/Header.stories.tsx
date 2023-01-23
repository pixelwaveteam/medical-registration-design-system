import { Header, HeaderProps } from "@medical-registration/react-components"
import { action } from "@storybook/addon-actions"
import { Meta } from "@storybook/react"
import React, { useState } from "react"

export default {
  title: "Header",
  component: Header,
  parameters: {
    docs: {
      component: "Application Header",
    }
  },
  args: {
    doSignOut: action("Sign out"),
  },
  argTypes: {
    isSidebarCollapsed: {
      table: {
        disable: true,
      },
    },
    setIsSidebarCollapsed: {
      table: {
        disable: true,
      },
    },
    doSignOut: {
      table: {
        disable: true,
      }
    }
  }
} as Meta<HeaderProps>

export function Primary(args: any) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return(
    <Header isSidebarCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed} {...args} />
  )
}