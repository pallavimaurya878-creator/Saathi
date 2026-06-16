import { delay } from '../utils/helpers';
import hospitals from '../data/hospitals.json';

/** Mock emergency service */
const emergencyService = {
  getNearbyHospitals: async (lat, lng) => {
    await delay(1000);
    // Return all mock hospitals sorted by "distance" (mock)
    return hospitals.map((h, i) => ({
      ...h,
      distance: (Math.random() * 10 + 0.5).toFixed(1) + ' km',
    }));
  },

  sendSOSAlert: async (location, contacts) => {
    await delay(1500);
    return {
      success: true,
      message: `Alert sent to ${contacts.length} emergency contacts with your location`,
      timestamp: new Date().toISOString(),
    };
  },
};

export default emergencyService;
