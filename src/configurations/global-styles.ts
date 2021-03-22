import { createGlobalStyle } from 'styled-components';

import { PRIMARY } from 'src/utils/constants';

export const GlobalStyles = createGlobalStyle`
  body {
    height: 100vh;
    margin: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background-color: ${PRIMARY};
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;
