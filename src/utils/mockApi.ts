// src/utils/mockApi.ts
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000', { transports: ['websocket'] });

export const simulateTyping = (callback: () => void) => {
  setTimeout(() => {
    callback();
  }, 2000);
};

export default socket;