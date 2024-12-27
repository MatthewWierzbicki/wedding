import { Box, Stack, Typography } from '@mui/material';
import Barn from '@assets/barn.png';
import Heart from '@assets/heart.svg';
import { useIsMobile } from '@/utils/hooks/useIsMobile';

interface DetailsProps {
  detailsRef: React.RefObject<HTMLDivElement>;
}
export const Details = ({ detailsRef }: DetailsProps) => {
  const isMobile = useIsMobile();
  return (
    <Box sx={{ width: '100%' }}>
      <Stack
        ref={detailsRef}
        direction={isMobile ? 'column' : 'row'}
        sx={{
          justifyContent: 'space-evenly',
          p: isMobile ? 4 : 8,
          alignItems: isMobile ? 'center' : 'flex-start',
        }}
      >
        <Stack direction='column'>
          <Typography variant='h3' sx={{ mb: 2, pt: '45px' }}>
            The Deets
          </Typography>

          <Typography
            variant='h6'
            sx={{ fontFamily: 'Montserrat', fontWeight: 700 }}
          >
            Where
          </Typography>
          <Typography variant='h6' sx={{ fontFamily: 'Montserrat' }}>
            Century Barn
          </Typography>
          <Typography variant='h6' sx={{ fontFamily: 'Montserrat' }}>
            400 Stewart Line - Cavan,
          </Typography>
          <Typography variant='h6' sx={{ fontFamily: 'Montserrat', mb: 2 }}>
            Ontario
          </Typography>
          <Typography
            variant='h6'
            sx={{ fontFamily: 'Montserrat', fontWeight: 700 }}
          >
            When
          </Typography>
          <Typography variant='h6' sx={{ fontFamily: 'Montserrat' }}>
            Ceremony: 4:30 pm
          </Typography>
          <Typography variant='h6' sx={{ fontFamily: 'Montserrat' }}>
            Dinner and Dancing: 6 pm
          </Typography>
        </Stack>
        <Box
          component='img'
          src={Barn}
          sx={{ width: 600, height: 400, mr: '-46px' }}
        />
      </Stack>

      <Typography
        variant='h4'
        sx={{
          fontWeight: 700,
          textAlign: 'center',
          width: '100%',
          mb: 2,
        }}
      >
        June 2026
      </Typography>
      <Stack
        direction='row'
        sx={{ justifyContent: 'space-around', width: '600px', mx: 'auto' }}
      >
        <Stack direction='column' gap={2} sx={{ alignItems: 'center' }}>
          <Typography
            variant='h6'
            sx={{ fontFamily: 'Montserrat', fontWeight: 700 }}
          >
            Sun
          </Typography>
          <Typography variant='h6' sx={{ fontFamily: 'Montserrat' }}>
            14
          </Typography>
        </Stack>
        <Stack direction='column' gap={2} sx={{ alignItems: 'center' }}>
          <Typography
            variant='h6'
            sx={{ fontFamily: 'Montserrat', fontWeight: 700 }}
          >
            Mon
          </Typography>
          <Typography variant='h6' sx={{ fontFamily: 'Montserrat' }}>
            15
          </Typography>
        </Stack>
        <Stack direction='column' gap={2} sx={{ alignItems: 'center' }}>
          <Typography
            variant='h6'
            sx={{ fontFamily: 'Montserrat', fontWeight: 700 }}
          >
            Tue
          </Typography>
          <Typography variant='h6' sx={{ fontFamily: 'Montserrat' }}>
            16
          </Typography>
        </Stack>
        <Stack direction='column' gap={2} sx={{ alignItems: 'center' }}>
          <Typography
            variant='h6'
            sx={{ fontFamily: 'Montserrat', fontWeight: 700 }}
          >
            Wed
          </Typography>
          <Typography variant='h6' sx={{ fontFamily: 'Montserrat' }}>
            17
          </Typography>
        </Stack>
        <Stack direction='column' gap={2} sx={{ alignItems: 'center' }}>
          <Typography
            variant='h6'
            sx={{ fontFamily: 'Montserrat', fontWeight: 700 }}
          >
            Thu
          </Typography>
          <Typography variant='h6' sx={{ fontFamily: 'Montserrat' }}>
            18
          </Typography>
        </Stack>
        <Stack direction='column' gap={2} sx={{ alignItems: 'center' }}>
          <Typography
            variant='h6'
            sx={{ fontFamily: 'Montserrat', fontWeight: 700 }}
          >
            Fri
          </Typography>

          <Typography variant='h6' sx={{ fontFamily: 'Montserrat' }}>
            19
          </Typography>
        </Stack>
        <Stack direction='column' gap={2} sx={{ alignItems: 'center' }}>
          <Typography
            variant='h6'
            sx={{ fontFamily: 'Montserrat', fontWeight: 700 }}
          >
            Sat
          </Typography>
          <Box sx={{ position: 'relative' }}>
            <Box
              component='img'
              src={Heart}
              sx={{
                position: 'absolute',
                width: 60,
                height: 60,
                right: -19,
                bottom: -14,
              }}
            />
            <Typography
              variant='h6'
              sx={{
                fontFamily: 'Montserrat',
              }}
            >
              20
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};
