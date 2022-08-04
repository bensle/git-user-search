import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

export default styled.createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :root {
    --textcolor: #fff;
    --backgroundColor: #262a34;
  }

  body {
    color: white;
    background-color: #262a34;
    font-family: 'Ubuntu', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
  }

  button,
  input,
  textarea {
    font: inherit;
  }
`;
