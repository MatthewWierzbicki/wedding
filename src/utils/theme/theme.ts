import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#c86b46',
    },
    secondary: {
      main: '#a43424',
    },
    background: {
      default: '#f5e8d8', // Set default paper background color
    },
    text: {
      primary: '#c86b46',
      secondary: '#f5e8d8',
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#c86b46',
          textDecoration: 'none',
          fontFamily: ['Montserrat', 'sans-serif'].join(','),
          '&:hover': {
            textDecoration: 'underline',
            textDecorationColor: '#a43424',
            textUnderlineOffset: '10px',
            color: '#a43424',
            fontWeight: '700',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#a43424',
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
          color: '#c86b46', // Set button text color to primary color
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: '#c86b46', // Set list item button text color to primary color
          fontFamily: ['Montserrat', 'sans-serif'].join(','),
        },
      },
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    h1: {
      color: '#c86b46', // Set h1 text color to primary color
      fontFamily: ['Candice', 'sans-serif'].join(','),
    },
    h2: {
      color: '#c86b46', // Set h2 text color to primary color
      fontFamily: ['Candice', 'sans-serif'].join(','),
    },
    h3: {
      color: '#c86b46', // Set h3 text color to primary color
      fontFamily: ['Candice', 'sans-serif'].join(','),
    },
    h4: {
      color: '#c86b46', // Set h4 text color to primary color
      fontFamily: ['Candice', 'sans-serif'].join(','),
    },
    h5: {
      color: '#c86b46', // Set h5 text color to primary color
      fontFamily: ['Candice', 'sans-serif'].join(','),
    },
    h6: {
      color: '#c86b46', // Set h6 text color to primary color
      fontFamily: ['Candice', 'sans-serif'].join(','),
    },
    subtitle1: {
      color: '#c86b46', // Set subtitle1 text color to primary color
      fontFamily: ['Candice', 'sans-serif'].join(','),
    },
    subtitle2: {
      color: '#c86b46', // Set subtitle2 text color to primary color
      fontFamily: ['Candice', 'sans-serif'].join(','),
    },
    body1: {
      color: '#c86b46', // Set body1 text color to primary color
      fontFamily: ['Candice', 'sans-serif'].join(','),
    },
  },
});
