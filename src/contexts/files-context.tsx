import React, { createContext, useContext, useState } from 'react';

interface FileContextProps {
  image?: string | ArrayBuffer | null ;
  changeImage?: (files: FileList | null) => void;
}

const FilesContext = createContext<FileContextProps>({ image: '' });

const FilesContextProvider: React.FC = ({ children }) => {
  const [image, setImage] = useState<string | ArrayBuffer | null | undefined>('');

  function changeImage(argFiles: FileList | null): void {
    const item = argFiles?.item(0);

    if (item) {
      const reader = new FileReader();

      reader.readAsDataURL(item);
      reader.onload = ({ target }) => {
        setImage(target?.result);
      };
    }
  }

  return (
    <FilesContext.Provider value={{ image, changeImage }}>
      {children}
    </FilesContext.Provider>
  );
};

export function useFileContext(): FileContextProps {
  const context = useContext(FilesContext);

  return context;
}

export default FilesContextProvider;
