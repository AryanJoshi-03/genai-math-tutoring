import React from 'react';
import styled from 'styled-components';

const Message = styled.div`
  display: flex;
  justify-content: ${({ sender }) => (sender === 'bot' ? 'flex-start' : 'flex-end')};
  padding: 5px 0;
`;

const MessageBubble = styled.div`
  max-width: 60%;
  padding: 10px;
  border-radius: 8px;
  background-color: ${({ sender }) => (sender === 'bot' ? '#333' : '#d4af37')};
  color: ${({ sender }) => (sender === 'bot' ? '#d4af37' : '#333')};
`;

const ChatMessage = ({ text, sender }) => (
  <Message sender={sender}>
    <MessageBubble sender={sender}>{text}</MessageBubble>
  </Message>
);

export default ChatMessage;
