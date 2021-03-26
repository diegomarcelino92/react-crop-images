import styled from 'styled-components';

import { PRIMARY_DARK } from 'src/utils/constants';

export const Container = styled.div.attrs(
  (props: { completed: boolean }) => props
)`
  position: fixed;
  border: 3px dashed green;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: ${(props) => (props.completed ? '#00000050' : '')};
`;

export const Button = styled.button`
  background-color: ${PRIMARY_DARK};
  border: none;
  border-radius: 3px;
  margin: 2.5px;
  color: #ffffff;
  padding: 8px 16px;
`;
