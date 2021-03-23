import React, { useRef, useState, MouseEvent } from 'react';

import { useFileContext } from '../../contexts/files-context';

import CropTool from '../crop-tool';

import {
  ImagePreview, Container, CropView,
} from './styles';

type Position = {
  clientX?: number;
  clientY?: number;
  offsetX?: number;
  offsetY?: number;
  start?: boolean;
  completed?: boolean;
}

type Size = {
  width: number, height: number
}

const PreviewImage: React.FC = () => {
  const { image, changeCropped } = useFileContext();
  const ref = useRef<HTMLImageElement>(null);

  const INITIAL_SIZE = { width: 0, height: 0 };

  const [position, setPosition] = useState<Position>({});
  const [size, setSize] = useState<Size>(INITIAL_SIZE);

  function onMouseDown({
    nativeEvent: {
      clientY,
      clientX,
      offsetX,
      offsetY,
    },
  }: MouseEvent<HTMLImageElement>) {
    if (!position.completed) {
      setPosition({
        clientY,
        clientX,
        start: true,
        offsetX,
        offsetY,
      });

      setSize(INITIAL_SIZE);
    }
  }

  function handleMouseMove({
    nativeEvent: {
      clientX,
      clientY,
    },
  }: MouseEvent<HTMLImageElement>) {
    if (position.start && !position.completed) {
      setSize({
        width: (clientX - (position.clientX || 0)),
        height: (clientY - (position.clientY || 0)),
      });
    }
  }

  function handleMouseUp() {
    setPosition((old) => ({
      ...old, completed: true,
    }));
  }

  function handleMouseLeave() {
    if (position.start && !position.completed) {
      setPosition({ clientX: 0, clientY: 0 });
      setSize(INITIAL_SIZE);
    }
  }

  function onCancel() {
    setPosition({});
    setSize(INITIAL_SIZE);
  }

  function onCrop() {
    const original = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    original.src = image as string;
    original.onload = () => {
      const { width, height } = original;

      canvas.width = width;
      canvas.height = height;

      ctx?.clearRect(0, 0, width, height);

      ctx?.drawImage(original, 0, 0);

      if (changeCropped) {
        changeCropped(canvas.toDataURL(), false);
      }
    };

    // TAMANHO ORIGINAL
    const { width: originalWidth, height: originalHeight } = original;

    // TAMANHO RELATIVO FIXO
    const height = ref.current?.height || 0;
    const width = ref.current?.width || 0;

    // FATOR DE PROPORÇÃO
    const widthFactory = originalWidth / width;
    const heightFactory = originalHeight / height;

    // TAMANHO DE CORTE ORIGINAL
    const croppedWidth = size.width * widthFactory;
    const croppedHeight = size.height * heightFactory;

    // POSIÇÕES X E Y ORIGINAIS
    const x = position.offsetX || 0 * widthFactory;
    const y = position.offsetY || 0 * heightFactory;

    const cropped = ctx?.getImageData(x, y, croppedWidth, croppedHeight);

    ctx?.clearRect(0, 0, canvas.width, canvas.height);

    ctx?.putImageData(cropped as ImageData, 0, 0);

    canvas.width = croppedWidth;
    canvas.height = croppedHeight;
    original.width = croppedWidth;
    original.height = croppedHeight;

    if (changeCropped) {
      changeCropped(canvas.toDataURL(), true);
    }

    setPosition({ });
    setSize(INITIAL_SIZE);
  }

  return (

    <Container>
      {!image && <h2>IMAGEM</h2>}

      {image && (
        <CropView
          onMouseDown={onMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >

          <ImagePreview
            ref={ref}
            src={image as string}
            alt="Imagen"
            draggable="false"
          />

          {position.start && (
          <CropTool
            top={position.clientY}
            left={position.clientX}
            width={size.width}
            height={size.height}
            completed={position.completed}
            onCrop={onCrop}
            onCancel={onCancel}
          />
          )}

        </CropView>
      )}

    </Container>
  );
};

export default PreviewImage;
