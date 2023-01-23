import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from "@storybook/react";

import { AlertDialog, AlertDialogStructureProps } from "@medical-registration/react-components";

export default {
  title: "AlertDialog",
  component: AlertDialog,
  args: {
    isOpen: true,
    onClose: action("Close dialog"),
    title: "Some title",
    description: "Some text"
  },
  argTypes: {
    isOpen: {
      control: {
        type: "boolean",
      }
    },
    onClose: {
      control: null,
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
        component: "A dialog used to alert the user"
      }
    }
  }
} as Meta<AlertDialogStructureProps>

export const Primary: StoryObj<AlertDialogStructureProps>= {}