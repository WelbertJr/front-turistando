import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
${() => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: gray;
      border-radius: 5px;
    }

    ::-webkit-scrollbar-track {
      background-color: #ffffff;
    }
  }

  html {
    font-size: 62.5%;
  }

  html,
  body {
    max-width: 100vw;
    margin: 0 auto;
  }

  * {
    ${({ theme }) => css`
      @media (min-width: ${theme.breakpoints.desktop}) {
        :focus {
          outline: 2px solid ${theme.colors.turistandoBlue};
        }
      }
    `};
  }
`}
`;

export default GlobalStyle;
