import {
  ChakraProvider,
  extendTheme,
  theme as chakraTheme,
} from '@chakra-ui/react';
import { Font } from '@pdf-generation/constants';
import { renderToString } from 'react-dom/server';
import { PdfDoc, PdfDocProps } from './pdf-doc';

export const renderPdfDoc = (data: PdfDocProps, font?: Font) => {
  const fontFamilyDisplay = font?.familyDisplay || font?.family;

  return renderToString(
    <ChakraProvider
      theme={extendTheme({
        fonts: {
          ...chakraTheme.fonts,
          body: fontFamilyDisplay || chakraTheme.fonts.body,
          heading: fontFamilyDisplay || chakraTheme.fonts.heading,
        },
      })}
    >
      <PdfDoc {...data} />
    </ChakraProvider>
  );
};
