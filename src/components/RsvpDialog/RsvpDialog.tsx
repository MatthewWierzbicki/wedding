import React from 'react';
import { Dialog } from '@mui/material';
import { Inputs, RsvpForm } from '@components/RsvpForm/RsvpForm';
import { SubmitHandler } from 'react-hook-form';

interface RsvpDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RsvpDialog = ({ isOpen, onClose }: RsvpDialogProps) => {
  const handleSubmit: SubmitHandler<Inputs> = (data) => {
    onClose();
    console.log('submitted', data);
  };

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth='md'>
      <RsvpForm onSubmit={handleSubmit} />
    </Dialog>
  );
};
