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
          p: isMobile ? 4 : 8,
          minHeight: '100%',
          bgcolor: 'primary.main',
          position: 'relative',
        }}
      >
        <Typography
          variant='h2'
          sx={{ textAlign: 'center', color: 'text.secondary' }}
        >
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
                  borderColor: '#f5e8d8',
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
                  bgcolor: 'primary.main',
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
                    sx={{
                      fontFamily: 'Montserrat',
                      fontWeight: 700,
                      color: 'text.secondary',
                    }}
                  >
                    4:30 PM
                  </Typography>
                  <Typography
                    variant='h5'
                    sx={{ fontFamily: 'Montserrat', color: 'text.secondary' }}
                  >
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
                  borderColor: '#f5e8d8',
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
                  bgcolor: 'primary.main',
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
                    sx={{
                      fontFamily: 'Montserrat',
                      fontWeight: 700,
                      color: 'text.secondary',
                    }}
                  >
                    6:00 PM
                  </Typography>
                  <Typography
                    variant='h5'
                    sx={{ fontFamily: 'Montserrat', color: 'text.secondary' }}
                  >
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
              borderColor: '#f5e8d8',
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
                  borderColor: '#f5e8d8',
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
                  bgcolor: 'primary.main',
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
                    sx={{
                      fontFamily: 'Montserrat',
                      fontWeight: 700,
                      color: 'text.secondary',
                    }}
                  >
                    4:00 PM
                  </Typography>
                  <Typography
                    variant='h5'
                    sx={{ fontFamily: 'Montserrat', color: 'text.secondary' }}
                  >
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
                  borderColor: '#f5e8d8',
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
                  bgcolor: 'primary.main',
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
                    sx={{
                      fontFamily: 'Montserrat',
                      fontWeight: 700,
                      color: 'text.secondary',
                    }}
                  >
                    5:00 PM
                  </Typography>
                  <Typography
                    variant='h5'
                    sx={{ fontFamily: 'Montserrat', color: 'text.secondary' }}
                  >
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
