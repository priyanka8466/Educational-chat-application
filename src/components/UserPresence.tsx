// src/components/UserPresence.tsx
import { Typography } from '@mui/material';

interface UserPresenceProps {
  presence: 'active' | 'offline' | 'typing';
}

const UserPresence: React.FC<UserPresenceProps> = ({ presence }) => {
  return (
    <Typography variant="caption" sx={{ color: presence === 'active' ? 'green' : presence === 'typing' ? 'orange' : 'gray' }}>
      {presence === 'active' ? 'Active' : presence === 'typing' ? 'Typing...' : 'Offline'}
    </Typography>
  );
};

export default UserPresence;