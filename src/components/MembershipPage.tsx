import React from 'react';
import { useApp } from '../context/AppContext';
import { Shield, Heart, Wrench, Radio, Compass, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import workshopImage from '../assets/images/moto_workshop_gear_1792180063776.jpg';

export const MembershipPage: React.FC = () => {
  const { openCheckoutModal, setActiveTab } = useApp();

  return (
    <div className="bg-[#0b0f14] py-10 sm:py-16 md:py-20 min-h-screen w-full max-w-full overflow-x-hidden">
      <div className="mx-auto max-w-5xl px-3 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 w-full">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-orange-400 uppercase">
            <span>Community Support & Patronage</span>
            <span aria-hidden="true">·</span>
            <span>The Open Road Ethos</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Brotherhood Comes First. Payment is Purely Optional.
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            At Bhuj Moto Club, the asphalt and the desert belong to everyone. We believe that no enthusiast should ever feel like a second-class citizen because of a subscription fee. You do not need to pay a single rupee to ride in our formation, attend our route briefings, or gather around our campfires.
          </p>
        </div>

        {/* The Free Rider Guarantee: Fluid Editorial Section */}
        <div className="rounded-2xl border border-[#233144] bg-[#121924] p-6 sm:p-10 shadow-xl space-y-6">
          <div className="flex items-center gap-3 text-orange-400">
            <Heart className="h-6 w-6 text-orange-400 shrink-0" />
            <h2 className="font-display text-2xl font-bold text-white">
              The Free Member Guarantee: Equal Respect in the Pack
            </h2>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Every weekend rollout, every dawn sweep to the White Rann, and every technical advice session in our garage network is completely open to any rider with a road-worthy motorcycle and certified safety gear. When you ride in our pack, the lead scouts watch over your line and the sweep truck protects your rear just like any other rider.
          </p>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Our brotherhood is forged through throttle control, trail discipline, and mutual respect. Whether you ride a ten-year-old single-cylinder commuter machine or a continent-crossing rally weapon, you are welcomed with open arms and a hot glass of ginger tea.
          </p>
        </div>

        {/* Why Support as a Club Patron? (Reframed Paywall) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <div className="flex items-center gap-2 text-orange-400 font-mono text-xs font-bold uppercase tracking-wider">
              <span>Voluntary Patron Pass</span>
              <span aria-hidden="true">·</span>
              <span>₹349 / 3 Months</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              Fueling the Community Infrastructure
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              Keeping a remote desert motorcycling collective safe requires real resources. Our 4x4 recovery truck burns diesel chasing our convoys. Our emergency tool kits require high-grade tyre irons and replacement tubes. Our HimalayanOS mesh nodes require server maintenance.
            </p>

            <p className="text-slate-300 text-sm leading-relaxed">
              Becoming a contributing Club Patron is a voluntary gesture of stewardship. Your ₹349 quarterly contribution does not buy you exclusive superiority over fellow riders—it directly pays for the safety net that protects the entire brotherhood when someone takes a spill in the remote salt flats.
            </p>

            <div className="pt-2">
              <button
                onClick={openCheckoutModal}
                className="btn-ember flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-xs sm:text-sm font-extrabold transition-all cursor-pointer active:scale-98"
              >
                <span>Join as a Club Patron · ₹349 / Quarter</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Emotional ROI Card (Scrubbed of financial savings) */}
          <div className="rounded-2xl border border-[#233144] bg-[#0c121a] p-6 sm:p-8 space-y-4 shadow-xl">
            <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
              <Shield className="h-5 w-5 text-orange-400" />
              <span>What Your Support Fuels</span>
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                <strong className="text-white block font-medium">The 4x4 Trail Recovery Sweep:</strong> Fueling and maintaining our recovery truck loaded with winches, ramps, and dual-sport spare tubes to rescue stranded motorcycles.
              </p>
              <p>
                <strong className="text-white block font-medium">Community Gear Locker:</strong> Purchasing clean, certified loaner body armor and gloves so rookies and students can ride ATGATT without barrier.
              </p>
              <p>
                <strong className="text-white block font-medium">HimalayanOS Development:</strong> Financing offline topographic mapping tiles, mesh intercom bug fixes, and emergency vector beacons for dead zones.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Core Perks (Equitably Redesigned - Perk 4 Reworked) */}
        <div className="space-y-8 pt-6 border-t border-[#1c2635]">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              The Four Community Pillars
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              How we organize value fairly across the entire community, without hoarding privileges or creating second-class riders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pillar 1 */}
            <div className="rounded-2xl border border-[#233144] bg-[#121924] p-6 space-y-3">
              <div className="flex items-center gap-2 text-orange-400 font-mono text-xs font-bold uppercase">
                <Users className="h-4 w-4" />
                <span>Pillar 01</span>
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                Skilled Rider Mentorship & Technical Workshops
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Open access to veteran desert navigators and master mechanics. Learn counter-steering in deep sand, emergency tube replacement under the sun, and body positioning on the switchbacks of Kalo Dungar.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="rounded-2xl border border-[#233144] bg-[#121924] p-6 space-y-3">
              <div className="flex items-center gap-2 text-orange-400 font-mono text-xs font-bold uppercase">
                <Wrench className="h-4 w-4" />
                <span>Pillar 02</span>
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                On-Trail 4x4 Sweep & Trauma Rescue Net
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                A dedicated overland support vehicle trailing every major expedition. Carries high-volume 12V air compressors, chain breakers, jump starters, splints, and field first-aid equipment to keep everyone moving.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="rounded-2xl border border-[#233144] bg-[#121924] p-6 space-y-3">
              <div className="flex items-center gap-2 text-orange-400 font-mono text-xs font-bold uppercase">
                <Radio className="h-4 w-4" />
                <span>Pillar 03</span>
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                HimalayanOS Mesh Intercom Access
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Free download of our offline Bluetooth mesh app for every registered rider. Connects your helmet audio to the convoy and provides offline topographic vector navigation when mobile internet disappears.
              </p>
            </div>

            {/* Pillar 4 (Reworked completely to spread value equitably) */}
            <div className="rounded-2xl border border-orange-500/40 bg-[#16202c] p-6 space-y-3 shadow-lg">
              <div className="flex items-center gap-2 text-orange-400 font-mono text-xs font-bold uppercase">
                <Compass className="h-4 w-4" />
                <span>Pillar 04 · Equitably Reworked</span>
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                Community-Backed Overland Expeditions & Tool Pool
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Rather than locking long-distance expeditions behind a paywall, all core club rides remain open to all vetted riders. Patron supporters receive a personalized laser-engraved brass throttle tag, offline cluster hosting on HimalayanOS, and direct votes on future unmapped trail scouting routes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
