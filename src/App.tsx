import React from 'react';

import { ThemeProvider } from '@mui/material';
import { theme } from './utils/theme/theme';
import { Router } from './components/Router/Router';
import { Navigation } from './components/Navigation/Navigation';
export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
        <Router />
      </ThemeProvider>
    </>
  );
};
