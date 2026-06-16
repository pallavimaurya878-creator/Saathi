import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import { Upload, FileText, X } from 'lucide-react';
import { formatFileSize } from '../../utils/formatters';

const ReportUploader = ({ file, setFile }) => {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) setFile(acceptedFiles[0]);
  }, [setFile]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'], 'image/*': ['.png', '.jpg', '.jpeg'] },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024,
  });

  return (
    <div>
      {!file ? (
        <motion.div
          {...getRootProps()}
          whileHover={{ scale: 1.01 }}
          className={`border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all ${
            isDragActive
              ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
              : 'border-surface-300 dark:border-surface-600 hover:border-primary-400 hover:bg-surface-50 dark:hover:bg-surface-800'
          }`}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center">
              <Upload size={28} className="text-primary-500" />
            </div>
            <div>
              <p className="text-base font-semibold text-surface-800 dark:text-surface-200">
                {isDragActive ? 'Drop your file here' : 'Drag & drop your medical report'}
              </p>
              <p className="text-sm text-surface-500 mt-1">PDF, PNG, or JPG — Max 10MB</p>
            </div>
            <button className="px-5 py-2 rounded-xl text-sm font-medium bg-primary-500 text-white hover:bg-primary-600 transition-colors">
              Browse Files
            </button>
          </div>
        </motion.div>
      ) : (
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-50 dark:bg-surface-700/50 border border-surface-200 dark:border-surface-600">
          <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center">
            <FileText size={22} className="text-primary-500" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-surface-900 dark:text-white truncate">{file.name}</p>
            <p className="text-xs text-surface-500">{formatFileSize(file.size)}</p>
          </div>
          <button onClick={() => setFile(null)} className="p-2 rounded-lg hover:bg-surface-200 dark:hover:bg-surface-600 transition-colors">
            <X size={16} className="text-surface-500" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ReportUploader;
