// src/chatbot/config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import { customStyles } from './customStyles';

const config = {
  initialMessages: [createChatBotMessage(`Welcome to the ultimate guide to Math 127. How can we help you today?`)],
  botName: "MathBot",
  customStyles: customStyles,
};

export default config;
