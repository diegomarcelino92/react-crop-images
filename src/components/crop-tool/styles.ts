import styled from 'styled-components';

export const Container = styled.div.attrs((props:{ completed: boolean }) => props)`
  position: fixed;
  border: 2px dashed red;
  display: flex;
  justify-content: center;
  align-Items: center;

  background: ${(props) => (props.completed ? '#00000050' : '')};
`;
