import React from 'react';
import { useApp } from '../context/AppContext';
import { MapPin, Phone, QrCode, ArrowUpRight, Wrench, Shield, Coffee, Activity } from 'lucide-react';

export const PartnerNetwork: React.FC = () => {
  const { partnerPerks, openScannerModal } = useApp();

  const getIcon = (cat: string) => {
    if (cat.includes('Garage') || cat.includes('Dyno')) return Wrench;
    if (cat.includes('Armor') || cat.includes('Gear')) return Shield;
    if (cat.includes('Dhaba') || cat.includes('Pitstop')) return Coffee;
    return Activity;
  };

  return (
    <section className="bg-[#0b0f14] py-10 sm:py-16 md:py-20 border-t border-[#1c2635] w-full max-w-full overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-orange-400 uppercase">
              <span>Trusted Local Outposts</span>
              <span aria-hidden="true">·</span>
              <span>Kutch Garage Network</span>
            </div>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white break-words">
              Trusted Motorcycle Garages & Rider Pitstops
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed font-normal">
              Independently vetted motorcycle mechanics, dyno tuners, certified ATGATT armor studios, and highway staging dhabas across Bhuj where your machine receives priority trailside care.
            </p>
          </div>

          <button
            onClick={() => openScannerModal()}
            className="flex items-center justify-center gap-2 rounded-xl border border-orange-500/30 bg-[#16202c] px-4 py-2.5 text-xs font-semibold text-orange-400 hover:bg-[#1d2b3c] hover:border-orange-500/60 transition-colors shrink-0 w-full sm:w-auto cursor-pointer"
          >
            <QrCode className="h-4 w-4 text-orange-400" />
            <span>Verify Rider Pass at Counter</span>
          </button>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
          {partnerPerks.map((p) => {
            const Icon = getIcon(p.category);

            return (
              <div
                key={p.id}
                className="rounded-2xl border border-[#233144] bg-[#121924] p-5 sm:p-7 hover:border-orange-500/50 transition-all flex flex-col justify-between w-full overflow-hidden shadow-xl"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[11px] font-mono uppercase text-orange-400/90 truncate block font-semibold">
                          {p.category}
                        </span>
                        <h3 className="font-display text-base sm:text-lg font-bold text-white truncate">
                          {p.partnerName}
                        </h3>
                      </div>
                    </div>

                    <span className="text-xs font-mono font-bold text-orange-400 shrink-0 border border-orange-500/30 bg-orange-500/10 px-2.5 py-1 rounded-md">
                      {p.discount}
                    </span>
                  </div>

                  <p className="mt-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {p.description}
                  </p>

                  <div className="mt-4 sm:mt-5 space-y-1.5 text-xs text-slate-400 border-t border-[#1e2a3b] pt-3.5">
                    <div className="flex items-center gap-2 truncate">
                      <MapPin className="h-3.5 w-3.5 text-orange-400 shrink-0" />
                      <span className="truncate">{p.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                      <span className="font-mono text-slate-300">{p.contact}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#1e2a3b] flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-slate-400 truncate">
                    {p.badge}
                  </span>

                  <button
                    onClick={() => openScannerModal()}
                    className="flex items-center gap-1 text-xs font-bold text-orange-400 hover:text-orange-300 transition-colors shrink-0 cursor-pointer"
                  >
                    <span>Check-in Checkpoint</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
