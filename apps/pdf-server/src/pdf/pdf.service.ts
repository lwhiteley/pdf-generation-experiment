import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import { writeFile } from 'fs/promises';

import { renderPdfDocument } from './helpers/render-pdf-document';
import { environment } from '../environments/environment';
import { setPdfMetadata } from './helpers/set-pdf-metadata';

@Injectable()
export class PdfService {
  async generatePdf(data) {
    const browser = await puppeteer.launch({
      args: [`--no-sandbox`],
    });
    const page = await browser.newPage();

    const pdfData = {
      ...data,
      font: data.font ?? {
        src: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@100,200,300,400;600;700&display=swap',
        name: 'Open Sans',
        family: 'Open Sans, sans-serif',
      },
    };

    const documentBody = 'test';
    const content = renderPdfDocument(pdfData, documentBody);

    const pdfOptions = pdfData?.options || {};

    await page.setContent(content, {
      waitUntil: 'networkidle2',
    });
    const pdf = await page.pdf({
      format: 'a4',
      printBackground: true,
      ...pdfOptions,
      margin: {
        left: '40px',
        right: '40px',
        top: '40px',
        bottom: '40px',
        ...(pdfOptions?.margin || {}),
      },
    });

    await browser.close();

    // Give the buffer to pdf-lib
    const result = await setPdfMetadata(pdf, pdfData?.metadata);

    // write to disk for debugging
    if (!environment.production) {
      const filePath = `${environment.tmpFolder}/${
        pdfData.id || 'tmp-file'
      }.pdf`;
      await writeFile(filePath, result);
    }

    return result;
  }
}
