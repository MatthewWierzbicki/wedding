import { Box, Stack, Typography } from '@mui/material';

export const Faq = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack
        direction='row'
        sx={{
          bgcolor: 'primary.main',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant='h4'
          sx={{
            fontFamily: 'Montserrat',
            color: 'text.secondary',
            lineHeight: '2.2',
          }}
        >
          The
        </Typography>
        <Typography variant='h2' sx={{ color: 'text.secondary', ml: 2 }}>
          Answers
        </Typography>
        <Typography
          variant='h4'
          sx={{
            fontFamily: 'Montserrat',
            color: 'text.secondary',
            lineHeight: '2.2',
            ml: 2,
          }}
        >
          to your
        </Typography>
        <Typography variant='h2' sx={{ color: 'text.secondary' }}>
          Curiosities
        </Typography>
      </Stack>
    </Box>
  );
};
