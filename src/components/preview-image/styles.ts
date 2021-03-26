import styled from 'styled-components';

import { ImgHTMLAttributes } from 'react';

import { UP_ANIMATION } from 'src/common-styles';
import { PRIMARY_DARK } from 'src/utils/constants';

export const Container = styled.div`
  padding: 20px;
  background-color: ${PRIMARY_DARK};
  margin: 30px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  border-radius: 20px;
  animation: 1s ${UP_ANIMATION};
  color: #ffffff20;
  font-size: 2.5rem;
`;

export const CropView = styled.div`
  height: auto;
  width: auto;
`;

export const ImagePreview = styled.img<ImgHTMLAttributes<HTMLImageElement>>`
  width: auto;
  height: auto;
  max-width: 450px;
  height: 450px;

  &:hover {
    cursor: crosshair;
  }
`;
