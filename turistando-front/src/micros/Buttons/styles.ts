import styled from "styled-components";
import theme from "../../styles/theme";
import { ButtonsProps } from "./types";

export const Button = styled.button<ButtonsProps>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 5rem;
  background-color: ${theme.colors.tuistandoYellow};
  color: ${theme.colors.turistandoBlue};
  font-family: ${theme.font.family.roboto};
  font-weight: ${theme.font.weight.bold};
  font-size: ${theme.font.sizes.medium};
  margin-top: ${theme.spacings.huge};
  margin-bottom: ${({ mb }) => (mb ? mb : theme.spacings.xxxhuge)};
  border-radius: ${theme.border.radius};
  cursor: pointer;
  border: none;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: hsl(50, 70%, 50%);
  }
  &:active {
    background-color: hsl(50, 100%, 70%);
    transform: scale(1.05);
  }
`;
