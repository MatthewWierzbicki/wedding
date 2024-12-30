import { Stack, Typography, Box } from '@mui/material';
import Carousel9 from '@assets/carousel-9.jpg';
import { useIsMobile } from '@/utils/hooks/useIsMobile';
import PictureFrame from '@assets/picture-frame.svg';
import Hearts from '@assets/hearts.svg';

export const OurStory = () => {
  const isMobile = useIsMobile();
  return (
    <Stack
      direction='row'
      sx={{ justifyContent: 'space-evenly', px: isMobile ? 4 : 8, mt: 4 }}
    >
      <Box
        sx={{
          position: 'relative',
          mr: 4,
          display: 'flex',
          alignItems: 'center',
          alignSelf: 'center',
        }}
      >
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
            bottom: -35,
            zIndex: 0,
          }}
        />
      </Box>
      <Box sx={{ width: '50%', pt: 3 }}>
        <Box sx={{ position: 'relative' }}>
          <Box
            component='img'
            src={Hearts}
            sx={{
              width: 100,
              position: 'absolute',
              right: 0,
              bottom: -77,
              zIndex: 1,
            }}
          />
        </Box>
        <Typography variant='h2' sx={{ textAlign: 'center', mb: 2 }}>
          Our Story
        </Typography>
        <Typography
          variant='h5'
          sx={{ textAlign: 'center', fontFamily: 'Montserrat' }}
        >
          We first crossed paths 10 years ago at Durham College, each secretly
          noticing the other but never quite making a move. Years later, we
          reconnected online and met for coffee. What was supposed to be a quick
          catch-up turned into hours of conversation that neither of us wanted
          to end.
        </Typography>
        <br />
        <Typography
          variant='h5'
          sx={{ textAlign: 'center', fontFamily: 'Montserrat' }}
        >
          Not wanting to say goodbye yet, we wandered through the garden centre
          at Home Depot, stopped by a flower shop where the owner gifted us
          roses and chocolate, and ended the night dancing at our favourite, emo
          night. It all felt so natural, like we'd found something we didn't
          even know we were missing.
        </Typography>
        <br />
        <Typography
          variant='h5'
          sx={{ textAlign: 'center', fontFamily: 'Montserrat' }}
        >
          Since then, we've travelled, gotten engaged in Portugal, and made a
          home with our two cats, Mew and Gaia. Today, we're excited to
          celebrate the next chapter with the people who mean the most to us.
        </Typography>
      </Box>
    </Stack>
  );
};
