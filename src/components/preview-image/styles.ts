import styled from 'styled-components';

import { HTMLAttributes, HTMLProps, ImgHTMLAttributes } from 'react';

export const Container = styled.div`
  height: auto;
  width: auto;
  margin-top: 50px; 

`;

export const Image = styled.img<ImgHTMLAttributes<HTMLImageElement>>`
  width: auto;
  height: auto;

  &:hover {
    cursor: crosshair;
  }
`;
