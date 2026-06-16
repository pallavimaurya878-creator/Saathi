import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Flame } from 'lucide-react';

const MealPlanCard = ({ mealType, foods = [] }) => {
  const mealIcons = { breakfast: '🌅', lunch: '☀️', dinner: '🌙', snacks: '🍎' };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-surface-800 rounded-2xl border border-surface-100 dark:border-surface-700 p-5 shadow-soft"
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">{mealIcons[mealType] || '🍽️'}</span>
        <h4 className="text-base font-semibold text-surface-900 dark:text-white capitalize">{mealType}</h4>
      </div>
      {foods.length > 0 ? (
        <div className="space-y-3">
          {foods.map((food, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-surface-50 dark:bg-surface-700/50">
              <div className="flex items-center gap-3">
                <span className="text-xl">{food.image}</span>
                <div>
                  <p className="text-sm font-medium text-surface-900 dark:text-white">{food.name}</p>
                  <p className="text-xs text-surface-500">{food.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-surface-500">
                <Flame size={12} className="text-orange-500" />
                {food.calories} kcal
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-surface-400 italic">No items for this meal</p>
      )}
    </motion.div>
  );
};

export default MealPlanCard;
