import React from 'react';
import { motion } from 'framer-motion';
import { Salad, FileSearch, Dumbbell, MessageCircle } from 'lucide-react';
import { useHealthData } from '../../context/HealthDataContext';
import { formatRelativeTime } from '../../utils/formatters';
import Card from '../common/Card';

const iconMap = {
  diet: Salad,
  report: FileSearch,
  exercise: Dumbbell,
  chat: MessageCircle,
};

const colorMap = {
  diet: 'text-green-500 bg-green-50 dark:bg-green-900/20',
  report: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20',
  exercise: 'text-purple-500 bg-purple-50 dark:bg-purple-900/20',
  chat: 'text-orange-500 bg-orange-50 dark:bg-orange-900/20',
};

const RecentActivity = () => {
  const { recentActivity } = useHealthData();

  return (
    <Card hover={false}>
      <h3 className="text-lg font-semibold text-surface-900 dark:text-white mb-4">Recent Activity</h3>
      <div className="space-y-3">
        {recentActivity.slice(0, 5).map((activity, i) => {
          const Icon = iconMap[activity.type] || MessageCircle;
          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-50 dark:hover:bg-surface-700/50 transition-colors"
            >
              <div className={`p-2 rounded-lg ${colorMap[activity.type]}`}>
                <Icon size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-surface-900 dark:text-white truncate">{activity.title}</p>
                <p className="text-xs text-surface-500 truncate">{activity.description}</p>
              </div>
              <span className="text-xs text-surface-400 whitespace-nowrap">{formatRelativeTime(activity.time)}</span>
            </motion.div>
          );
        })}
      </div>
    </Card>
  );
};

export default RecentActivity;
