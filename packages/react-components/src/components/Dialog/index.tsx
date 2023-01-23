import { Dialog as HeadlessuiDialog, Transition } from "@headlessui/react";
import { X } from "phosphor-react";

import { BaseHTMLAttributes, Fragment, ReactNode } from "react";
import { StyledCloseDialogButton, StyledDialogDescription, StyledDialogOverlay, StyledDialogPanel, StyledDialogTitle } from "./styles";

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: ReactNode;
  titleProps: BaseHTMLAttributes<HTMLHeadingElement>;
  description: ReactNode;
  descriptionProps: BaseHTMLAttributes<HTMLDivElement>;
  size?: "md" | "lg" | "2xl" | "3xl";
  hasCloseButton: boolean
}

const sizes = {
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
}

export function Dialog({ isOpen, onClose, size = "md", titleProps, title, description, descriptionProps, hasCloseButton }: DialogProps) {
  return (
    <Transition as={Fragment} show={isOpen}>
      <HeadlessuiDialog aria-label="DialogContainer" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <StyledDialogOverlay />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <HeadlessuiDialog.Panel
            as={StyledDialogPanel}
            css={{ "--panel-size": sizes[size] }}
          >
            <HeadlessuiDialog.Title
              as={StyledDialogTitle}
              {...titleProps}
            >
              {title}

              {hasCloseButton && 
                <StyledCloseDialogButton
                  onClick={onClose}  
                >
                  <X />
                </StyledCloseDialogButton>
              }
            </HeadlessuiDialog.Title>

            <HeadlessuiDialog.Description {...descriptionProps} as={StyledDialogDescription}>
              {description}
            </HeadlessuiDialog.Description>
          </HeadlessuiDialog.Panel>
        </Transition.Child>
      </HeadlessuiDialog>
    </Transition>
  );
}

Dialog.displayName = "Dialog"