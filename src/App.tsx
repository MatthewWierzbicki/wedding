import React from 'react';

import { ThemeProvider } from '@mui/material';
import { theme } from './utils/theme/theme';
import { Router } from './components/Router';

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
};
