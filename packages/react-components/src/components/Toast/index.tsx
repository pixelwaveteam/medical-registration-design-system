import { Transition } from "@headlessui/react";
import { CheckCircle, WarningCircle, XCircle } from "phosphor-react";
import { Fragment } from "react";
import { StyledToastCloseButton, StyledToastCloseButtonIcon, StyledToastCloseButtonText, StyledToastContainer, StyledToastContentContainer, StyledToastDescriptionContainer, StyledToastIconContainer, StyledToastOuterContainer, StyledToastTitleContainer, ToastIconStyles } from "./styles";

const typeIconClass = {
  success: {
    css: "text-green-400",
    icon: CheckCircle,
  },
  error: {
    css: "text-red-400",
    icon: XCircle,
  },
  info: {
    css: "text-yellow-200",
    icon: WarningCircle,
  },
};

interface ToastMessageData {
  type: 'success' | 'error' | 'info';
  title: string;
  description?: string;
  autoClose?: boolean;
}

export interface ToastProps {
  message: ToastMessageData;
  removeToast(): void;
  show: boolean;
}

export function Toast({ message, removeToast, show }: ToastProps) {
  const messageType = message.type || "success";

  const Icon = typeIconClass[messageType].icon;

  return (
    <Transition
      show={show}
      as={Fragment}
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <StyledToastOuterContainer
        aria-live="assertive"
        aria-label="ToastContainer"
      >
        <StyledToastContainer>
          <StyledToastIconContainer>
            <Icon
              className={ToastIconStyles({type: message.type})}
              aria-hidden="true"
            />
          </StyledToastIconContainer>
          <StyledToastContentContainer>
            <StyledToastTitleContainer aria-label="ToastTitleContainer">
              {message.title}
            </StyledToastTitleContainer>
            {message.description && (
              <StyledToastDescriptionContainer aria-label="ToastDescriptionContainer">
                {message.description}
              </StyledToastDescriptionContainer>
            )}
          </StyledToastContentContainer>
            <StyledToastCloseButton
              type="button"
              onClick={() => {
                removeToast();
              }}
              aria-label="CloseToastButton"
            >
              <StyledToastCloseButtonText>Close</StyledToastCloseButtonText>
              <StyledToastCloseButtonIcon aria-hidden="true" />
            </StyledToastCloseButton>
        </StyledToastContainer>
      </StyledToastOuterContainer>
    </Transition>
  );
}

Toast.displayName = "Toast";