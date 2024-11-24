import React from 'react';
import { Stack } from '@mui/material';
import { Details } from '@components/Details/Details';
import { Introduction } from '@components/Introduction/Introduction';
import { Accommodations } from '@components/Accommodations/Accommodations';
import { Rsvp } from '@components/Rsvp/Rsvp';
export const Home = () => {
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
        <Introduction />
        <Details />
        <Rsvp />
        <Accommodations />
      </Stack>
    </>
  );
};
