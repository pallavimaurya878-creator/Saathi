import React from 'react';
import { CheckCircle } from 'lucide-react';

const RecommendedFoods = ({ foods = [] }) => {
  return (
    <div className="bg-secondary-50 dark:bg-secondary-900/20 rounded-2xl p-5 border border-secondary-200 dark:border-secondary-800">
      <div className="flex items-center gap-2 mb-3">
        <CheckCircle size={18} className="text-secondary-500" />
        <h4 className="text-sm font-semibold text-secondary-700 dark:text-secondary-400">Recommended Foods</h4>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {foods.map((food, i) => (
          <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white/60 dark:bg-surface-800/60">
            <span className="text-lg">{food.image}</span>
            <span className="text-xs font-medium text-surface-700 dark:text-surface-300 truncate">{food.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedFoods;
