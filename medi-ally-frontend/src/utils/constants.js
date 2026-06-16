// ===== Application Constants =====

export const APP_NAME = 'Medi-Ally';
export const APP_TAGLINE = 'Your Personal Health Guardian, Always in Your Pocket';
export const APP_VERSION = '1.0.0';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

// Navigation items for sidebar
export const NAV_ITEMS = [
  { name: 'Dashboard', path: '/dashboard', icon: 'LayoutDashboard' },
  { name: 'Smart Dietician', path: '/dietician', icon: 'Salad' },
  { name: 'Diagnostics', path: '/diagnostics', icon: 'FileSearch' },
  { name: 'Exercise Guide', path: '/exercise', icon: 'Dumbbell' },
  { name: 'Emergency', path: '/emergency', icon: 'Siren' },
  { name: 'AI Chatbot', path: '/chatbot', icon: 'MessageCircle' },
  { name: 'Profile', path: '/profile', icon: 'User' },
];

// Quick actions on dashboard
export const QUICK_ACTIONS = [
  { name: 'Upload Report', icon: 'Upload', path: '/diagnostics', color: 'primary' },
  { name: 'Get Diet Plan', icon: 'Salad', path: '/dietician', color: 'secondary' },
  { name: 'Start Workout', icon: 'Dumbbell', path: '/exercise', color: 'purple' },
  { name: 'SOS', icon: 'Siren', path: '/emergency', color: 'danger' },
];

// Allergen options
export const ALLERGENS = [
  'Dairy', 'Gluten', 'Nuts', 'Eggs', 'Fish', 'Soy', 'Shellfish', 'Wheat',
];

// Dietary preferences
export const DIET_PREFERENCES = [
  'Vegetarian', 'Non-Vegetarian', 'Vegan', 'Eggetarian', 'Pescatarian',
];

// Fitness levels
export const FITNESS_LEVELS = ['Beginner', 'Intermediate', 'Advanced'];

// Vital normal ranges
export const VITAL_RANGES = {
  bloodPressure: { min: '90/60', max: '120/80', unit: 'mmHg' },
  heartRate: { min: 60, max: 100, unit: 'bpm' },
  bloodSugar: { min: 70, max: 140, unit: 'mg/dL' },
  bmi: { min: 18.5, max: 24.9, unit: 'kg/m²' },
  temperature: { min: 97, max: 99, unit: '°F' },
  oxygenLevel: { min: 95, max: 100, unit: '%' },
};

// Risk level colors
export const RISK_COLORS = {
  low: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-700 dark:text-green-400', border: 'border-green-300' },
  medium: { bg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-700 dark:text-yellow-400', border: 'border-yellow-300' },
  high: { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-700 dark:text-orange-400', border: 'border-orange-300' },
  critical: { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-700 dark:text-red-400', border: 'border-red-300' },
};

// Chatbot keyword responses
export const CHATBOT_RESPONSES = {
  fever: "Fever can be caused by infections, inflammation, or other conditions. Rest, stay hydrated, and take paracetamol if temperature exceeds 100.4°F. If fever persists beyond 3 days or exceeds 103°F, please consult a doctor immediately.",
  headache: "Headaches can result from stress, dehydration, or eye strain. Try resting in a dark room, staying hydrated, and taking OTC pain relief. Persistent or severe headaches need medical evaluation.",
  diabetes: "Diabetes management involves monitoring blood sugar, following a balanced diet low in refined carbs, regular exercise, and taking prescribed medication. Would you like a personalized diet plan?",
  cold: "For common cold: rest well, drink warm fluids, use steam inhalation, and take vitamin C. Symptoms usually resolve in 7-10 days. See a doctor if symptoms worsen.",
  cough: "A cough can be dry or productive. Try warm water with honey, steam inhalation, and avoid cold drinks. If cough persists beyond 2 weeks or has blood, consult a doctor.",
  stomach: "Stomach issues may include acidity, bloating, or pain. Eat light meals, avoid spicy/oily food, and try ginger tea. If pain is severe or persistent, seek medical attention.",
  anxiety: "For anxiety management: practice deep breathing (4-7-8 technique), regular exercise, limit caffeine, and maintain a sleep schedule. Consider speaking with a mental health professional.",
  sleep: "Good sleep hygiene includes: consistent sleep schedule, dark cool room, no screens 1hr before bed, and avoiding caffeine after 2pm. Adults need 7-9 hours.",
  diet: "I can help with personalized diet plans! Navigate to the Smart Dietician page to get disease-specific meal recommendations based on your health profile.",
  exercise: "Regular exercise is crucial for health. Visit our Exercise Guide for personalized workout plans based on your condition and fitness level.",
  emergency: "If this is a medical emergency, please call 102/108 immediately or press the SOS button on the Emergency page. Don't wait!",
  blood_pressure: "Normal BP is around 120/80 mmHg. High BP (hypertension) is above 140/90. Monitor regularly, reduce sodium, exercise, and take prescribed medications.",
  default: "I understand your concern. While I can provide general health information, please consult a qualified healthcare professional for specific medical advice. How else can I help you?"
};
