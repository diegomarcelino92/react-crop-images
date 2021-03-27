import React, { useEffect, useState } from 'react';

import {
  Container,
  Image,
  ImageContainer,
  TextContainer,
  Text,
} from './styles';

interface CardProps {
  src: string;
  text: string;
  delay: number;
}

const Card: React.FC<CardProps> = ({ src, text, delay }) => {
  const [show, setShow] = useState(delay ? 'hidden' : 'visible');

  useEffect(() => {
    if (delay)
      setTimeout(() => {
        setShow('visible');
      }, delay);
  }, [delay]);

  return (
    <Container show={show}>
      <ImageContainer>
        <Image src={src} />
      </ImageContainer>

      <TextContainer>
        <Text>{text}</Text>
      </TextContainer>
    </Container>
  );
};

export default Card;
