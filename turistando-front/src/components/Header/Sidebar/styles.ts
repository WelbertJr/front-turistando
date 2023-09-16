import styled from "styled-components";
import theme from "../../../styles/theme";
import { SidebarProps } from "./types";

export const Container = styled.div<SidebarProps>`
  background-color: ${theme.colors.turistandoTertiaryPrimary};
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 30rem;
  left: ${({ sidebar }) => (sidebar ? "0" : "none")};
  animation: showSidebar 0.4s;

  > svg {
    position: fixed;
    color: white;
    width: 3rem;
    height: 3rem;
    margin-top: 3.2rem;
    margin-left: 3.2rem;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 30rem;
    }
  }

  @media (max-width: 30rem) {
    width: 100%;
  }
`;

export const Content = styled.div`
  margin-top: 10rem;
`;
