import { Plus } from "phosphor-react";
import { ButtonHTMLAttributes, ComponentProps } from "react";
import { ButtonAddContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function ButtonAdd({ ...props }: ButtonProps) {
  return (
    <ButtonAddContainer
      {...props}
    >
      <Plus weight="fill" />
      <span className="block">Adicionar</span>
    </ButtonAddContainer>
  )
}

export interface ButtonAddProps extends ComponentProps<typeof ButtonAdd>{}

ButtonAdd.displayName = "ButtonAdd"
