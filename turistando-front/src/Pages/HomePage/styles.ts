import styled from "styled-components";
import theme from "../../styles/theme";

export const Main = styled.main`
  height: 90rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Form = styled.form`
  width: 50%;
  @media (max-width: 830px) {
    width: 80%;
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
  padding: 0 2% 0 1%;
  position: absolute;
  font-family: ${theme.font.family.roboto};
  font-size: ${theme.font.sizes.small};

  svg {
    position: absolute;
    right: 2rem;
    top: 2rem;
    height: 3rem;
    width: 3rem;
    cursor: pointer;

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
  }
`;

export const ContainerResults = styled.div`
  display: flex;
  height: 90%;
  flex-direction: column;
  margin-left: 2%;
  text-align: justify;
  row-gap: 2rem;
  h1 {
    text-align: center;
  }
`;
