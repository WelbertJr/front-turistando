import { MouseEvent } from "react";
import * as S from "./styles";
import { SelectProps } from "./types";

export const Select = ({ onClick }: SelectProps) => {
  const handleSelectClick = (event: MouseEvent<HTMLSelectElement>) => {
    const selectedValue = event.currentTarget.value;
    onClick(selectedValue); 
  };
  return (
    <S.ContainerInput>
      <S.Label>Quantas pessoas irão viajar?</S.Label>
      <S.Select onClick={handleSelectClick}>
        {[...Array(30).keys()].map((value) => (
          <option
            key={value + 1}
            value={`${value + 1} pessoa${value === 0 ? "" : "s"}`}
          >
            {`${value + 1} pessoa${value === 0 ? "" : "s"}`}
          </option>
        ))}
      </S.Select>
    </S.ContainerInput>
  );
};
