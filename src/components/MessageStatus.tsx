// src/components/MessageStatus.tsx
import { Check, DoneAll } from '@mui/icons-material';
import { Box } from '@mui/material';

interface MessageStatusProps {
  status: 'sent' | 'delivered' | 'read';
}

const MessageStatus: React.FC<MessageStatusProps> = ({ status }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
      {status === 'sent' && <Check fontSize="small" />}
      {status === 'delivered' && <DoneAll fontSize="small" />}
      {status === 'read' && <DoneAll fontSize="small" color="primary" />}
    </Box>
  );
};

export default MessageStatus;