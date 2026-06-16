// ===== Medical Calculations =====

/**
 * Calculate BMI (Body Mass Index)
 * @param {number} weightKg - Weight in kilograms
 * @param {number} heightCm - Height in centimeters
 * @returns {number} BMI value rounded to 1 decimal
 */
export const calculateBMI = (weightKg, heightCm) => {
  if (!weightKg || !heightCm || heightCm === 0) return 0;
  const heightM = heightCm / 100;
  return parseFloat((weightKg / (heightM * heightM)).toFixed(1));
};

/**
 * Calculate BMR (Basal Metabolic Rate) using Mifflin-St Jeor Equation
 * @param {number} weightKg
 * @param {number} heightCm
 * @param {number} age
 * @param {string} gender - 'male' or 'female'
 * @returns {number} BMR in calories/day
 */
export const calculateBMR = (weightKg, heightCm, age, gender = 'male') => {
  if (!weightKg || !heightCm || !age) return 0;
  if (gender === 'male') {
    return Math.round(10 * weightKg + 6.25 * heightCm - 5 * age + 5);
  }
  return Math.round(10 * weightKg + 6.25 * heightCm - 5 * age - 161);
};

/**
 * Calculate TDEE (Total Daily Energy Expenditure)
 * @param {number} bmr
 * @param {string} activityLevel - 'sedentary', 'light', 'moderate', 'active', 'very_active'
 * @returns {number}
 */
export const calculateTDEE = (bmr, activityLevel = 'moderate') => {
  const multipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    very_active: 1.9,
  };
  return Math.round(bmr * (multipliers[activityLevel] || 1.55));
};

/**
 * Calculate ideal weight range (Devine formula)
 * @param {number} heightCm
 * @param {string} gender
 * @returns {{ min: number, max: number }}
 */
export const calculateIdealWeight = (heightCm, gender = 'male') => {
  const heightInches = heightCm / 2.54;
  const inchesOver5Feet = Math.max(0, heightInches - 60);
  let base;
  if (gender === 'male') {
    base = 50 + 2.3 * inchesOver5Feet;
  } else {
    base = 45.5 + 2.3 * inchesOver5Feet;
  }
  return {
    min: Math.round(base * 0.9),
    max: Math.round(base * 1.1),
  };
};

/**
 * Calculate daily water intake (in liters)
 * @param {number} weightKg
 * @returns {number}
 */
export const calculateWaterIntake = (weightKg) => {
  if (!weightKg) return 0;
  return parseFloat((weightKg * 0.033).toFixed(1));
};

/**
 * Get BMI category
 * @param {number} bmi
 * @returns {{ category: string, color: string, advice: string }}
 */
export const getBMIInfo = (bmi) => {
  if (bmi < 18.5) return { category: 'Underweight', color: '#3B82F6', advice: 'Consider increasing calorie intake with nutrient-rich foods.' };
  if (bmi < 25) return { category: 'Normal', color: '#10B981', advice: 'Great! Maintain your healthy lifestyle.' };
  if (bmi < 30) return { category: 'Overweight', color: '#F59E0B', advice: 'Consider a balanced diet and regular exercise.' };
  if (bmi < 35) return { category: 'Obese (Class I)', color: '#F97316', advice: 'Consult a healthcare provider for a weight management plan.' };
  return { category: 'Obese (Class II+)', color: '#EF4444', advice: 'Please seek medical guidance for weight management.' };
};

/**
 * Estimate calories burned during exercise
 * @param {number} weightKg
 * @param {number} met - Metabolic equivalent
 * @param {number} durationMin
 * @returns {number}
 */
export const calculateCaloriesBurned = (weightKg, met, durationMin) => {
  return Math.round((met * weightKg * 3.5 * durationMin) / 200);
};
