import React from 'react';

import { Box, IconButton, Stack, Typography } from '@mui/material';
import SayYes from '@assets/say-yes.jpeg';
import { useIsMobile } from '@utils/hooks/useIsMobile';
import Cat from '@assets/cat.svg';
import ArrowDown from '@assets/arrow-down.svg';
import { Clouds } from '@components/Clouds/Clouds';
interface IntroductionProps {
  detailsRef: React.RefObject<HTMLDivElement>;
}

export const Introduction = ({ detailsRef }: IntroductionProps) => {
  const isMobile = useIsMobile();

  const handleScrollToAccommodations = () => {
    detailsRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <Box
      sx={{
        width: 'calc(100vw - (100vw - 100%))',
        height: '900px',
        background: `url(${SayYes})`,
        backgroundSize: 'cover',
        backgroundPosition: isMobile ? '-150px center' : 'center',
      }}
    >
      <Stack
        sx={{
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant={isMobile ? 'h6' : 'h5'}>06.20.26</Typography>
        <Box sx={{ position: 'relative' }}>
          <Box
            component='img'
            src={Cat}
            alt='cat'
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

        <IconButton
          onClick={handleScrollToAccommodations}
          sx={{
            position: 'absolute',
            bottom: 20,
            animation: 'shake 0.5s 0.5s forwards',
            '@keyframes shake': {
              '0%': { transform: 'rotate(0deg)' },
              '25%': { transform: 'rotate(-10deg)' },
              '50%': { transform: 'rotate(10deg)' },
              '75%': { transform: 'rotate(-10deg)' },
              '100%': { transform: 'rotate(0deg)' },
            },
          }}
        >
          <Box
            component='img'
            src={ArrowDown}
            alt='arrowDown'
            width={100}
            height={100}
          />
        </IconButton>
        <Clouds />
      </Stack>
    </Box>
  );
};
