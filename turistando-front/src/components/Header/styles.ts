import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  height: 10rem;
  display: flex;
  align-items: center;
  padding: 0 5%;
  background-color: ${theme.colors.turistandoBlue};
  box-shadow: 0 0 20rem 3rem;
  position: relative;

  > svg {
    color: ${theme.colors.tuistandoYellow};
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    display: none;
    @media (max-width: 999px) {
      display: flex;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 999px) {
    justify-content: flex-end;
  }
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  align-items: center;

  li {
    letter-spacing: 0.3rem;
    margin-left: 3.2rem;
    padding: 1rem;
    border-radius: 0.4rem;
    background-color: ${theme.colors.turistandoBlue};
    &:hover {
      background-color: #004466;
      transform: scale(1.1);
    }

    a {
      color: ${theme.colors.tuistandoYellow};
      font-size: ${theme.font.sizes.medium};
      font-family: ${theme.font.family.roboto};
      font-weight: ${theme.font.weight.bold};
      text-decoration: none;
      transition: 0.3s;
      :hover {
        color: red;
        opacity: 0.7;
        background-color: transparent;
        border-color: currentcolor;
      }
      svg {
        color: ${theme.colors.tuistandoYellow};
        width: 3rem;
        height: 100%;
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
    }
  }

  @media (max-width: 999px) {
    display: none;
  }
`;
