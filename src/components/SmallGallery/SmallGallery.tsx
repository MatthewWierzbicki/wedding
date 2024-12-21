import React, { useState, useEffect } from 'react';
import { Box, IconButton, Stack } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < 3; i++) {
      visibleImages.push(images[(currentIndex + i) % images.length]);
    }
    return visibleImages;
  };

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
        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            left: '10px',
            color: 'white',
          }}
        >
          <ArrowBackIos />
        </IconButton>
        <Stack direction='row' spacing={8}>
          {getVisibleImages().map((image, index) => (
            <Box
              key={index}
              component='img'
              src={image}
              loading='lazy'
              sx={{
                width: '300px',
                transition: 'opacity 0.5s ease-in-out',
                opacity: currentIndex === index ? 0 : 1,
              }}
            />
          ))}
        </Stack>
        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: '10px',
            color: 'white',
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>
      <Box component='img' src={CurveBottom} sx={{ width: '100%' }} />
    </Box>
  );
};
