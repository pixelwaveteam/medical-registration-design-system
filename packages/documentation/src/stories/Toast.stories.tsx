import { Toast, ToastProps } from "@medical-registration/react-components"
import { action } from "@storybook/addon-actions"
import { Meta, StoryObj } from "@storybook/react"

export default {
  title: "Toast",
  component: Toast,
  argTypes: {
    message: {
      control: {
        type: "object",
      }
    },
    removeToast: {
      table: {
        disable: true,
      }
    },
    show: {
      control: {
        type: "boolean"
      }
    }
  },
  args: {
    message: {
      title: "Some Toast Title",
      autoClose: false,
      description: "Some toast description",
      type: "info",
    },
    removeToast: action("Remove toast action"),
    show: true,
  }
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
}