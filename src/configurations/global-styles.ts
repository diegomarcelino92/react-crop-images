import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    height: 100vh;
    margin: 0;
    display: flex;
    flex-direction: column;
    color: #ffffff;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background-color: #333333;
    /* background-image:
      linear-gradient(
        120deg,
        #333333, 
        #444444 50%, 
        #ff5722 78%,
        #d81b60 100%
         ); */

    
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;
