import React from 'react';
import { useApp } from '../context/AppContext';
import { User, QrCode, Compass, Shield, Menu, X, Radio } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { userRole, setUserRole, activeTab, setActiveTab, openCheckoutModal, openScannerModal, currentMember } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'calendar', label: 'Expeditions & Maps' },
    { id: 'stories', label: 'Ride Stories' },
    { id: 'tech-gear', label: 'Tech & ATGATT' },
    { id: 'membership', label: 'Membership' },
    { id: 'partners', label: 'Trusted Garages' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full max-w-full border-b border-[#1c2635] bg-[#0b0f14]/95 backdrop-blur-md overflow-x-hidden">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8 w-full">
        {/* Zone 1: Striking Custom Motorcycle Insignia & Club Name */}
        <div className="flex items-center gap-3 min-w-0 shrink">
          <button
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 text-left focus:outline-none group min-w-0 cursor-pointer"
          >
            {/* Custom Motorcycling Insignia Crest */}
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#241a12] via-[#161f2c] to-[#0c121a] border border-orange-500/40 text-orange-400 group-hover:border-orange-500 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-orange-400 group-hover:rotate-12 transition-transform duration-300"
              >
                {/* Piston & Compass Rose Motorcycling Crest */}
                <circle cx="12" cy="12" r="9" strokeOpacity="0.4" strokeDasharray="2 3" />
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3" strokeOpacity="0.6" />
                <path d="M8 8l8 8M16 8l-8 8" strokeWidth="1.2" strokeOpacity="0.3" />
                <circle cx="12" cy="12" r="3.5" fill="currentColor" fillOpacity="0.15" />
                <path d="M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" />
              </svg>
              <div className="absolute -bottom-1 -right-1 text-[8px] font-mono font-black bg-orange-600 text-black px-1 rounded-sm leading-tight">
                BMC
              </div>
            </div>

            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-display text-base sm:text-lg md:text-xl font-black tracking-tight text-white group-hover:text-orange-300 transition-colors truncate">
                  Bhuj Moto Club
                </span>
                <span className="hidden sm:inline text-[10px] font-mono tracking-widest text-orange-500/80 font-bold uppercase">
                  EST. KUTCH
                </span>
              </div>
              <span className="text-[11px] text-slate-400 hidden xs:inline tracking-wide truncate">
                Adventure Touring & Desert Expeditions
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Navigation Links (Clean Unboxed Typography) */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={`transition-colors hover:text-white cursor-pointer ${
                activeTab === link.id
                  ? 'text-orange-400 font-semibold border-b-2 border-orange-500 pb-0.5'
                  : 'text-slate-400'
              }`}
            >
              {link.label}
            </button>
          ))}

          {/* Direct link to Member Dossier or Lead Scout Console */}
          {userRole === 'member' && (
            <button
              onClick={() => setActiveTab('member-portal')}
              className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === 'member-portal' ? 'text-orange-400 font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <User className="h-4 w-4 text-orange-400" />
              <span>Rider Dossier</span>
            </button>
          )}

          {userRole === 'admin' && (
            <button
              onClick={() => setActiveTab('admin-portal')}
              className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === 'admin-portal' ? 'text-orange-400 font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Compass className="h-4 w-4 text-orange-400" />
              <span>Lead Scout Console</span>
            </button>
          )}
        </nav>

        {/* Zone 3: Actions + Rider Role Switcher */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Quick Role Switcher (Desktop) */}
          <div className="hidden lg:flex items-center rounded-lg border border-[#202b3a] bg-[#111722] p-1 text-xs">
            <span className="px-2 text-slate-400 font-mono text-[11px]">View As:</span>
            <button
              onClick={() => setUserRole('guest')}
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer ${
                userRole === 'guest'
                  ? 'bg-[#222e3e] text-white font-medium shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Solo Rider
            </button>
            <button
              onClick={() => setUserRole('member')}
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap flex items-center gap-1 cursor-pointer ${
                userRole === 'member'
                  ? 'bg-orange-500 text-white font-bold shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <User className="h-3 w-3" />
              Club Rider
            </button>
            <button
              onClick={() => setUserRole('admin')}
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap flex items-center gap-1 cursor-pointer ${
                userRole === 'admin'
                  ? 'bg-slate-200 text-slate-900 font-bold shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Shield className="h-3 w-3" />
              Lead Scout
            </button>
          </div>

          {/* Quick Scan Card affordance */}
          <button
            onClick={() => openScannerModal()}
            title="Scan digital rider pass at checkpoint or garage"
            className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[#273548] bg-[#141b26] text-xs font-medium text-slate-200 hover:border-orange-500/50 hover:text-white transition-colors cursor-pointer"
          >
            <QrCode className="h-3.5 w-3.5 text-orange-400" />
            <span className="hidden sm:inline">Scan Pass</span>
          </button>

          {/* Primary Action Button */}
          {userRole === 'guest' ? (
            <button
              onClick={() => setActiveTab('membership')}
              className="btn-ember flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-bold transition-all whitespace-nowrap cursor-pointer"
            >
              <span>Support the Club</span>
            </button>
          ) : userRole === 'member' ? (
            <button
              onClick={() => setActiveTab('member-portal')}
              className="flex items-center gap-1.5 rounded-lg bg-[#141b26] border border-[#273548] px-3 py-1.5 text-xs font-medium text-slate-200 hover:border-orange-500/50 transition-colors whitespace-nowrap cursor-pointer"
            >
              <User className="h-3.5 w-3.5 text-orange-400" />
              <span className="truncate max-w-[100px]">{currentMember.name.split(' ')[0]}</span>
            </button>
          ) : (
            <button
              onClick={() => setActiveTab('admin-portal')}
              className="flex items-center gap-1.5 rounded-lg bg-[#141b26] border border-orange-500/50 px-3 py-1.5 text-xs font-bold text-orange-400 hover:bg-orange-500/10 transition-colors whitespace-nowrap cursor-pointer"
            >
              <Compass className="h-3.5 w-3.5" />
              <span>Scout Room</span>
            </button>
          )}

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg border border-[#273548] bg-[#141b26] text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#1c2635] bg-[#0c1118] px-4 py-5 space-y-4">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#1c2635]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  activeTab === link.id
                    ? 'bg-orange-500/20 text-orange-400 font-semibold'
                    : 'text-slate-300 hover:bg-[#141c28]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Role switcher for mobile */}
          <div>
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">Switch Viewpoint:</div>
            <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#121924] border border-[#233144] rounded-lg text-xs">
              <button
                onClick={() => {
                  setUserRole('guest');
                  setMobileMenuOpen(false);
                }}
                className={`py-1.5 text-center rounded font-medium cursor-pointer ${
                  userRole === 'guest' ? 'bg-[#222e3e] text-white font-bold' : 'text-slate-400'
                }`}
              >
                Solo Rider
              </button>
              <button
                onClick={() => {
                  setUserRole('member');
                  setMobileMenuOpen(false);
                }}
                className={`py-1.5 text-center rounded font-medium cursor-pointer ${
                  userRole === 'member' ? 'bg-orange-500 text-white font-bold' : 'text-slate-400'
                }`}
              >
                Club Rider
              </button>
              <button
                onClick={() => {
                  setUserRole('admin');
                  setMobileMenuOpen(false);
                }}
                className={`py-1.5 text-center rounded font-medium cursor-pointer ${
                  userRole === 'admin' ? 'bg-slate-200 text-slate-900 font-bold' : 'text-slate-400'
                }`}
              >
                Lead Scout
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
