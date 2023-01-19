import { Meta, StoryObj } from "@storybook/react"

import { ButtonListAction, ButtonListActionProps } from "@medical-registration/react-components"

export default {
  title: "ButtonListAction",
  component: ButtonListAction,
  argTypes: {
    variant: {
      options: ["edit", "delete", "validate", "reject", "view", "success"],
      control: { type: 'inline-radio' },
      description: "Argument used to set the Button's variant",
      defaultValue: "edit"
    },
  },
} as Meta<ButtonListActionProps>

export const Primary: StoryObj<ButtonListActionProps>= {
  args: {
    variant: "edit"
  }
}

export const Delete: StoryObj<ButtonListActionProps>= {
  args: {
    variant: "delete"
  },
  parameters: {
    docs: {
      description: {
        story: "Button delete variant"
      }
    }
  }
}

export const Validate: StoryObj<ButtonListActionProps>= {
  args: {
    variant: "validate"
  },
  parameters: {
    docs: {
      description: {
        story: "Button validate variant"
      }
    }
  }
}

export const Reject: StoryObj<ButtonListActionProps>= {
  args: {
    variant: "reject"
  },
  parameters: {
    docs: {
      description: {
        story: "Button reject variant"
      }
    }
  }
}

export const View: StoryObj<ButtonListActionProps>= {
  args: {
    variant: "view"
  },
  parameters: {
    docs: {
      description: {
        story: "Button view variant"
      }
    }
  }
}

export const Success: StoryObj<ButtonListActionProps>= {
  args: {
    variant: "success"
  },
  parameters: {
    docs: {
      description: {
        story: "Button success variant"
      }
    }
  }
}