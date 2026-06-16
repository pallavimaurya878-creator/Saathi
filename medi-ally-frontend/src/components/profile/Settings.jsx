import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Moon, Sun, Bell, Shield } from 'lucide-react';
import Card from '../common/Card';

const Settings = () => {
  const { isDark, toggleTheme } = useTheme();

  const settings = [
    { icon: isDark ? Sun : Moon, label: 'Dark Mode', description: 'Toggle dark/light theme', action: toggleTheme, active: isDark },
    { icon: Bell, label: 'Notifications', description: 'Health reminders & alerts', action: () => {}, active: true },
    { icon: Shield, label: 'Privacy', description: 'Data is stored locally', action: () => {}, active: true },
  ];

  return (
    <Card hover={false}>
      <h3 className="text-base font-semibold text-surface-900 dark:text-white mb-4">Settings</h3>
      <div className="space-y-2">
        {settings.map((setting, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-surface-50 dark:hover:bg-surface-700/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-surface-100 dark:bg-surface-700">
                <setting.icon size={16} className="text-surface-600 dark:text-surface-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-surface-900 dark:text-white">{setting.label}</p>
                <p className="text-xs text-surface-500">{setting.description}</p>
              </div>
            </div>
            <button
              onClick={setting.action}
              className={`w-10 h-6 rounded-full transition-colors relative ${
                setting.active ? 'bg-primary-500' : 'bg-surface-300 dark:bg-surface-600'
              }`}
            >
              <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                setting.active ? 'translate-x-4' : 'translate-x-0.5'
              }`} />
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Settings;
