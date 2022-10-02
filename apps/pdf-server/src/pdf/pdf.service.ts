import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import { writeFile } from 'fs/promises';

import { PDFDocumentData } from '@pdf-generation/constants';
import { PdfDocProps, renderPdfDoc } from '@pdf-generation/pdf-doc';
import { environment } from '../environments/environment';
import { renderPdfDocument, setPdfMetadata, DEFAULT_PDF_FONT } from './helpers';

@Injectable()
export class PdfService {
  async generatePdf(data: PDFDocumentData<PdfDocProps>) {
    const browser = await puppeteer.launch({
      /**
       * Adding `--no-sandbox` here is for easier deployment. Please see puppeteer docs about
       * this argument and why you may not want to use it.
       */
      args: [`--no-sandbox`],
    });

    const pdfData = {
      ...data,
      font: data.font ?? DEFAULT_PDF_FONT,
    };

    const documentBody = renderPdfDoc(pdfData.document, pdfData.font);
    const content = renderPdfDocument(pdfData, documentBody);
    const pdfOptions = pdfData?.options || {};

    const page = await browser.newPage();
    await page.setContent(content, {
      waitUntil: 'networkidle2',
    });
    const pdf = await page.pdf({
      format: 'a4',
      printBackground: true,
      preferCSSPageSize: true,
      ...pdfOptions,
      margin: {
        left: '40px',
        right: '40px',
        top: '40px',
        bottom: '40px',
        ...(pdfOptions?.margin || {}),
      },
    });

    // Give the buffer to pdf-lib
    const result = await setPdfMetadata(pdf, pdfData?.metadata);

    // write to disk for debugging
    if (!environment.production) {
      const now = Date.now();
      const filePath = `${environment.tmpFolder}/${now}-tmp-file.pdf`;
      await page.screenshot({
        fullPage: true,
        path: `${environment.tmpFolder}/${now}-tmp-file.png`,
      });
      await writeFile(filePath, result);
    }
    await browser.close();

    return result;
  }
}
