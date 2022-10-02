import { Box, Wrap } from '@chakra-ui/react';
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons';

export const Icons = () => {
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
        <PhoneIcon />

        <AddIcon />

        <WarningIcon color="red.500" />
      </Wrap>
    </Box>
  );
};
