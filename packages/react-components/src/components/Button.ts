import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  paddingBlock: '$2',
  paddingInline: '$4',
  borderRadius: '$roundedMd',
  fontFamily: "$default",
  border: "1px solid transparent",
  '&:focus': {
    outline: 'none',
    boxShadow: "0px 0px 0px 2px $colors$default-brand-50",
  },
  '&:disabled': {
    backgroundColor: "$gray-200",
    border: "none",
    color: "$gray-400",
    cursor: "not-allowed",
  },
  '&:hover': {
    cursor: "pointer",
  },
  variants: {
    variant: {
      primary: {
        color: "White",
        backgroundColor: "$DEFAULT",
        "&:hover": {
          backgroundColor: "$default-brand-400",
        }
      },
      outline: {
        color: "$DEFAULT",
        backgroundColor: "transparent",
        border: "1px solid $DEFAULT",
        "&:hover": {
          backgroundColor: "$default-brand-50",
        }
      },
      delete: {
        color: "$red-700",
        fontWeight: "$medium",
        backgroundColor: "$red-100",
        "&:hover": {
          backgroundColor: "$red-200",
        }
      },
      cancel: {
        color: "$DEFAULT",
        fontWeight: "$medium",
        backgroundColor: "$default-brand-100",
        "&:hover": {
          backgroundColor: "$default-brand-200",
        }
      }
    }
  }
})

export interface ButtonProps extends ComponentProps<typeof Button> {}

Button.displayName = "Button"
