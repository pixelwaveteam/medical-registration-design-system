import { Divider, DividerProps } from "@medical-registration/react-components"
import { Meta, StoryObj } from "@storybook/react"
import React from "react"

export default {
  title: "Divider",
  component: Divider,
  parameters: {
    docs: {
      component: "Used for separate sections of content",
    }
  },
  decorators: [
    (Story) => {
      return (
        <div style={{height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <Story />
        </div>
      )
    }
  ]
} as Meta<DividerProps>

export const Primary: StoryObj<DividerProps> = {
}