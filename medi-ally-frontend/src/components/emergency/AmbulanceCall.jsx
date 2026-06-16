import React from 'react';
import { Phone } from 'lucide-react';

const AmbulanceCall = () => {
  return (
    <a
      href="tel:102"
      className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-danger-500 to-red-600 text-white shadow-lg shadow-danger-500/25 hover:shadow-danger-500/40 transition-all"
    >
      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
        <Phone size={22} />
      </div>
      <div>
        <p className="text-base font-bold">Call Ambulance</p>
        <p className="text-sm text-white/80">Dial 102 for emergency medical services</p>
      </div>
    </a>
  );
};

export default AmbulanceCall;
