import React from 'react';

import InputFile from '../input-file';
import PreviewImage from '../preview-image';

import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';

import { InputContainer } from './styles';

const Layout: React.FC = () => (
  <>
    <Header />
    <Main>
      <InputFile />
      <PreviewImage />
    </Main>
    <Footer />
  </>
);
export default Layout;
