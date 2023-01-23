import { AvatarContainer, AvatarContainerProps } from "@medical-registration/react-components"
import { Meta, StoryObj } from "@storybook/react"

export default {
  title: "Sidebar/AvatarContainer",
  component: AvatarContainer,
  argTypes: {
    isSidebarCollapsed: {
      control: {
        type: "boolean",
      },
    },
    username: {
      control: {
        type: "text",
      },
    }
  },
  args: {
    isSidebarCollapsed: false,
    username: "John Doe"
  }
} as Meta<AvatarContainerProps>

export const Primary: StoryObj<AvatarContainerProps> = {

}