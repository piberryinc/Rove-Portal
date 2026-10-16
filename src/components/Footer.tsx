import React from 'react';
import { useApp } from '../context/AppContext';
import { Compass, MapPin, Phone, Shield, Radio, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActiveTab, setUserRole } = useApp();

  return (
    <footer className="border-t border-[#1c2635] bg-[#070b10] text-slate-400 py-10 sm:py-14 text-xs w-full max-w-full overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 w-full space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#1c2635]">
          {/* Column 1: Brand & Soul */}
          <div className="md:col-span-5 space-y-3 min-w-0">
            <div className="flex items-center gap-2.5 text-white">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500/20 border border-orange-500/40 text-orange-400 shrink-0">
                <Compass className="h-5 w-5" />
              </div>
              <span className="font-display font-black text-lg truncate tracking-tight">
                Bhuj Moto Club (BMC)
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs font-normal">
              Gujarat’s authentic brotherhood of adventure tourers, desert scouts, and dual-sport riders. Bound by the open road, mechanical camaraderie, and an uncompromising ATGATT code. Powered by HimalayanOS mesh communications.
            </p>
            <div className="flex items-start gap-2 text-slate-300 pt-1 text-xs">
              <MapPin className="h-3.5 w-3.5 text-orange-400 shrink-0 mt-0.5" />
              <span>Hamirsar Lake West Staging Paddock, Bhuj, Kutch 370001, Gujarat</span>
            </div>
          </div>

          {/* Column 2: Navigational Compass (Clean text links, no bullets) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-white text-sm">
              Expedition Channels
            </h4>
            <div className="flex flex-col space-y-2 text-xs">
              <button
                onClick={() => setActiveTab('calendar')}
                className="text-left text-slate-400 hover:text-orange-400 transition-colors cursor-pointer"
              >
                Expedition Dispatch & Waypoints
              </button>
              <button
                onClick={() => setActiveTab('stories')}
                className="text-left text-slate-400 hover:text-orange-400 transition-colors cursor-pointer"
              >
                Desert Chronicles & Ride Stories
              </button>
              <button
                onClick={() => setActiveTab('tech-gear')}
                className="text-left text-slate-400 hover:text-orange-400 transition-colors cursor-pointer"
              >
                HimalayanOS & ATGATT Standards
              </button>
              <button
                onClick={() => setActiveTab('membership')}
                className="text-left text-slate-400 hover:text-orange-400 transition-colors cursor-pointer"
              >
                Community Support & Patronage
              </button>
              <button
                onClick={() => setActiveTab('partners')}
                className="text-left text-slate-400 hover:text-orange-400 transition-colors cursor-pointer"
              >
                Trusted Garages & Outposts
              </button>
            </div>
          </div>

          {/* Column 3: Field Ops & Brotherhood */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-white text-sm">
              Field Protocols & Rescue
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed font-normal">
              Trailing 4x4 recovery truck active on every major rollout. Emergency radio frequency: HimalayanOS Channel 04. Zero rider ever left behind in the salt pans.
            </p>
            <div className="pt-1 space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Radio className="h-3.5 w-3.5 text-orange-400 shrink-0" />
                <span>HimalayanOS Mesh: <strong className="font-mono text-white">Ch 04 Rann Tactical</strong></span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>Trail Sweep SOS Hotline: <strong className="font-mono text-white">+91 94260 11223</strong></span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <button
                onClick={() => setUserRole('admin')}
                className="text-slate-400 hover:text-orange-400 transition-colors text-[11px] font-mono flex items-center gap-1 cursor-pointer"
              >
                <Shield className="h-3 w-3 text-orange-400" />
                <span>Lead Scout Console</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Bhuj Moto Club (BMC). Built by riders, for riders.
          </div>
          <div className="flex items-center gap-3 font-mono text-[10px]">
            <span>100% ATGATT COMPLIANT</span>
            <span>·</span>
            <span>NO FINANCIAL SCHEMES</span>
            <span>·</span>
            <span>KUTCH ADVENTURE RIDERS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
