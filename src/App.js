import React from 'react';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
    body {
      font-family: 'Open Sans', sans-serif;
    }

    h1, h2, h3 {
      font-family: 'Alatsi', sans-serif;
    }
`

function App() {
  return (
  <>
    <h1>OSTERIA</h1>
    <GlobalStyle />
    <div>Hello Osteria</div>

  </>
  );
}

export default App;
