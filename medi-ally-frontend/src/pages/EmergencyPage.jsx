import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Siren } from 'lucide-react';
import SOSButton from '../components/emergency/SOSButton';
import EmergencyContacts from '../components/emergency/EmergencyContacts';
import HospitalLocator from '../components/emergency/HospitalLocator';
import AmbulanceCall from '../components/emergency/AmbulanceCall';
import AlertModal from '../components/emergency/AlertModal';
import useEmergencyAlert from '../hooks/useEmergencyAlert';

const EmergencyPage = () => {
  const { countdown, alertSent, startSOS, cancelSOS } = useEmergencyAlert();
  const [showAlert, setShowAlert] = useState(false);

  const handleSOS = () => {
    startSOS();
    setTimeout(() => setShowAlert(true), 5500);
  };

  return (
    <div className="page-transition space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-surface-900 dark:text-white flex items-center gap-2">
          <Siren className="text-danger-500" /> Emergency Response
        </h1>
        <p className="text-sm text-surface-500 mt-1">Quick access to emergency services and contacts</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left column */}
        <div className="space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-surface-800 rounded-2xl border border-surface-100 dark:border-surface-700 p-8 shadow-soft flex flex-col items-center"
          >
            <SOSButton onPress={handleSOS} countdown={countdown} />
            {countdown !== null && (
              <button onClick={cancelSOS} className="mt-4 text-sm text-surface-500 hover:text-danger-500 transition-colors">
                Cancel SOS
              </button>
            )}
          </motion.div>
          <AmbulanceCall />
          <EmergencyContacts />
        </div>

        {/* Right column - map */}
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h3 className="text-base font-semibold text-surface-900 dark:text-white mb-3">Nearby Hospitals</h3>
            <HospitalLocator />
          </motion.div>
        </div>
      </div>

      <AlertModal isOpen={showAlert} onClose={() => { setShowAlert(false); cancelSOS(); }} alertSent={alertSent} />
    </div>
  );
};

export default EmergencyPage;
