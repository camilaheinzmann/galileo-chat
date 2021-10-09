import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ ...props }: ButtonProps) {
  return <ButtonContainer {...props} />;
}

export default Button;
