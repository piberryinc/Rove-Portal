import React from 'react';
import { Compass, Flame, Shield, Users, Tent, Wrench, Mountain } from 'lucide-react';
import campImage from '../assets/images/moto_desert_camp_1792180047148.jpg';

export const AdventuresSection: React.FC = () => {
  return (
    <section className="relative bg-[#0b0f14] py-12 sm:py-18 md:py-24 border-t border-[#1c2635] w-full max-w-full overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 w-full">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-orange-400 uppercase">
            <span>The Tribe & The Outback</span>
            <span aria-hidden="true">·</span>
            <span>Multidisciplinary Outdoors</span>
          </div>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white break-words">
            A Deep Well of Experience & Wilderness Adventures
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-normal">
            Motorcycles are the beating heart of our club, but our passion spans the full spectrum of the outdoors. We are trail scouts, desert campers, mountain scramblers, and endurance athletes who treat the harsh beauty of Kutch as our communal backyard.
          </p>
        </div>

        {/* Feature 1: The Collective Knowledge & Veteran Mentorship */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          <div className="rounded-2xl border border-[#233144] bg-[#121924] p-6 sm:p-7 flex flex-col justify-between shadow-xl">
            <div className="space-y-3">
              <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 w-fit">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">Trans-Himalayan & Desert Veterans</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Our lead scouts and senior riders have logged tens of thousands of saddle hours across Ladakh, Spiti, Rajasthan’s Thar dunes, and the salt marshes of the Rann. When you ride with us, you have access to veteran navigators who understand surface transitions, throttle finesse, and desert heat mitigation.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#1e2a3b] text-xs font-mono text-slate-400">
              Expedition Mentorship · Route Scouting
            </div>
          </div>

          <div className="rounded-2xl border border-[#233144] bg-[#121924] p-6 sm:p-7 flex flex-col justify-between shadow-xl">
            <div className="space-y-3">
              <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 w-fit">
                <Wrench className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">Master Mechanics & Trail Responders</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                From emergency spoke repairs and field tube vulcanization to carburetor tuning and EFI diagnostic overrides, our ranks include professional wrenches and trauma-trained first-aid responders who never leave a broken machine or stranded rider behind.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#1e2a3b] text-xs font-mono text-slate-400">
              Zero Mechanical Dropouts · Field Recovery
            </div>
          </div>

          <div className="rounded-2xl border border-[#233144] bg-[#121924] p-6 sm:p-7 flex flex-col justify-between shadow-xl">
            <div className="space-y-3">
              <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 w-fit">
                <Mountain className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">4x4 Sweeps & Trail Expansion</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                When the trail grows impossibly deep with loose silt or boulder fields, our club 4x4 recovery sweeps (Mahindra Thar and custom overland trucks) provide heavy extraction, winch recovery, cold electrolyte water, spare fuel cans, and transport for gear.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#1e2a3b] text-xs font-mono text-slate-400">
              Overland Sweep Crew · Heavy Extraction
            </div>
          </div>
        </div>

        {/* Feature 2: Beyond the Tarmac - Camping, Bivouacs & Outdoor Outings */}
        <div className="relative rounded-2xl overflow-hidden border border-[#233144] shadow-2xl">
          <div className="h-72 sm:h-96 w-full relative">
            <img
              src={campImage}
              alt="Bhuj Moto Club riders around a warm desert campfire under the starry Milky Way sky in Kutch"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14] via-[#0b0f14]/60 to-transparent" />
          </div>

          <div className="p-6 sm:p-10 bg-[#121924] space-y-4">
            <div className="flex items-center gap-2 text-orange-400">
              <Tent className="h-5 w-5" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-orange-400">Beyond The Tarmac</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              Desert Bivouacs, Astro-Nights & Trail Sports
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
              When the engines click cold at sunset, the adventure doesn't end. Our monthly overnight expeditions regularly culminate in remote desert bivouac campouts under zero light-pollution skies, gathering around open acacia wood fires with hot tin mugs of black tea, sharing trail lore and mechanical wisdom.
            </p>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              On rest days, club members regularly expand into backcountry trail running across the Kalo Dungar ridges, off-road 4x4 recovery expeditions, sandstone canyon scrambling in Khari Nadi, and wilderness navigation workshops. It is a complete outdoor culture rooted in camaraderie and reverence for the wild landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
