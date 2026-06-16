import { useState, useCallback } from 'react';
import useEmergencyStore from '../store/emergencyStore';
import toast from 'react-hot-toast';

/**
 * Custom hook for emergency alert functionality
 */
const useEmergencyAlert = () => {
  const [countdown, setCountdown] = useState(null);
  const [alertSent, setAlertSent] = useState(false);
  const { contacts, triggerSOS, resetSOS } = useEmergencyStore();

  const startSOS = useCallback(() => {
    let count = 5;
    setCountdown(count);
    const interval = setInterval(() => {
      count -= 1;
      setCountdown(count);
      if (count <= 0) {
        clearInterval(interval);
        triggerSOS();
        setAlertSent(true);
        setCountdown(null);
        toast.success(`Emergency alert sent to ${contacts.length} contacts!`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [contacts, triggerSOS]);

  const cancelSOS = useCallback(() => {
    setCountdown(null);
    setAlertSent(false);
    resetSOS();
    toast('SOS cancelled', { icon: '✋' });
  }, [resetSOS]);

  return { countdown, alertSent, startSOS, cancelSOS };
};

export default useEmergencyAlert;
