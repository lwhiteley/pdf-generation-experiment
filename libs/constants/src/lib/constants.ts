export interface PDFMetadata {
  title: string;
  subject: string;
  author: string;
  producer: string;
  creator: string;
}

export interface Font {
  family: string;
  name: string;
  src?: string | null;
}

export interface PdfData<T> {
  id: string | number;
  metadata: PDFMetadata;
  font: Font;
  document: T;
}
