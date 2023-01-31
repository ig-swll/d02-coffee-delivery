import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-smooth: antialiased;
    /* padding: 0 1rem; */
    font-size: 100%;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme['base-text']};

  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }

  p, a, span, small, strong {
    line-height: 130%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    line-height: 130%;
  }

  button {
    background-color: ${({ theme }) => theme['base-button']};
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;
    &:hover {
      background-color: ${({ theme }) => theme['base-hover']};
    }
  }

  input {
    background-color: ${({ theme }) => theme['base-input']};
    border: 1px solid ${({ theme }) => theme['base-button']};
    border-radius: 4px;
    padding: 0.75rem;
  }
  `
