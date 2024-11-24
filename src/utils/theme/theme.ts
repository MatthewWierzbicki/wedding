import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      },
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    h1: {
      color: 'white',
      fontFamily: ['Abril Fatface', 'cursive'].join(','),
    },
    h2: {
      color: 'white',
      fontFamily: ['Abril Fatface', 'cursive'].join(','),
    },
    h3: {
      color: 'white',
      fontFamily: ['Abril Fatface', 'cursive'].join(','),
    },
    h4: {
      color: 'white',
      fontFamily: ['Abril Fatface', 'cursive'].join(','),
    },
    h5: {
      color: 'white',
    },
    h6: {
      color: 'white',
    },
    subtitle1: {
      color: 'white',
      fontFamily: ['Abril Fatface', 'cursive'].join(','),
    },
    subtitle2: {
      color: 'white',
      fontFamily: ['Abril Fatface', 'cursive'].join(','),
    },
    body1: {
      color: 'black',
    },
  },
});
