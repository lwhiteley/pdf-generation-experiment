import { Box, BoxProps } from '@chakra-ui/react';
import { Markup } from 'interweave';

interface RichTextProps extends BoxProps {
  content: string;
}

export const RichText = ({ content, ...props }: RichTextProps) => {
  return (
    <Box
      {...props}
      sx={{
        p: {
          fontSize: '12px',
          marginBottom: '8px',
        },
        li: {
          fontSize: '12px',
          paddingLeft: '16px',
        },
        ol: {
          paddingInlineStart: '20px',
          mb: '20px',
        },
        ul: {
          paddingInlineStart: '20px',
          mb: '20px',
        },
      }}
    >
      <Markup content={content} />
    </Box>
  );
};
