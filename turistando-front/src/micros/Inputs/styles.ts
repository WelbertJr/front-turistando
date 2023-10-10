import styled from "styled-components";
import theme from "../../styles/theme";

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.xxsmall};
  width: 100%;
  margin-bottom: 5%;
`;

export const Label = styled.label`
  font-family: ${theme.font.family.comfortaa};
  font-size: ${theme.font.sizes.medium};
  font-weight: ${theme.font.weight.bold};
  margin-bottom: ${theme.spacings.small};
  color: ${theme.colors.turistandoBlack};
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  min-height: 5rem;
  display: flex;
  align-items: center;
  padding-left: 2rem;
  border-radius: ${theme.border.radius};
  font-family: ${theme.font.family.comfortaa};
  font-size: ${theme.font.sizes.small};
  font-weight: ${theme.font.weight.regular};
  border: 1px solid #e8e8e8;

  &[type="date"]::-webkit-calendar-picker-indicator {
    background-color: ${theme.colors.turistandoYellow};
    cursor: pointer;
    height: 100%;
    font-size: ${theme.font.sizes.huge};
    border-radius: 0.3rem;
  }
`;
