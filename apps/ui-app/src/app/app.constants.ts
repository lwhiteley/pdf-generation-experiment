import { samplePdfData } from '@pdf-generation/constants';

export const pdfData = {
  id: 'sample',
  metadata: {
    title: 'Some random pdf',
    subject: 'Some radom pdf',
    author: 'Statale',
    producer: 'pdf-generation-server',
    creator: 'My awesome creator',
  },
  document: samplePdfData,
};
