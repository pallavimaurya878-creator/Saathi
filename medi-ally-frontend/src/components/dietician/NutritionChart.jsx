import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import Card from '../common/Card';

const NutritionChart = ({ foods = [] }) => {
  const totalProtein = foods.reduce((sum, f) => sum + (f.protein || 0), 0);
  const totalCarbs = foods.reduce((sum, f) => sum + (f.carbs || 0), 0);
  const totalFat = foods.reduce((sum, f) => sum + (f.fat || 0), 0);
  const totalFiber = foods.reduce((sum, f) => sum + (f.fiber || 0), 0);

  const data = [
    { name: 'Protein', value: totalProtein, color: '#3B82F6' },
    { name: 'Carbs', value: totalCarbs, color: '#F59E0B' },
    { name: 'Fat', value: totalFat, color: '#EF4444' },
    { name: 'Fiber', value: totalFiber, color: '#10B981' },
  ].filter((d) => d.value > 0);

  return (
    <Card hover={false}>
      <h4 className="text-sm font-semibold text-surface-900 dark:text-white mb-4">Nutrition Breakdown</h4>
      <div className="h-52">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}g`} />
            <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: '12px' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default NutritionChart;
