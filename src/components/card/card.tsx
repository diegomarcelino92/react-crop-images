import React from 'react';

import {
  Container, Image, ImageContainer, TextContainer, Text,
} from './styles';

interface CardProps {
  src: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ src, text }) => (
  <Container>
    <ImageContainer>
      <Image src={src} />
    </ImageContainer>

    <TextContainer>
      <Text>{text}</Text>
    </TextContainer>
  </Container>
);

export default Card;
