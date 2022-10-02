import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  useGeneratePDFBlobURL,
  usePDFLinkDownloader,
  usePrintPDF,
} from '../hooks';

export function PDFActions() {
  const { error, isGeneratingPdf, pdfBlobURL } = useGeneratePDFBlobURL();
  const { downloadPdf } = usePDFLinkDownloader();
  const { printPdf } = usePrintPDF();

  console.log({ error, isGeneratingPdf, pdfBlobURL });

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
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem
            onClick={() => {
              if (!pdfBlobURL) return;

              downloadPdf(pdfBlobURL, 'sample.pdf');
            }}
          >
            Download PDF
          </MenuItem>
          <MenuItem
            onClick={() => {
              if (!pdfBlobURL) return;

              printPdf(pdfBlobURL);
            }}
          >
            Print PDF
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}
