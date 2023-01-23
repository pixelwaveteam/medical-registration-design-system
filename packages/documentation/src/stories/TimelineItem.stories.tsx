import { TimelineItem, TimelineItemProps } from "@medical-registration/react-components"
import { Meta, StoryObj } from "@storybook/react"
import { Atom } from "phosphor-react"
import React from "react"

export default {
  title: "TimelineItem",
  component: TimelineItem,
  argTypes: {
    icon: {
      table: {
        disable: true
      },
    },
    text: {
      control: {
        type: "text",
      }
    },
    title: {
      control: {
        type: "text",
      }
    }
  },
  args: {
    icon: <Atom />,
    text: "Some text",
    title: "Some Title"
  }
} as Meta<TimelineItemProps>

export const Primary: StoryObj<TimelineItemProps> = {
}