import { StepItem, StepItemProps } from "@medical-registration/react-components"
import { Meta, StoryObj } from "@storybook/react"
import React from "react"


export default {
  title: "StepItem",
  component: StepItem,
  argTypes: {
    isCompleted: {
      control: {
        type: "boolean",
      },
    },
    isCurrent: {
      control: {
        type: "boolean",
      },
    },
    label: {
      control: {
        type: "text",
      }
    }
  },
  args: {
    isCompleted: false,
    isCurrent: false,
    label: "Some item"
  },
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            marginInline: "auto",
            marginBottom: "0.5rem",
            display: "flex",
            width: "100%",
          }}
        >
          <Story />
          <Story />
          <Story />
        </div>
      )
    }
  ]
} as Meta<StepItemProps>

export const Primary: StoryObj<StepItemProps> = {
}