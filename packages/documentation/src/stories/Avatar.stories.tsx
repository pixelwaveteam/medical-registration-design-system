import { Meta, StoryObj } from "@storybook/react"

import { Avatar, AvatarProps } from "@medical-registration/react-components"

export default {
  title: "Avatar",
  component: Avatar,
  args: {
    name: "John Doe",
    size: 8,
  },
  argTypes: {
    imageUrl: {
      control: {
        type: "file",
        accept: [".png", ".jpg"]
      },
      description: "Argument used to set the Avatar image",
    },
    size: {
      description: "Argument used to set the Avatar size in a 1/4 of a rem"
    },
    name: {
      description: "Argument used to show the current user name"
    }
  },
  parameters: {
    docs: {
      description: {
        component: "A component that displays the current user's Avatar"
      }
    }
  }
} as Meta<AvatarProps>

export const Primary = {

} as StoryObj<AvatarProps>