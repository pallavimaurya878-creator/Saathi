import React from 'react';
import { MessageCircle } from 'lucide-react';
import ChatWindow from '../components/chatbot/ChatWindow';

const ChatbotPage = () => {
  return (
    <div className="page-transition max-w-3xl mx-auto">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-surface-900 dark:text-white flex items-center gap-2">
          <MessageCircle className="text-orange-500" /> AI Health Chatbot
        </h1>
        <p className="text-sm text-surface-500 mt-1">Ask me anything about your health — I'm here 24/7</p>
      </div>
      <ChatWindow />
    </div>
  );
};

export default ChatbotPage;
