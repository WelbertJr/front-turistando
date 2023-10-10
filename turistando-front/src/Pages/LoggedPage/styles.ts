import styled from "styled-components";
import theme from "../../styles/theme";

export const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-image: url("src/assets/imgs/turistando-background-white.png");
  background-size: contain;
  background-repeat: repeat;
  height: 60rem;
`;

export const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: ${theme.colors.turistandoYellow};
    font-size: ${theme.font.sizes.big};
    font-family: ${theme.font.family.roboto};
    font-weight: ${theme.font.weight.bold};
    transition: 0.3s;
    margin-bottom: ${theme.spacings.large};
    @media (max-width: 430px) {
      font-size: ${theme.font.sizes.xlarge};
    }
  }
  @media (max-width: 830px) {
    width: 80%;
  }
`;

export const Card = styled.div`
  max-width: 70%;
  height: 90%;
  background-color: ${theme.colors.turistandoTertiary05};
  border-radius: 1rem;
  border: 2px solid rgb(0, 56, 103);
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
  padding: 0 1%;
  font-family: ${theme.font.family.roboto};
  font-size: ${theme.font.sizes.small};
  @media (max-width: 795px) {
    max-width: 90%;
  }
  @media (max-width: 555px) {
    padding: 2% 1%;
    gap: 2%;
    align-items: flex-end;
  }
  svg {
    height: 3rem;
    width: 3rem;
    cursor: pointer;
    @media (max-width: 555px) {
      margin-bottom: 0;
      order: -1;
    }
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const ContainerCardIcons = styled.div`
  display: flex;
  width: 100%;
  gap: 2%;
  justify-content: flex-end;
  margin-top: 2%;
  @media (max-width: 555px) {
    width: fit-content;
    flex-direction: column;
    justify-content: flex-start;
    gap: 4%;
  }
`;

export const ContainerCardContent = styled.div`
  display: flex;
  overflow: auto;
  gap: 4%;
  @media (max-width: 555px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const SaveIcon = styled.div`
  @media (max-width: 555px) {
    margin-right: 1%;
    margin-top: 10%;
  }
  &:hover {
    transform: scale(1.05);
  }
`;

export const ContainerResults = styled.div`
  display: flex;
  height: 90%;
  flex-direction: column;
  margin-left: 2%;
  text-align: justify;
  row-gap: 2rem;
  overflow-y: auto;
  h1 {
    text-align: center;
    @media (max-width: 420px) {
      font-size: 2rem;
    }
  }
  p {
    margin-right: 4%;
    color: ${theme.colors.turistandoBlue};
    font-family: ${theme.font.family.roboto};
    font-weight: ${theme.font.weight.bold};
  }
`;
