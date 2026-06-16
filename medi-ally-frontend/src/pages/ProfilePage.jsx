import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Save } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import UserProfile from '../components/profile/UserProfile';
import MedicalHistory from '../components/profile/MedicalHistory';
import Settings from '../components/profile/Settings';
import { calculateBMI, getBMIInfo } from '../utils/medicalCalculations';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import toast from 'react-hot-toast';

const ProfilePage = () => {
  const { user, updateUser } = useAuth();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    age: user?.age || '',
    height: user?.height || '',
    weight: user?.weight || '',
    bloodGroup: user?.bloodGroup || '',
  });

  const bmi = calculateBMI(Number(form.weight) || user?.weight, Number(form.height) || user?.height);
  const bmiInfo = getBMIInfo(bmi);

  const handleSave = () => {
    updateUser({
      name: form.name,
      phone: form.phone,
      age: Number(form.age),
      height: Number(form.height),
      weight: Number(form.weight),
      bloodGroup: form.bloodGroup,
    });
    setEditing(false);
    toast.success('Profile updated!');
  };

  return (
    <div className="page-transition space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-surface-900 dark:text-white flex items-center gap-2">
          <User className="text-primary-500" /> My Profile
        </h1>
        <p className="text-sm text-surface-500 mt-1">Manage your health profile and settings</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <UserProfile />

          {/* Edit Form */}
          <Card hover={false}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-surface-900 dark:text-white">Edit Profile</h3>
              <button onClick={() => setEditing(!editing)} className="text-sm text-primary-500 font-medium hover:underline">
                {editing ? 'Cancel' : 'Edit'}
              </button>
            </div>
            {editing && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                <Input label="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <Input label="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                <div className="grid grid-cols-3 gap-3">
                  <Input label="Age" type="number" value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} />
                  <Input label="Height (cm)" type="number" value={form.height} onChange={(e) => setForm({ ...form, height: e.target.value })} />
                  <Input label="Weight (kg)" type="number" value={form.weight} onChange={(e) => setForm({ ...form, weight: e.target.value })} />
                </div>
                <Input label="Blood Group" value={form.bloodGroup} onChange={(e) => setForm({ ...form, bloodGroup: e.target.value })} placeholder="e.g., B+" />
                <Button onClick={handleSave} icon={Save}>Save Changes</Button>
              </motion.div>
            )}
          </Card>

          {/* BMI Calculator */}
          {bmi > 0 && (
            <Card hover={false}>
              <h3 className="text-base font-semibold text-surface-900 dark:text-white mb-3">BMI Calculator</h3>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold text-white" style={{ backgroundColor: bmiInfo.color }}>
                  {bmi}
                </div>
                <div>
                  <p className="text-lg font-semibold" style={{ color: bmiInfo.color }}>{bmiInfo.category}</p>
                  <p className="text-sm text-surface-500 mt-1">{bmiInfo.advice}</p>
                </div>
              </div>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <MedicalHistory />
          <Settings />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
