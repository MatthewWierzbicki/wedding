import React, { useRef } from 'react';
import { Stack } from '@mui/material';
import { Details } from '@components/Details/Details';
import { Introduction } from '@components/Introduction/Introduction';
import { SmallGallery } from '@components/SmallGallery/SmallGallery';
import { OurStory } from '@components/OurStory/OurStory';
import { TheDay } from '@components/TheDay/TheDay';
export const Home = () => {
  const detailsRef = useRef<HTMLDivElement>(null);
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
      </Stack>
    </>
  );
};
