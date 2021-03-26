import React from 'react';

import { Container, Button } from './styles';

export interface ContainerProps {
  top?: number;
  left?: number;
  width: number;
  height: number;
  completed?: boolean;
  onCrop: () => void;
  onCancel: () => void;
}

const CropTool: React.FC<ContainerProps> = ({
  top,
  left,
  width,
  height,
  completed,
  onCrop,
  onCancel,
}) => (
  <Container
    completed={completed}
    style={{
      top,
      left,
      width,
      height,
    }}
  >
    {completed && (
      <Button type="button"
onClick={onCrop}>
        Recortar
      </Button>
    )}
    {completed && (
      <Button type="button"
onClick={onCancel}>
        Cancelar
      </Button>
    )}
  </Container>
);

export default CropTool;
