import { Button, TextField } from '@mui/material';
import { Typography } from '@mui/material';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Stack } from '@mui/material';
export interface Inputs {
  code: string;
}
interface RsvpFormProps {
  onSubmit: SubmitHandler<Inputs>;
}

export const RsvpForm = ({ onSubmit }: RsvpFormProps) => {
  const { register, handleSubmit } = useForm<Inputs>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction='column' spacing={2}>
        <Typography>
          Please enter your unique code sent to you via email to RSVP.
        </Typography>
        <TextField {...register('code')} />
        <Button type='submit'>Submit</Button>
      </Stack>
    </form>
  );
};
