import styled from 'styled-components';

import { PRIMARY_DARK } from 'src/utils/constants';

import { UP_ANIMATION } from '../../../../common-styles';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  padding: 10px;
  background-color: ${PRIMARY_DARK};
  color: #ffffff;

  & h1 {
    animation: 1s ${UP_ANIMATION};
  }
`;
