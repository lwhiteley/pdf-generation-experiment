import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import axios, { AxiosResponse } from 'axios';
import { PDFDocumentData } from '@pdf-generation/constants';
import { PdfDocProps } from '@pdf-generation/pdf-doc';
import { pdfData } from '../app.constants';

const generatePdfDocument = (data: PDFDocumentData<PdfDocProps>) => {
  return axios.post<
    PDFDocumentData<PdfDocProps>,
    AxiosResponse<{ data: number[] }>
  >('/api/pdf/generate', data);
};

export const useGeneratePDFBlobURL = ({ enabled = true } = {}) => {
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [pdfBlobURL, setPdfBlobURL] = useState<string>();
  const [error, setError] = useState();

  const generatePdf = useDebouncedCallback(
    (data) => {
      generatePdfDocument(data)
        .then(({ data: pdfBufferData }) => {
          const blob = new Blob([new Uint8Array(pdfBufferData.data)], {
            type: 'application/pdf',
          });
          const blobURL = URL.createObjectURL(blob);

          setIsGeneratingPdf(false);
          setPdfBlobURL(blobURL);
        })
        .catch((generationError) => {
          setIsGeneratingPdf(false);
          setError(generationError);
        });
    },
    500,
    { maxWait: 2000 }
  );

  useEffect(() => {
    if (!pdfBlobURL && enabled) {
      generatePdf.cancel();
      setIsGeneratingPdf(true);
      generatePdf(pdfData);
    }

    return () => {
      if (pdfBlobURL) {
        URL.revokeObjectURL(pdfBlobURL);
      }
    };
  }, [generatePdf, pdfBlobURL, enabled]);

  return {
    isGeneratingPdf,
    pdfBlobURL,
    error,
  };
};
