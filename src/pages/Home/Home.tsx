import React, { useRef } from 'react';
import { Stack } from '@mui/material';
import { Details } from '@components/Details/Details';
import { Introduction } from '@components/Introduction/Introduction';
import { Accommodations } from '@components/Accommodations/Accommodations';
import { Rsvp } from '@components/Rsvp/Rsvp';
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
        }}
      >
        <Introduction detailsRef={detailsRef} />
        <Details detailsRef={detailsRef} />
        <Rsvp />
        <Accommodations />
      </Stack>
    </>
  );
};
