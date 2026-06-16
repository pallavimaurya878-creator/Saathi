import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { getGreeting } from '../utils/helpers';
import HealthOverview from '../components/dashboard/HealthOverview';
import VitalsCard from '../components/dashboard/VitalsCard';
import QuickActions from '../components/dashboard/QuickActions';
import RecentActivity from '../components/dashboard/RecentActivity';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="page-transition space-y-6">
      {/* Greeting */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold text-surface-900 dark:text-white">
          {getGreeting()}, {user?.name?.split(' ')[0] || 'User'} 👋
        </h1>
        <p className="text-sm text-surface-500 mt-1">Here's your health overview for today</p>
      </motion.div>

      {/* Vitals Overview */}
      <HealthOverview />

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <VitalsCard />
        </div>
        <div className="space-y-6">
          <QuickActions />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
