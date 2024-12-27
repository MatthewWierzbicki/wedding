import React, { useRef } from 'react';
import { Stack } from '@mui/material';
import { Details } from '@components/Details/Details';
import { Introduction } from '@components/Introduction/Introduction';
import { SmallGallery } from '@components/SmallGallery/SmallGallery';
import { OurStory } from '@components/OurStory/OurStory';
import { TheDay } from '@components/TheDay/TheDay';
import { Rsvp2 } from '@components/Rsvp2/Rsvp2';
import { useNavigate } from 'react-router-dom';
import { routes } from '@utils/constants/routes';

export const Home = () => {
  const detailsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  return (
    <>
      <Stack
        sx={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'background.default',
          py: 8,
        }}
      >
        <Introduction />
        <Details detailsRef={detailsRef} />
        <SmallGallery />
        <OurStory />
        <TheDay />
        <Rsvp2 onRsvpClick={() => navigate(routes.rsvp)} />
      </Stack>
    </>
  );
};
