import { Label, LabelProps } from "@medical-registration/react-components"
import { Meta, StoryObj } from "@storybook/react"

export default {
  title: "Form/Label",
  component: Label,
  args: {
    htmlFor: "someInput",
    children: "Some label",
  },
  argTypes: {
    htmlFor: {
      control: null,
      table: {
        disable: true,
      }
    },
  }
} as Meta<LabelProps>

export const Primary: StoryObj<LabelProps> = {
}