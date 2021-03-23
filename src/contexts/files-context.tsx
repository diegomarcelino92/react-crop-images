import React, { createContext, useContext, useState } from 'react';

interface FileContextProps {
  image?: string | ArrayBuffer | null;
  download?:boolean;
  changeImage?: (files: FileList | null) => void;
  changeCropped?: (img: string, download: boolean) => void;
}

const FilesContext = createContext<FileContextProps>({ image: '' });

const FilesContextProvider: React.FC = ({ children }) => {
  const [image, setImage] = useState<string | ArrayBuffer | null | undefined>('');
  const [download, setDownload] = useState<boolean>(false);

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

  function changeCropped(img:string, isDownload = false) {
    setImage(img);
    setDownload(isDownload);
  }

  return (
    <FilesContext.Provider value={{
      image, changeImage, download, changeCropped,
    }}
    >
      {children}
    </FilesContext.Provider>
  );
};

export function useFileContext(): FileContextProps {
  const context = useContext(FilesContext);

  return context;
}

export default FilesContextProvider;
