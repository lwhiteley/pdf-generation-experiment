import { Font, PDFData } from '@pdf-generation/constants';

const renderFontFaces = (font: Font) => {
  return (
    font?.fontFaces?.map((fontFace) => {
      const family = font.family ? `font-family: ${font.family};` : '';
      const style = fontFace.style ? `font-style: ${fontFace.style};` : '';
      const weight = fontFace.weight ? `font-weight: ${fontFace.weight};` : '';
      const format = fontFace.format ? `format(${fontFace.format})` : '';

      return `
        @font-face {
          ${family}
          ${style}
          ${weight}
          src: url(${fontFace.src}) ${format};
          
        }
      `;
    }) || ''
  );
};

export const renderPdfDocument = (data: PDFData, body: string) => {
  const font = renderFontFaces(data.font);

  return `
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${data.metadata.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <style>
            ${font}
            body {
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
            }
          
        </style>
      </head>
      <body>
        ${body}
      </body>
    </html>
    `;
};
