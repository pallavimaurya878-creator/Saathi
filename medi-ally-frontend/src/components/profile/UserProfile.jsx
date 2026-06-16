import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { User, Mail, Phone, Droplets } from 'lucide-react';
import Card from '../common/Card';
import { getInitials } from '../../utils/helpers';

const UserProfile = () => {
  const { user } = useAuth();
  if (!user) return null;

  return (
    <Card hover={false}>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-primary-500/25">
          {getInitials(user.name)}
        </div>
        <div>
          <h3 className="text-lg font-bold text-surface-900 dark:text-white">{user.name}</h3>
          <p className="text-sm text-surface-500">{user.email}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { icon: Phone, label: 'Phone', value: user.phone || 'Not set' },
          { icon: User, label: 'Age', value: user.age ? `${user.age} years` : 'Not set' },
          { icon: Droplets, label: 'Blood Group', value: user.bloodGroup || 'Not set' },
          { icon: Mail, label: 'Email', value: user.email },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-50 dark:bg-surface-700/50">
            <item.icon size={16} className="text-primary-500" />
            <div>
              <p className="text-[10px] text-surface-400 uppercase">{item.label}</p>
              <p className="text-sm font-medium text-surface-800 dark:text-surface-200 truncate">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default UserProfile;
