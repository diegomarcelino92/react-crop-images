import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    height: 100vh;
    margin: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background-color: #f2f2fa;
    /* background-image:
      linear-gradient(
        180deg,
        #d1c4e9, 
        #9fa8da 50%, 
        #7986cb 78%,
        #512da8 100%
         ); */

    
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;
