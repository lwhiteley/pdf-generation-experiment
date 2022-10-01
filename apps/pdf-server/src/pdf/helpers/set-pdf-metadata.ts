import { PDFDocument } from 'pdf-lib';

const metadataSetters = {
  title: 'setTitle',
  author: 'setAuthor',
  creator: 'setCreator',
  producer: 'setProducer',
  subject: 'setSubject',
};

export async function setPdfMetadata(pdf: Buffer, metadata) {
  const setterEntries = Object.entries(metadataSetters);

  if (!setterEntries.some(([key]) => !!metadata[key])) return pdf;

  const document = await PDFDocument.load(pdf);

  setterEntries.forEach(([key, setter]) => {
    const value = metadata[key];
    if (value) document[setter](value);
  });

  const pdfBytes = await document.save();

  return Buffer.from(pdfBytes);
}
