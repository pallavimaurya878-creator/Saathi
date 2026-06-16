import { create } from 'zustand';

const useHealthStore = create((set) => ({
  dietPlan: null,
  diagnosisResult: null,
  exercisePlan: null,
  workoutStreak: 3,
  setDietPlan: (plan) => set({ dietPlan: plan }),
  setDiagnosisResult: (result) => set({ diagnosisResult: result }),
  setExercisePlan: (plan) => set({ exercisePlan: plan }),
  incrementStreak: () => set((state) => ({ workoutStreak: state.workoutStreak + 1 })),
  resetStreak: () => set({ workoutStreak: 0 }),
}));

export default useHealthStore;
