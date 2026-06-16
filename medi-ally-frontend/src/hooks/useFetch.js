import { useState, useCallback } from 'react';
import { delay } from '../utils/helpers';

/**
 * Custom hook for mock API fetching with loading/error states
 */
const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = useCallback(async (mockData, delayMs = 1500) => {
    setLoading(true);
    setError(null);
    try {
      await delay(delayMs);
      setData(mockData);
      return mockData;
    } catch (err) {
      setError(err.message || 'Something went wrong');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return { data, loading, error, fetchData, reset };
};

export default useFetch;
