import React, { useState, useEffect, useRef } from 'react';
import { Box, TextField, Button, Paper, IconButton } from '@mui/material';
import EmojiPicker from './EmojiPicker';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';
import UserPresence from './UserPresence';
import NetworkIndicator from './NetworkIndicator';
import VoiceMessage from './VoiceMessage';
import BotPersonalitySettings from './BotPersonalitySettings';
import useChatStore from '../store/useChatStore';
import useThemeStore from '../store/useThemeStore';
import useNetworkStore from '../store/useNetworkStore';
import useErrorHandler from '../hooks/useErrorHandler';
import socket from '../utils/mockApi';
import ErrorNotification from './ErrorNotification';


const ChatInterface: React.FC = () => {
  const { messages, addMessage, updateMessageStatus } = useChatStore();
  const { theme } = useThemeStore();
  const { isOnline } = useNetworkStore();
  const { error, handleError, clearError } = useErrorHandler();

  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [userPresence, setUserPresence] = useState<'active' | 'offline' | 'typing'>('active');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Handle sending a message
  const handleSendMessage = () => {
    if (inputText.trim()) {
      const newMessage = { id: Date.now().toString(), text: inputText, sender: 'user' as 'user', status: 'sent' as 'sent' };
      addMessage(newMessage);
      setInputText('');
      setIsTyping(true);
      setUserPresence('typing');

      // Simulate AI response via WebSocket
      socket.emit('sendMessage', { text: inputText });

      // Mock AI typing and response
      setTimeout(() => {
        const aiMessage = { id: Date.now().toString(), text: 'This is an AI response.', sender: 'ai' as 'ai', status: 'delivered' as 'delivered' };
        addMessage(aiMessage);
        setIsTyping(false);
        setUserPresence('active');
      }, 2000);
    }
  };

  // Handle emoji selection
  const handleEmojiSelect = (emoji: string) => {
    setInputText((prev) => prev + emoji);
    setShowEmojiPicker(false);
  };

  // Handle voice message
  const handleVoiceMessage = (text: string) => {
    const newMessage = { id: Date.now().toString(), text, sender: 'user' as 'user', status: 'sent' as 'sent' };
    addMessage(newMessage);
  };

  // Handle bot personality settings change
  const handleBotSettingsChange = (settings: { tone: string; speed: number }) => {
    console.log('Bot settings updated:', settings);
  };

  // Scroll to the bottom of the chat when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Listen for incoming messages from the WebSocket
  useEffect(() => {
    socket.on('receiveMessage', (message: { id: string; text: string; sender: 'user' | 'ai' }) => {
      addMessage(message);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, [addMessage]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', p: 2 }}>
      {/* Network Indicator */}
      <NetworkIndicator />

      {/* Chat Messages */}
      <Paper sx={{ flex: 1, overflowY: 'auto', mb: 2, p: 2 }}>
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </Paper>

      {/* User Presence */}
      <UserPresence presence={userPresence} />

      {/* Message Input */}
      <Box sx={{ display: 'flex', gap: 1 }}>
        {/* Emoji Picker */}
        <IconButton onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😀</IconButton>
        {showEmojiPicker && (
          <Box sx={{ position: 'absolute', bottom: 60, right: 16 }}>
            <EmojiPicker onEmojiSelect={handleEmojiSelect} />
          </Box>
        )}

        {/* Text Input */}
        <TextField
          fullWidth
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
          placeholder="Type a message..."
          multiline
        />

        {/* Send Button */}
        <Button variant="contained" onClick={handleSendMessage}>
          Send
        </Button>

        {/* Voice Message */}
        <VoiceMessage onVoiceMessage={handleVoiceMessage} />
      </Box>

      {/* Bot Personality Settings */}
      <BotPersonalitySettings onSave={handleBotSettingsChange} />

      {/* Error Notification */}
      <ErrorNotification message={error} onClose={clearError} />
    </Box>
  );
};

export default ChatInterface;