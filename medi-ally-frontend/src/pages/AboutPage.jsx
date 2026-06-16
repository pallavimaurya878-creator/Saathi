import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Brain, Users, Zap, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const team = [
  { name: 'AI Engine', role: 'Medical Analysis', emoji: '🧠' },
  { name: 'Diet Module', role: 'Nutrition Planning', emoji: '🥗' },
  { name: 'SOS System', role: 'Emergency Response', emoji: '🚨' },
  { name: 'Chat Assistant', role: '24/7 Health Support', emoji: '💬' },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-surface-50 to-primary-50 dark:from-surface-900 dark:to-surface-800">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6">
              <Heart size={14} fill="currentColor" /> About Medi-Ally
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-surface-900 dark:text-white mb-6">
              Revolutionizing Healthcare with <span className="text-gradient">Artificial Intelligence</span>
            </h1>
            <p className="text-lg text-surface-500 max-w-2xl mx-auto">
             Saathi is an integrated AI health ecosystem that acts as your personal 24/7 virtual doctor, making quality healthcare accessible to everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white dark:bg-surface-800">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold font-display text-surface-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-surface-600 dark:text-surface-400 mb-6 leading-relaxed">
              We believe everyone deserves access to intelligent healthcare guidance. Medi-Ally bridges the gap between patients and quality health information by leveraging AI to provide personalized, accessible, and preventive healthcare solutions.
            </p>
            <div className="space-y-3">
              {[
                { icon: Shield, text: 'Privacy-first approach — your data stays on your device' },
                { icon: Brain, text: 'AI-powered analysis for accurate health insights' },
                { icon: Globe, text: 'Accessible to anyone, anywhere, anytime' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary-900/20">
                    <item.icon size={16} className="text-primary-500" />
                  </div>
                  <span className="text-sm text-surface-700 dark:text-surface-300">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
            {team.map((member, i) => (
              <div key={i} className="bg-surface-50 dark:bg-surface-700 rounded-2xl p-5 text-center card-hover">
                <span className="text-3xl block mb-2">{member.emoji}</span>
                <p className="text-sm font-semibold text-surface-900 dark:text-white">{member.name}</p>
                <p className="text-xs text-surface-500">{member.role}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-surface-50 dark:bg-surface-900">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold font-display text-surface-900 dark:text-white mb-4">Built With Modern Tech</h2>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {['React.js', 'Tailwind CSS', 'Framer Motion', 'Recharts', 'Zustand', 'Leaflet', 'Vite', 'Zod'].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-xl bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 text-sm font-medium text-surface-700 dark:text-surface-300 shadow-soft">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-indigo-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Experience the Future of Healthcare</h2>
          <Link to="/register" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-primary-600 font-semibold shadow-lg hover:shadow-xl transition-all">
            Get Started <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
