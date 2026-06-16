import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../components/common/ProtectedRoute';
import DashboardLayout from '../components/layout/DashboardLayout';

// Public pages
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AboutPage from '../pages/AboutPage';
import NotFound from '../pages/NotFound';

// Protected pages
import Dashboard from '../pages/Dashboard';
import DieticianPage from '../pages/DieticianPage';
import DiagnosticsPage from '../pages/DiagnosticsPage';
import ExercisePage from '../pages/ExercisePage';
import EmergencyPage from '../pages/EmergencyPage';
import ChatbotPage from '../pages/ChatbotPage';
import ProfilePage from '../pages/ProfilePage';

/**
 * Application route configuration
 * - Public routes: Landing, Login, Register, About
 * - Protected routes: All dashboard pages wrapped in DashboardLayout
 */
const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<AboutPage />} />

      {/* Protected Routes — wrapped in DashboardLayout */}
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dietician" element={<DieticianPage />} />
        <Route path="/diagnostics" element={<DiagnosticsPage />} />
        <Route path="/exercise" element={<ExercisePage />} />
        <Route path="/emergency" element={<EmergencyPage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
