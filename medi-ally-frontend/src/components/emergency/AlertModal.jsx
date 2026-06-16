import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, CheckCircle, X } from 'lucide-react';

const AlertModal = ({ isOpen, onClose, alertSent }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative bg-white dark:bg-surface-800 rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center"
          >
            <button onClick={onClose} className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700">
              <X size={16} />
            </button>
            {alertSent ? (
              <>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <CheckCircle size={32} className="text-green-500" />
                </div>
                <h3 className="text-lg font-bold text-surface-900 dark:text-white mb-2">Alert Sent!</h3>
                <p className="text-sm text-surface-500">Your emergency contacts have been notified with your current location. Help is on the way.</p>
              </>
            ) : (
              <>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center animate-pulse">
                  <AlertTriangle size={32} className="text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-surface-900 dark:text-white mb-2">Sending Alert...</h3>
                <p className="text-sm text-surface-500">Notifying your emergency contacts and sharing your location.</p>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AlertModal;
