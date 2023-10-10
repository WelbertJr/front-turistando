import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${theme.colors.turistandoWhite};
  span {
    font-family: ${theme.font.family.comfortaa};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.medium};
    margin-right: ${theme.spacings.xxxsmall};
  }
  a {
    font-family: ${theme.font.family.comfortaa};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.medium};
  }
  @media (max-width: 999px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 35rem;
  p {
    font-family: ${theme.font.family.merriweather};
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.sizes.medium};
    margin-bottom: ${theme.spacings.small};
  }
  h1 {
    font-family: ${theme.font.family.merriweather};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.xxlarge};
    margin-bottom: 10%;
  }
  @media (max-width: 400px) {
    width: 90%;
  }
`;

export const ContainerRegistration = styled.div`
  display: flex;
  @media (max-width: 310px) {
    align-items: center;
    flex-direction: column;
  }
`;
