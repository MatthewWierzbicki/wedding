import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import Carousel9 from '@assets/carousel-9.jpg';
import { useIsMobile } from '@/utils/hooks/useIsMobile';
import PictureFrame from '@assets/picture-frame.svg';
import Hearts from '@assets/hearts.svg';

export const OurStory = () => {
  const isMobile = useIsMobile();
  return (
    <Stack sx={{ px: isMobile ? 4 : 8 }}>
      <Typography variant='h2' sx={{ textAlign: 'center', mb: 2 }}>
        Our Story
      </Typography>
      <Stack direction='row' sx={{ justifyContent: 'center' }}>
        <Box sx={{ position: 'relative', mr: 4 }}>
          <Box
            component='img'
            src={Carousel9}
            sx={{ maxWidth: '300px', position: 'relative', zIndex: 1 }}
          />
          <Box
            component='img'
            src={PictureFrame}
            sx={{
              width: 385,
              position: 'absolute',
              left: -44,
              bottom: -12,
              zIndex: 0,
            }}
          />
        </Box>
        <Box sx={{ width: '50%', pt: 3 }}>
          <Typography
            variant='h5'
            sx={{ textAlign: 'center', fontFamily: 'Montserrat' }}
          >
            Zombie ipsum reversus ab viral inferno, nam rick grimes malum
            cerebro. De carne lumbering animata corpora quaeritis. Summus brains
            sit, morbo vel maleficia? De apocalypsi gorger omero undead survivor
            dictum mauris.
          </Typography>
          <br />
          <Typography
            variant='h5'
            sx={{ textAlign: 'center', fontFamily: 'Montserrat' }}
          >
            Hi mindless mortuis soulless creaturas, imo evil stalking monstra
            adventus resi dentevil vultus comedat cerebella viventium.
          </Typography>
          <Box sx={{ position: 'relative' }}>
            <Box
              component='img'
              src={Hearts}
              sx={{
                width: '200px',
                position: 'absolute',
                right: -30,
                bottom: -170,
              }}
            />
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};
