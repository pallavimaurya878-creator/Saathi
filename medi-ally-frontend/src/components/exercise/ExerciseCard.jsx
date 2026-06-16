import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Flame, BarChart3, Play } from 'lucide-react';

const ExerciseCard = ({ exercise, onStartTimer }) => {
  const difficultyColors = {
    Easy: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    Medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    Hard: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="bg-white dark:bg-surface-800 rounded-2xl border border-surface-100 dark:border-surface-700 p-5 shadow-soft"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-3xl">{exercise.image}</span>
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${difficultyColors[exercise.difficulty]}`}>
          {exercise.difficulty}
        </span>
      </div>
      <h4 className="text-sm font-semibold text-surface-900 dark:text-white mb-2">{exercise.name}</h4>
      <p className="text-xs text-surface-500 mb-4 line-clamp-2">{exercise.description}</p>
      <div className="flex items-center gap-3 mb-4 text-xs text-surface-500">
        <span className="flex items-center gap-1"><Clock size={12} /> {exercise.duration}</span>
        <span className="flex items-center gap-1"><Flame size={12} className="text-orange-500" /> {exercise.calories} kcal</span>
      </div>
      <button
        onClick={() => onStartTimer(exercise)}
        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all"
      >
        <Play size={14} /> Start Timer
      </button>
    </motion.div>
  );
};

export default ExerciseCard;
