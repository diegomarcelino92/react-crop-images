import React, { useRef, useState, MouseEvent } from 'react';

import { useFileContext } from '../../contexts/files-context';
import CropTool from '../crop-tool';

import {
  Image, Container,
} from './styles';

type Position = {
  clientX?: number;
  clientY?: number;
  start?: boolean;
  completed?: boolean;
}

type Size = {
  width: number, height: number
}

const PreviewImage: React.FC = () => {
  const { image } = useFileContext();
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
    setPosition({
      clientY,
      clientX,
      start: true,
      // offsetX,
      // offsetY,
    });

    setSize(INITIAL_SIZE);

    // console.log(clientY, clientX, offsetX, offsetY);
  }

  function handleMouseMove({
    nativeEvent: {
      clientX,
      clientY,
    },
  }: MouseEvent<HTMLImageElement>) {
    if (position.start) {
      setSize({
        width: (clientX - (position.clientX || 0)),
        height: (clientY - (position.clientY || 0)),
      });
    }
  }

  function handleMouseUp() {
    setPosition((old) => ({ ...old, start: false, completed: true }));
  }

  function handleMouseLeave() {
    if (position.start) {
      setPosition({ clientX: 0, clientY: 0 });
      setSize(INITIAL_SIZE);
    }
  }

  console.log(size, position);

  return (
    <Container
      onMouseDown={onMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >

      {image && (
        <Image
          ref={ref}
          src={image as string}
          alt="asdasdasd asdasda "
          draggable="false"
        />
      )}

      {image && (
        <CropTool
          top={position.clientY}
          left={position.clientX}
          width={size.width}
          height={size.height}
          completed={position.completed}
        />
      )}

    </Container>
  );
};

export default PreviewImage;
