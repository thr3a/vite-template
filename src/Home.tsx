import { Container, MantineProvider, Title } from '@mantine/core';
import { theme } from './theme';

export default function Home() {
  return (
    <MantineProvider theme={theme}>
      <Container maw={400}>
        <Title mt={'sm'} order={2}>
          Mantine Vite template
        </Title>
        <Title order={6} mb={'sm'} c={'dimmed'}>
          Mantine Vite template
        </Title>
      </Container>
    </MantineProvider>
  );
}
