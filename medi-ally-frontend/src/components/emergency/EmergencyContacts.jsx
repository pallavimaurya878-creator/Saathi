import React, { useState } from 'react';
import { Phone, Trash2, Plus, UserPlus } from 'lucide-react';
import useEmergencyStore from '../../store/emergencyStore';
import Modal from '../common/Modal';
import Button from '../common/Button';
import Input from '../common/Input';
import Card from '../common/Card';
import toast from 'react-hot-toast';

const EmergencyContacts = () => {
  const { contacts, addContact, removeContact } = useEmergencyStore();
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', relation: '' });

  const handleAdd = () => {
    if (!form.name || !form.phone) { toast.error('Name and phone required'); return; }
    addContact(form);
    setForm({ name: '', phone: '', relation: '' });
    setShowAdd(false);
    toast.success('Contact added!');
  };

  return (
    <Card hover={false}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-surface-900 dark:text-white">Emergency Contacts</h3>
        <Button size="sm" variant="outline" icon={Plus} onClick={() => setShowAdd(true)}>Add</Button>
      </div>
      <div className="space-y-2">
        {contacts.map((contact) => (
          <div key={contact.id} className="flex items-center gap-3 p-3 rounded-xl bg-surface-50 dark:bg-surface-700/50">
            <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-sm font-bold text-primary-600">
              {contact.name[0]}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-surface-900 dark:text-white">{contact.name}</p>
              <p className="text-xs text-surface-500">{contact.relation} • {contact.phone}</p>
            </div>
            <a href={`tel:${contact.phone}`} className="p-2 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 hover:bg-green-100 transition-colors">
              <Phone size={14} />
            </a>
            <button onClick={() => { removeContact(contact.id); toast.success('Removed'); }} className="p-2 rounded-lg hover:bg-danger-50 dark:hover:bg-danger-900/20 text-danger-500 transition-colors">
              <Trash2 size={14} />
            </button>
          </div>
        ))}
        {contacts.length === 0 && <p className="text-sm text-surface-400 text-center py-4">No contacts added yet</p>}
      </div>

      <Modal isOpen={showAdd} onClose={() => setShowAdd(false)} title="Add Emergency Contact">
        <div className="space-y-4">
          <Input label="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Contact name" icon={UserPlus} />
          <Input label="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="10-digit number" icon={Phone} />
          <Input label="Relation" value={form.relation} onChange={(e) => setForm({ ...form, relation: e.target.value })} placeholder="e.g., Mother, Doctor" />
          <Button fullWidth onClick={handleAdd}>Add Contact</Button>
        </div>
      </Modal>
    </Card>
  );
};

export default EmergencyContacts;
