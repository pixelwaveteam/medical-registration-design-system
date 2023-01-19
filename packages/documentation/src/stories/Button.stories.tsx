import { Meta, StoryObj } from "@storybook/react"

import { Button, ButtonProps } from "@medical-registration/react-components"

export default {
  title: "Button",
  component: Button, 
  argTypes: {
    variant: {
      options: ["primary", "outline", "delete", "cancel"],
      control: { type: 'inline-radio' },
      description: "Argument used to set the Button's variant",
      defaultValue: "primary"
    },
    children: {
      description: "Argument used to set the Button's child element"
    }
  },
  args: {
    children: "Lorem",
  },
  parameters: {
    docs: {
      description: {
        component: "A button component"
      }
    }
  }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps>= {
  args: {
    variant: "primary",
  },
  parameters: {
    docs: {
      description: {
        story: "Button default/primary variant"
      }
    }
  }
}

export const Outline: StoryObj<ButtonProps>= {
  args: {
    variant: "outline",
  },
  parameters: {
    docs: {
      description: {
        story: "Button outline variant"
      }
    }
  }
}

export const Delete: StoryObj<ButtonProps>= {
  args: {
    variant: "delete",
  },
  parameters: {
    docs: {
      description: {
        story: "Button delete variant"
      }
    }
  }
}

export const Cancel: StoryObj<ButtonProps>= {
  args: {
    variant: "cancel",
  },
  parameters: {
    docs: {
      description: {
        story: "Button cancel variant"
      }
    }
  }
}