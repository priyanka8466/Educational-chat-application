// src/components/NetworkIndicator.tsx
import { Typography } from '@mui/material';
import useNetworkStore from '../store/useNetworkStore';

const NetworkIndicator: React.FC = () => {
  const { isOnline } = useNetworkStore();

  return (
    <Typography variant="caption" sx={{ color: isOnline ? 'green' : 'red' }}>
      {isOnline ? 'Online' : 'Offline'}
    </Typography>
  );
};

export default NetworkIndicator;