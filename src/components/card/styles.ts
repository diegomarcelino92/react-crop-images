import { UP_ANIMATION } from 'src/common-styles';
import styled from 'styled-components';

import { PRIMARY_DARK, PRIMARY_LIGHT } from 'src/utils/constants';

export const Container = styled.div`
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin: 16px;
  animation: 1s ${UP_ANIMATION};
  box-shadow: 0px 1px 3px #ffffff50;
  border-radius: 10px;

  transition: all cubic-bezier(0.075, 0.82, 0.165, 1);

`;

export const Image = styled.img`
  padding: 8px;
  width: 60px;
`;

export const Text = styled.p`
  padding: 8px;
  color: #fff;
  flex: 1;
`;

export const ImageContainer = styled.div`
  background-color: ${PRIMARY_DARK};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

`;

export const TextContainer = styled.div`
  background-color: ${PRIMARY_LIGHT};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
