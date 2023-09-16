import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${theme.colors.turistandoBlue};
  @media (max-width: 999px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 35rem;
  margin-top: 5rem;
  p {
    font-family: ${theme.font.family.merriweather};
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.sizes.medium};
    margin-bottom: ${theme.spacings.small};
    color: ${theme.colors.turistandoWhite};
    text-align: center;
  }
  h1 {
    font-family: ${theme.font.family.merriweather};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.xxlarge};
    margin-bottom: ${theme.spacings.xlarge};
    color: ${theme.colors.turistandoWhite};
  }

  @media (max-width: 999px) {
    width: 70%;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
`;
