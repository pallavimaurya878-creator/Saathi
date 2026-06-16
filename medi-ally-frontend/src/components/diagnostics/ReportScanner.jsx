import React from 'react';
import { motion } from 'framer-motion';
import { Scan } from 'lucide-react';

const ReportScanner = ({ scanning }) => {
  if (!scanning) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center gap-4 py-10"
    >
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-20 h-20 rounded-full border-4 border-surface-200 border-t-primary-500"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Scan size={28} className="text-primary-500" />
        </div>
      </div>
      <div className="text-center">
        <p className="text-base font-semibold text-surface-800 dark:text-surface-200">Analyzing your report...</p>
        <p className="text-sm text-surface-500 mt-1">AI is scanning for abnormalities</p>
      </div>
      <div className="w-48 h-2 rounded-full bg-surface-200 dark:bg-surface-700 overflow-hidden">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 3, ease: 'easeInOut' }}
          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default ReportScanner;
