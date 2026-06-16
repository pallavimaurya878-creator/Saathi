import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, X } from 'lucide-react';
import { formatTimer } from '../../utils/formatters';

const ExerciseTimer = ({ exercise, onClose }) => {
  const totalSeconds = parseInt(exercise?.duration) * 60 || 300;
  const [seconds, setSeconds] = useState(totalSeconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && seconds > 0) {
      interval = setInterval(() => setSeconds((s) => s - 1), 1000);
    } else if (seconds === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const progress = ((totalSeconds - seconds) / totalSeconds) * 100;

  const reset = () => {
    setSeconds(totalSeconds);
    setIsRunning(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          className="bg-white dark:bg-surface-800 rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center"
        >
          <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700">
            <X size={18} />
          </button>
          <span className="text-4xl mb-3 block">{exercise?.image}</span>
          <h3 className="text-lg font-bold text-surface-900 dark:text-white mb-1">{exercise?.name}</h3>
          <p className="text-sm text-surface-500 mb-6">{exercise?.difficulty} • {exercise?.calories} kcal</p>

          {/* Circular progress */}
          <div className="relative w-48 h-48 mx-auto mb-6">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4" className="text-surface-200 dark:text-surface-700" />
              <circle
                cx="50" cy="50" r="45" fill="none"
                stroke="url(#timerGrad)" strokeWidth="4" strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 45}`}
                strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                className="transition-all duration-1000"
              />
              <defs>
                <linearGradient id="timerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-surface-900 dark:text-white font-mono">{formatTimer(seconds)}</span>
              <span className="text-xs text-surface-500">{seconds === 0 ? 'Complete! 🎉' : 'remaining'}</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <button onClick={reset} className="p-3 rounded-xl bg-surface-100 dark:bg-surface-700 hover:bg-surface-200 dark:hover:bg-surface-600 transition-colors">
              <RotateCcw size={20} />
            </button>
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="p-4 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transition-all"
            >
              {isRunning ? <Pause size={24} /> : <Play size={24} />}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExerciseTimer;
