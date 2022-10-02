import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { CustomSvg } from './components/custom-svg';
import { Icons } from './components/icons';
import { Images } from './components/images';
import { RichText } from './components/rich-text';
import { SectionTitle } from './components/section-title';
import { ImageData } from './pdf-doc.types';

export interface PdfDocProps {
  images: ImageData[];
  title: string;
  description: string;
}

export function PdfDoc(props: PdfDocProps) {
  const { title, description, images } = props;
  return (
    <Stack spacing={6} fontSize="md">
      <Heading as="h1" size="4xl" color="blue.800">
        {title}
      </Heading>
      <Stack spacing={3}>
        <Text>This is normal text</Text>

        <Heading as="h3" size="l" color="blue.200">
          Description (rich text)
        </Heading>
        <RichText content={description} />
      </Stack>

      <SectionTitle>Images</SectionTitle>
      <Images items={images} />

      <SectionTitle>Icons</SectionTitle>
      <Icons />

      <SectionTitle>Custom Svg</SectionTitle>
      <Box fontSize="200px">
        <CustomSvg />
      </Box>
    </Stack>
  );
}
