import React from 'react';
import { AlertTriangle } from 'lucide-react';

const RestrictedFoods = ({ foods = [] }) => {
  return (
    <div className="bg-danger-50 dark:bg-danger-900/20 rounded-2xl p-5 border border-danger-200 dark:border-danger-800">
      <div className="flex items-center gap-2 mb-3">
        <AlertTriangle size={18} className="text-danger-500" />
        <h4 className="text-sm font-semibold text-danger-700 dark:text-danger-400">Foods to Avoid</h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {foods.map((food, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-lg text-xs font-medium bg-danger-100 dark:bg-danger-900/40 text-danger-700 dark:text-danger-300"
          >
            ✕ {food}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RestrictedFoods;
