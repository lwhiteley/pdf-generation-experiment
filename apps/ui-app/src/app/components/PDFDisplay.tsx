import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Spinner,
} from '@chakra-ui/react';
import { RefObject, useRef, useState } from 'react';
import { useGeneratePDFBlobURL } from '../hooks';

export function PDFDisplay() {
  const { error, isGeneratingPdf, pdfBlobURL } = useGeneratePDFBlobURL();
  const [iFrameHeight, setIFrameHeight] = useState(0);
  const iFrameRef = useRef<HTMLIFrameElement>() as RefObject<HTMLIFrameElement>;

  const heightOffset = -72;
  const containerHeight = `${iFrameHeight}px`;

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Pdf Generation error!</AlertTitle>
        <AlertDescription>Check the request for details.</AlertDescription>
      </Alert>
    );
  }

  if (isGeneratingPdf) {
    return <Spinner size="xl" />;
  }

  return (
    <Box>
      <Box
        as="iframe"
        width="100%"
        ref={iFrameRef}
        sx={{
          minHeight: containerHeight,
          height: containerHeight,
        }}
        scrolling="no"
        frameBorder="0"
        src={pdfBlobURL}
        onLoad={() => {
          const height = window.innerHeight + heightOffset;
          setIFrameHeight(height);
        }}
      />
    </Box>
  );
}
