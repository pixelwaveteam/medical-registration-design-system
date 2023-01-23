import { SkeletonLoading, SkeletonLoadingProps } from "@medical-registration/react-components"
import { Meta, StoryObj } from "@storybook/react"


export default {
  title: "SkeletonLoading",
  component: SkeletonLoading,
  argTypes: {
    skeletons: {
      control: {
        type: "object"
      },
    }
  },
  args: {
    skeletons: [1, 3, 3, 3, 3, 3]
  },
} as Meta<SkeletonLoadingProps>

export const Primary: StoryObj<SkeletonLoadingProps> = {
}