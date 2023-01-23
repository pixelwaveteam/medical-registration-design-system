import { Meta, StoryObj } from "@storybook/react"

import { ButtonAdd, ButtonAddProps } from "@medical-registration/react-components"

export default {
  title: "Buttons/ButtonAdd",
  component: ButtonAdd,
  parameters: {
    docs: {
      description: {
        component: "A button component only with the purpose to add something"
      }
    }
  }
} as Meta<ButtonAddProps>

export const Primary: StoryObj<ButtonAddProps>= {
}