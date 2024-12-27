import { Box, IconButton } from '@mui/material';
import Carousel1 from '@assets/carousel-1.jpg';
import Carousel2 from '@assets/carousel-2.jpg';
import Carousel3 from '@assets/carousel-3.jpg';
import Carousel4 from '@assets/carousel-4.jpg';
import Carousel5 from '@assets/carousel-5.jpg';
import Carousel6 from '@assets/carousel-6.jpg';
import Carousel7 from '@assets/carousel-7.jpg';
import Carousel8 from '@assets/carousel-8.jpg';
import Carousel9 from '@assets/carousel-9.jpg';
import Carousel10 from '@assets/carousel-10.jpg';
import CurveTop from '@assets/curve-top.svg';
import CurveBottom from '@assets/curve-bottom.svg';
import Carousel from 'react-multi-carousel';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useIsMobile } from '@/utils/hooks/useIsMobile';
const images = [
  Carousel1,
  Carousel2,
  Carousel3,
  Carousel4,
  Carousel5,
  Carousel6,
  Carousel7,
  Carousel8,
  Carousel9,
  Carousel10,
];

export const SmallGallery = () => {
  const isMobile = useIsMobile();

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Box component='img' src={CurveTop} sx={{ width: '100%', mb: '-7px' }} />
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'primary.main',
          py: 6,
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <Carousel
            responsive={{
              desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
                slidesToSlide: 3,
              },
              tablet: {
                breakpoint: { max: 1024, min: 768 },
                items: 2,
                slidesToSlide: 2,
              },
              mobile: {
                breakpoint: { max: 767, min: 375 },
                items: 2,
                slidesToSlide: 2,
              },
            }}
            autoPlay={true}
            swipeable={isMobile}
            draggable={false}
            infinite={true}
            partialVisible={false}
            customRightArrow={
              <IconButton sx={{ position: 'absolute', right: 0 }}>
                <ChevronRightIcon />
              </IconButton>
            }
            customLeftArrow={
              <IconButton sx={{ position: 'absolute', left: 0 }}>
                <ChevronLeftIcon />
              </IconButton>
            }
          >
            {images.map((image, index) => (
              <Box
                key={index} // Move key to the outer Box to avoid React warning
                sx={{
                  maxWidth: isMobile ? '100%' : '400px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box
                  component='img'
                  src={image}
                  rel='prefetch'
                  alt={`carousel-${index}`}
                  sx={{
                    width: isMobile ? '80%' : '300px',
                    height: 'auto',
                    mx: 1,
                  }}
                />
              </Box>
            ))}
          </Carousel>
        </Box>
      </Box>
      <Box component='img' src={CurveBottom} sx={{ width: '100%' }} />
    </Box>
  );
};
