import { InputHTMLAttributes } from 'react';
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
  background-color: #512da8;
  color: #ffffff;

`;

export const Input = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  height: 20px;
  display: none;
`;
