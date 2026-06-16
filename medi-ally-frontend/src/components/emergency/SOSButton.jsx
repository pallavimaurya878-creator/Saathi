import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const SOSButton = ({ onPress, countdown }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <motion.button
        onClick={onPress}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-40 h-40 rounded-full bg-gradient-to-br from-danger-500 to-red-600 text-white shadow-2xl shadow-danger-500/40 flex flex-col items-center justify-center sos-pulse"
      >
        <Phone size={36} className="mb-1" />
        <span className="text-lg font-bold">SOS</span>
        {countdown !== null && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full"
          >
            <span className="text-5xl font-bold text-white">{countdown}</span>
          </motion.div>
        )}
      </motion.button>
      <p className="text-sm text-surface-500 text-center max-w-xs">
        Press and hold to send emergency alert to your contacts with your current location
      </p>
    </div>
  );
};

export default SOSButton;
