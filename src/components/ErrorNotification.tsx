// src/components/ErrorNotification.tsx
import React from 'react';
import { Alert, Snackbar } from '@mui/material';

interface ErrorNotificationProps {
  message: string | null; // Allow null or undefined
  onClose: () => void;
}

const ErrorNotification: React.FC<ErrorNotificationProps> = ({ message, onClose }) => {
  return (
    <Snackbar open={!!message} autoHideDuration={6000} onClose={onClose}>
      <Alert severity="error" onClose={onClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ErrorNotification;