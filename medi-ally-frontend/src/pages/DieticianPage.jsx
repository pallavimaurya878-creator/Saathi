import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Salad, Sparkles } from 'lucide-react';
import diseases from '../data/diseases.json';
import dieticianService from '../services/dieticianService';
import { DIET_PREFERENCES } from '../utils/constants';
import { useHealthData } from '../context/HealthDataContext';
import Button from '../components/common/Button';
import Loader from '../components/common/Loader';
import AllergyInput from '../components/dietician/AllergyInput';
import MealPlanCard from '../components/dietician/MealPlanCard';
import RestrictedFoods from '../components/dietician/RestrictedFoods';
import RecommendedFoods from '../components/dietician/RecommendedFoods';
import NutritionChart from '../components/dietician/NutritionChart';
import useHealthStore from '../store/healthStore';
import toast from 'react-hot-toast';

const DieticianPage = () => {
  const [form, setForm] = useState({ disease: '', age: '', weight: '', height: '', allergies: [], preference: '' });
  const [loading, setLoading] = useState(false);
  const { dietPlan, setDietPlan } = useHealthStore();
  const { addActivity } = useHealthData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.disease || !form.age || !form.weight || !form.height || !form.preference) {
      toast.error('Please fill all required fields'); return;
    }
    setLoading(true);
    try {
      const result = await dieticianService.generateMealPlan(form);
      setDietPlan(result);
      addActivity({ type: 'diet', title: 'Diet plan generated', description: `${form.disease} - ${form.preference}` });
      toast.success('Diet plan generated!');
    } catch (err) {
      toast.error('Failed to generate plan');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-transition space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-surface-900 dark:text-white flex items-center gap-2">
          <Salad className="text-secondary-500" /> Smart Dietician
        </h1>
        <p className="text-sm text-surface-500 mt-1">Get AI-powered, disease-specific meal plans tailored to your needs</p>
      </div>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit}
        className="bg-white dark:bg-surface-800 rounded-2xl border border-surface-100 dark:border-surface-700 p-6 shadow-soft space-y-5"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5">Health Condition *</label>
            <select value={form.disease} onChange={(e) => setForm({ ...form, disease: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 text-sm focus:ring-2 focus:ring-primary-500/30 outline-none">
              <option value="">Select condition...</option>
              {diseases.map((d) => (<option key={d.id} value={d.name}>{d.name}</option>))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5">Dietary Preference *</label>
            <select value={form.preference} onChange={(e) => setForm({ ...form, preference: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 text-sm focus:ring-2 focus:ring-primary-500/30 outline-none">
              <option value="">Select preference...</option>
              {DIET_PREFERENCES.map((p) => (<option key={p} value={p}>{p}</option>))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div><label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5">Age *</label><input type="number" value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 text-sm outline-none focus:ring-2 focus:ring-primary-500/30" placeholder="28" /></div>
          <div><label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5">Weight (kg) *</label><input type="number" value={form.weight} onChange={(e) => setForm({ ...form, weight: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 text-sm outline-none focus:ring-2 focus:ring-primary-500/30" placeholder="68" /></div>
          <div><label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5">Height (cm) *</label><input type="number" value={form.height} onChange={(e) => setForm({ ...form, height: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 text-sm outline-none focus:ring-2 focus:ring-primary-500/30" placeholder="170" /></div>
        </div>
        <AllergyInput selected={form.allergies} onChange={(a) => setForm({ ...form, allergies: a })} />
        <Button type="submit" loading={loading} icon={Sparkles} size="lg">
          Generate Meal Plan
        </Button>
      </motion.form>

      {loading && <Loader text="Generating your personalized diet plan..." />}

      {/* Results */}
      {dietPlan && !loading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <RestrictedFoods foods={dietPlan.restricted} />
            <RecommendedFoods foods={dietPlan.recommended} />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {['breakfast', 'lunch', 'dinner', 'snacks'].map((meal) => (
              <MealPlanCard key={meal} mealType={meal} foods={dietPlan.mealPlan[meal]} />
            ))}
          </div>
          <NutritionChart foods={dietPlan.recommended} />
        </motion.div>
      )}
    </div>
  );
};

export default DieticianPage;
