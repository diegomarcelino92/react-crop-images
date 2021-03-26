import React, { useEffect, useMemo, useState } from 'react';
import Card from '../card';

import { Container } from './styles';

const Tecnlogies: React.FC = () => {
  const [render, setRender] = useState({
    js: false,
    react: false,
    styled: false,
  });

  const config = useMemo(
    () => [
      {
        key: 'js',
        timeout: 500,
      },
      {
        key: 'react',
        timeout: 1000,
      },
      {
        key: 'styled',
        timeout: 1500,
      },
    ],
    []
  );

  useEffect(() => {
    config.map((conf) =>
      setTimeout(
        () => setRender((old) => ({ ...old, [conf.key]: true })),
        conf.timeout
      )
    );
  }, [config]);

  return (
    <Container>
      {render.js && <Card src="/js.png"
text="Javascript" />}

      {render.react && <Card src="/favicon.ico"
text="React JS" />}

      {render.styled && (
        <Card src="/styled-components.png"
text="Styled-component" />
      )}
    </Container>
  );
};

export default Tecnlogies;
