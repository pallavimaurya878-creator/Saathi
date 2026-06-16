import { delay, getChatbotResponse } from '../utils/helpers';
import { CHATBOT_RESPONSES } from '../utils/constants';

/** Mock chatbot service */
const chatbotService = {
  sendMessage: async (message) => {
    await delay(1500);
    const response = getChatbotResponse(message, CHATBOT_RESPONSES);
    return {
      id: Date.now().toString(),
      text: response,
      sender: 'bot',
      timestamp: new Date().toISOString(),
    };
  },
};

export default chatbotService;
