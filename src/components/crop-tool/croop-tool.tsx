import React from 'react';

import { Container, Button } from './styles';

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
    {completed && <Button type="button">Recortar</Button>}
    {completed && <Button type="button">Cancelar</Button>}
  </Container>
);

export default CropTool;
