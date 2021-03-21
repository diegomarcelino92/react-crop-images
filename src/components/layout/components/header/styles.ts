import styled from 'styled-components';

import { UP_ANIMATION } from '../../../../common-styles';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  animation: 1s ${UP_ANIMATION};
  border-bottom: 1px solid #f5f5f5;
  margin-bottom: 30px;
  padding: 10px;
  background-color: #333333;
`;
