import React from 'react';
import { Clock, Flame, BarChart3 } from 'lucide-react';
import Card from '../common/Card';

const WorkoutPlan = ({ plan }) => {
  if (!plan) return null;

  return (
    <Card hover={false} className="bg-gradient-to-br from-primary-500 to-indigo-600 text-white border-0">
      <h3 className="text-lg font-bold mb-1">Your Workout Plan</h3>
      <p className="text-sm text-white/70 mb-4 capitalize">For {plan.disease} • {plan.level} level</p>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white/15 backdrop-blur rounded-xl p-3 text-center">
          <BarChart3 size={18} className="mx-auto mb-1 text-white/80" />
          <p className="text-lg font-bold">{plan.exercises.length}</p>
          <p className="text-xs text-white/70">Exercises</p>
        </div>
        <div className="bg-white/15 backdrop-blur rounded-xl p-3 text-center">
          <Clock size={18} className="mx-auto mb-1 text-white/80" />
          <p className="text-lg font-bold">{plan.totalDuration}</p>
          <p className="text-xs text-white/70">Minutes</p>
        </div>
        <div className="bg-white/15 backdrop-blur rounded-xl p-3 text-center">
          <Flame size={18} className="mx-auto mb-1 text-white/80" />
          <p className="text-lg font-bold">{plan.totalCalories}</p>
          <p className="text-xs text-white/70">Calories</p>
        </div>
      </div>
    </Card>
  );
};

export default WorkoutPlan;
