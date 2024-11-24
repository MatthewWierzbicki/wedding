import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { useIsMobile } from '@utils/hooks/useIsMobile';

const CLOUD_SPEED = 0.2;

import Cloud1 from '@assets/cloud1.svg';

export const Clouds = () => {
  const isMobile = useIsMobile();
  const cloud1Ref = useRef<HTMLDivElement>(null);
  const cloud2Ref = useRef<HTMLDivElement>(null);
  const cloud3Ref = useRef<HTMLDivElement>(null);
  const cloud4Ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxTranslateX = window.innerWidth * 0.1; // Limit movement to 20% of the screen size

      const translateX = Math.min(scrollY * CLOUD_SPEED, maxTranslateX);

      if (cloud1Ref.current) {
        cloud1Ref.current.style.transform = `translateX(${translateX}px)`;
      }
      if (cloud2Ref.current) {
        cloud2Ref.current.style.transform = `translateX(${translateX}px)`;
      }
      if (cloud3Ref.current) {
        cloud3Ref.current.style.transform = `translateX(${translateX}px)`;
      }
      if (cloud4Ref.current) {
        cloud4Ref.current.style.transform = `translateX(${translateX}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Box
        ref={cloud2Ref}
        component='img'
        src={Cloud1}
        alt='cloud1'
        width={isMobile ? 'calc(100vw/6)' : 'calc(100vw/11)'}
        height={isMobile ? 'calc(100vw/6)' : 'calc(100vw/11)'}
        sx={{
          position: 'absolute',
          top: 80,
          left: '26%',
          transition: 'transform 0.5s ease', // Smooth transition for movement
        }}
      />
      <Box
        ref={cloud1Ref}
        component='img'
        src={Cloud1}
        alt='cloud1'
        width={isMobile ? 'calc(100vw/6)' : 'calc(100vw/11)'}
        height={isMobile ? 'calc(100vw/6)' : 'calc(100vw/11)'}
        sx={{
          position: 'absolute',
          top: 143,
          left: '43%',
          transition: 'transform 0.5s ease', // Smooth transition for movement
        }}
      />

      <Box
        ref={cloud3Ref}
        component='img'
        src={Cloud1}
        alt='cloud1'
        width={isMobile ? 'calc(100vw/6)' : 'calc(100vw/11)'}
        height={isMobile ? 'calc(100vw/6)' : 'calc(100vw/11)'}
        sx={{
          position: 'absolute',
          top: 88,
          left: '67%',
          transition: 'transform 0.5s ease', // Smooth transition for movement
        }}
      />
    </>
  );
};
