import styled from "styled-components";
import theme from "../../../styles/theme";
import { ImageResult } from "../../../micros/Imagem/styles";
import { TitleSearch } from "../Carrosel/styles";

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
  padding: 5rem 0;
  background-color: ${theme.colors.turistandoWhite};
  height: 100%;
  overflow-y: auto;
`;

export const ContainerIcons = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-right: 2%;
  gap: 2%;
`;

export const DeleteIcon = styled.div`
  height: 3rem;
  width: 3rem;
  svg {
    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }
  }
`;

export const ImageModal = styled(ImageResult)`
  max-width: 51.3rem;
  max-height: 40rem;
`;

export const Details = styled.details`
  background-color: ${theme.colors.turistandoBlue};
  color: ${theme.colors.turistandoYellow};
  display: flex;
  width: 70%;
  border-radius: 0.5rem;
  div {
    display: flex;
    justify-content: center;
    text-align: justify;
    padding: 1rem 0;
  }

  @media (max-width: 555px) {
    width: 90%;
  }
`;

export const Summary = styled.summary`
  cursor: pointer;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 2rem;
  color: ${theme.colors.turistandoYellow};
  font-family: ${theme.font.family.comfortaa};
  font-weight: ${theme.font.weight.bold};
  &:hover {
    background-color: hsl(200, 70%, 50%);
    transform: scale(1.01);
  }
  &:active {
    background-color: hsl(200, 100%, 70%);
  }
`;

export const TitleModal = styled(TitleSearch)`
  font-size: 3rem;
  color: ${theme.colors.black100};
  font-family: ${theme.font.family.roboto};
  margin: 0 0 4rem 0;
  text-decoration: underline;
  @media (max-width: 430px) {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

export const AttractionsResults = styled.p`
  font-size: 1.4rem;
  color: ${theme.colors.turistandoYellow};
  font-family: ${theme.font.family.comfortaa};
  width: 90%;
`;
