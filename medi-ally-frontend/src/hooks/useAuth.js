import { useAuth as useAuthContext } from '../context/AuthContext';

/**
 * Custom hook wrapper for auth context
 */
const useAuth = () => {
  return useAuthContext();
};

export default useAuth;
