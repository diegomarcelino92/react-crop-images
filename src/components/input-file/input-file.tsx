import React, { useRef } from 'react';
import { useFileContext } from '../../contexts/files-context';

import { Button, Input } from './styles';

const InputFile: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { changeImage } = useFileContext();

  function handleClick() {
    inputRef.current?.click();
  }

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    const { files } = target;

    if (changeImage) {
      changeImage(files);
    }
  }

  return (
    <Button onClick={handleClick}>
      Selecionar imagem
      <Input
        type="file"
        ref={inputRef}
        onChange={handleChange}
      />
    </Button>
  );
};

export default InputFile;
