import { Box, Stack, Typography } from '@mui/material';
import Car from '@assets/car.svg';
import Ring from '@assets/ring.svg';
import Champagne from '@assets/champagne.svg';
import Cake from '@assets/cake.svg';
import { useIsMobile } from '@/utils/hooks/useIsMobile';

export const TheDay = () => {
  const isMobile = useIsMobile();
  return (
    <Box sx={{ width: '100%', mt: 14 }}>
      <Stack
        direction='column'
        spacing={2}
        sx={{
          mx: isMobile ? 4 : 8,
          minHeight: '100%',
          position: 'relative',
        }}
      >
        <Typography variant='h2' sx={{ textAlign: 'center' }}>
          The Day
        </Typography>

        <Stack
          direction='row'
          sx={{
            width: '100%',
            justifyContent: 'space-around',
            position: 'relative',
          }}
        >
          <Stack
            direction='column'
            spacing={24}
            sx={{ mt: 24, flex: 1, position: 'relative' }}
          >
            <Stack direction='row' sx={{ position: 'relative' }}>
              <Box
                sx={{
                  position: 'absolute',
                  borderTop: '5px dotted',
                  borderColor: '#c86b46',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '100%',
                  left: 0,
                  zIndex: 1,
                }}
              />
              <Stack
                direction='row'
                sx={{
                  bgcolor: 'background.default',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                <Stack
                  direction='column'
                  sx={{
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <Typography
                    variant='h5'
                    sx={{ fontFamily: 'Montserrat', fontWeight: 700 }}
                  >
                    4:30 PM
                  </Typography>
                  <Typography variant='h5' sx={{ fontFamily: 'Montserrat' }}>
                    Ceremony
                  </Typography>
                </Stack>
                <Box
                  component='img'
                  src={Ring}
                  sx={{
                    mx: 2,
                    height: '100px',
                    position: 'relative',
                  }}
                />
              </Stack>
            </Stack>

            <Stack direction='row' sx={{ position: 'relative' }}>
              <Box
                sx={{
                  position: 'absolute',
                  borderTop: '5px dotted',
                  borderColor: '#c86b46',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '100%',
                  left: 0,
                  zIndex: 1,
                }}
              />
              <Stack
                direction='row'
                sx={{
                  bgcolor: 'background.default',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                <Stack
                  direction='column'
                  sx={{
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <Typography
                    variant='h5'
                    sx={{ fontFamily: 'Montserrat', fontWeight: 700 }}
                  >
                    6:00 PM
                  </Typography>
                  <Typography variant='h5' sx={{ fontFamily: 'Montserrat' }}>
                    Dinner and Dancing
                  </Typography>
                </Stack>
                <Box
                  component='img'
                  src={Cake}
                  sx={{
                    mx: 2,
                    height: '100px',
                    position: 'relative',
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
          <Box
            sx={{
              borderLeft: '5px dotted',
              borderColor: '#c86b46',
              ml: '10px',
            }}
          />
          <Stack
            direction='column'
            spacing={24}
            sx={{ flex: 1, position: 'relative' }}
          >
            <Stack
              direction='row'
              spacing={2}
              sx={{ position: 'relative', justifyContent: 'flex-end' }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  borderTop: '5px dotted',
                  borderColor: '#c86b46',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '100%',
                  left: 0,
                  zIndex: 1,
                }}
              />
              <Stack
                direction='row'
                sx={{
                  bgcolor: 'background.default',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                <Stack
                  direction='column'
                  sx={{
                    justifyContent: 'center',
                    position: 'relative',
                    ml: 2,
                  }}
                >
                  <Typography
                    variant='h5'
                    sx={{ fontFamily: 'Montserrat', fontWeight: 700 }}
                  >
                    4:00 PM
                  </Typography>
                  <Typography variant='h5' sx={{ fontFamily: 'Montserrat' }}>
                    Arrive to the venue
                  </Typography>
                </Stack>
                <Box
                  component='img'
                  src={Car}
                  sx={{
                    mx: 2,
                    height: '100px',
                    position: 'relative',
                  }}
                />
              </Stack>
            </Stack>

            <Stack
              direction='row'
              spacing={2}
              sx={{ position: 'relative', justifyContent: 'flex-end' }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  borderTop: '5px dotted',
                  borderColor: '#c86b46',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '100%',
                  left: 0,
                  zIndex: 1,
                }}
              />
              <Stack
                direction='row'
                sx={{
                  bgcolor: 'background.default',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                <Stack
                  direction='column'
                  sx={{
                    justifyContent: 'center',
                    position: 'relative',
                    ml: 2,
                  }}
                >
                  <Typography
                    variant='h5'
                    sx={{ fontFamily: 'Montserrat', fontWeight: 700 }}
                  >
                    5:00 PM
                  </Typography>
                  <Typography variant='h5' sx={{ fontFamily: 'Montserrat' }}>
                    Cocktail Hour
                  </Typography>
                </Stack>
                <Box
                  component='img'
                  src={Champagne}
                  sx={{
                    mx: 2,
                    height: '100px',
                    position: 'relative',
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
