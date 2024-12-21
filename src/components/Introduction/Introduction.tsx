import React from 'react';

import { Box, Link, Stack, Typography } from '@mui/material';
import EngageSnow from '@assets/engage-snow.jpg';
import { useIsMobile } from '@utils/hooks/useIsMobile';
import { routes } from '@/utils/constants/routes';
import { useLocation } from 'react-router-dom';

export const Introduction = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const daysUntilWedding = Math.ceil(
    (new Date('2026-06-20').getTime() - new Date().getTime()) /
      (1000 * 60 * 60 * 24),
  );

  const routesMap = {
    [routes.home]: 'home',
    [routes.ourStory]: 'our story',
    [routes.rsvp]: 'rsvp',
    [routes.photos]: 'photos',
    [routes.registry]: 'registry',
    [routes.faq]: 'faq',
    [routes.weddingParty]: 'wedding party',
  };

  const currentRoute = routesMap[location.pathname as keyof typeof routesMap];
  return (
    <Stack
      sx={{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        px: isMobile ? 4 : 8,
        mb: 4,
        backgroundColor: 'background.default',
      }}
    >
      <Typography
        variant={isMobile ? 'h5' : 'h3'}
        sx={{ fontFamily: 'Montserrat' }}
      >
        06.20.26
      </Typography>
      <Typography
        variant={isMobile ? 'h6' : 'h5'}
        sx={{ fontFamily: 'Montserrat', color: 'secondary.main' }}
      >
        <strong>{daysUntilWedding}</strong> days to go
      </Typography>
      <Typography variant={isMobile ? 'h4' : 'h1'}>Sylvia + Matt</Typography>
      {!isMobile && (
        <Stack
          direction='row'
          spacing={2}
          width='100%'
          justifyContent='space-between'
          my={2}
        >
          {Object.entries(routesMap).map(([route, routeName]) => (
            <Link
              key={route} // Added key prop for list items
              variant='h6'
              href={route}
              sx={{
                ...(currentRoute === routeName && {
                  textDecoration: 'underline',
                  textDecorationColor: '#a43424',
                  textUnderlineOffset: '10px',
                  color: '#a43424',
                  fontWeight: '700',
                }),
              }}
            >
              {routeName}
            </Link>
          ))}
        </Stack>
      )}
      <Box
        component='img'
        sx={{ width: '100%' }}
        src={EngageSnow}
        alt='engage-snow'
      />
    </Stack>
  );
};
