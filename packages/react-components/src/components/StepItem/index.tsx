import { useEffect, useRef, useState } from "react";
import { StyledStepItemContainer, StyledStepItemIcon, StyledStepItemLabel, StyledStepItemStatusIndicator } from "./styles";

export interface StepItemProps {
  label: string;
  isCurrent?: boolean;
  isCompleted?: boolean;
}

export function StepItem({
  label,
  isCurrent = false,
  isCompleted = false,
}: StepItemProps) {
  const labelRef = useRef<HTMLDivElement | null>(null);
  const [right, setRight] = useState(0);

  useEffect(() => {
    if (!labelRef.current) {
      return;
    }

    const halfLabelWidth = labelRef.current.clientWidth / 2;
    const halfCircleSize = 10;
    const total = halfLabelWidth - halfCircleSize;

    setRight(-total);
  }, []);

  console.log({"aa": isCompleted && !isCurrent})

  return (
    <StyledStepItemContainer
      isOutOfFocus={isCompleted || isCurrent}
    >
      <StyledStepItemStatusIndicator
        isOutOfFocus={isCompleted || isCurrent}
      >
        {isCompleted && 
          <StyledStepItemIcon aria-label="StepItemCheckIcon" className="text-white" />
        }

        <StyledStepItemLabel
          ref={labelRef}
          style={{ right }}
          isCurrent={isCurrent}
          isCompletedButNotCurrent={isCompleted && !isCurrent}
        >
          {label}
        </StyledStepItemLabel>
      </StyledStepItemStatusIndicator>
    </StyledStepItemContainer>
  );
}

StepItem.displayName = "StepItem";