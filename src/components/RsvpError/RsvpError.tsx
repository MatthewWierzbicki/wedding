import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
interface RsvpErrorProps {
  onRetry: () => void;
  onClose: () => void;
}
export const RsvpError = ({ onRetry }: RsvpErrorProps) => {
  return (
    <Stack gap={2}>
      <Typography variant='h6' sx={{ color: 'common.black' }}>
        An error occurred while processing your RSVP.
      </Typography>
      <Button onClick={onRetry}>Retry</Button>
    </Stack>
  );
};
