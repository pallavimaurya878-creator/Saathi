import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Upload, Salad, Dumbbell, Siren } from 'lucide-react';
import Card from '../common/Card';

const actions = [
  { name: 'Upload Report', icon: Upload, path: '/diagnostics', gradient: 'from-primary-500 to-blue-600', shadow: 'shadow-primary-500/25' },
  { name: 'Get Diet Plan', icon: Salad, path: '/dietician', gradient: 'from-secondary-500 to-emerald-600', shadow: 'shadow-secondary-500/25' },
  { name: 'Start Workout', icon: Dumbbell, path: '/exercise', gradient: 'from-purple-500 to-indigo-600', shadow: 'shadow-purple-500/25' },
  { name: 'Emergency SOS', icon: Siren, path: '/emergency', gradient: 'from-danger-500 to-red-600', shadow: 'shadow-danger-500/25' },
];

const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <Card hover={false}>
      <h3 className="text-lg font-semibold text-surface-900 dark:text-white mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, i) => (
          <motion.button
            key={action.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(action.path)}
            className={`flex flex-col items-center gap-2 p-4 rounded-2xl bg-gradient-to-br ${action.gradient} text-white shadow-lg ${action.shadow} transition-all`}
          >
            <action.icon size={24} />
            <span className="text-xs font-semibold">{action.name}</span>
          </motion.button>
        ))}
      </div>
    </Card>
  );
};

export default QuickActions;
