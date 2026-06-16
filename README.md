# Saathi Frontend

Saathi is an AI-powered healthcare companion designed to provide users with personalized health assistance through modules such as smart diet planning, diagnostics, exercise guidance, emergency response, and conversational AI support.

## Frontend Architecture

The frontend is built using **React (Vite)** with a modular, scalable, and maintainable architecture. Components are organized by feature to support rapid development and future expansion.

## Project Structure

```text
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
│
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logo.png
│   │   │   ├── hero-banner.jpg
│   │   │   └── doctor-illustration.svg
│   │   ├── icons/
│   │   └── animations/
│   │       └── loading.json
│   │
│   ├── components/
│   │
│   │   ├── common/                    # Reusable UI components
│   │   ├── layout/                    # Navigation and layouts
│   │   ├── dashboard/                 # Dashboard widgets
│   │   ├── dietician/                 # Smart Dietician Module
│   │   ├── diagnostics/               # Medical Report Analysis
│   │   ├── exercise/                  # Exercise Guidance Module
│   │   ├── emergency/                 # Emergency Response Features
│   │   ├── chatbot/                   # AI Health Chatbot
│   │   └── profile/                   # User Profile Management
│   │
│   ├── pages/                         # Application pages
│   │   ├── Landing.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── DieticianPage.jsx
│   │   ├── DiagnosticsPage.jsx
│   │   ├── ExercisePage.jsx
│   │   ├── EmergencyPage.jsx
│   │   ├── ChatbotPage.jsx
│   │   ├── ProfilePage.jsx
│   │   ├── AboutPage.jsx
│   │   └── NotFound.jsx
│   │
│   ├── context/                       # Global Context Providers
│   │   ├── AuthContext.jsx
│   │   ├── ThemeContext.jsx
│   │   └── HealthDataContext.jsx
│   │
│   ├── hooks/                         # Custom React Hooks
│   │   ├── useAuth.js
│   │   ├── useFetch.js
│   │   ├── useVoiceInput.js
│   │   ├── useGeolocation.js
│   │   ├── useEmergencyAlert.js
│   │   └── useLocalStorage.js
│   │
│   ├── services/                      # API communication layer
│   │   ├── api.js
│   │   ├── authService.js
│   │   ├── dieticianService.js
│   │   ├── diagnosticsService.js
│   │   ├── exerciseService.js
│   │   ├── emergencyService.js
│   │   └── chatbotService.js
│   │
│   ├── store/                         # Zustand state management
│   │   ├── userStore.js
│   │   ├── healthStore.js
│   │   └── emergencyStore.js
│   │
│   ├── utils/                         # Utility functions
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   ├── validators.js
│   │   ├── formatters.js
│   │   └── medicalCalculations.js
│   │
│   ├── data/                          # Mock data for demos
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
├── .env
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Core Modules

### Dashboard

* Health overview and vital statistics
* Quick actions for common tasks
* Recent activity tracking

### Smart Dietician

* Personalized meal recommendations
* Allergy and dietary restriction management
* Recommended and restricted food lists
* Nutrition insights and charts

### Diagnostics

* Medical report upload and scanning
* Automated report analysis
* Diagnosis summaries
* Prescription viewing

### Exercise Guide

* Customized workout plans
* Exercise demonstrations
* Video tutorials
* Progress tracking and timers

### Emergency Assistance

* One-tap SOS functionality
* Emergency contact management
* Nearby hospital support
* Ambulance assistance and alerts

### AI Health Chatbot

* Conversational health assistance
* Voice-enabled interaction
* Context-aware messaging

### User Profile

* Personal information management
* Medical history records
* Application settings and preferences

## Technology Stack

* React
* Vite
* Tailwind CSS
* Zustand
* Axios
* React Router
* Context API
* Lottie Animations

## Getting Started

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Environment Variables

Create a `.env` file in the project root and configure the required environment variables.

```env
VITE_API_BASE_URL=
VITE_OPENAI_API_KEY=
VITE_GOOGLE_MAPS_API_KEY=
```

> **Note:** Never commit your `.env` file to version control. Use `.env.example` to document required variables.

## Development Goals

* Modular and scalable architecture
* Feature-based component organization
* Reusable UI components
* Clean separation of concerns
* Rapid prototyping for hackathons
* Production-ready extensibility

```
```
