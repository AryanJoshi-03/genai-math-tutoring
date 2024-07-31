import React, { useState } from 'react';
import styled from 'styled-components';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const ChatbotContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 60vw;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #1e1e1e;
  color: #d4af37;
  overflow: hidden;
`;

const ChatMessages = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: scroll;
`;

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: 'Welcome to the ultimate guide to Math 127. How can we help you today?', sender: 'bot' },
    { text: '1. I have a conceptual problem relating to one of the HW Problems', sender: 'bot' },
    { text: '2. Other', sender: 'bot' }
  ]);

  const addMessage = (text, sender) => {
    setMessages([...messages, { text, sender }]);
  };

  const handleUserInput = (input) => {
    addMessage(input, 'user');

    // Handle chatbot logic
    if (input === '1') {
      addMessage('Please select a chapter: 1, 2, 3, 4, 5', 'bot');
    } else if (input === '2') {
      addMessage('What can we help you with?', 'bot');
    } else if (['1', '2', '3', '4', '5'].includes(input)) {
      addMessage(`You selected chapter ${input}. Please select an assignment.`, 'bot');
      // Add specific assignments based on the chapter
    } else {
      addMessage('I did not understand that. Please enter a valid option.', 'bot');
    }
  };

  return (
    <ChatbotContainer>
      <ChatMessages>
        {messages.map((msg, index) => (
          <ChatMessage key={index} text={msg.text} sender={msg.sender} />
        ))}
      </ChatMessages>
      <ChatInput onSend={handleUserInput} />
    </ChatbotContainer>
  );
};

export default Chatbot;
