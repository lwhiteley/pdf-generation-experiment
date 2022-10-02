import { Meta, Story } from '@storybook/react';
import { samplePdfData } from '@pdf-generation/constants';
import { PdfDoc, PdfDocProps } from './pdf-doc';

export default {
  component: PdfDoc,
  title: 'Components/PdfDoc',
} as Meta;

const Template: Story<PdfDocProps> = (args: PdfDocProps) => {
  return <PdfDoc {...args} />;
};

export const DefaultExample = Template.bind({});

DefaultExample.args = samplePdfData;
