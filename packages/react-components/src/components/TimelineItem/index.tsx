import { ReactNode } from "react";
import { StyledTimelineItemTextContainer, StyledTimelineItemTitleContainer } from "./styles";

export interface TimelineItemProps {
  icon: ReactNode;
  title: string;
  text: string;
}

export function TimelineItem({ icon, text, title }: TimelineItemProps) {
  return (
    <div>
      <StyledTimelineItemTitleContainer>
        {icon}
        {title}
      </StyledTimelineItemTitleContainer>
      <StyledTimelineItemTextContainer>
        {text}
      </StyledTimelineItemTextContainer>
    </div>
  )
}

TimelineItem.displayName = "TimelineItem";