// src/components/BotPersonalitySettings.tsx
import React, { useState } from 'react';
import { Box, Typography, Slider, Button } from '@mui/material';

const BotPersonalitySettings: React.FC<{ onSave: (settings: { tone: string; speed: number }) => void }> = ({ onSave }) => {
  const [tone, setTone] = useState('friendly');
  const [speed, setSpeed] = useState(1);

  const handleSave = () => {
    onSave({ tone, speed });
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6">Bot Personality Settings</Typography>
      <Box sx={{ mt: 2 }}>
        <Typography>Tone: {tone}</Typography>
        <Slider
          value={speed}
          onChange={(_, value) => setSpeed(value as number)}
          min={0.5}
          max={2}
          step={0.1}
          valueLabelDisplay="auto"
        />
        <Typography>Speed: {speed}x</Typography>
      </Box>
      <Button onClick={handleSave} variant="contained" sx={{ mt: 2 }}>
        Save
      </Button>
    </Box>
  );
};

export default BotPersonalitySettings;