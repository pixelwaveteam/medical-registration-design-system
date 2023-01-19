import { Meta, StoryObj } from "@storybook/react"

import { ContainerPage, ContainerPageProps } from "@medical-registration/react-components"

export default {
  title: "ContainerPage",
  component: ContainerPage,
  args: {
    children: "Some content to the page"
  }
} as Meta<ContainerPageProps>

export const Primary: StoryObj<ContainerPageProps> = {
}

export const PageWithTitle: StoryObj<ContainerPageProps> = {
  args: {
    title: "Some Title"
  }
}