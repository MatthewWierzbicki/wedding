import { ThemeProvider } from '@mui/material';
import { theme } from '@utils/theme/theme';
import { Router } from '@components/Router/Router';

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
};
