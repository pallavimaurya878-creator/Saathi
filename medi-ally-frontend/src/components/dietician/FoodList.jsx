import React from 'react';

const FoodList = ({ foods = [], title = 'Foods' }) => {
  return (
    <div>
      <h4 className="text-sm font-semibold text-surface-700 dark:text-surface-300 mb-3">{title}</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {foods.map((food, i) => (
          <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-surface-50 dark:bg-surface-700/50">
            <span className="text-lg">{food.image || '🍽️'}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-surface-800 dark:text-surface-200 truncate">{food.name}</p>
              <p className="text-xs text-surface-500">{food.calories} kcal | P: {food.protein}g | C: {food.carbs}g</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
