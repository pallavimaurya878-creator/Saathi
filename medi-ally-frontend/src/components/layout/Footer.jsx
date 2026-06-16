import React from 'react';
import { Heart, Github, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-surface-900 text-surface-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <Heart size={16} className="text-white" fill="white" />
              </div>
              <span className="text-lg font-bold font-display text-white">Medi-Ally</span>
            </div>
            <p className="text-sm text-surface-400 max-w-md leading-relaxed">
              Your Personal AI Health Companion. Medi-Ally provides smart diet plans, medical report diagnostics, exercise guides, emergency response, and 24/7 AI health assistance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/dashboard" className="hover:text-primary-400 transition-colors">Dashboard</Link></li>
              <li><Link to="/dietician" className="hover:text-primary-400 transition-colors">Smart Dietician</Link></li>
              <li><Link to="/emergency" className="hover:text-primary-400 transition-colors">Emergency</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={14} />
                <span>support@mediAlly.health</span>
              </li>
              <li className="flex items-center gap-2">
                <Github size={14} />
                <a href="#" className="hover:text-primary-400 transition-colors">GitHub</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-surface-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-surface-500">
            © {new Date().getFullYear()} Medi-Ally. For educational purposes only. Not a substitute for professional medical advice.
          </p>
          <p className="text-xs text-surface-500 flex items-center gap-1">
            Made with <Heart size={12} className="text-danger-500" fill="currentColor" /> for better healthcare
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
