import { Footer, FooterProps } from "@medical-registration/react-components"
import { Meta, StoryObj } from "@storybook/react"

import React from "react"

export default {
  title: "Footer",
  component: Footer,
  parameters: {
    docs: {
      component: "Application footer",
    }
  },
  argTypes: {
    variant: {
      control: {
        type: "inline-radio",
        options: ["light", "dark"]
      },
    }
  },
  args: {
    variant: "light"
  },
  decorators: [
    (Story) => {
      return (
        <div style={{height: "100vh"}}>
          <div style={{ marginBottom: "auto" }} />
          <Story />
        </div>
      )
    }
  ]
} as Meta<FooterProps>

export const Primary: StoryObj<FooterProps> = {
}