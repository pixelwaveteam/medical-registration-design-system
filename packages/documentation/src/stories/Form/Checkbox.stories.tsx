import { Checkbox, CheckboxProps } from "@medical-registration/react-components"
import { Meta } from "@storybook/react"

import React, { useState } from "react"


export default {
  title: "Form/Checkbox",
  component: Checkbox,
  argTypes: {
    label: {
      control: {
        type: "text",
      }
    },
    id: {
      table: {
        disable: true,
      }
    }
  },
  args: {
    id: "Check",
    label: "Some checkbox"
  },
  parameters: {
    docs: {
      component: "allows the user to agree with displayed text"
    }
  },
} as Meta<CheckboxProps>

export function Primary(args) {
  const [isChecked, setIsChecked] = useState(false)

  function handleCheckboxOnChange() {
    setIsChecked(state => {
      return !state
    })
  }

  return (
    <Checkbox checked={isChecked} onChange={handleCheckboxOnChange} {...args} />
  )
}