import React from 'react';
import { Mic, MicOff } from 'lucide-react';
import useVoiceInput from '../../hooks/useVoiceInput';

const VoiceInput = ({ onResult }) => {
  const { isListening, transcript, supported, startListening } = useVoiceInput();

  React.useEffect(() => {
    if (transcript) onResult(transcript);
  }, [transcript, onResult]);

  if (!supported) return null;

  return (
    <button
      type="button"
      onClick={startListening}
      className={`p-2.5 rounded-xl transition-all ${
        isListening
          ? 'bg-danger-100 dark:bg-danger-900/30 text-danger-500 animate-pulse'
          : 'bg-surface-100 dark:bg-surface-700 text-surface-500 hover:bg-surface-200 dark:hover:bg-surface-600'
      }`}
      title={isListening ? 'Listening...' : 'Voice input'}
    >
      {isListening ? <MicOff size={18} /> : <Mic size={18} />}
    </button>
  );
};

export default VoiceInput;
