export const renderPdfDocument = (data, body: string) => {
  // specifically assuming google fonts setup
  // can be made more flexible
  const fontLink = data.font.src
    ? `
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="${data.font.src}"
      rel="stylesheet"
    />
  `
    : '';
  return `
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${data.metadata.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        ${fontLink}
        
        <style>
            body {
                font-family:${data.font.family};
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
