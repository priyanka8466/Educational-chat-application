// src/components/EmojiPicker.tsx
import React from 'react';
import { Box, Paper } from '@mui/material';
import { emojis } from '../utils/emojis';

interface EmojiPickerProps {
  onEmojiSelect: (emoji: string) => void;
}

const EmojiPicker: React.FC<EmojiPickerProps> = ({ onEmojiSelect }) => {
  return (
    <Paper sx={{ position: 'absolute', bottom: 60, right: 16, p: 2, display: 'flex', flexWrap: 'wrap', gap: 1, maxWidth: 200, maxHeight: 150, overflowY: 'auto' }}>
      {emojis.map((emoji) => (
        <Box key={emoji} sx={{ cursor: 'pointer' }} onClick={() => onEmojiSelect(emoji)}>
          {emoji}
        </Box>
      ))}
    </Paper>
  );
};

export default EmojiPicker;