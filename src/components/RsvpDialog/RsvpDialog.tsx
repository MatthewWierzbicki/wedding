import React from 'react';
import { Dialog } from '@mui/material';
import { Inputs, RsvpForm } from '@components/RsvpForm/RsvpForm';
import { SubmitHandler } from 'react-hook-form';
import { db } from '@/firebase/config';
import { collection, doc, getDoc } from 'firebase/firestore';
import { rsvpMachine } from './rsvpMachine';
import { useMachine } from '@xstate/react';
import { Guest, GuestDetails } from './types';
import { fromPromise } from 'xstate';
import { GetGuestsInput, GetGuestsOutput } from './types';
import { GuestDetailsForm } from '../GuestDetailsForm/GuestDetailsForm';

interface RsvpDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RsvpDialog = ({ isOpen, onClose }: RsvpDialogProps) => {
  const [state, send] = useMachine(
    rsvpMachine.provide({
      actors: {
        getGuests: fromPromise(
          async ({
            input,
          }: {
            input: GetGuestsInput;
          }): Promise<GetGuestsOutput> => {
            try {
              const invitesRef = collection(db, 'invites');
              const queriedDoc = await getDoc(doc(invitesRef, input.code));
              const guests: Guest[] = [];

              if (queriedDoc.exists()) {
                const data = queriedDoc.data();
                if ('guestOne' in data) {
                  guests.push(data.guestOne as Guest);
                }

                if ('guestTwo' in data) {
                  guests.push(data.guestTwo as Guest);
                }

                return { guests };
              } else {
                throw new Error('Invalid code: No guests found');
              }
            } catch (error) {
              console.error('Code verification error:', error);
              throw error;
            }
          },
        ),
      },
    }),
    {
      input: {
        code: undefined,
      },
    },
  );

  const handleCodeSubmit: SubmitHandler<Inputs> = async (data) => {
    send({
      type: 'SUBMIT_CODE',
      data: {
        code: data.code,
      },
    });
  };

  const handleGuestDetailsSubmit = (data: { guestDetails: GuestDetails[] }) => {
    send({
      type: 'SUBMIT_GUEST_DETAILS',
      data,
    });
  };

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth='md'>
      {state.matches('codeInputForm') && (
        <RsvpForm onSubmit={handleCodeSubmit} />
      )}
      {state.matches('getGuests') && <div>Loading...</div>}
      {state.matches('gatherGuestDetails') && (
        <GuestDetailsForm
          guests={state.context.guests}
          onSubmit={handleGuestDetailsSubmit}
        />
      )}
    </Dialog>
  );
};
