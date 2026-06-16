import { delay } from '../utils/helpers';
import exercises from '../data/exercises.json';

/** Mock exercise service */
const exerciseService = {
  getWorkoutPlan: async ({ disease, fitnessLevel }) => {
    await delay(1500);
    const diseaseLower = disease.toLowerCase().split(' ')[0].replace(/[()]/g, '');
    let filtered = exercises.filter((ex) =>
      ex.diseaseTags.some((t) => t.toLowerCase().includes(diseaseLower))
    );

    // Filter by difficulty
    if (fitnessLevel === 'Beginner') {
      filtered = filtered.filter((ex) => ex.difficulty === 'Easy');
    } else if (fitnessLevel === 'Intermediate') {
      filtered = filtered.filter((ex) => ex.difficulty !== 'Hard');
    }

    if (filtered.length === 0) {
      filtered = exercises.filter((ex) => ex.difficulty === 'Easy').slice(0, 5);
    }

    return {
      exercises: filtered.slice(0, 8),
      totalDuration: filtered.slice(0, 8).reduce((sum, ex) => sum + parseInt(ex.duration), 0),
      totalCalories: filtered.slice(0, 8).reduce((sum, ex) => sum + ex.calories, 0),
      disease: diseaseLower,
      level: fitnessLevel,
    };
  },
};

export default exerciseService;
