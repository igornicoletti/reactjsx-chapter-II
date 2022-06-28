import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #E62E4D;
    --blue: #5429cc;
    --green: #33CC95;
    --blue-light: #6933ff;
    --text-light: #363f5f;
    --text-body: #969cb3;
    --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: inherit;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    width: 100%;
    font-size: 16px;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
    background-color: var(--background);
    -webkit-font-smoothing: antialiased; 
  }

  body, input, textarea, button {
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
  }

  hr {
    border-top: inherit;
  }

  p, ul {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6, strong {
    margin: 0;
    font-weight: 600;
  }

  a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;

    &:hover, &:visited {
      color: inherit;
    }

    &:focus, &:active {
      outline: inherit;
    }
  }

  i:hover {
    cursor: pointer;
    transition: .25s ease-in;
  }

  button {
    cursor: pointer;

    &:focus {
      outline: inherit;
    }

    &:disabled {
      opacity: 0.75;
      cursor: not-allowed;
    }
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 50px white inset;
  }
`;