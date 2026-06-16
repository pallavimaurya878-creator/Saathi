import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Sparkles } from 'lucide-react';
import diseases from '../data/diseases.json';
import { FITNESS_LEVELS } from '../utils/constants';
import exerciseService from '../services/exerciseService';
import { useHealthData } from '../context/HealthDataContext';
import Button from '../components/common/Button';
import Loader from '../components/common/Loader';
import ExerciseCard from '../components/exercise/ExerciseCard';
import WorkoutPlan from '../components/exercise/WorkoutPlan';
import ExerciseTimer from '../components/exercise/ExerciseTimer';
import ProgressTracker from '../components/exercise/ProgressTracker';
import useHealthStore from '../store/healthStore';
import toast from 'react-hot-toast';

const ExercisePage = () => {
  const [disease, setDisease] = useState('');
  const [level, setLevel] = useState('');
  const [loading, setLoading] = useState(false);
  const [timerExercise, setTimerExercise] = useState(null);
  const { exercisePlan, setExercisePlan } = useHealthStore();
  const { addActivity } = useHealthData();

  const handleGenerate = async () => {
    if (!disease || !level) { toast.error('Select condition and fitness level'); return; }
    setLoading(true);
    try {
      const plan = await exerciseService.getWorkoutPlan({ disease, fitnessLevel: level });
      setExercisePlan(plan);
      addActivity({ type: 'exercise', title: 'Workout plan generated', description: `${disease} - ${level}` });
      toast.success('Workout plan ready!');
    } catch {
      toast.error('Failed to generate plan');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-transition space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-surface-900 dark:text-white flex items-center gap-2">
          <Dumbbell className="text-purple-500" /> Exercise Guide
        </h1>
        <p className="text-sm text-surface-500 mt-1">Get disease-specific workout plans for your fitness level</p>
      </div>

      {/* Form */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-surface-800 rounded-2xl border border-surface-100 dark:border-surface-700 p-6 shadow-soft">
        <div className="grid sm:grid-cols-2 gap-4 mb-5">
          <div>
            <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5">Health Condition</label>
            <select value={disease} onChange={(e) => setDisease(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 text-sm outline-none focus:ring-2 focus:ring-primary-500/30">
              <option value="">Select condition...</option>
              {diseases.map((d) => (<option key={d.id} value={d.name}>{d.name}</option>))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5">Fitness Level</label>
            <select value={level} onChange={(e) => setLevel(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 text-sm outline-none focus:ring-2 focus:ring-primary-500/30">
              <option value="">Select level...</option>
              {FITNESS_LEVELS.map((l) => (<option key={l} value={l}>{l}</option>))}
            </select>
          </div>
        </div>
        <Button onClick={handleGenerate} loading={loading} icon={Sparkles} size="lg">Generate Workout Plan</Button>
      </motion.div>

      {loading && <Loader text="Creating your workout plan..." />}

      {exercisePlan && !loading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <WorkoutPlan plan={exercisePlan} />
            <ProgressTracker />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {exercisePlan.exercises.map((ex) => (
              <ExerciseCard key={ex.id} exercise={ex} onStartTimer={setTimerExercise} />
            ))}
          </div>
        </motion.div>
      )}

      {timerExercise && <ExerciseTimer exercise={timerExercise} onClose={() => setTimerExercise(null)} />}
    </div>
  );
};

export default ExercisePage;
