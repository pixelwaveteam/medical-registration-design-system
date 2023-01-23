import { Fragment } from "react";
import { StyledSkeletonLoadingContainer, StyledSkeletonType1Container1, StyledSkeletonType1Container2, StyledSkeletonType2Container1, StyledSkeletonType2Container2, StyledSkeletonType3Container } from "./styles";

type NumberType = 1 | 2 | 3;

export interface SkeletonLoadingProps {
  skeletons?: NumberType[];
}

export function SkeletonLoading({
  skeletons = [1, 3, 3, 3, 3, 3],
}: SkeletonLoadingProps) {
  return (
    <StyledSkeletonLoadingContainer>
      {skeletons.map((skeleton, index) => {
        if (skeleton === 1) {
          return (
            <Fragment key={index}>
              <StyledSkeletonType1Container1 aria-label="SkeletonType1Container" />
              <StyledSkeletonType1Container2 />
            </Fragment>
          );
        } else if (skeleton === 2) {
          return (
            <Fragment key={index}>
              <StyledSkeletonType2Container1 aria-label="SkeletonType2Container" />
              <StyledSkeletonType2Container2 />
            </Fragment>
          );
        } 

        return (
          <Fragment key={index}>
            <StyledSkeletonType3Container aria-label="SkeletonType3Container" />
          </Fragment>
        );
      })}
    </StyledSkeletonLoadingContainer>
  );
}

SkeletonLoading.displayName = "SkeletonLoading";