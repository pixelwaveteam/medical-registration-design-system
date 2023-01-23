import { Dialog, Transition } from "@headlessui/react";
import { BaseHTMLAttributes, Fragment, ReactNode } from "react";

// import { AlertDialogDescription } from "./Description";
import { AlertDialogTitle, StyledAlertDialogDescription, StyledAlertDialogStructureOverlay, StyledAlertDialogStructurePanel } from "./styles";

export interface AlertDialogStructureProps {
  isOpen: boolean;
  onClose: () => void;
  title: ReactNode;
  titleProps?: BaseHTMLAttributes<HTMLHeadingElement>
  description: ReactNode;
  descriptionProps?: BaseHTMLAttributes<HTMLDivElement>
}

export function AlertDialog({ isOpen, onClose, title, titleProps, description, descriptionProps }: AlertDialogStructureProps) {
  return (
    <Transition as={Fragment} show={isOpen}>
      <Dialog open={isOpen} onClose={onClose} >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <StyledAlertDialogStructureOverlay/>
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
          <Dialog.Panel
            as={StyledAlertDialogStructurePanel}
          >
            <Dialog.Title {...titleProps} as={AlertDialogTitle}>
              {title}
            </Dialog.Title>

            <Dialog.Description {...descriptionProps} as={StyledAlertDialogDescription}>
              {description}
            </Dialog.Description>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

AlertDialog.displayName = "AlertDialogStructure"

