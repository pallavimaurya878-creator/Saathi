import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check localStorage for existing session
    const savedUser = localStorage.getItem('mediAlly-user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        localStorage.removeItem('mediAlly-user');
      }
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    const userObj = {
      id: userData.id || '1',
      name: userData.name || 'User',
      email: userData.email,
      avatar: userData.avatar || null,
      phone: userData.phone || '',
      age: userData.age || null,
      height: userData.height || null,
      weight: userData.weight || null,
      bloodGroup: userData.bloodGroup || '',
      allergies: userData.allergies || [],
      medicalHistory: userData.medicalHistory || [],
    };
    setUser(userObj);
    localStorage.setItem('mediAlly-user', JSON.stringify(userObj));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mediAlly-user');
  };

  const updateUser = (updates) => {
    const updated = { ...user, ...updates };
    setUser(updated);
    localStorage.setItem('mediAlly-user', JSON.stringify(updated));
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, updateUser, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
