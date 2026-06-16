import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, Salad, FileSearch, Dumbbell,
  Siren, MessageCircle, User, Heart, ChevronLeft, ChevronRight
} from 'lucide-react';

const iconMap = { LayoutDashboard, Salad, FileSearch, Dumbbell, Siren, MessageCircle, User };

const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: 'LayoutDashboard' },
  { name: 'Smart Dietician', path: '/dietician', icon: 'Salad' },
  { name: 'Diagnostics', path: '/diagnostics', icon: 'FileSearch' },
  { name: 'Exercise Guide', path: '/exercise', icon: 'Dumbbell' },
  { name: 'Emergency', path: '/emergency', icon: 'Siren' },
  { name: 'AI Chatbot', path: '/chatbot', icon: 'MessageCircle' },
  { name: 'Profile', path: '/profile', icon: 'User' },
];

const Sidebar = ({ collapsed, setCollapsed }) => {
  const location = useLocation();

  return (
    <motion.aside
      animate={{ width: collapsed ? 72 : 256 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed left-0 top-0 h-screen bg-white dark:bg-surface-800 border-r border-surface-100 dark:border-surface-700 z-40 flex flex-col shadow-soft"
    >
      {/* Logo */}
      <div className="h-16 flex items-center px-4 gap-3 border-b border-surface-100 dark:border-surface-700">
        <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0">
          <Heart size={18} className="text-white" fill="white" />
        </div>
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg font-bold font-display bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent whitespace-nowrap"
          >
            Medi-Ally
          </motion.span>
        )}
      </div>

      {/* Nav items */}
      <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon];
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                isActive
                  ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 shadow-sm'
                  : 'text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-700/50'
              }`}
              title={collapsed ? item.name : undefined}
            >
              <Icon size={20} className={isActive ? 'text-primary-500' : 'group-hover:text-primary-500 transition-colors'} />
              {!collapsed && <span className="whitespace-nowrap">{item.name}</span>}
              {isActive && !collapsed && (
                <motion.div
                  layoutId="sidebar-active"
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-500"
                />
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Collapse toggle */}
      <div className="p-3 border-t border-surface-100 dark:border-surface-700">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center p-2 rounded-xl hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors text-surface-500"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
