import { Check, MagnifyingGlass, Pencil, ThumbsDown, ThumbsUp, Trash } from 'phosphor-react';
import { ButtonHTMLAttributes } from 'react';
import { ButtonListActionContainer } from './styles';


export interface ButtonListActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "edit" | "delete" | "validate" | "reject" | "view" | "success";
}

const variantIcon = {
  edit: (props: any) => <Pencil {...props} aria-label="PencilIcon" />,
  delete: (props: any) => <Trash  {...props} aria-label="TrashIcon" />,
  view: (props: any) => <MagnifyingGlass {...props} aria-label=" MagnifyingGlassIcon" />,
  success: (props: any) => <Check {...props} aria-label="CheckIcon" />,
  validate: (props: any) => <ThumbsUp {...props} aria-label="ThumbsUpIcon" />,
  reject: (props: any) => <ThumbsDown {...props} aria-label="ThumbsDownIcon" />,
};

export function ButtonListAction({ variant, ...props }: ButtonListActionProps) {
  const Icon = variantIcon[variant];

  return(
    <ButtonListActionContainer
      variant={variant}
      {...props}
    >
      <Icon size="20" aria-hidden="true" />
    </ButtonListActionContainer>
  )
}

ButtonListAction.displayName = "ButtonListAction"