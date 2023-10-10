import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${theme.colors.turistandoBlue};

  a {
    font-family: ${theme.font.family.roboto};
    font-size: ${theme.font.sizes.medium};
    text-decoration: none;
    color: ${theme.colors.turistandoWhite};
    padding: 1rem;
    border-radius: ${theme.border.radius};
    margin-left: 5%;

    &:hover {
      background-color: #004466;
      transform: scale(1.1);
    }
    @media (max-width: 638px) {
      font-size: ${theme.font.sizes.xsmall};
    }
  }

  p {
    font-family: ${theme.font.family.roboto};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.weight.bold};
    text-decoration: none;
    color: ${theme.colors.turistandoWhite};
    @media (max-width: 638px) {
      font-size: ${theme.font.sizes.xsmall};
    }
  }
  @media (max-width: 370px) {
    flex-direction: column;
  }
`;
