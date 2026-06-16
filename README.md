# Saathi
## Execution plan 

medi-ally-frontend/
│
├── public/
│   ├── favicon.ico
│   ├── logo.svg
│   └── assets/
│       ├── images/
│       └── icons/
│
├── src/
│   │
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logo.png
│   │   │   ├── hero-banner.jpg
│   │   │   └── doctor-illustration.svg
│   │   ├── icons/
│   │   └── animations/
│   │       └── loading.json (Lottie)
│   │
│   ├── components/
│   │   │
│   │   ├── common/                    # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Toast.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── DashboardLayout.jsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── HealthOverview.jsx
│   │   │   ├── VitalsCard.jsx
│   │   │   ├── QuickActions.jsx
│   │   │   └── RecentActivity.jsx
│   │   │
│   │   ├── dietician/                 # Smart Dietician Module
│   │   │   ├── MealPlanCard.jsx
│   │   │   ├── FoodList.jsx
│   │   │   ├── AllergyInput.jsx
│   │   │   ├── RestrictedFoods.jsx
│   │   │   ├── RecommendedFoods.jsx
│   │   │   └── NutritionChart.jsx
│   │   │
│   │   ├── diagnostics/               # Medical Report Module
│   │   │   ├── ReportUploader.jsx
│   │   │   ├── ReportScanner.jsx
│   │   │   ├── ReportAnalysis.jsx
│   │   │   ├── DiagnosisResult.jsx
│   │   │   └── PrescriptionViewer.jsx
│   │   │
│   │   ├── exercise/                  # Exercise Guide Module
│   │   │   ├── ExerciseCard.jsx
│   │   │   ├── WorkoutPlan.jsx
│   │   │   ├── ExerciseTimer.jsx
│   │   │   ├── VideoTutorial.jsx
│   │   │   └── ProgressTracker.jsx
│   │   │
│   │   ├── emergency/                 # Emergency Response Module
│   │   │   ├── SOSButton.jsx
│   │   │   ├── EmergencyContacts.jsx
│   │   │   ├── HospitalLocator.jsx
│   │   │   ├── AmbulanceCall.jsx
│   │   │   └── AlertModal.jsx
│   │   │
│   │   ├── chatbot/                   # AI Health Chatbot
│   │   │   ├── ChatWindow.jsx
│   │   │   ├── ChatMessage.jsx
│   │   │   ├── ChatInput.jsx
│   │   │   └── VoiceInput.jsx
│   │   │
│   │   └── profile/
│   │       ├── UserProfile.jsx
│   │       ├── MedicalHistory.jsx
│   │       └── Settings.jsx
│   │
│   ├── pages/
│   │   ├── Landing.jsx                # Home/Landing page
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx              # Main dashboard
│   │   ├── DieticianPage.jsx
│   │   ├── DiagnosticsPage.jsx
│   │   ├── ExercisePage.jsx
│   │   ├── EmergencyPage.jsx
│   │   ├── ChatbotPage.jsx
│   │   ├── ProfilePage.jsx
│   │   ├── AboutPage.jsx
│   │   └── NotFound.jsx
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── ThemeContext.jsx
│   │   └── HealthDataContext.jsx
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useFetch.js
│   │   ├── useVoiceInput.js
│   │   ├── useGeolocation.js
│   │   ├── useEmergencyAlert.js
│   │   └── useLocalStorage.js
│   │
│   ├── services/                      # API calls
│   │   ├── api.js                     # Axios instance
│   │   ├── authService.js
│   │   ├── dieticianService.js
│   │   ├── diagnosticsService.js
│   │   ├── exerciseService.js
│   │   ├── emergencyService.js
│   │   └── chatbotService.js
│   │
│   ├── store/                         # Zustand stores
│   │   ├── userStore.js
│   │   ├── healthStore.js
│   │   └── emergencyStore.js
│   │
│   ├── utils/
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   ├── validators.js
│   │   ├── formatters.js
│   │   └── medicalCalculations.js     # BMI, BMR etc.
│   │
│   ├── data/                          # Mock data for hackathon demo
│   │   ├── diseases.json
│   │   ├── foods.json
│   │   ├── exercises.json
│   │   └── hospitals.json
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── tailwind.css
│   │   └── animations.css
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── vite-env.d.ts
│
├── .env                               # API keys (never commit!)
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js