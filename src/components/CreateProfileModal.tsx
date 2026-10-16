import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BikeCategory } from '../types';
import { X, UserPlus, Compass } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateProfileModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { addMember, setCurrentMemberId, setUserRole, showNotification } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('+91 ');
  const [bikeModel, setBikeModel] = useState('');
  const [bikeCategory, setBikeCategory] = useState<BikeCategory>('Adventure (ADV)');
  const [bloodGroup, setBloodGroup] = useState('B+');
  const [area, setArea] = useState('Jubilee Ground, Bhuj');
  const [bio, setBio] = useState('');
  const [emergencyName, setEmergencyName] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('+91 ');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      showNotification('Please enter rider full name', 'warning');
      return;
    }

    const created = addMember({
      name,
      email: email || `${name.toLowerCase().replace(/\s+/g, '.')}@bhujmotoclub.org`,
      phone,
      bikeModel: bikeModel || 'Royal Enfield Himalayan 450',
      bikeCategory,
      bloodGroup,
      area,
      bio: bio || 'Adventure motorcyclist exploring Kutch and beyond.',
      emergencyContact: {
        name: emergencyName || 'Emergency Contact',
        phone: emergencyPhone || phone,
        relation: 'Family'
      }
    });

    setCurrentMemberId(created.id);
    setUserRole('member');
    showNotification(`Rider dossier created for ${created.name}! Your scannable pass is active.`, 'success');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-2.5 sm:p-4 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg rounded-2xl border border-[#233144] bg-[#121924] p-5 sm:p-7 shadow-2xl my-auto max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 cursor-pointer transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/20 border border-orange-500/40 text-orange-400 shrink-0">
            <UserPlus className="h-5 w-5" />
          </div>
          <div className="min-w-0 pr-8">
            <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-white truncate">
              Induct New Rider
            </h3>
            <p className="text-xs text-orange-400 font-mono font-semibold truncate">
              Build your rider profile, machine specs & digital pass
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Rider Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Hardik Solanki"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-[#233144] bg-[#0b0f14] px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500/80 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 98251 XXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl border border-[#233144] bg-[#0b0f14] px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500/80 transition-colors font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="rider@kutch.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-[#233144] bg-[#0b0f14] px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500/80 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Blood Group (Crucial for ICE)
              </label>
              <select
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                className="w-full rounded-xl border border-[#233144] bg-[#0b0f14] px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500/80 transition-colors font-mono cursor-pointer"
              >
                {['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'].map((bg) => (
                  <option key={bg} value={bg}>{bg}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Motorcycle Make & Model
              </label>
              <input
                type="text"
                placeholder="e.g. KTM 390 Adventure"
                value={bikeModel}
                onChange={(e) => setBikeModel(e.target.value)}
                className="w-full rounded-xl border border-[#233144] bg-[#0b0f14] px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500/80 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Motorcycle Category
              </label>
              <select
                value={bikeCategory}
                onChange={(e) => setBikeCategory(e.target.value as BikeCategory)}
                className="w-full rounded-xl border border-[#233144] bg-[#0b0f14] px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500/80 transition-colors cursor-pointer"
              >
                <option value="Adventure (ADV)">Adventure (ADV)</option>
                <option value="Tourer & Cruiser">Tourer & Cruiser</option>
                <option value="Dual-Sport & Enduro">Dual-Sport & Enduro</option>
                <option value="Scrambler & Classic">Scrambler & Classic</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Rider Bio / Terrain Interests
            </label>
            <textarea
              rows={2}
              placeholder="Tell fellow riders about your touring experience, favorite trails, or upcoming rally goals..."
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full rounded-xl border border-[#233144] bg-[#0b0f14] px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500/80 transition-colors resize-none"
            />
          </div>

          <div className="pt-2 border-t border-[#1e2a3b]">
            <span className="block text-[11px] font-mono text-orange-400 font-bold uppercase mb-2">
              Field ICE Emergency Contact
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Contact Name & Relation"
                value={emergencyName}
                onChange={(e) => setEmergencyName(e.target.value)}
                className="w-full rounded-xl border border-[#233144] bg-[#0b0f14] px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500/80 transition-colors"
              />
              <input
                type="tel"
                placeholder="Emergency Phone Number"
                value={emergencyPhone}
                onChange={(e) => setEmergencyPhone(e.target.value)}
                className="w-full rounded-xl border border-[#233144] bg-[#0b0f14] px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500/80 transition-colors font-mono"
              />
            </div>
          </div>

          <div className="pt-3">
            <button
              type="submit"
              className="w-full btn-ember py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Induct Rider & Issue Pass</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
