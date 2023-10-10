import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${theme.colors.turistandoWhite};
  span {
    font-family: ${theme.font.family.comfortaa};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.medium};
    margin-right: ${theme.spacings.xxxsmall};
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
    text-align: center;
  }
  h1 {
    font-family: ${theme.font.family.merriweather};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.xxlarge};
    margin-bottom: ${theme.spacings.xlarge};
    text-align: center;
  }
  a {
    font-family: ${theme.font.family.comfortaa};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.medium};
    text-align: center;
    margin-bottom: ${theme.spacings.xlarge};
  }

  @media (max-width: 999px) {
    width: 70%;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
`;
