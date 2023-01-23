import * as Tooltip from '@radix-ui/react-tooltip';
import React, { BaseHTMLAttributes, ReactNode, useState } from "react";
import { NavLinkIconStyles, NavLinkStyles, StyledNavLinkLabel, StyledNavLinkListLine, StyledTooltipArrow, StyledTooltipText } from './styles';

export interface NavLinkElementProps extends BaseHTMLAttributes<any> {
  children: ReactNode[];
}

export interface NavLinkProps {
  label: string;
  src: string;
  icon: React.ReactElement;
  isSidebarCollapsed: boolean;
  LinkElement: (args: NavLinkElementProps) => JSX.Element;
}

export function NavLink({ label, icon, src, isSidebarCollapsed, LinkElement }: NavLinkProps) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  return (
    <Tooltip.Provider>
        <Tooltip.Root open={isSidebarCollapsed ? isTooltipVisible : false} onOpenChange={isSidebarCollapsed ? setIsTooltipVisible : undefined}>
          <Tooltip.Trigger asChild>
            <StyledNavLinkListLine aria-label='NavLinkContainer'>
              <LinkElement
                href={src}
                className={NavLinkStyles()}
              >
                {
                  React.cloneElement(icon, {
                    className: NavLinkIconStyles()
                  })
                }

                {!isSidebarCollapsed && 
                  <StyledNavLinkLabel>
                    {label}
                  </StyledNavLinkLabel>
                }
              </LinkElement>
            </StyledNavLinkListLine>
          </Tooltip.Trigger>

          <Tooltip.Portal>
            <Tooltip.Content side='right'>
              <StyledTooltipText>
                {label}
              </StyledTooltipText>

              <StyledTooltipArrow />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
  );
}

NavLink.displayName = "NavLink"