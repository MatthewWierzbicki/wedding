import React, { useEffect, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import Sylvia from '@assets/sylvia.png';
import { useIsMobile } from '@utils/hooks/useIsMobile';
import RsvpSvg from '@assets/rsvp.svg'; // Assuming the SVG is imported like this
import { RsvpDialog } from '../RsvpDialog/RsvpDialog';

export const Rsvp = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const rsvpElement = document.getElementById('rsvp-section');
    const rsvpPosition = rsvpElement ? rsvpElement.offsetTop : 0;

    setIsVisible(scrollPosition + windowHeight > rsvpPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      id='rsvp-section'
      sx={{
        width: 'calc(100vw - (100vw - 100%))',
        height: '900px',
        background: `url(${Sylvia})`,
        backgroundSize: 'cover',
        backgroundPosition: isMobile ? '-360px center' : 'center',
        position: 'relative',
      }}
    >
      {isVisible && (
        <IconButton
          sx={{
            position: 'absolute',
            bottom: isMobile ? '40%' : '50%',
            left: 16,
            width: '150px',
            height: '150px',
            backgroundColor: 'transparent',
            opacity: 0,
            animation: 'fadeIn 1s forwards, shake 0.5s 0.5s forwards', // Increased fadeIn duration to 1s
            '@keyframes fadeIn': {
              '0%': { opacity: 0 },
              '100%': { opacity: 1 },
            },
            '@keyframes shake': {
              '0%': { transform: 'translateX(0)' },
              '25%': { transform: 'translateX(-5px)' },
              '50%': { transform: 'translateX(5px)' },
              '75%': { transform: 'translateX(-5px)' },
              '100%': { transform: 'translateX(0)' },
            },
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
          onClick={() => setIsDialogOpen(true)}
        >
          <Box
            component='img'
            src={RsvpSvg}
            alt='RSVP'
            width={150}
            height={150}
          />
        </IconButton>
      )}
      <RsvpDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </Box>
  );
};
