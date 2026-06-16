import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Droplets, Activity, Scale } from 'lucide-react';
import { useHealthData } from '../../context/HealthDataContext';
import Card from '../common/Card';

const HealthOverview = () => {
  const { currentVitals } = useHealthData();

  const vitals = [
    { label: 'Heart Rate', value: `${currentVitals.heartRate}`, unit: 'bpm', icon: Heart, color: 'from-red-500 to-pink-500', bg: 'bg-red-50 dark:bg-red-900/20' },
    { label: 'Blood Sugar', value: `${currentVitals.bloodSugar}`, unit: 'mg/dL', icon: Droplets, color: 'from-blue-500 to-cyan-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
    { label: 'Blood Pressure', value: `${currentVitals.systolic}/${currentVitals.diastolic}`, unit: 'mmHg', icon: Activity, color: 'from-purple-500 to-indigo-500', bg: 'bg-purple-50 dark:bg-purple-900/20' },
    { label: 'SpO₂ Level', value: `${currentVitals.oxygenLevel}`, unit: '%', icon: Scale, color: 'from-green-500 to-emerald-500', bg: 'bg-green-50 dark:bg-green-900/20' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {vitals.map((vital, i) => (
        <motion.div
          key={vital.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <Card hover={false} className="relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wide">{vital.label}</p>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-2xl font-bold text-surface-900 dark:text-white">{vital.value}</span>
                  <span className="text-xs text-surface-400">{vital.unit}</span>
                </div>
              </div>
              <div className={`p-2.5 rounded-xl ${vital.bg}`}>
                <vital.icon size={20} className={`bg-gradient-to-r ${vital.color} bg-clip-text`} style={{ color: vital.color.includes('red') ? '#EF4444' : vital.color.includes('blue') ? '#3B82F6' : vital.color.includes('purple') ? '#8B5CF6' : '#10B981' }} />
              </div>
            </div>
            {/* Decorative gradient bar */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${vital.color}`} />
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default HealthOverview;
