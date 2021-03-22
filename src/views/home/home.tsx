import React from 'react';

// import { Container } from './styles';

import InputFile from '../../components/input-file';
import PreviewImage from '../../components/preview-image';
import Tecnologies from '../../components/tecnlogies';

const home: React.FC = () => (
  <>
    <Tecnologies />

    <InputFile />
    <PreviewImage />

  </>
);

export default home;
