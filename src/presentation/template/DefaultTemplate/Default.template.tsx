import { Navbar } from 'presentation/components';
import { ReactNode } from 'react';
import { Container } from './Default.styles';

export function DefaultTemplate({
  children
}: {
  children: ReactNode;
}): React.JSX.Element {
  return (
    <Container>
      <Navbar />

      {children}
    </Container>
  );
}
