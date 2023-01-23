import { keyframes, styled } from "../../styles";

const pulse = keyframes({
  "0%, 100%": {
    opacity: 1,
  },

  "50%": {
    opacity: .5,
  }
})

export const StyledSkeletonLoadingContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "$4",
  width: "100%",
  backgroundColor: "White",
  marginInline: "$4",
  marginBlock: "$6",
  animation: `${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
})

const StyledSkeletonTypeContainerBase = styled("div", {
  height: "$10",
  borderRadius: "$rounded",
})

export const StyledSkeletonType1Container1 = styled(StyledSkeletonTypeContainerBase, {
  backgroundColor:"$gray-300",
  gridColumn: "span 1 / span 1",
})

export const StyledSkeletonType1Container2 = styled(StyledSkeletonTypeContainerBase, {
  backgroundColor:"White",
  gridColumn: "span 2 / span 2",
})

export const StyledSkeletonType2Container1 = styled(StyledSkeletonTypeContainerBase, {
  backgroundColor:"$gray-300",
  gridColumn: "span 2 / span 2",
})

export const StyledSkeletonType2Container2 = styled(StyledSkeletonTypeContainerBase, {
  backgroundColor:"White",
  gridColumn: "span 1 / span 1",
})

export const StyledSkeletonType3Container = styled(StyledSkeletonTypeContainerBase, {
  backgroundColor:"$gray-300",
  gridColumn: "span 3 / span 3",
})