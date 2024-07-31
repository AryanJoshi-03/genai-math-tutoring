// src/chatbot/MessageParser.js
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("conceptual problem")) {
        this.actionProvider.handleConceptualProblem();
      } else if (lowerCaseMessage.includes("other")) {
        this.actionProvider.handleOther();
      } else {
        this.actionProvider.handleDefault(message);
      }
    }
  }
  
  export default MessageParser;
  