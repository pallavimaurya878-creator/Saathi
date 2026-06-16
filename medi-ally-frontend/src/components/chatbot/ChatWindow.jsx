import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import chatbotService from '../../services/chatbotService';
import { Heart } from 'lucide-react';

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { id: '1', text: "Hello! I'm your Medi-Ally health assistant. 👋 I can help with questions about fever, headaches, diabetes, diet, exercise, and more. How can I help you today?", sender: 'bot', timestamp: new Date().toISOString() },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => { scrollToBottom(); }, [messages, isTyping]);

  const handleSend = async (text) => {
    if (!text.trim()) return;
    const userMsg = { id: Date.now().toString(), text, sender: 'user', timestamp: new Date().toISOString() };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    try {
      const response = await chatbotService.sendMessage(text);
      setMessages((prev) => [...prev, response]);
    } catch {
      setMessages((prev) => [...prev, { id: Date.now().toString(), text: 'Sorry, I encountered an error. Please try again.', sender: 'bot', timestamp: new Date().toISOString() }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] bg-white dark:bg-surface-800 rounded-2xl border border-surface-100 dark:border-surface-700 shadow-soft overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-surface-100 dark:border-surface-700 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
          <Heart size={20} fill="white" />
        </div>
        <div>
          <p className="font-semibold">Medi-Ally Assistant</p>
          <p className="text-xs text-white/70">Always here to help • AI Powered</p>
        </div>
        <div className="ml-auto w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        {isTyping && (
          <div className="flex items-center gap-2 px-4 py-3 bg-surface-100 dark:bg-surface-700 rounded-2xl rounded-bl-md w-fit">
            <span className="typing-dot w-2 h-2 rounded-full bg-surface-400" />
            <span className="typing-dot w-2 h-2 rounded-full bg-surface-400" />
            <span className="typing-dot w-2 h-2 rounded-full bg-surface-400" />
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default ChatWindow;
