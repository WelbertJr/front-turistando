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
  @media (max-width: 830px) {
    width: 80%;
  }
`;

export const ContainerCloseIcon = styled.div`
  display: flex;
  @media (max-width: 555px) {
    order: -1;
    width: 100%;
    justify-content: flex-end;
  }
`;

export const Card = styled.div`
  max-width: 70%;
  height: 50rem;
  background-color: ${theme.colors.turistandoTertiary05};
  border-radius: 1rem;
  border: 2px solid rgb(0, 56, 103);
  display: flex;
  align-items: center;
  margin: auto;
  padding: 0 1%;
  font-family: ${theme.font.family.roboto};
  font-size: ${theme.font.sizes.small};
  @media (max-width: 795px) {
    max-width: 90%;
  }
  @media (max-width: 555px) {
    flex-direction: column;
    padding: 2% 1%;
    gap: 2%;
  }
  svg {
    height: 3rem;
    width: 3rem;
    cursor: pointer;
    margin-bottom: 45rem;
    @media (max-width: 555px) {
      margin-bottom: 0;
    }

    @keyframes setShowResults {
      from {
        opacity: 0;
        width: 0;
      }
      to {
        opacity: 1;
        width: 30rem;
      }
    }
    &:hover {
      transform: scale(1.1);
    }
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
