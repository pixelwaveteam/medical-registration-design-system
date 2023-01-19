import { styled } from "../../styles";

export const ButtonListActionContainer = styled('button', {
  padding: '$2',
  fontSize: "$textBase",
  borderRadius: '$roundedMd',
  fontFamily: "$default",
  border: "1px solid transparent",
  lineHeight: "$leadingNone",
  '&:not(:disabled):focus': {
    outline: 'none',
    boxShadow: "0px 0px 0px 2px $colors$default-brand-50",
  },
  '&:disabled': {
    boxShadow: "none",
    cursor: "not-allowed",
    opacity: 0.5,
  },
  '&:hover': {
    cursor: "pointer",
  },
  variants: {
    variant: {
      edit: {
        color: "$default-brand-700",
        backgroundColor: 'transparent',
        borderColor: '1px solid $default-brand-700',
        '&:hover': {
          backgroundColor: '$default-brand-200',
        }
      },
      delete: {
        color: '$red-700',
        backgroundColor: '$red-100',
        border: '1px solid $red-100',
        '&:hover': {
          backgroundColor: '$red-200',
        },
      },
      success: {
        color: '$green-700',
        backgroundColor: '$green-100',
        border: '1px solid $green-100',
        '&:hover': {
          backgroundColor: '$green-200',
        },
      },
      view: {
        color: '$DEFAULT',
        backgroundColor: '$default-brand-100',
        border: 'border $brand-100',
        '&:hover': {
          backgroundColor: '$default-brand-200',
        },
      },
      validate: {
        color: '$green-700',
        backgroundColor: '$green-100',
        border: '1px solid $green-100',
        '&:hover': {
          backgroundColor: '$green-200',
        },
      },
      reject: {
        color: '$red-700',
        backgroundColor: '$red-100',
        border: '1px solid $red-100',
        '&:hover': {
          backgroundColor: '$red-200',
        },
      },
    }
  }
})