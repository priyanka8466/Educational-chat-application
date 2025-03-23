// src/components/TypingIndicator.tsx
import React from 'react';
import { Typography } from '@mui/material';

const TypingIndicator: React.FC = () => {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      AI is typing...
    </Typography>
  );
};

export default TypingIndicator;