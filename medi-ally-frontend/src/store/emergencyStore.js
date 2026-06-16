import { create } from 'zustand';

const useEmergencyStore = create((set) => ({
  contacts: [
    { id: '1', name: 'Mom', phone: '9876543210', relation: 'Mother' },
    { id: '2', name: 'Dr. Sharma', phone: '9123456789', relation: 'Doctor' },
  ],
  isSOSActive: false,
  lastAlertTime: null,
  addContact: (contact) =>
    set((state) => ({
      contacts: [...state.contacts, { id: Date.now().toString(), ...contact }],
    })),
  removeContact: (id) =>
    set((state) => ({
      contacts: state.contacts.filter((c) => c.id !== id),
    })),
  updateContact: (id, updates) =>
    set((state) => ({
      contacts: state.contacts.map((c) => (c.id === id ? { ...c, ...updates } : c)),
    })),
  triggerSOS: () =>
    set({ isSOSActive: true, lastAlertTime: new Date().toISOString() }),
  resetSOS: () => set({ isSOSActive: false }),
}));

export default useEmergencyStore;
