import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapPin, Phone, Star, Navigation } from 'lucide-react';
import useGeolocation from '../../hooks/useGeolocation';
import emergencyService from '../../services/emergencyService';
import Card from '../common/Card';
import Loader from '../common/Loader';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const HospitalLocator = () => {
  const { location } = useGeolocation();
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHospitals = async () => {
      if (location) {
        const data = await emergencyService.getNearbyHospitals(location.lat, location.lng);
        setHospitals(data);
        setLoading(false);
      }
    };
    fetchHospitals();
  }, [location]);

  if (loading) return <Loader text="Finding nearby hospitals..." />;

  const center = location || { lat: 28.6139, lng: 77.2090 };

  return (
    <div className="space-y-4">
      {/* Map */}
      <Card hover={false} padding="p-0" className="overflow-hidden h-[350px]">
        <MapContainer center={[center.lat, center.lng]} zoom={11} className="h-full w-full rounded-2xl" scrollWheelZoom={true}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; OpenStreetMap' />
          {hospitals.map((h) => (
            <Marker key={h.id} position={[h.lat, h.lng]}>
              <Popup>
                <strong>{h.name}</strong><br />
                {h.address}<br />
                <a href={`tel:${h.phone}`}>{h.phone}</a>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Card>

      {/* Hospital list */}
      <div className="space-y-2">
        {hospitals.map((h) => (
          <div key={h.id} className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-surface-800 border border-surface-100 dark:border-surface-700">
            <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center flex-shrink-0">
              <MapPin size={18} className="text-primary-500" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-surface-900 dark:text-white truncate">{h.name}</p>
              <p className="text-xs text-surface-500 truncate">{h.address}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="flex items-center gap-0.5 text-xs text-yellow-500"><Star size={10} fill="currentColor" /> {h.rating}</span>
                <span className="text-xs text-surface-400">• {h.distance}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded ${h.type === 'Government' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>{h.type}</span>
              </div>
            </div>
            <a href={`tel:${h.emergency}`} className="p-2 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600">
              <Phone size={16} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalLocator;
