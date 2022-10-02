import { useCallback } from 'react';

export const usePDFLinkDownloader = () => {
  const downloadPdf = useCallback((blobURL: string, fileName: string) => {
    const link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = blobURL;
    link.download = fileName;

    link.click();

    setTimeout(() => {
      document.body.removeChild(link);
    }, 300);
  }, []);

  return {
    downloadPdf,
  };
};
