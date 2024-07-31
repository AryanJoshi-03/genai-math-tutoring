// src/chatbot/ActionProvider.js
import { createChatBotMessage } from 'react-chatbot-kit';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleConceptualProblem = () => {
    const message = this.createChatBotMessage(
      "Select a chapter (1-5):",
      { withAvatar: true }
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  handleOther = () => {
    const message = this.createChatBotMessage(
      "What can we help you with?",
      { withAvatar: true }
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  handleDefault = (message) => {
    const responseMessage = this.createChatBotMessage(
      `You said: ${message}`,
      { withAvatar: true }
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, responseMessage],
    }));
  };
}

export default ActionProvider;
