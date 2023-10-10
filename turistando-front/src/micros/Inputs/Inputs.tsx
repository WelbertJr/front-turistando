import * as S from "./styles";
import { InputsProps } from "./types";
import theme from "../../styles/theme";

export const Input = ({
  textPlaceholder,
  type,
  id,
  color = "turistandoBlack",
  value,
  name,
  onChange,
  onBlur,
}: InputsProps) => {
  return (
    <S.ContainerInput>
      <S.Label htmlFor={id} style={{ color: `${theme.colors[color!]}` }}>
        {id}
      </S.Label>
      <S.Input
        type={type}
        placeholder={textPlaceholder}
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </S.ContainerInput>
  );
};
