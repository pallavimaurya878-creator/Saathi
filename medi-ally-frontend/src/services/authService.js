import { delay } from '../utils/helpers';

/** Mock authentication service */
const authService = {
  login: async (email, password) => {
    await delay(1200);
    if (!email || !password) throw new Error('Email and password are required');
    return {
      id: '1',
      name: email.split('@')[0].replace(/[._]/g, ' '),
      email,
      phone: '9876543210',
      age: 28,
      height: 170,
      weight: 68,
      bloodGroup: 'B+',
      allergies: [],
      medicalHistory: ['Mild asthma'],
    };
  },

  register: async (data) => {
    await delay(1500);
    if (!data.email || !data.password) throw new Error('All fields required');
    return {
      id: Date.now().toString(),
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      age: null,
      height: null,
      weight: null,
      bloodGroup: '',
      allergies: [],
      medicalHistory: [],
    };
  },

  logout: async () => {
    await delay(500);
    return { success: true };
  },
};

export default authService;
