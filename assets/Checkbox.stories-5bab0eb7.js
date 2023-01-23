var i=Object.defineProperty;var n=(t,e)=>i(t,"name",{value:e,configurable:!0});import{f as o}from"./index-f7e4df44.js";import{r as l}from"./index-34e51894.js";import{j as h}from"./jsx-runtime-da4cfb3b.js";import"./index-75cd1920.js";import"./es.object.get-own-property-descriptor-64192e07.js";const b={title:"Form/Checkbox",component:o,argTypes:{label:{control:{type:"text"}},id:{table:{disable:!0}}},args:{id:"Check",label:"Some checkbox"},parameters:{storySource:{source:`import { Checkbox, CheckboxProps } from "@medical-registration/react-components"
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
}`,locationsMap:{primary:{startLoc:{col:7,line:33},endLoc:{col:1,line:45},startBody:{col:7,line:33},endBody:{col:1,line:45}}}},docs:{component:"allows the user to agree with displayed text"}}},u=n(function(e){const[r,a]=l.useState(!1);function c(){a(s=>!s)}return n(c,"handleCheckboxOnChange"),h(o,{checked:r,onChange:c,...e})},"Primary2"),f=["Primary"];export{u as Primary,f as __namedExportsOrder,b as default};
//# sourceMappingURL=Checkbox.stories-5bab0eb7.js.map
