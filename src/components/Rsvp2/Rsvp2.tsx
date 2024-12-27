import { Box, Stack, Typography } from '@mui/material';
import Invite from '@assets/invite.svg';
import Cat from '@assets/cat.svg';
interface Rsvp2Props {
  onRsvpClick: () => void;
}
export const Rsvp2 = ({ onRsvpClick }: Rsvp2Props) => {
  return (
    <Stack
      direction='row'
      onClick={onRsvpClick}
      sx={{
        width: '100%',
        bgcolor: 'primary.main',
        justifyContent: 'center',
        cursor: 'pointer',
        py: 12,
        mt: 12,
      }}
    >
      <Box component='img' src={Invite} sx={{ width: '200px' }} />
      <Stack direction='column'>
        <Typography
          variant='h2'
          sx={{ color: 'text.secondary', textAlign: 'center' }}
        >
          Click Here
        </Typography>
        <Typography
          variant='h3'
          sx={{
            fontFamily: 'Montserrat',
            color: 'text.secondary',
            textAlign: 'center',
          }}
        >
          To RSVP
        </Typography>
      </Stack>
      <Box component='img' src={Cat} sx={{ width: '200px' }} />
    </Stack>
  );
};
