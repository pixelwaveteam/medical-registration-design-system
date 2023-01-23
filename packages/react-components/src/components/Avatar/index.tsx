import { getNameInitials } from "@medical-registration/utils";
import * as AvatarRadix from "@radix-ui/react-avatar";
import { StyledAvatarContainer, StyledAvatarFallbackContainer, StyledAvatarImage } from "./styles";

export interface AvatarProps {
  name: string;
  imageUrl?: any;
  size?: number;
}

export function Avatar({ name, imageUrl, size = 8 }: AvatarProps) {
  const nameInitials = getNameInitials(name);

  return (
    <StyledAvatarContainer
      aria-label={`${name}Avatar`}
      css={
        {
          "--avatar-size": size*0.25 + "rem"
        }
      }
    >
      <StyledAvatarImage
        src={imageUrl}
        alt={name}
      />
      <AvatarRadix.Fallback asChild delayMs={600}>
        <StyledAvatarFallbackContainer className="align-center flex h-full w-full items-center rounded-full bg-white font-semibold text-brand">
          <span>{nameInitials}</span>
        </StyledAvatarFallbackContainer>
      </AvatarRadix.Fallback>
    </StyledAvatarContainer>
  );
}

Avatar.displayName = "Avatar"
