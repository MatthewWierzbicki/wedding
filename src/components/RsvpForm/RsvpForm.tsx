import { Button, TextField } from '@mui/material';
import { Typography } from '@mui/material';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Stack } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export interface Inputs {
  code: string;
}

interface RsvpFormProps {
  onSubmit: SubmitHandler<Inputs>;
}

// Define the validation schema
const schema = yup.object().shape({
  code: yup.string().required('Code is required'), // Validation rule
});

export const RsvpForm = ({ onSubmit }: RsvpFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema), // Integrate yup with react-hook-form
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction='column' spacing={2}>
        <Typography>
          Please enter your unique code sent to you via email to RSVP.
        </Typography>
        <TextField
          {...register('code')}
          error={!!errors.code} // Show error state
          helperText={errors.code ? errors.code.message : ''} // Display error message
        />
        <Button type='submit'>Submit</Button>
      </Stack>
    </form>
  );
};
