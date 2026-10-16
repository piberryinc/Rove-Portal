import React from 'react';
import { Radio, ShieldAlert, Cpu, WifiOff, HardHat, Compass, Activity, Layers } from 'lucide-react';
import workshopImage from '../assets/images/moto_workshop_gear_1792180063776.jpg';

export const TechAndGearSection: React.FC = () => {
  return (
    <section className="relative bg-[#0b0f14] py-12 sm:py-18 md:py-24 border-t border-[#1c2635] w-full max-w-full overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 w-full">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-orange-400 uppercase">
            <span>Rider Ecosystem</span>
            <span aria-hidden="true">·</span>
            <span>Safety & Technology</span>
          </div>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white break-words">
            HimalayanOS & The Uncompromising ATGATT Standard
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-normal">
            Out in the vast salt flats and unmapped canyon washes of Kutch, cellular towers vanish within thirty minutes of leaving the tarmac. We don’t rely on commercial consumer apps that fail when you need them most. We engineered our own tactical communication stack and enforce a strict culture of rider protection.
          </p>
        </div>

        {/* Feature 1: HimalayanOS Tech Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl border border-[#233144] bg-[#121924] p-6 sm:p-10 shadow-2xl overflow-hidden relative">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2.5 text-orange-400">
              <Radio className="h-5 w-5" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-orange-400">In-House Tech Stack</span>
            </div>
            
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              HimalayanOS: Offline Intercom & Desert Telemetry
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Designed and programmed by motorcycle engineers within the Bhuj Moto Club, HimalayanOS is our proprietary Bluetooth low-energy mesh intercom and offline vector navigation suite. It bridges riders’ helmet headsets into a daisy-chained audio channel spanning up to four kilometres without requiring internet connection or expensive satellite gear.
            </p>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Lead scouts use HimalayanOS to broadcast road hazard callouts, sudden gravel washouts, approaching camel herds, and turn warnings straight into every rider’s earpiece in real time. The app also continuously broadcasts telemetry to our trailing 4x4 recovery truck, providing pinpoint GPS coordinates if a motorcycle stops rolling.
            </p>

            {/* Natural Feature Grid (No AI pill badges or bullets) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-xl border border-[#1e2a3b] bg-[#0c121a] p-4">
                <div className="flex items-center gap-2 text-white font-semibold text-xs mb-1">
                  <WifiOff className="h-4 w-4 text-orange-400" />
                  <span>Peer-to-Peer Mesh</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  No cell service required. Pack members relay voice audio dynamically through helmet-to-helmet hops across deep desert stretches.
                </p>
              </div>

              <div className="rounded-xl border border-[#1e2a3b] bg-[#0c121a] p-4">
                <div className="flex items-center gap-2 text-white font-semibold text-xs mb-1">
                  <Compass className="h-4 w-4 text-orange-400" />
                  <span>Topographic Salt Caches</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Pre-loaded 1:25,000 elevation contours, tidal salt boundaries, dried riverbed corridors, and historical Harappan water wells.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="rounded-xl border border-[#233144] bg-[#0a0f16] p-5 font-mono text-xs text-slate-300 space-y-3 shadow-inner">
              <div className="flex items-center justify-between border-b border-[#1c2635] pb-2 text-[11px]">
                <span className="text-orange-400 font-bold flex items-center gap-1.5">
                  <Radio className="h-3.5 w-3.5 animate-pulse" />
                  HimalayanOS Mesh Live
                </span>
                <span className="text-slate-500">Node BMC-01</span>
              </div>

              <div className="space-y-1.5 text-[11px]">
                <div className="text-slate-400">Channel Active: <strong className="text-white">Ch 04 (Great Rann Salt Outpost)</strong></div>
                <div className="text-slate-400">Convoy Strength: <strong className="text-emerald-400">18 Connected Helmets</strong></div>
                <div className="text-slate-400">Trailing Sweep 4x4: <strong className="text-white">850m Behind · Mahindra Thar</strong></div>
                <div className="text-slate-400">Ambient Temp: <strong className="text-amber-400">36.2°C · 14% Humidity</strong></div>
              </div>

              <div className="p-2.5 rounded-lg bg-[#141d28] border border-[#202d3e] text-[10px] text-slate-300 leading-relaxed">
                <span className="text-orange-400 font-bold">Lead Scout Audio: </span>
                "Scouts ahead confirming hard-packed salt on the northern bypass. Drop speed to 50 for the corrugated bridge transition. Stagger right."
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: The ATGATT Safety Creed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-[#233144] shadow-2xl">
              <img
                src={workshopImage}
                alt="Enthusiast motorcycle workshop with ATGATT armor, helmets, and Royal Enfield Himalayan 450"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0b0f14]/90 backdrop-blur-md border border-[#233144] text-xs">
                <span className="text-orange-400 font-mono font-bold uppercase tracking-wider block text-[10px]">Paddock Rule</span>
                <span className="text-white font-medium">No armor, no throttle. Gear checks take place before every kickstand lifts.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
            <div className="flex items-center gap-2 text-orange-400">
              <HardHat className="h-5 w-5" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-orange-400">Safety Constitution</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              All The Gear, All The Time (ATGATT)
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              We love the freedom of riding, but we have zero patience for reckless vanity. In Bhuj Moto Club, ATGATT is not a suggestion—it is the non-negotiable admission price to roll in our formation. Whether riding a thirty-minute sprint around Hamirsar Lake or embarking on a seven-day crossing of the Thar desert, every rider wears full certified protection.
            </p>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              We mandate certified ECE 22.06 or DOT full-face helmets, CE Level-2 back and shoulder armor in abrasion-resistant Cordura jackets, reinforced riding trousers with hip and knee guards, full-grain leather knuckle gloves, and rigid ankle-supporting touring or enduro boots.
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed italic border-l-2 border-orange-500/40 pl-3">
              We recognize that quality armor requires an investment. That is why our community maintains a shared gear locker of sanitized loaner jackets, knee guards, and gloves for young riders or newcomers, ensuring financial circumstances never compromise a rider’s life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
