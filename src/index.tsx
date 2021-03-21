import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyles } from './configurations/global-styles';
import FilesContextProvider from './contexts/files-context';

import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <FilesContextProvider>
      <App />
    </FilesContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
