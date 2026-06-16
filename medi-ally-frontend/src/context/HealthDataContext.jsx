import React, { createContext, useContext, useState } from 'react';
import { generateVitalsData } from '../utils/helpers';

const HealthDataContext = createContext();

export const HealthDataProvider = ({ children }) => {
  const [vitalsHistory, setVitalsHistory] = useState(generateVitalsData(14));
  const [currentVitals, setCurrentVitals] = useState({
    heartRate: 78,
    bloodSugar: 105,
    systolic: 118,
    diastolic: 76,
    oxygenLevel: 98,
    temperature: 98.2,
  });

  const [recentActivity, setRecentActivity] = useState([
    { id: 1, type: 'diet', title: 'Diet plan generated', description: 'Diabetes-friendly meal plan', time: new Date(Date.now() - 3600000).toISOString() },
    { id: 2, type: 'report', title: 'Blood report analyzed', description: 'All values normal', time: new Date(Date.now() - 7200000).toISOString() },
    { id: 3, type: 'exercise', title: 'Completed workout', description: '30 min yoga session', time: new Date(Date.now() - 86400000).toISOString() },
    { id: 4, type: 'chat', title: 'Chatbot consultation', description: 'Headache remedies discussed', time: new Date(Date.now() - 172800000).toISOString() },
  ]);

  const addActivity = (activity) => {
    setRecentActivity((prev) => [{ id: Date.now(), time: new Date().toISOString(), ...activity }, ...prev].slice(0, 20));
  };

  const updateVitals = (newVitals) => {
    setCurrentVitals((prev) => ({ ...prev, ...newVitals }));
  };

  return (
    <HealthDataContext.Provider
      value={{ vitalsHistory, currentVitals, recentActivity, addActivity, updateVitals, setVitalsHistory }}
    >
      {children}
    </HealthDataContext.Provider>
  );
};

export const useHealthData = () => {
  const context = useContext(HealthDataContext);
  if (!context) throw new Error('useHealthData must be used within HealthDataProvider');
  return context;
};
