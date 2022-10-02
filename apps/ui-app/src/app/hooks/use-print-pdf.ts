import { useCallback } from 'react';

export const usePrintPDF = () => {
  const printPdf = useCallback((blobURL: string) => {
    const iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    iframe.style.display = 'none';
    iframe.src = blobURL;
    iframe.onload = function print() {
      setTimeout(() => {
        iframe.focus();
        iframe?.contentWindow?.print();
      }, 1);
    };
  }, []);

  return {
    printPdf,
  };
};
