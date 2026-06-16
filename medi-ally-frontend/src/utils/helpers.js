// ===== Helper Functions =====

/**
 * Generate a unique ID
 */
export const generateId = () => Math.random().toString(36).substring(2, 11);

/**
 * Delay execution (for mock API calls)
 */
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Get greeting based on time of day
 */
export const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  return 'Good Evening';
};

/**
 * Format date to readable string
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

/**
 * Format time
 */
export const formatTime = (date) => {
  return new Date(date).toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

/**
 * Capitalize first letter
 */
export const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Truncate text
 */
export const truncate = (str, length = 100) => {
  if (!str || str.length <= length) return str;
  return str.substring(0, length) + '...';
};

/**
 * Get risk level badge color classes
 */
export const getRiskColor = (level) => {
  const colors = {
    low: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    high: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
    critical: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  };
  return colors[level] || colors.medium;
};

/**
 * Generate random vitals data for mock charts
 */
export const generateVitalsData = (days = 7) => {
  const data = [];
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    data.push({
      date: date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }),
      heartRate: Math.floor(Math.random() * 20) + 70,
      bloodSugar: Math.floor(Math.random() * 40) + 90,
      systolic: Math.floor(Math.random() * 20) + 110,
      diastolic: Math.floor(Math.random() * 15) + 70,
      oxygenLevel: Math.floor(Math.random() * 3) + 96,
    });
  }
  return data;
};

/**
 * Get initials from name
 */
export const getInitials = (name) => {
  if (!name) return 'U';
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
};

/**
 * Filter foods by allergens
 */
export const filterByAllergens = (foods, allergens) => {
  if (!allergens || allergens.length === 0) return foods;
  return foods.filter(
    (food) => !food.allergens.some((a) => allergens.map((al) => al.toLowerCase()).includes(a.toLowerCase()))
  );
};

/**
 * Search chatbot response by keywords
 */
export const getChatbotResponse = (message, responses) => {
  const lowerMsg = message.toLowerCase();
  for (const [keyword, response] of Object.entries(responses)) {
    if (keyword !== 'default' && lowerMsg.includes(keyword.replace('_', ' '))) {
      return response;
    }
  }
  return responses.default;
};
