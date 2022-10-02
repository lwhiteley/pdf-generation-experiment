import { Route, Routes, Link } from 'react-router-dom';
import { ChakraProvider, Container, HStack, Stack } from '@chakra-ui/react';
import { PDFActions } from './components/PDFActions';
import { PDFDisplay } from './components/PDFDisplay';

export function App() {
  return (
    <ChakraProvider>
      <Stack spacing={6}>
        <Container maxW="2xl">
          <HStack role="navigation" spacing={12}>
            <Link to="/">Actions</Link>

            <Link to="/page-2">Render PDF onLoad</Link>
          </HStack>
        </Container>

        <Routes>
          <Route
            path="/"
            element={
              <Container maxW="2xl">
                <PDFActions />
              </Container>
            }
          />
          <Route path="/page-2" element={<PDFDisplay />} />
        </Routes>
      </Stack>
    </ChakraProvider>
  );
}

export default App;
