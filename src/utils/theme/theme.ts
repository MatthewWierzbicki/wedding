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
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: '100%', // Mobile width
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          '@media (min-width:600px)': {
            // Desktop width
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            width: '350px',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          padding: 40,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: ['Montserrat', 'sans-serif'].join(','),
          textTransform: 'capitalize',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: 'black',
          fontFamily: ['Montserrat', 'sans-serif'].join(','),
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
