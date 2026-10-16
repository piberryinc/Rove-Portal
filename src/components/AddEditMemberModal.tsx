import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Member, BikeCategory, MembershipStatus } from '../types';
import { X, UserPlus, Save } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  memberToEdit?: Member | null;
}

export const AddEditMemberModal: React.FC<Props> = ({ isOpen, onClose, memberToEdit }) => {
  const { addMember, updateMember } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bikeModel, setBikeModel] = useState('');
  const [bikeCategory, setBikeCategory] = useState<BikeCategory>('Adventure (ADV)');
  const [bloodGroup, setBloodGroup] = useState('B+');
  const [area, setArea] = useState('College Road, Bhuj');
  const [membershipStatus, setMembershipStatus] = useState<MembershipStatus>('active');
  const [emergencyName, setEmergencyName] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');
  const [emergencyRelation, setEmergencyRelation] = useState('Family');

  useEffect(() => {
    if (memberToEdit) {
      setName(memberToEdit.name);
      setEmail(memberToEdit.email);
      setPhone(memberToEdit.phone);
      setBikeModel(memberToEdit.bikeModel);
      setBikeCategory(memberToEdit.bikeCategory);
      setBloodGroup(memberToEdit.bloodGroup);
      setArea(memberToEdit.area);
      setMembershipStatus(memberToEdit.membershipStatus);
      setEmergencyName(memberToEdit.emergencyContact.name);
      setEmergencyPhone(memberToEdit.emergencyContact.phone);
      setEmergencyRelation(memberToEdit.emergencyContact.relation);
    } else {
      setName('');
      setEmail('');
      setPhone('+91 ');
      setBikeModel('');
      setBikeCategory('Adventure (ADV)');
      setBloodGroup('B+');
      setArea('Jubilee Ground, Bhuj');
      setMembershipStatus('active');
      setEmergencyName('');
      setEmergencyPhone('+91 ');
      setEmergencyRelation('Family');
    }
  }, [memberToEdit, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    if (memberToEdit) {
      updateMember(memberToEdit.id, {
        name,
        email,
        phone,
        bikeModel,
        bikeCategory,
        bloodGroup,
        area,
        membershipStatus,
        emergencyContact: {
          name: emergencyName || 'Emergency Contact',
          phone: emergencyPhone || phone,
          relation: emergencyRelation || 'Family'
        }
      });
    } else {
      addMember({
        name,
        email: email || `${name.toLowerCase().replace(/\s+/g, '.')}@bhujmotoclub.org`,
        phone,
        bikeModel: bikeModel || 'Royal Enfield Himalayan 450',
        bikeCategory,
        bloodGroup,
        area,
        emergencyContact: {
          name: emergencyName || 'Emergency Contact',
          phone: emergencyPhone || phone,
          relation: emergencyRelation || 'Family'
        }
      });
    }

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
              {memberToEdit ? 'Edit Rider Information' : 'Induct Rider to BMC Roster'}
            </h3>
            <p className="text-xs text-orange-400 font-mono font-semibold truncate">
              Lead Scouts & Road Captains Management
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
                placeholder="Rider name"
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
                placeholder="+91 98000 XXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl border border-[#233144] bg-[#0b0f14] px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500/80 transition-colors font-mono"
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
                placeholder="e.g. BMW F 850 GS"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Blood Group (ICE)
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

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Roster Status
              </label>
              <select
                value={membershipStatus}
                onChange={(e) => setMembershipStatus(e.target.value as MembershipStatus)}
                className="w-full rounded-xl border border-[#233144] bg-[#0b0f14] px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500/80 transition-colors cursor-pointer"
              >
                <option value="active">Active Verified</option>
                <option value="expiring_soon">Expiring Soon</option>
                <option value="expired">Renewal Due</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>
          </div>

          <div className="pt-2 border-t border-[#1e2a3b]">
            <span className="block text-[11px] font-mono text-orange-400 font-bold uppercase mb-2">
              Emergency ICE Contact
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Contact Name"
                value={emergencyName}
                onChange={(e) => setEmergencyName(e.target.value)}
                className="w-full rounded-xl border border-[#233144] bg-[#0b0f14] px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500/80 transition-colors"
              />
              <input
                type="tel"
                placeholder="Contact Phone"
                value={emergencyPhone}
                onChange={(e) => setEmergencyPhone(e.target.value)}
                className="w-full rounded-xl border border-[#233144] bg-[#0b0f14] px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500/80 transition-colors font-mono"
              />
            </div>
          </div>

          <div className="pt-3 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-[#273548] bg-[#141b26] text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-ember px-5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <Save className="h-4 w-4" />
              <span>{memberToEdit ? 'Save Changes' : 'Induct to Roster'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
