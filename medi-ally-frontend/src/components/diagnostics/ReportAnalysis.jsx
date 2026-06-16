import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';
import { getRiskColor } from '../../utils/helpers';
import Card from '../common/Card';

const ReportAnalysis = ({ result }) => {
  if (!result) return null;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      {/* Summary */}
      <Card hover={false}>
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-xl ${result.riskLevel === 'low' ? 'bg-green-50 dark:bg-green-900/20' : result.riskLevel === 'critical' ? 'bg-red-50 dark:bg-red-900/20' : 'bg-yellow-50 dark:bg-yellow-900/20'}`}>
            {result.riskLevel === 'low' ? <CheckCircle size={24} className="text-green-500" /> : <AlertCircle size={24} className={result.riskLevel === 'critical' ? 'text-red-500' : 'text-yellow-500'} />}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-semibold text-surface-900 dark:text-white">{result.condition}</h3>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${getRiskColor(result.riskLevel)}`}>
                {result.riskLevel.toUpperCase()} RISK
              </span>
            </div>
            <p className="text-sm text-surface-600 dark:text-surface-400">{result.reportType} • {result.date}</p>
          </div>
        </div>
      </Card>

      {/* Simple Explanation */}
      <Card hover={false} className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
        <div className="flex gap-3">
          <Info size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-1">In Simple Terms</h4>
            <p className="text-sm text-blue-600 dark:text-blue-300">{result.simpleExplanation}</p>
          </div>
        </div>
      </Card>

      {/* Abnormal Values Table */}
      <Card hover={false}>
        <h4 className="text-base font-semibold text-surface-900 dark:text-white mb-4">Lab Results</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-surface-200 dark:border-surface-700">
                <th className="pb-3 text-surface-500 font-medium">Parameter</th>
                <th className="pb-3 text-surface-500 font-medium">Value</th>
                <th className="pb-3 text-surface-500 font-medium">Normal Range</th>
                <th className="pb-3 text-surface-500 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {result.abnormalValues.map((row, i) => (
                <tr key={i} className="border-b border-surface-100 dark:border-surface-700/50">
                  <td className="py-3 font-medium text-surface-800 dark:text-surface-200">{row.parameter}</td>
                  <td className="py-3">{row.value}</td>
                  <td className="py-3 text-surface-500">{row.normalRange}</td>
                  <td className="py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                      row.status === 'Normal' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </motion.div>
  );
};

export default ReportAnalysis;
