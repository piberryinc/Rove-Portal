import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { X, Save, User } from 'lucide-react';
import { BikeCategory } from '../types';

export const EditProfileModal: React.FC = () => {
  const { currentMember, updateMember, isEditProfileModalOpen, closeEditProfileModal } = useApp();

  const [phone, setPhone] = useState(currentMember.phone);
  const [bikeModel, setBikeModel] = useState(currentMember.bikeModel);
  const [bikeCategory, setBikeCategory] = useState<BikeCategory>(currentMember.bikeCategory);
  const [bloodGroup, setBloodGroup] = useState(currentMember.bloodGroup);
  const [area, setArea] = useState(currentMember.area);
  const [emergencyName, setEmergencyName] = useState(currentMember.emergencyContact.name);
  const [emergencyPhone, setEmergencyPhone] = useState(currentMember.emergencyContact.phone);
  const [emergencyRelation, setEmergencyRelation] = useState(currentMember.emergencyContact.relation);

  useEffect(() => {
    if (currentMember) {
      setPhone(currentMember.phone);
      setBikeModel(currentMember.bikeModel);
      setBikeCategory(currentMember.bikeCategory);
      setBloodGroup(currentMember.bloodGroup);
      setArea(currentMember.area);
      setEmergencyName(currentMember.emergencyContact.name);
      setEmergencyPhone(currentMember.emergencyContact.phone);
      setEmergencyRelation(currentMember.emergencyContact.relation);
    }
  }, [currentMember, isEditProfileModalOpen]);

  if (!isEditProfileModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateMember(currentMember.id, {
      phone,
      bikeModel,
      bikeCategory,
      bloodGroup,
      area,
      emergencyContact: {
        name: emergencyName,
        phone: emergencyPhone,
        relation: emergencyRelation
      }
    });
    closeEditProfileModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-2.5 sm:p-4 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg rounded-2xl border border-[#233144] bg-[#121924] p-5 sm:p-7 shadow-2xl my-auto max-h-[90vh] overflow-y-auto">
        <button
          onClick={closeEditProfileModal}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 cursor-pointer transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/20 border border-orange-500/40 text-orange-400 shrink-0">
            <User className="h-5 w-5" />
          </div>
          <div className="min-w-0 pr-8">
            <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-white truncate">
              Update Rider Dossier
            </h3>
            <p className="text-xs text-orange-400 font-mono font-semibold truncate">
              {currentMember.name} · {currentMember.id}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Contact Phone
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl border border-[#233144] bg-[#0b0f14] px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500/80 transition-colors font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Area in Bhuj / Kutch
              </label>
              <input
                type="text"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full rounded-xl border border-[#233144] bg-[#0b0f14] px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500/80 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Motorcycle Make & Model
              </label>
              <input
                type="text"
                required
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
              Blood Group (ICE Field Protocol)
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

          <div className="pt-2 border-t border-[#1e2a3b]">
            <span className="block text-[11px] font-mono text-orange-400 font-bold uppercase mb-2">
              Emergency Contact (ICE)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={emergencyName}
                  onChange={(e) => setEmergencyName(e.target.value)}
                  className="w-full rounded-xl border border-[#233144] bg-[#0b0f14] px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500/80 transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Relation"
                  value={emergencyRelation}
                  onChange={(e) => setEmergencyRelation(e.target.value)}
                  className="w-full rounded-xl border border-[#233144] bg-[#0b0f14] px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500/80 transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  value={emergencyPhone}
                  onChange={(e) => setEmergencyPhone(e.target.value)}
                  className="w-full rounded-xl border border-[#233144] bg-[#0b0f14] px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500/80 transition-colors font-mono"
                />
              </div>
            </div>
          </div>

          <div className="pt-3 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={closeEditProfileModal}
              className="px-4 py-2 rounded-xl border border-[#273548] bg-[#141b26] text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-ember px-5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <Save className="h-4 w-4" />
              <span>Save Rider Specs</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
