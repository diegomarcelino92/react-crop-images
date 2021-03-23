import React from 'react';

import { useFileContext } from 'src/contexts/files-context';

import InputFile from '../../components/input-file';
import PreviewImage from '../../components/preview-image';
import Tecnologies from '../../components/tecnlogies';

import { Link } from './styles';

const Home: React.FC = () => {
  const { download, image } = useFileContext();

  return (
    <>
      <Tecnologies />

      <InputFile />
      <PreviewImage />

      {download && (
        <Link
          download="image.png"
          alt="Baixar imagem"
          href={image as string}
        />
      )}
    </>
  );
};

export default Home;
