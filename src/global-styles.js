import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 1rem;
    background: ${({ theme }) => theme.body};
    margin: 0;
  }

  h1 {
    font-size: 1rem;
  }

  p {
    font-size: .8rem;
  }
`;
