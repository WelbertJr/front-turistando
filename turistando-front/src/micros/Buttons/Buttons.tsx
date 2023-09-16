import * as S from "./styles";
import { ButtonsProps } from "./types";

export const Button = ({ placeholder, type, mb, onClick }: ButtonsProps) => {
  return (
    <S.Button type={type} mb={mb} onClick={onClick}>
      {placeholder}
    </S.Button>
  );
};
