// src/components/MessageBubble.tsx
import React from 'react';
import { Paper, Typography } from '@mui/material';

interface MessageBubbleProps {
  message: { id: string; text: string; sender: 'user' | 'ai' };
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  return (
    <Paper
      sx={{
        p: 2,
        mb: 2,
        maxWidth: '70%',
        alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
        backgroundColor: message.sender === 'user' ? '#1976d2' : '#e0e0e0',
        color: message.sender === 'user' ? '#fff' : '#000',
      }}
    >
      <Typography variant="body1">{message.text}</Typography>
    </Paper>
  );
};

export default MessageBubble;