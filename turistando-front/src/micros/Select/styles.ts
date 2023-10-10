import styled from "styled-components";
import theme from "../../styles/theme";

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.xxsmall};
  width: 100%;
`;

export const Label = styled.label`
  font-family: ${theme.font.family.comfortaa};
  font-size: ${theme.font.sizes.medium};
  font-weight: ${theme.font.weight.bold};
  margin-bottom: ${theme.spacings.small};
  color: ${theme.colors.turistandoYellow};
  width: 100%;
`;

export const Select = styled.select`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  padding-left: 2rem;
  border-radius: ${theme.border.radius};
  font-family: ${theme.font.family.comfortaa};
  font-size: ${theme.font.sizes.small};
  font-weight: ${theme.font.weight.regular};
  margin-bottom: ${theme.spacings.small};
  border: 1px solid #e8e8e8;
  option {
    margin-top: -2rem;
  }
`;
