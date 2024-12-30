import { Box, Stack, Typography } from '@mui/material';
import Invite from '@assets/invite.svg';
import Cat from '@assets/cat.svg';
import CurveTopInverted from '@assets/curve-top-inverted.svg';
import CurveBottomInverted from '@assets/curve-bottom-inverted.svg';
interface Rsvp2Props {
  onRsvpClick: () => void;
}
export const Rsvp2 = ({ onRsvpClick }: Rsvp2Props) => {
  return (
    <Box sx={{ width: '100%', bgcolor: 'primary.main', mb: '-7px' }}>
      <Box component='img' src={CurveTopInverted} sx={{ width: '100%' }} />
      <Stack
        direction='row'
        onClick={onRsvpClick}
        sx={{
          width: '100%',
          bgcolor: 'background.default',
          justifyContent: 'center',
          cursor: 'pointer',
          py: 8,
        }}
      >
        <Box component='img' src={Invite} sx={{ width: '200px' }} />
        <Stack direction='column'>
          <Typography variant='h2' sx={{ textAlign: 'center' }}>
            Click Here
          </Typography>
          <Typography
            variant='h3'
            sx={{
              fontFamily: 'Montserrat',
              textAlign: 'center',
            }}
          >
            To RSVP
          </Typography>
        </Stack>
        <Box component='img' src={Cat} sx={{ width: '200px' }} />
      </Stack>
      <Box component='img' src={CurveBottomInverted} sx={{ width: '100%' }} />
    </Box>
  );
};
