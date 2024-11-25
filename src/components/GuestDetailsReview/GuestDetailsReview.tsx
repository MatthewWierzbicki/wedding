import React, { useEffect, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import { db } from '@/firebase/config';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { GuestDetails } from '@components/RsvpDialog/types';

interface GuestDetailsReviewProps {
  code: string;
}

export const GuestDetailsReview = ({ code }: GuestDetailsReviewProps) => {
  // Get guest details from firestore
  const [guestDetails, setGuestDetails] = useState<GuestDetails[]>([]);

  useEffect(() => {
    const rsvpsRef = collection(db, 'rsvps');
    const unsubscribe = onSnapshot(
      doc(rsvpsRef, code),
      (guestDetailsDoc) => {
        if (guestDetailsDoc.exists()) {
          console.log(guestDetailsDoc.data());
          // for key in guestDetailsDoc.data() transform to array of values
          const guestDetailsArray = Object.values(
            guestDetailsDoc.data() as Record<string, GuestDetails>,
          );
          console.log(guestDetailsArray);
          setGuestDetails(guestDetailsArray);
        } else {
          console.error('No guest details found');
        }
      },
      (error) => {
        console.error(`Error getting guest details: ${error}`);
      },
    );

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [code]);

  return (
    <Stack>
      <Typography variant='h5' color='common.black'>
        Review your guest details
      </Typography>
      {guestDetails.map((guestDetail) => (
        <Stack key={`${guestDetail.firstName}-${guestDetail.lastName}`}>
          <Typography
            color='common.black'
            variant='h6'
          >{`${guestDetail.firstName} ${guestDetail.lastName}`}</Typography>
          <Typography>{`Attending: ${guestDetail.isAttending}`}</Typography>
          <Typography>{`Dietary Restrictions: ${guestDetail.dietaryRestrictions}`}</Typography>
        </Stack>
      ))}
    </Stack>
  );
};
