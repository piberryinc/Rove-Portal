import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BikeCategory } from '../types';
import { Compass, CheckCircle2, X, CreditCard, Smartphone, ShieldCheck, Heart } from 'lucide-react';

export const CheckoutModal: React.FC = () => {
  const { isCheckoutModalOpen, closeCheckoutModal, addMember, setUserRole, showNotification } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bikeModel, setBikeModel] = useState('');
  const [bikeCategory, setBikeCategory] = useState<BikeCategory>('Adventure (ADV)');
  const [area, setArea] = useState('College Road, Bhuj');
  const [bloodGroup, setBloodGroup] = useState('B+');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isCheckoutModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      showNotification('Please provide your name and phone number', 'warning');
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      const newMember = addMember({
        name,
        email: email || `${name.toLowerCase().replace(/\s+/g, '.')}@gmail.com`,
        phone,
        bikeModel: bikeModel || 'Royal Enfield Himalayan 450',
        bikeCategory,
        area,
        bloodGroup,
        emergencyContact: {
          name: 'Family Contact',
          phone,
          relation: 'Emergency'
        }
      });

      setIsProcessing(false);
      closeCheckoutModal();
      setUserRole('member');
      showNotification(`🎉 Inducted into Bhuj Moto Club, ${newMember.name}! Thank you for fueling the recovery truck!`, 'success');
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-2.5 sm:p-4 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg rounded-2xl border border-[#233144] bg-[#121924] p-5 sm:p-7 shadow-2xl my-auto max-h-[90vh] overflow-y-auto">
        <button
          onClick={closeCheckoutModal}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 cursor-pointer transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/20 border border-orange-500/40 text-orange-400 shrink-0">
            <Compass className="h-5 w-5" />
          </div>
          <div className="min-w-0 pr-8">
            <h3 className="font-display text-lg sm:text-xl font-bold text-white truncate">
              Support Bhuj Moto Club
            </h3>
            <p className="text-xs text-orange-400 font-mono font-semibold">
              Voluntary Club Patron · ₹349 for 3 Months
            </p>
          </div>
        </div>

        {/* Philosophy Note: Not a gatekeeper */}
        <div className="mt-4 p-3.5 rounded-xl border border-orange-500/30 bg-[#0c121a] text-xs text-slate-300 leading-relaxed space-y-1">
          <div className="flex items-center gap-1.5 text-orange-400 font-bold font-mono text-[11px] uppercase">
            <Heart className="h-3.5 w-3.5 text-orange-400" />
            <span>Community Rescue Fund</span>
          </div>
          <p className="text-[11px] text-slate-400">
            You do not need to pay to ride with us. Your voluntary contribution directly funds our trailing 4x4 recovery truck, stocks emergency field trauma kits, and maintains HimalayanOS offline map servers.
          </p>
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
                placeholder="e.g. Vikramsinh Jadeja"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg bg-[#0c121a] border border-[#233144] px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                WhatsApp / Phone *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98250 XXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-lg bg-[#0c121a] border border-[#233144] px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 font-mono"
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
                placeholder="e.g. Royal Enfield Himalayan 450"
                value={bikeModel}
                onChange={(e) => setBikeModel(e.target.value)}
                className="w-full rounded-lg bg-[#0c121a] border border-[#233144] px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Motorcycle Category
              </label>
              <select
                value={bikeCategory}
                onChange={(e) => setBikeCategory(e.target.value as BikeCategory)}
                className="w-full rounded-lg bg-[#0c121a] border border-[#233144] px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500 cursor-pointer"
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
                Blood Group (For Field Card)
              </label>
              <select
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                className="w-full rounded-lg bg-[#0c121a] border border-[#233144] px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500 cursor-pointer font-mono"
              >
                {['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'].map((bg) => (
                  <option key={bg} value={bg}>{bg}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Area in Kutch
              </label>
              <input
                type="text"
                placeholder="e.g. Jubilee Ground, Bhuj"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full rounded-lg bg-[#0c121a] border border-[#233144] px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>

          {/* Payment Method Selector (Buttons, not radio pills) */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Simulated Contribution Mode (₹349)
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setPaymentMethod('upi')}
                className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                  paymentMethod === 'upi'
                    ? 'border-orange-500 bg-orange-500/15 text-orange-400 font-bold'
                    : 'border-[#233144] bg-[#0c121a] text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone className="h-3.5 w-3.5" />
                <span>UPI Fast</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                  paymentMethod === 'card'
                    ? 'border-orange-500 bg-orange-500/15 text-orange-400 font-bold'
                    : 'border-[#233144] bg-[#0c121a] text-slate-400 hover:text-white'
                }`}
              >
                <CreditCard className="h-3.5 w-3.5" />
                <span>Card</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('netbanking')}
                className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                  paymentMethod === 'netbanking'
                    ? 'border-orange-500 bg-orange-500/15 text-orange-400 font-bold'
                    : 'border-[#233144] bg-[#0c121a] text-slate-400 hover:text-white'
                }`}
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Net Banking</span>
              </button>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full btn-ember py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              {isProcessing ? (
                <span>Generating Digital Pass & Callsign...</span>
              ) : (
                <span>Complete Patron Pledge · ₹349</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
