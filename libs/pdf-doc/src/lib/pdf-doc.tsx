import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface PdfDocProps {}

const StyledPdfDoc = styled.div`
  color: pink;
`;

export function PdfDoc(props: PdfDocProps) {
  return (
    <StyledPdfDoc>
      <h1>Welcome to PdfDoc!</h1>
    </StyledPdfDoc>
  );
}

export default PdfDoc;
