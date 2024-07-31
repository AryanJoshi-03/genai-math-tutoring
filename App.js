// src/App.js
import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './chatbot/config';
import MessageParser from './chatbot/MessageParser';
import ActionProvider from './chatbot/ActionProvider';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000;
    color: #DAA520; /* ochre */
    height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
  }
`;

const ChatbotWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppContainer = styled.div`
  background-color: #333;
  border: 1px solid #DAA520; /* ochre */
  border-radius: 10px;
  width: 100%;
  height: 100%;
  max-width: 800px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ChatbotWrapper>
        <AppContainer>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </AppContainer>
      </ChatbotWrapper>
    </>
  );
}

export default App;
