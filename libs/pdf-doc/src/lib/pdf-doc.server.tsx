import { ChakraProvider } from '@chakra-ui/react';
import { renderToString } from 'react-dom/server';
import { PdfDoc, PdfDocProps } from './pdf-doc';

export const renderPdfDoc = (data: PdfDocProps) => {
  return renderToString(
    <ChakraProvider>
      <PdfDoc {...data} />
    </ChakraProvider>
  );
};
