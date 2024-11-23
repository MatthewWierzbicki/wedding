import React from 'react';
import { Typography, Stack, Box } from '@mui/material';
import SayYes from '../../assets/say-yes.jpeg';
import cat from '../../assets/cat.svg';
import { useIsMobile } from '../../utils/hooks/useIsMobile';
export const Home = () => {
  const isMobile = useIsMobile();
  return (
    <Stack
      sx={{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          background: `url(${SayYes})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Stack
          sx={{
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant={isMobile ? 'h6' : 'h5'}>
            06.20.26
          </Typography>
          <Box sx={{ position: 'relative' }}>
            <Box
              component="img"
              src={cat}
              alt="cat"
              width={isMobile ? 60 : 110}
              height={isMobile ? 60 : 110}
              sx={{
                position: 'absolute',
                bottom: isMobile ? 17 : 41,
                right: isMobile ? 42 : 88,
              }}
            />
            <Typography variant={isMobile ? 'h3' : 'h1'}>
              Matt + Sylvia
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};
