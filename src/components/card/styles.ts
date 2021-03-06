import { UP_ANIMATION } from 'src/common-styles';

import styled, { css } from 'styled-components';

import { PRIMARY_DARK, PRIMARY_LIGHT } from 'src/utils/constants';

export const Container = styled.div<{ show: string }>`
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin: 16px;
  border-radius: 10px;

  visibility: ${(props) => props.show};
  ${(props) =>
    props.show === 'visible' &&
    css`
      animation: 1s ${UP_ANIMATION};
    `}
`;

export const Image = styled.img`
  padding: 8px;
  width: 60px;
`;

export const Text = styled.p`
  padding: 8px;
  color: #fff;
  font-weight: bold;
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
