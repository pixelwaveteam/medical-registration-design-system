import { Plus } from "phosphor-react";
import { ButtonHTMLAttributes, ComponentProps } from "react";
import { ButtonAddContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function ButtonAdd({ ...props }: ButtonProps) {
  return (
    <ButtonAddContainer
      className="px-4 text-brand font-semibold bg-transparent hover:bg-brand-50 rounded-full focus:outline-none focus:ring focus:ring-brand-50 flex justify-center items-center gap-2 p-1 border border-brand"
      {...props}
    >
      <Plus weight="fill" />
      <span className="block">Adicionar</span>
    </ButtonAddContainer>
  )
}

export interface ButtonAddProps extends ComponentProps<typeof ButtonAdd>{}

ButtonAdd.displayName = "ButtonAdd"
