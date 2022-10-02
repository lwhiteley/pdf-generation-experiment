import { PDFOptions } from 'puppeteer';

export interface PDFMetadata {
  title: string;
  subject: string;
  author: string;
  producer: string;
  creator: string;
}

export interface Font {
  familyDisplay: string;
  family: string;
  fontFaces?: {
    style?: string;
    weight?: number;
    format?: string;
    src: string;
  }[];
}

export interface PDFData {
  id: string | number;
  metadata: PDFMetadata;
  options?: PDFOptions;
  font: Font;
}

export interface PDFDocumentData<T> extends PDFData {
  document: T;
}
