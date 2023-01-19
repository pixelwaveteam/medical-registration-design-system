import { Transition } from "@headlessui/react";
import { CheckCircle, Info, WarningCircle, XCircle } from "phosphor-react";
import { Fragment, ReactElement, useState } from "react";
import { AlertInfoContainer, AlertInfoContentContainer, AlertInfoContentDescription, AlertInfoContentTitle, AlertInfoIconContainer, CloseAlertInfoButton, CloseAlertInfoButtonIcon, CloseAlertInfoContainer } from "./styles";

export interface AlertInfoProps {
  title: string | ReactElement;
  variant?: "success" | "error" | "info" | "warning";
  description?: string | ReactElement;
  hasClose?: boolean;
  cssClass?: string;
}

const variantIcon = {
  success: CheckCircle,
  error: XCircle,
  info: Info,
  warning: WarningCircle,
};

export function AlertInfo({
  title,
  variant = "success",
  description = "",
  hasClose = false,
  cssClass = "",
}: AlertInfoProps) {
  const [dismissAlert, setDismissAlert] = useState(false);

  const Icon = variantIcon[variant];

  const handleDismissAlert = () => {
    setDismissAlert(true);
  };

  return (
    <Transition
      show={!dismissAlert}
      as={Fragment}
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <AlertInfoContainer
        className={cssClass}
        aria-label="AlertInfoContainer"
        typeOfAlert={variant}
      >
        <AlertInfoIconContainer
          typeOfAlert={variant}
        >
          <Icon
            aria-hidden="true"
          />
        </AlertInfoIconContainer>

        <AlertInfoContentContainer className="ml-3 w-full">
          <AlertInfoContentTitle
            typeOfAlert={variant}
            aria-label="InfoTitle"
          >
            {title}
          </AlertInfoContentTitle>

          {description && (
            <AlertInfoContentDescription
              typeOfAlert={variant}
              aria-label="InfoDescription"
            >
              {description}
            </AlertInfoContentDescription>
          )}
        </AlertInfoContentContainer>

        {hasClose && (
          <CloseAlertInfoContainer aria-label="CloseContainer">
            <div>
              <CloseAlertInfoButton
                type="button"
                typeOfAlert={variant}
                onClick={handleDismissAlert}
              >
                <span>Dismiss</span>
                <CloseAlertInfoButtonIcon aria-hidden="true" />
              </CloseAlertInfoButton>
            </div>
          </CloseAlertInfoContainer>
          //juntar os 3 containers Close..., Close...Button e div
        )}
      </AlertInfoContainer>
    </Transition>
  );
}

AlertInfo.displayName = "AlertInfo"
