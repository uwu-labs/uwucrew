import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Calder Dark';
    src: url('/fonts/calder-dark.ttf');
  }

  @font-face {
    font-family: 'Calder LC';
    src: url('/fonts/calder-lc.ttf');
  }

  :root {
    --text-primary: #000000;
    --bg: #FAE1ED;
    --bg-01: #EDA9C7;
    --bg-02: #d2ab74;
    --bg-03: #4c96b2;
    --bg-04: #c85e75;
    --bg-05: #427e95;
  }

  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      color: var(--text-primary);
      font-family: 'Calder LC', sans-serif;
      font-size: 10px;
  }

  button {
      background: none;
      border: none;
      outline: none;
  }

  input {
      border: none;
      outline: none;
  }

  a {
      text-decoration: none;
  }

  h1 {
    font-family: 'Calder Dark', sans-serif;
  }

  table {
      width: 100%;
  }

  table td, table th {
      font-weight: 500;
      color: var(--text-primary);

      margin-top: 2rem;
      font-size: 1.7rem ;
      line-height: 2.3rem;
  }
`;

const GlobalStyles = (): JSX.Element => {
	return <GlobalStyle />;
};

export default GlobalStyles;
