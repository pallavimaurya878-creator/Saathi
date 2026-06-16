import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileSearch, Scan } from 'lucide-react';
import diagnosticsService from '../services/diagnosticsService';
import { useHealthData } from '../context/HealthDataContext';
import Button from '../components/common/Button';
import ReportUploader from '../components/diagnostics/ReportUploader';
import ReportScanner from '../components/diagnostics/ReportScanner';
import ReportAnalysis from '../components/diagnostics/ReportAnalysis';
import DiagnosisResult from '../components/diagnostics/DiagnosisResult';
import PrescriptionViewer from '../components/diagnostics/PrescriptionViewer';
import useHealthStore from '../store/healthStore';
import toast from 'react-hot-toast';

const DiagnosticsPage = () => {
  const [file, setFile] = useState(null);
  const [scanning, setScanning] = useState(false);
  const { diagnosisResult, setDiagnosisResult } = useHealthStore();
  const { addActivity } = useHealthData();

  const handleAnalyze = async () => {
    if (!file) { toast.error('Please upload a report first'); return; }
    setScanning(true);
    setDiagnosisResult(null);
    try {
      const result = await diagnosticsService.analyzeReport(file);
      setDiagnosisResult(result);
      addActivity({ type: 'report', title: 'Report analyzed', description: result.condition });
      toast.success('Analysis complete!');
    } catch {
      toast.error('Analysis failed');
    } finally {
      setScanning(false);
    }
  };

  return (
    <div className="page-transition space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-surface-900 dark:text-white flex items-center gap-2">
          <FileSearch className="text-primary-500" /> Medical Diagnostics
        </h1>
        <p className="text-sm text-surface-500 mt-1">Upload your medical report and get AI-powered analysis</p>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-surface-800 rounded-2xl border border-surface-100 dark:border-surface-700 p-6 shadow-soft space-y-5">
        <ReportUploader file={file} setFile={setFile} />
        {file && !scanning && !diagnosisResult && (
          <Button onClick={handleAnalyze} icon={Scan} size="lg">
            Analyze with AI
          </Button>
        )}
      </motion.div>

      <ReportScanner scanning={scanning} />

      {diagnosisResult && (
        <>
          <ReportAnalysis result={diagnosisResult} />
          <DiagnosisResult recommendations={diagnosisResult.recommendations} />
          <PrescriptionViewer />
        </>
      )}
    </div>
  );
};

export default DiagnosticsPage;
