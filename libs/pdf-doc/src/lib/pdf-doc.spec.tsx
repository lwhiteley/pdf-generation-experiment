import { render } from '@testing-library/react';

import PdfDoc from './pdf-doc';

describe('PdfDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PdfDoc />);
    expect(baseElement).toBeTruthy();
  });
});
