import { Pagination, PaginationProps } from "@medical-registration/react-components"
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
}