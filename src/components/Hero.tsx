import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, Compass, Shield, Radio, MapPin } from 'lucide-react';
import heroImage from '../assets/images/kutch_moto_expedition_1792180029584.jpg';

export const Hero: React.FC = () => {
  const { setActiveTab, rides } = useApp();
  const nextRide = rides.find((r) => r.status === 'upcoming') || rides[0];

  return (
    <section className="relative overflow-hidden bg-[#0b0f14] pt-8 pb-16 sm:pt-14 sm:pb-24 w-full max-w-full">
      {/* Cinematic Moto Expedition Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={heroImage}
          alt="Bhuj Moto Club riders crossing the vast salt flats of Kutch at golden hour sunrise"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14] via-[#0b0f14]/75 to-[#0b0f14]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(234,88,12,0.14),transparent)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 w-full">
        {/* Next Ride Banner Notice */}
        {nextRide && (
          <div className="mb-6 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-orange-500/30 bg-[#141b26]/90 px-4 py-1.5 text-xs text-slate-300 backdrop-blur-md shadow-lg shadow-orange-950/20">
            <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse shrink-0" />
            <span className="font-semibold text-orange-400">Next Rollout:</span>
            <span className="truncate max-w-[200px] sm:max-w-none text-white font-medium">{nextRide.title}</span>
            <span className="text-slate-500 hidden sm:inline">·</span>
            <span className="font-mono text-slate-300 hidden sm:inline">{nextRide.date}</span>
            <span className="text-slate-500 hidden sm:inline">·</span>
            <button
              onClick={() => setActiveTab('calendar')}
              className="text-orange-400 hover:text-orange-300 underline font-semibold ml-1 cursor-pointer shrink-0"
            >
              Briefing & RSVP
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          <div className="lg:col-span-8 min-w-0 w-full">
            <h1 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] break-words">
              Throttles Wide Open Across the <span className="cycling-gradient-text">Salt & Stone of Kutch</span>
            </h1>

            <div className="mt-5 space-y-4 text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              <p>
                We are a grassroots collective of adventure tourers, desert scouts, and dual-sport riders bound by the raw rumble of single-cylinder thumps, twin engines, and the siren call of unmapped terrain. From first-gear rock crawls in Khari Nadi to 90 km/h cruising across the sun-bleached expanse of the Great Rann, we ride for the horizon, not the timeline.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm">
                Built strictly by riders, for riders. We operate with zero elitism and an uncompromising ATGATT code. Every major rollout is shadowed by our four-wheel-drive trail recovery sweep, linked by our in-house HimalayanOS mesh telemetry, ensuring that every rider who leaves the city gate returns safely to their family.
              </p>
            </div>

            {/* Action buttons (No paywall push!) */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
              <button
                onClick={() => setActiveTab('calendar')}
                className="btn-ember flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-xs sm:text-sm font-extrabold transition-all text-center cursor-pointer active:scale-98"
              >
                <span>Explore Upcoming Expeditions</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </button>

              <button
                onClick={() => setActiveTab('stories')}
                className="btn-secondary flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-xs sm:text-sm font-semibold transition-all text-center cursor-pointer"
              >
                <Compass className="h-4 w-4 text-orange-400 shrink-0" />
                <span>Read Desert Ride Chronicles</span>
              </button>
            </div>
          </div>

          {/* Key Community Card (Emotional ROI, Brotherhood, Safety) */}
          <div className="lg:col-span-4 w-full">
            <div className="rounded-2xl border border-[#233144] bg-[#121924]/95 p-5 sm:p-7 backdrop-blur-md shadow-2xl w-full">
              <div className="flex items-center justify-between border-b border-[#202d3e] pb-4">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20">
                    <Shield className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-sm sm:text-base">The BMC Rider Code</h3>
                    <p className="text-[11px] text-slate-400 font-mono">Brotherhood & Safety</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-orange-400 font-bold">100% ATGATT</span>
              </div>

              <div className="mt-5 space-y-4 text-xs text-slate-300 leading-relaxed">
                <div>
                  <h4 className="text-white font-semibold text-xs flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    Zero Riders Left Behind
                  </h4>
                  <p className="mt-1 text-slate-400 text-[11px] leading-normal">
                    Whether facing a shredded tube 60 kilometres deep in the desert or an overheating radiator on hill climbs, our road captains and 4x4 recovery truck stay until every machine is rolling.
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-semibold text-xs flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    HimalayanOS Mesh Intercom
                  </h4>
                  <p className="mt-1 text-slate-400 text-[11px] leading-normal">
                    Dead zones have no power over us. Our in-house peer-to-peer helmet audio bridges and offline GPS vectors keep the entire convoy coordinated.
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-semibold text-xs flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    All Two-Wheeled Breeds Welcome
                  </h4>
                  <p className="mt-1 text-slate-400 text-[11px] leading-normal">
                    From 200cc dual-sports to 1250cc heavy tourers and vintage twins. Respect the road, pack your armor, and you ride at our side.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#202d3e] flex items-center justify-between text-xs">
                <span className="text-slate-400">Total Kutch Terrain Covered:</span>
                <span className="font-mono font-bold text-white tabular-nums">118,400+ KM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
