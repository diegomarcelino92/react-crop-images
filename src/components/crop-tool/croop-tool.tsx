import React from 'react';

import { Container } from './styles';

export interface ContainerProps {
  top?: number;
  left?: number;
  width: number;
  height: number;
  completed?: boolean;
}

const CropTool: React.FC<ContainerProps> = ({
  top, left, width, height, completed,
}) => (
  <Container
    completed={completed}
    style={{
      top, left, width, height,
    }}
  >
    {completed && <button type="button">Recortar</button>}
    {completed && <button type="button">Cancelar</button>}
  </Container>
);

export default CropTool;
