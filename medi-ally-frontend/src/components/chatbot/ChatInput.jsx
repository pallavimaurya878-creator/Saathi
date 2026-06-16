import React, { useState } from 'react';
import { Send } from 'lucide-react';
import VoiceInput from './VoiceInput';

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };

  const handleVoice = (transcript) => {
    setText(transcript);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 p-4 border-t border-surface-100 dark:border-surface-700">
      <VoiceInput onResult={handleVoice} />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your health question..."
        className="flex-1 px-4 py-2.5 rounded-xl bg-surface-50 dark:bg-surface-700 border border-surface-200 dark:border-surface-600 text-sm focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 outline-none transition-all"
      />
      <button
        type="submit"
        disabled={!text.trim()}
        className="p-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white disabled:opacity-50 hover:shadow-lg hover:shadow-primary-500/25 transition-all"
      >
        <Send size={18} />
      </button>
    </form>
  );
};

export default ChatInput;
