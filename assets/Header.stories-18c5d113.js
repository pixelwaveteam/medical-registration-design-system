var s=Object.defineProperty;var a=(r,e)=>s(r,"name",{value:e,configurable:!0});import{H as t}from"./index-f7e4df44.js";import{a as i}from"./index-34648b6b.js";import{r as d}from"./index-34e51894.js";import{j as l}from"./jsx-runtime-da4cfb3b.js";import"./index-75cd1920.js";import"./es.object.get-own-property-descriptor-64192e07.js";import"./iframe-8c6fe09d.js";import"./web.url.constructor-c195fb52.js";import"./es.number.is-integer-9b9f538c.js";import"./make-decorator-6f43e346.js";const x={title:"Header",component:t,parameters:{storySource:{source:`import { Header, HeaderProps } from "@medical-registration/react-components"
import { action } from "@storybook/addon-actions"
import { Meta } from "@storybook/react"
import React, { useState } from "react"

export default {
  title: "Header",
  component: Header,
  parameters: {
    docs: {
      component: "Application Header",
    }
  },
  args: {
    doSignOut: action("Sign out"),
  },
  argTypes: {
    isSidebarCollapsed: {
      table: {
        disable: true,
      },
    },
    setIsSidebarCollapsed: {
      table: {
        disable: true,
      },
    },
    doSignOut: {
      table: {
        disable: true,
      }
    }
  }
} as Meta<HeaderProps>

export function Primary(args: any) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return(
    <Header isSidebarCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed} {...args} />
  )
}`,locationsMap:{primary:{startLoc:{col:7,line:36},endLoc:{col:1,line:42},startBody:{col:7,line:36},endBody:{col:1,line:42}}}},docs:{component:"Application Header"}},args:{doSignOut:i("Sign out")},argTypes:{isSidebarCollapsed:{table:{disable:!0}},setIsSidebarCollapsed:{table:{disable:!0}},doSignOut:{table:{disable:!0}}}},I=a(function(e){const[o,n]=d.useState(!1);return l(t,{isSidebarCollapsed:o,setIsSidebarCollapsed:n,...e})},"Primary2"),P=["Primary"];export{I as Primary,P as __namedExportsOrder,x as default};
//# sourceMappingURL=Header.stories-18c5d113.js.map
