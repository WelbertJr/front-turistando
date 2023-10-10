import React, { useState } from "react";
import * as S from "./styles";
import { Image } from "../../../micros/Imagem/Image";
import theme from "../../../styles/theme";
import { useRef } from "react";
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";
import { Modal } from "../Modal/Modal";
import { LoggedPageProps } from "../types";
import { example } from "../../HomePage/types";

export const Carrossel = ({
  list = example,
  setItensArray,
  itensArray,
}: LoggedPageProps) => {
  const [modal, setModal] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  );

  const carrossel = useRef<HTMLDivElement | null>(null);

  const handleLeftClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (carrossel.current) {
      carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
    }
  };

  const handleRightClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (carrossel.current) {
      carrossel.current.scrollLeft += carrossel.current.offsetWidth;
    }
  };

  const showModal = (index: number | null) => {
    setSelectedItemIndex(index);
    setModal(true);
  };

  return (
    <S.Container>
      <S.ContainerCarrossel ref={carrossel}>
        {list.map((list, index) => (
          <S.Item key={index} onClick={() => showModal(index)}>
            <S.ContainerImage>
              <Image
                src={list.imgResult!}
                alt="Image Example"
                id="ImageResultItemCarrossel"
              />
            </S.ContainerImage>
            <S.ContainerInfos>
              <S.TitleSearch>{list.cityName}</S.TitleSearch>
              <div style={{ display: "none" }}>
                <h2>{list.attractionsResults}</h2>
                <h2>{list.climateResult}</h2>
                <h2>{list.costsResult}</h2>
              </div>
            </S.ContainerInfos>
          </S.Item>
        ))}
      </S.ContainerCarrossel>
      <S.ContainerIcons>
        <S.LeftContainer>
          <BsFillArrowLeftSquareFill
            color={theme.colors.turistandoBlue}
            size="100%"
            onClick={handleLeftClick}
          />
        </S.LeftContainer>
        <S.RightContainer>
          <BsFillArrowRightSquareFill
            color={theme.colors.turistandoBlue}
            size="100%"
            onClick={handleRightClick}
          />
        </S.RightContainer>
      </S.ContainerIcons>

      {modal && selectedItemIndex !== null && (
        <Modal
          active={() => setModal(false)}
          item={list[selectedItemIndex]}
          index={selectedItemIndex}
          setItensArray={setItensArray}
          itensArray={itensArray}
        />
      )}
    </S.Container>
  );
};
