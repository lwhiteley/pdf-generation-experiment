import { Box, Image, Wrap } from '@chakra-ui/react';
import { ImageData } from '../pdf-doc.types';

interface ImagesProps {
  items: ImageData[];
}

export const Images = ({ items: images }: ImagesProps) => {
  return (
    <Box
      as="p"
      sx={{
        pageBreakInside: 'avoid',
        '@media print': {
          pageBreakInside: 'avoid',
        },
      }}
    >
      <Wrap spacing={10}>
        {images.map(({ id, url }) => {
          if (!url) return null;

          return (
            <Box key={id}>
              <Image
                src={url}
                width="157px"
                height="104px"
                borderRadius="8px"
                objectFit="contain"
              />
            </Box>
          );
        })}
      </Wrap>
    </Box>
  );
};
