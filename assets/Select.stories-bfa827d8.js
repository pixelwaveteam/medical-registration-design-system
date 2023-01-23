var s=Object.defineProperty;var l=(n,e)=>s(n,"name",{value:e,configurable:!0});import{S as o,h as t}from"./index-f7e4df44.js";import{r as u}from"./index-34e51894.js";import{a as m,j as r}from"./jsx-runtime-da4cfb3b.js";import"./index-75cd1920.js";import"./es.object.get-own-property-descriptor-64192e07.js";const h={title:"Form/Select",component:o,argTypes:{label:{control:{type:"text"}},errorMessage:{control:{type:"text"}}},args:{label:"Some select"},parameters:{storySource:{source:`import { SelectItem, SelectStructure, SelectStructureProps } from "@medical-registration/react-components"
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
}`,locationsMap:{primary:{startLoc:{col:7,line:32},endLoc:{col:1,line:48},startBody:{col:7,line:32},endBody:{col:1,line:48}}}},docs:{component:"allows the user to choose one of the displayed values, this component is composed by a structure(SelectStructure) and it's children(SelectItem)"}}},f=l(function(e){const[a,c]=u.useState();return m(o,{value:a,onValueChange:c,...e,children:[r(t,{value:"Value1",children:"Value 1"}),r(t,{value:"Value2",children:"Value 2"}),r(t,{value:"Value3",children:"Value 3"})]})},"Primary2"),g=["Primary"];export{f as Primary,g as __namedExportsOrder,h as default};
//# sourceMappingURL=Select.stories-bfa827d8.js.map
