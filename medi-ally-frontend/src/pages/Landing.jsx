import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Heart, Salad, FileSearch, Dumbbell, Siren, MessageCircle,
  ArrowRight, Shield, Zap, Users, ChevronRight, Star, Brain, Activity
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const features = [
  { icon: Salad, title: 'Smart Dietician', desc: 'AI-powered diet plans based on your health condition, allergies, and preferences.', color: 'from-green-500 to-emerald-600' },
  { icon: FileSearch, title: 'Medical Diagnostics', desc: 'Upload blood reports or X-rays and get instant AI-powered analysis.', color: 'from-blue-500 to-cyan-600' },
  { icon: Dumbbell, title: 'Exercise Guide', desc: 'Disease-specific workouts tailored to your fitness level.', color: 'from-purple-500 to-indigo-600' },
  { icon: Siren, title: 'Emergency SOS', desc: 'One-tap emergency alerts with location sharing and hospital locator.', color: 'from-red-500 to-rose-600' },
  { icon: MessageCircle, title: 'AI Health Chatbot', desc: '24/7 AI-powered health assistant for instant medical guidance.', color: 'from-orange-500 to-amber-600' },
  { icon: Activity, title: 'Health Tracker', desc: 'Monitor vitals, track trends, and stay on top of your health.', color: 'from-teal-500 to-cyan-600' },
];

const steps = [
  { num: '01', title: 'Input Your Data', desc: 'Share your health condition, symptoms, or upload medical reports.', icon: '📋' },
  { num: '02', title: 'AI Processes', desc: 'Our AI analyzes your data using advanced medical algorithms.', icon: '🧠' },
  { num: '03', title: 'Get Actionable Results', desc: 'Receive personalized diet plans, exercise guides, or diagnosis reports.', icon: '✨' },
];

const impacts = [
  { icon: Brain, title: 'Personalization', desc: 'Every recommendation is tailored to your unique health profile.' },
  { icon: Users, title: 'Accessibility', desc: 'Healthcare guidance available 24/7, right in your pocket.' },
  { icon: Shield, title: 'Preventive Care', desc: 'Early detection and proactive health management.' },
];

const testimonials = [
  { name: 'Priya S.', role: 'Diabetes Patient', text: 'Saathi helped me manage my diet effectively. My sugar levels are under control now!', rating: 5 },
  { name: 'Rahul M.', role: 'Fitness Enthusiast', text: 'The exercise recommendations are spot-on for my condition. Love the timer feature!', rating: 5 },
  { name: 'Dr. Anjali K.', role: 'General Physician', text: 'A great tool for patient education. The report analysis feature is impressive.', rating: 4 },
];

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden gradient-hero">
        {/* Animated bg elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/10 text-white/80 text-sm mb-6">
                <Zap size={14} className="text-yellow-400" />
                AI-Powered Health Companion
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
                Your Personal{' '}
                <span className="bg-gradient-to-r from-secondary-400 to-cyan-400 bg-clip-text text-transparent">
                  Health Guardian
                </span>
                , Always in Your Pocket
              </h1>
              <p className="text-lg text-white/70 mb-8 max-w-lg">
                Medi-Ally is your 24/7 virtual doctor — providing smart diet plans, medical diagnostics, exercise guidance, and emergency response powered by AI.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-secondary-500 to-secondary-600 text-white shadow-lg shadow-secondary-500/30 hover:shadow-secondary-500/50 transition-all"
                >
                  Get Started Free <ArrowRight size={18} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur transition-all"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              {/* Glassmorphic dashboard preview */}
              <div className="glass rounded-3xl p-6 shadow-glass">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: 'Heart Rate', value: '78 bpm', color: 'text-red-400', icon: '❤️' },
                    { label: 'Blood Sugar', value: '105 mg/dL', color: 'text-blue-400', icon: '💧' },
                    { label: 'SpO₂', value: '98%', color: 'text-green-400', icon: '🫁' },
                    { label: 'BMI', value: '22.5', color: 'text-purple-400', icon: '⚖️' },
                  ].map((v, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.15 }}
                      className="bg-white/10 backdrop-blur rounded-xl p-3"
                    >
                      <span className="text-lg">{v.icon}</span>
                      <p className={`text-xl font-bold ${v.color} mt-1`}>{v.value}</p>
                      <p className="text-[11px] text-white/50">{v.label}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="bg-white/5 rounded-xl p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary-500/30 flex items-center justify-center">
                    <Heart size={14} className="text-secondary-400" fill="currentColor" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-white/70">AI Health Score</p>
                    <div className="w-full h-2 rounded-full bg-white/10 mt-1 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="h-full bg-gradient-to-r from-secondary-400 to-cyan-400 rounded-full"
                      />
                    </div>
                  </div>
                  <span className="text-sm font-bold text-secondary-400">85%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-surface-50 dark:bg-surface-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-surface-900 dark:text-white mb-4">
              Everything You Need for{' '}
              <span className="text-gradient">Better Health</span>
            </h2>
            <p className="text-surface-500 max-w-2xl mx-auto">
              Six powerful AI-driven modules designed to be your complete health ecosystem.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white dark:bg-surface-800 rounded-2xl p-6 border border-surface-100 dark:border-surface-700 shadow-soft card-hover"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <feature.icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-surface-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-surface-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white dark:bg-surface-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-surface-900 dark:text-white mb-4">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="text-surface-500">Three simple steps to better health management</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center relative"
              >
                <div className="text-5xl mb-4">{step.icon}</div>
                <span className="text-xs font-bold text-primary-500 uppercase tracking-widest">Step {step.num}</span>
                <h3 className="text-lg font-semibold text-surface-900 dark:text-white mt-2 mb-2">{step.title}</h3>
                <p className="text-sm text-surface-500">{step.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 right-0 translate-x-1/2">
                    <ChevronRight size={24} className="text-surface-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-gradient-to-br from-primary-500 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">Our Impact</h2>
            <p className="text-white/70 max-w-xl mx-auto">Transforming healthcare through AI-driven personalization</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {impacts.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="text-center">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface-50 dark:bg-surface-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-surface-900 dark:text-white mb-4">
              What People <span className="text-gradient">Say</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-white dark:bg-surface-800 rounded-2xl p-6 border border-surface-100 dark:border-surface-700 shadow-soft">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-surface-600 dark:text-surface-400 mb-4 italic">"{t.text}"</p>
                <div>
                  <p className="text-sm font-semibold text-surface-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-surface-500">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white dark:bg-surface-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-surface-900 dark:text-white mb-4">
              Ready to Take Control of Your Health?
            </h2>
            <p className="text-surface-500 mb-8">Join thousands who trust Medi-Ally for their daily health management.</p>
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transition-all"
            >
              Start Your Health Journey <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
