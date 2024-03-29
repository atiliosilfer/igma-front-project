import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.backgroundColors['background-01']};
    color: ${(props) => props.theme.baseColors.darkMain};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
