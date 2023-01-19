import { Meta, StoryObj } from "@storybook/react"

import { AlertInfo, AlertInfoProps } from "@medical-registration/react-components"

export default {
  title: "AlertInfo",
  component: AlertInfo,
  args: {
    title: "Some Title",
  },
  argTypes: {
    title: {
      control: {
        type: "text",
      },
      description: "Argument used to define the Alert title",
    },
    description: {
      control: {
        type: "text",
      },
      description: "Argument used to define the Alert text",
      defaultValue: "",
    },
    hasClose: {
      control: {
        type: "boolean",
      },
      description: "Argument used to define whether the Alert has or doesn't have a close button.",
      defaultValue: false
    },
    variant: {
      control: {
        type: "inline-radio",
        options: ["success", "error", "info", "warning"]
      },
      description: "Argument used to define the Alert variant",
      defaultValue: "success"
    },
  },
  parameters: {
    docs: {
      description: {
        component: "A informative alert component"
      }
    }
  }
} as Meta<AlertInfoProps>

export const Primary = {

} as StoryObj
  
export const Error: StoryObj<AlertInfoProps> = {
  args: {
    variant: "error"
  },
  parameters: {
    docs: {
      description: {
        story: "AlertInfo error variant"
      }
    }
  }
}

export const Info: StoryObj<AlertInfoProps> = {
  args: {
    variant: "info"
  },
  parameters: {
    docs: {
      description: {
        story: "AlertInfo info variant"
      }
    }
  }
}

export const Warning: StoryObj<AlertInfoProps> = {
  args: {
    variant: "warning"
  },
  parameters: {
    docs: {
      description: {
        story: "AlertInfo warning variant"
      }
    }
  }
}