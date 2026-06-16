# 🏥 Medi-Ally — Your Personal AI Health Companion

<div align="center">

**An Integrated AI Health Ecosystem acting as your 24/7 Virtual Doctor**

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.2-646CFF?logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwindcss)](https://tailwindcss.com/)

</div>

---

## ✨ Features

| Module | Description |
|--------|------------|
| 🥗 **Smart Dietician** | Disease-specific diet plans with allergy filtering & nutrition charts |
| 🔬 **Medical Diagnostics** | AI-powered blood report & X-ray analysis with risk assessment |
| 🏋️ **Exercise Guide** | Personalized workouts with timer & progress tracking |
| 🚨 **Emergency SOS** | One-tap emergency alerts, hospital locator with map |
| 💬 **AI Health Chatbot** | 24/7 AI assistant with voice input support |
| 📊 **Health Tracker** | Vitals monitoring with interactive charts |

## 🛠️ Tech Stack

- **Frontend:** React.js 18 + Vite 5
- **Styling:** Tailwind CSS 3.4
- **State:** Zustand + React Context
- **Routing:** React Router DOM v6
- **Animations:** Framer Motion
- **Charts:** Recharts
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **Maps:** React Leaflet
- **Notifications:** React Hot Toast
- **File Upload:** React Dropzone
- **HTTP:** Axios

## 🚀 Quick Start

### Prerequisites
- Node.js >= 18
- npm >= 9

### Installation

```bash
# Clone the repo
git clone <repo-url>
cd medi-ally-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/          # Images, icons, Lottie animations
├── components/
│   ├── common/      # Button, Input, Card, Modal, Loader, Toast, ProtectedRoute
│   ├── layout/      # Navbar, Sidebar, Footer, DashboardLayout
│   ├── dashboard/   # HealthOverview, VitalsCard, QuickActions, RecentActivity
│   ├── dietician/   # MealPlanCard, FoodList, AllergyInput, NutritionChart
│   ├── diagnostics/ # ReportUploader, ReportScanner, ReportAnalysis
│   ├── exercise/    # ExerciseCard, WorkoutPlan, ExerciseTimer, ProgressTracker
│   ├── emergency/   # SOSButton, EmergencyContacts, HospitalLocator
│   ├── chatbot/     # ChatWindow, ChatMessage, ChatInput, VoiceInput
│   └── profile/     # UserProfile, MedicalHistory, Settings
├── pages/           # All route pages
├── context/         # AuthContext, ThemeContext, HealthDataContext
├── hooks/           # Custom hooks (useAuth, useFetch, useVoiceInput, etc.)
├── services/        # API service layer (mock)
├── store/           # Zustand stores
├── utils/           # Constants, helpers, validators, formatters, medical calcs
├── data/            # Mock JSON data (diseases, foods, exercises, hospitals)
├── styles/          # Global CSS, Tailwind, animations
└── routes/          # AppRoutes.jsx
```

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary | `#2563EB` (Medical Blue) |
| Secondary | `#10B981` (Health Green) |
| Danger | `#EF4444` (Emergency Red) |
| Background | `#F8FAFC` |
| Text | `#0F172A` |
| Fonts | Inter, Outfit |
| Radius | `rounded-2xl` (1rem) |

## 🔐 Authentication

Mock authentication is implemented using React Context + localStorage. Login with any email/password combination to access the dashboard.

## 📱 Responsive Design

Fully responsive with mobile-first approach:
- Mobile: Single column layouts, collapsible sidebar
- Tablet: Two column grids
- Desktop: Full sidebar + multi-column layouts

## 🌙 Dark Mode

Toggle between light and dark themes. Preference is persisted in localStorage and respects system preference on first visit.

## ⚠️ Disclaimer

This application is for **educational and demonstration purposes only**. It does not provide real medical advice, diagnosis, or treatment. Always consult qualified healthcare professionals for medical decisions.

## 📄 License

MIT License — Built with ❤️ for better healthcare.
