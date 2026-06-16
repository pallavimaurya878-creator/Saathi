import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { useTheme } from './context/ThemeContext';

/**
 * Root App component — applies dark mode class and renders routes.
 */
function App() {
  const { isDark } = useTheme();

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-surface-50 dark:bg-surface-900 text-surface-900 dark:text-surface-50 transition-colors duration-300">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
