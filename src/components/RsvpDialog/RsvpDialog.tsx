import React from 'react';
import { Dialog } from '@mui/material';
import { Inputs, RsvpForm } from '@components/RsvpForm/RsvpForm';
import { SubmitHandler } from 'react-hook-form';
import { db } from '@/firebase/config';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { rsvpMachine } from './rsvpMachine';
import { useMachine } from '@xstate/react';
import {
  Guest,
  GuestDetails,
  UpsertGuestDetailsInput,
  UpsertGuestDetailsOutput,
} from './types';
import { fromPromise } from 'xstate';
import { GetGuestsInput, GetGuestsOutput } from './types';
import { GuestDetailsForm } from '@components/GuestDetailsForm/GuestDetailsForm';
import { GuestDetailsReview } from '@components/GuestDetailsReview/GuestDetailsReview';

interface RsvpDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const INDEX_TO_GUEST_KEY = ['One', 'Two', 'Three', 'Four'];

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
        upsertGuestDetails: fromPromise(
          async ({
            input,
          }: {
            input: UpsertGuestDetailsInput;
          }): Promise<UpsertGuestDetailsOutput> => {
            // Add document to firestore if it doesn't exist
            // Update document if it does
            try {
              const rsvpRef = collection(db, 'rsvps');
              const upsertDetails = input.guestDetails.reduce(
                (acc, guestDetail, idx) => {
                  acc[`guest${INDEX_TO_GUEST_KEY[idx]}`] = guestDetail;
                  return acc;
                },
                {} as Record<string, GuestDetails>,
              );
              console.log(upsertDetails);
              await setDoc(doc(rsvpRef, input.code), upsertDetails);
              return { success: true };
            } catch (error) {
              console.error('Error upserting guest details:', error);
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
      {(state.matches('getGuests') || state.matches('upsertGuestDetails')) && (
        <div>Loading...</div>
      )}
      {state.matches('gatherGuestDetails') && (
        <GuestDetailsForm
          guests={state.context.guests}
          onSubmit={handleGuestDetailsSubmit}
        />
      )}
      {state.matches('success') && (
        <GuestDetailsReview code={state.context.code || ''} />
      )}
    </Dialog>
  );
};
