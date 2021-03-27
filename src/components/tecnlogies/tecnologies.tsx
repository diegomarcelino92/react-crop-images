import React, { useEffect, useMemo, useState } from 'react';

import Card from '../card';

import { Container } from './styles';

const Tecnlogies: React.FC = () => (
  <Container>
    <Card src="/js.png" text="Javascript" delay={100} />
    <Card src="/favicon.ico" text="React JS" delay={500} />
    <Card src="/styled-components.png" text="Styled-component" delay={1000} />
  </Container>
);

export default Tecnlogies;
