import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { FileText, AlertCircle } from 'lucide-react';
import Card from '../common/Card';

const MedicalHistory = () => {
  const { user } = useAuth();

  const history = user?.medicalHistory || [];
  const allergies = user?.allergies || [];

  return (
    <Card hover={false}>
      <h3 className="text-base font-semibold text-surface-900 dark:text-white mb-4">Medical History</h3>
      {history.length > 0 ? (
        <div className="space-y-2 mb-4">
          {history.map((item, i) => (
            <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-50 dark:bg-surface-700/50">
              <FileText size={14} className="text-primary-500" />
              <span className="text-sm text-surface-700 dark:text-surface-300">{item}</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-surface-400 mb-4">No medical history recorded</p>
      )}

      <h4 className="text-sm font-semibold text-surface-900 dark:text-white mb-2">Known Allergies</h4>
      {allergies.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {allergies.map((a, i) => (
            <span key={i} className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-danger-50 text-danger-600 dark:bg-danger-900/20 dark:text-danger-400">
              <AlertCircle size={10} /> {a}
            </span>
          ))}
        </div>
      ) : (
        <p className="text-sm text-surface-400">No allergies recorded</p>
      )}
    </Card>
  );
};

export default MedicalHistory;
