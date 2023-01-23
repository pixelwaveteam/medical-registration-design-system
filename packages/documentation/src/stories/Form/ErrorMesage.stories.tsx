import { ErrorMessage, ErrorMessageProps } from "@medical-registration/react-components"
import { Meta, StoryObj } from "@storybook/react"

export default {
  title: "Form/ErrorMessage",
  component: ErrorMessage,
  args: {
    error: "Some error" 
  },
  parameters: {
    docs: {
      component: "Used to show a input's error"
    }
  }
} as Meta<ErrorMessageProps>

export const Primary: StoryObj<ErrorMessageProps> = {
}