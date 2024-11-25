import React from 'react';
import { Guest, GuestDetails } from '@components/RsvpDialog/types';
import {
  Stack,
  Typography,
  Checkbox,
  TextField,
  Button,
  FormControlLabel,
} from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';

interface GuestDetailsFormProps {
  guests: Guest[];
  onSubmit: (data: { guestDetails: GuestDetails[] }) => void;
}

type GuestInputs = {
  [key: string]: {
    isAttending: boolean;
    dietaryRestrictions: string;
  };
};

export const GuestDetailsForm = ({
  guests,
  onSubmit,
}: GuestDetailsFormProps) => {
  const { register, handleSubmit } = useForm<GuestInputs>();

  const onSubmitForm: SubmitHandler<GuestInputs> = (data) => {
    // Transform the form data into GuestDetails array
    const guestDetails: GuestDetails[] = guests.map((guest) => ({
      firstName: guest.firstName,
      lastName: guest.lastName,
      isAttending: data[`${guest.firstName}-${guest.lastName}`].isAttending,
      dietaryRestrictions:
        data[`${guest.firstName}-${guest.lastName}`].dietaryRestrictions,
    }));

    onSubmit({ guestDetails });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <Stack direction='column' spacing={2}>
        {guests.map((guest) => {
          const guestKey = `${guest.firstName}-${guest.lastName}`;
          return (
            <Stack key={guestKey} spacing={2}>
              <Typography>{`${guest.firstName} ${guest.lastName}`}</Typography>
              <FormControlLabel
                control={<Checkbox {...register(`${guestKey}.isAttending`)} />}
                label='Attending'
              />
              <TextField
                label='Dietary Restrictions'
                {...register(`${guestKey}.dietaryRestrictions`)}
              />
            </Stack>
          );
        })}
        <Button type='submit' variant='contained'>
          Submit RSVP
        </Button>
      </Stack>
    </form>
  );
};
