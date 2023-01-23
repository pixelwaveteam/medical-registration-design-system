var r=Object.defineProperty;var a=(n,t)=>r(n,"name",{value:t,configurable:!0});import{P as o}from"./index-f7e4df44.js";import{a as e}from"./index-34648b6b.js";import{j as i}from"./jsx-runtime-da4cfb3b.js";import"./index-34e51894.js";import"./es.object.get-own-property-descriptor-64192e07.js";import"./index-75cd1920.js";import"./iframe-8c6fe09d.js";import"./web.url.constructor-c195fb52.js";import"./es.number.is-integer-9b9f538c.js";import"./make-decorator-6f43e346.js";const x={title:"Pagination",component:o,parameters:{storySource:{source:`import { Pagination, PaginationProps } from "@medical-registration/react-components"
import { action } from "@storybook/addon-actions"
import { Meta } from "@storybook/react"
import React from "react"

export default {
  title: "Pagination",
  component: Pagination,
  parameters: {
    docs: {
      component: "Used to navigate between pages of data",
    }
  },
  args: {
    onNextPage: action("Next"),
    onPreviousPage: action("Previous"),
  },
  argTypes: {
    onNextPage: {
      table: {
        disable: true
      },
    },
    onPreviousPage: {
      table: {
        disable: true
      },
    },
    data: {
      table: {
        disable: true
      },
    }
  }
} as Meta<PaginationProps>

export function Primary(args: any) {
  const data = {
    endRegister: 10,
    pageNumber: 1,
    pageSize: 10,
    startRegister: 1,
    totalPages: 10,
    totalRegisters: 100,
  }
  
  return(
    <Pagination data={data} {...args} />
  )
}`,locationsMap:{primary:{startLoc:{col:7,line:37},endLoc:{col:1,line:50},startBody:{col:7,line:37},endBody:{col:1,line:50}}}},docs:{component:"Used to navigate between pages of data"}},args:{onNextPage:e("Next"),onPreviousPage:e("Previous")},argTypes:{onNextPage:{table:{disable:!0}},onPreviousPage:{table:{disable:!0}},data:{table:{disable:!0}}}},v=a(function(t){return i(o,{data:{endRegister:10,pageNumber:1,pageSize:10,startRegister:1,totalPages:10,totalRegisters:100},...t})},"Primary2"),N=["Primary"];export{v as Primary,N as __namedExportsOrder,x as default};
//# sourceMappingURL=Pagination.stories-fdbf4b59.js.map
