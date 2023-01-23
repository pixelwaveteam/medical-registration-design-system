import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from "@storybook/react";

import { Dialog, DialogProps } from "@medical-registration/react-components";

export default {
  title: "Dialog",
  component: Dialog,
  args: {
    onClose: action("Close dialog"),
    size: "md",
    hasCloseButton: true,
    isOpen: true,
    title: "Some Title",
    description: "Some text",

  },
  argTypes: {
    size: {
      control: {
        type: "inline-radio",
        options: ["md", "lg", "2xl", "3xl"]
      },
    },
    hasCloseButton: {
      control: {
        type: "boolean",
      },
    },
    isOpen: {
      control: {
        type: "boolean",
      },
    },
    onClose: {
      table: {
        disable: true
      }
    },
    title: {
      control: {
        type: "text",
      },
    },
    description: {
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: "A dialog component"
      }
    }
  }
} as Meta<DialogProps>

export const Primary: StoryObj<DialogProps>= {}