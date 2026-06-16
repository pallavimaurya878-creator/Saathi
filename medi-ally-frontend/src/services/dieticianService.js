import { delay, filterByAllergens } from '../utils/helpers';
import foods from '../data/foods.json';
import diseases from '../data/diseases.json';

/** Mock dietician service */
const dieticianService = {
  generateMealPlan: async ({ disease, allergies, preference }) => {
    await delay(2000);
    const diseaseData = diseases.find(
      (d) => d.name.toLowerCase().includes(disease.toLowerCase())
    );
    if (!diseaseData) throw new Error('Disease not found');

    const diseaseLower = disease.toLowerCase().split(' ')[0].replace(/[()]/g, '');
    let recommended = foods.filter((f) =>
      f.tags.some((t) => t.toLowerCase().includes(diseaseLower))
    );
    recommended = filterByAllergens(recommended, allergies || []);

    // Apply preference filter
    if (preference === 'Vegetarian' || preference === 'Vegan') {
      recommended = recommended.filter((f) => f.category !== 'Protein' || f.allergens.includes(''));
    }

    const breakfast = recommended.slice(0, 3);
    const lunch = recommended.slice(3, 6);
    const dinner = recommended.slice(6, 9);
    const snacks = recommended.slice(9, 11);

    return {
      disease: diseaseData,
      recommended: recommended.slice(0, 12),
      restricted: diseaseData.restrictedFoods,
      mealPlan: { breakfast, lunch, dinner, snacks },
      totalCalories: recommended.slice(0, 9).reduce((sum, f) => sum + f.calories, 0),
    };
  },
};

export default dieticianService;
