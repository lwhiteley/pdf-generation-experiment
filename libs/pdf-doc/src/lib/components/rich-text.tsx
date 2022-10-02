import { Box, BoxProps } from '@chakra-ui/react';
import { Markup } from 'interweave';

export const htmlStyles = {
  p: {
    fontSize: '12px',
    marginBottom: '8px',
  },
  li: {
    fontSize: '12px',
    paddingLeft: '16px',
  },
  ol: { marginBottom: '20px' },
  ul: { marginBottom: '20px' },
};

interface RichTextProps extends BoxProps {
  content: string;
}

export const RichText = ({ content, ...props }: RichTextProps) => {
  return (
    <Box {...props} sx={htmlStyles}>
      <Markup content={content} />
    </Box>
  );
};
