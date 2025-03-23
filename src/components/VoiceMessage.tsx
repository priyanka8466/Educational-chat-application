// src/components/VoiceMessage.tsx
import React, { useState } from 'react';
import { IconButton, Typography, Box } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import StopIcon from '@mui/icons-material/Stop';
import { startSpeechToText } from '../utils/speechToText';

const VoiceMessage: React.FC<{ onVoiceMessage: (text: string) => void }> = ({ onVoiceMessage }) => {
  const [isRecording, setIsRecording] = useState(false);

  const handleStartRecording = () => {
    setIsRecording(true);
    startSpeechToText((text) => {
      onVoiceMessage(text);
      setIsRecording(false);
    });
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <IconButton onClick={handleStartRecording} disabled={isRecording}>
        {isRecording ? <StopIcon /> : <MicIcon />}
      </IconButton>
      <Typography variant="caption">{isRecording ? 'Recording...' : 'Record Voice Message'}</Typography>
    </Box>
  );
};

export default VoiceMessage;