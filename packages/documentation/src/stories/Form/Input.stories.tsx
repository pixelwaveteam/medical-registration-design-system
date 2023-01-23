import { Input, InputProps } from "@medical-registration/react-components"
import { Meta, StoryObj } from "@storybook/react"

import React from "react"

export default {
  title: "Form/Input",
  component: Input,
  args: {
    name: "Some input",
    type: "text"
  },
  argTypes: {
    name: {
      table: {
        disable: true,
      },
    },
    label: {
      control: {
        type: "text",
      }
    },
    type: {
      control: {
        type: "select",
        options: [
          'button',
          'checkbox',
          'color',
          'date',
          'datetime-local',
          'email',
          'file',
          'hidden',
          'image',
          'month',
          'number',
          'password',
          'radio',
          'range',
          'reset',
          'search',
          'submit',
          'tel',
          'text',
          'time',
          'url',
          'week',
        ]
      },
    },
    errorMessage: {
      control: {
        type: "text",
      }
    },
    icon: {
      table: {
        disable: true,
      }
    }
  },
  
} as Meta<InputProps>

export const Primary: StoryObj<InputProps> = {
}

export const IconInput: StoryObj<InputProps> = {
  args: {
    icon: (
      <svg viewBox="0 0 24 24" fill="cyan" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="currentColor"/>
      </svg>
    )
  }
}
