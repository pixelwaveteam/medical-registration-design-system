import { SelectItem, SelectStructure, SelectStructureProps } from "@medical-registration/react-components"
import { Meta } from "@storybook/react"

import React, { useState } from "react"


export default {
  title: "Form/Select",
  component: SelectStructure,
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
    errorMessage: {
      control: {
        type: "text",
      },
    }
  },
  args: {
    label: "Some select"
  },
  parameters: {
    docs: {
      component: "allows the user to choose one of the displayed values, this component is composed by a structure(SelectStructure) and it's children(SelectItem)"
    }
  },
} as Meta<SelectStructureProps>

export function Primary(args) {
  const [selectedValue, setSelectedValue] = useState()

  return (
    <SelectStructure value={selectedValue} onValueChange={setSelectedValue} {...args}>
      <SelectItem value="Value1" >
        Value 1
      </SelectItem>
      <SelectItem value="Value2" >
        Value 2
      </SelectItem>
      <SelectItem value="Value3" >
        Value 3
      </SelectItem>
    </SelectStructure>
  )
}