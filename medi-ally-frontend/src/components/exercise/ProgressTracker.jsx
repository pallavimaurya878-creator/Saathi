import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Trophy } from 'lucide-react';
import useHealthStore from '../../store/healthStore';
import Card from '../common/Card';

const ProgressTracker = () => {
  const { workoutStreak } = useHealthStore();
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <Card hover={false}>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-semibold text-surface-900 dark:text-white">Weekly Streak</h4>
        <div className="flex items-center gap-1.5 text-orange-500">
          <Flame size={16} />
          <span className="text-sm font-bold">{workoutStreak} days</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {days.map((day, i) => (
          <div key={day} className="flex-1 flex flex-col items-center gap-1.5">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                i < workoutStreak
                  ? 'bg-gradient-to-br from-secondary-400 to-secondary-600 text-white shadow-md shadow-secondary-500/25'
                  : 'bg-surface-100 dark:bg-surface-700 text-surface-400'
              }`}
            >
              {i < workoutStreak ? '✓' : ''}
            </motion.div>
            <span className="text-[10px] text-surface-500">{day}</span>
          </div>
        ))}
      </div>
      {workoutStreak >= 7 && (
        <div className="mt-4 flex items-center gap-2 p-3 rounded-xl bg-yellow-50 dark:bg-yellow-900/20">
          <Trophy size={16} className="text-yellow-500" />
          <span className="text-xs font-semibold text-yellow-700 dark:text-yellow-400">Perfect Week! Amazing! 🎉</span>
        </div>
      )}
    </Card>
  );
};

export default ProgressTracker;
