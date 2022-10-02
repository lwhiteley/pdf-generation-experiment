import { Box, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode | string | number;
}

export const SectionTitle = (props: SectionTitleProps) => {
  const { children } = props;

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
      <Heading as="h2" size="2xl" color="blue.500" fontWeight={600}>
        {children}
      </Heading>
    </Box>
  );
};
