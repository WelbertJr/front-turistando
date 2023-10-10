import styled from "styled-components";
import theme from "../../../styles/theme";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 5%;
  height: 70rem;
  background-color: ${theme.colors.turistandoYellow};
  color: ${theme.colors.turistandoWhite};
`;

export const ContainerIcons = styled.div`
  display: flex;
`;

export const LeftContainer = styled.button`
  left: 10rem;
  height: 5rem;
  width: 5rem;
  cursor: pointer;
  margin-right: 5rem;
  border: none;
  border-radius: 1rem;
  &:hover {
    background-color: hsl(50, 70%, 50%);
    transform: scale(1.05);
  }
  &:active {
    background-color: hsl(50, 100%, 70%);
  }
`;

export const RightContainer = styled.button`
  right: 10rem;
  height: 5rem;
  width: 5rem;
  cursor: pointer;
  margin-left: 5rem;
  border: none;
  border-radius: 1rem;
  &:hover {
    background-color: hsl(50, 70%, 50%);
    transform: scale(1.05);
  }
  &:active {
    background-color: hsl(50, 100%, 70%);
  }
`;

export const ContainerCarrossel = styled.div`
  max-width: 75%;
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
  border-right: 2px solid ${theme.colors.turistandoBlue};
  border-left: 2px solid ${theme.colors.turistandoBlue};
  scroll-behavior: smooth;
  align-items: center;
`;

export const Item = styled.div`
  background-color: ${theme.colors.turistandoBlue};
  margin: 1rem;
  padding: 2rem 1rem 0 1rem;
  min-width: 28rem;
  height: 40rem;
  border-radius: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const ContainerImage = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
  justify-content: center;
  &:hover {
    img {
      opacity: 0.8;
    }
  }
`;

export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleSearch = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 1rem 0;
  color: white;
`;
