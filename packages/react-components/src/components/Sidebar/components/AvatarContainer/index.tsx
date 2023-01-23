import { Avatar } from "../../../Avatar";
import { StyledAvatarContainer, StyledAvatarUsername } from "./styles";

export interface AvatarContainerProps {
  isSidebarCollapsed: boolean;
  username: string;
}

export function AvatarContainer({ isSidebarCollapsed, username }: AvatarContainerProps) {
  return (
    <StyledAvatarContainer aria-label="AvatarContainer" >
      <Avatar name={username} />
      {!isSidebarCollapsed && (
        <StyledAvatarUsername>
          {username}
        </StyledAvatarUsername>
      )}
    </StyledAvatarContainer>
  );
}

AvatarContainer.displayName = "AvatarContainer"