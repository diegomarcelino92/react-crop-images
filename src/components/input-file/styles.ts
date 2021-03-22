import { InputHTMLAttributes } from 'react';
import { PRIMARY_DARK } from 'src/utils/constants';
import styled from 'styled-components';
import { UP_ANIMATION } from '../../common-styles';

export const Button = styled.button`
  height: 50px;
  max-width: 400px;
  font-size: 1.5rem;
  padding: 8px 16px;
  border-radius: 8px;
  outline: none;
  border: none;
  animation: 1s ${UP_ANIMATION};
  background-color: ${PRIMARY_DARK};
  color: #ffffff;
  margin-top: 30px;

`;

export const Input = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  height: 20px;
  display: none;
`;
