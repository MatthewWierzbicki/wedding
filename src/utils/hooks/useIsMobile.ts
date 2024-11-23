/**
 * This custom hook allows for to see if viewport has a typical mobile screensize of less than or equal to 900px.
 */
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
export function useIsMobile() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('md'));
}
