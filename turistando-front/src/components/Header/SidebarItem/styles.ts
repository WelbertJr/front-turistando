import styled from "styled-components";
import theme from "../../../styles/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.colors.turistandoBlue};
  font-family: ${theme.font.family.roboto};
  font-size: ${theme.font.sizes.large};
  font-weight: ${theme.font.weight.regular};
  color: ${theme.colors.turistandoYellow};
  padding: ${theme.spacings.xsmall};
  cursor: pointer;
  border-radius: ${theme.spacings.xsmall};
  margin: 0 1.5rem 2rem;

  > svg {
    margin: 0 2rem;
  }

  &:hover {
    background-color: ${theme.colors.turistandoBlack};
  }
`;
