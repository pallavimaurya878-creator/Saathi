import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Card from '../common/Card';

const DiagnosisResult = ({ recommendations = [] }) => {
  if (recommendations.length === 0) return null;

  return (
    <Card hover={false}>
      <h4 className="text-base font-semibold text-surface-900 dark:text-white mb-4">Recommendations</h4>
      <div className="space-y-3">
        {recommendations.map((rec, i) => (
          <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-secondary-50 dark:bg-secondary-900/20">
            <CheckCircle2 size={18} className="text-secondary-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-surface-700 dark:text-surface-300">{rec}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default DiagnosisResult;
