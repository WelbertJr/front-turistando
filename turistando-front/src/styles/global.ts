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
  }

  html {
    font-size: 62.5%;
  }

  html,
  body {
    max-width: 1920px;
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
