import { MouseEventHandler } from "react";
import { ButtonContainer } from "./styles";

type ButtonProps = {
  children: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

function Button({ children, onClick }: ButtonProps) {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
}

export default Button;
