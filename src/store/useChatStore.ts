// src/store/useChatStore.ts
import { create } from 'zustand';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  status?: 'sent' | 'delivered' | 'read'; // Optional status property
}

interface ChatState {
  messages: Message[];
  addMessage: (message: Message) => void;
  updateMessageStatus: (id: string, status: 'sent' | 'delivered' | 'read') => void; // Add this function
}

const useChatStore = create<ChatState>((set) => ({
  messages: [],
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
  updateMessageStatus: (id, status) =>
    set((state) => ({
      messages: state.messages.map((msg) =>
        msg.id === id ? { ...msg, status } : msg // Update the status of the message with the matching ID
      ),
    })),
}));

export default useChatStore;