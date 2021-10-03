import { ButtonContainer } from "./styles";

type ButtonProps = {
  children: string;
};

function Button({ children }: ButtonProps) {
  return <ButtonContainer>{children}</ButtonContainer>;
}

export default Button;
