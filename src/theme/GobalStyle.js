import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Nunito:400,600,700&display=swap');

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  
    html {
      font-size: 62.5%;
    }
  
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Nunito', sans-serif;
      width: 100vw;
      height: 100vh;
      background: #f4f4f4;
    }    
`;

export default GlobalStyle;