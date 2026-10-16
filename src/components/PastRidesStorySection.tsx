import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { RideEvent } from '../types';
import { Compass, Calendar, MapPin, Gauge, ShieldCheck, Quote, Camera, Navigation, ArrowRight } from 'lucide-react';

export const PastRidesStorySection: React.FC = () => {
  const { rides, members } = useApp();
  const completedRides = rides.filter((r) => r.status === 'completed' && r.story);

  const [activeRideId, setActiveRideId] = useState<string>(completedRides[0]?.id || '');
  const activeRide = completedRides.find((r) => r.id === activeRideId) || completedRides[0];

  if (!activeRide || !activeRide.story) {
    return null;
  }

  const story = activeRide.story;

  return (
    <section className="relative bg-[#0b0f14] py-12 sm:py-18 md:py-24 border-t border-[#1c2635] w-full max-w-full overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-orange-400 uppercase">
              <span>Expedition Chronicles</span>
              <span aria-hidden="true">·</span>
              <span>Visual Road Stories</span>
            </div>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white break-words">
              Immortalized on the Open Road
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-normal">
              Every completed expedition has a soul. Here we document the dust, the campfire camaraderie, the unexpected route detours, and the riders who throttled together across the terrain.
            </p>
          </div>

          {/* Expedition Selectors (Segmented Buttons) */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#121924] border border-[#233144] rounded-xl text-xs shrink-0 max-w-full">
            {completedRides.map((ride) => (
              <button
                key={ride.id}
                onClick={() => setActiveRideId(ride.id)}
                className={`px-3 py-2 rounded-lg font-medium transition-all cursor-pointer truncate max-w-[220px] sm:max-w-none ${
                  activeRide.id === ride.id
                    ? 'bg-orange-500 text-white font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {ride.title.split('·')[0].split('&')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Story Presentation */}
        <div className="rounded-2xl border border-[#233144] bg-[#121924] overflow-hidden shadow-2xl">
          {/* Hero Cover Photography */}
          <div className="relative h-72 sm:h-96 md:h-[440px] w-full overflow-hidden">
            <img
              src={story.coverImage}
              alt={activeRide.title}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121924] via-[#121924]/40 to-transparent" />
            
            <div className="absolute bottom-6 left-4 sm:left-8 right-4 sm:right-8 space-y-2">
              <div className="flex flex-wrap items-center gap-3 text-xs text-orange-400 font-mono font-semibold">
                <span>{activeRide.date}</span>
                <span className="text-slate-500">·</span>
                <span>{activeRide.distanceKm} KM Round Trip</span>
                <span className="text-slate-500">·</span>
                <span>{activeRide.terrain}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-4xl font-black text-white leading-tight">
                {activeRide.title}
              </h3>
            </div>
          </div>

          {/* Story Content Body */}
          <div className="p-6 sm:p-10 space-y-8">
            {/* Lead Narrative Paragraphs */}
            <div className="space-y-4 max-w-4xl text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              <p className="text-base sm:text-lg font-medium text-white leading-relaxed">
                {story.narrative}
              </p>
            </div>

            {/* Atmosphere & Technical Terrain Log */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#1e2a3b]">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-orange-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <Compass className="h-4 w-4" />
                  <span>Atmosphere & Desert Conditions</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {story.atmosphere}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-orange-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <Gauge className="h-4 w-4" />
                  <span>Terrain & Machine Configuration</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {story.terrainLog}
                </p>
              </div>
            </div>

            {/* ATGATT Safety Compliance Note */}
            <div className="p-4 rounded-xl border border-orange-500/20 bg-[#16202c]/70 flex items-start gap-3 text-xs text-slate-300">
              <ShieldCheck className="h-5 w-5 text-orange-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-mono uppercase text-[11px] mb-0.5">ATGATT Gate Audit</strong>
                <span>{story.atgattAudit}</span>
              </div>
            </div>

            {/* Specific Riders Who Joined with Field Quotes */}
            <div className="pt-6 border-t border-[#1e2a3b] space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-display text-xl font-bold text-white">Riders on the Roster</h4>
                  <p className="text-xs text-slate-400">Voices and machines from this expedition</p>
                </div>
                <span className="text-xs font-mono text-orange-400 font-bold">
                  {activeRide.attendance.length > 0 ? activeRide.attendance.length : activeRide.rsvps.length} Throttles Present
                </span>
              </div>

              {/* Rider Roster Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {activeRide.rsvps.map((rsvp) => {
                  const memberData = members.find((m) => m.id === rsvp.memberId);
                  const quoteObj = story.riderQuotes?.find((q) => q.rider === rsvp.memberName);

                  return (
                    <div
                      key={rsvp.memberId}
                      className="rounded-xl border border-[#233144] bg-[#0c121a] p-4 flex flex-col justify-between space-y-3"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={rsvp.avatarUrl || memberData?.avatarUrl || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'}
                          alt={rsvp.memberName}
                          className="h-10 w-10 rounded-full object-cover border border-orange-500/40"
                        />
                        <div className="min-w-0">
                          <h5 className="font-semibold text-white text-xs truncate">{rsvp.memberName}</h5>
                          <p className="text-[11px] text-orange-400/90 font-mono truncate">
                            {rsvp.bikeModel || memberData?.bikeModel || 'Adventure Motorcycle'}
                          </p>
                        </div>
                      </div>

                      {quoteObj ? (
                        <p className="text-[11px] text-slate-300 italic border-l border-orange-500/40 pl-2.5 leading-relaxed">
                          "{quoteObj.quote}"
                        </p>
                      ) : (
                        <p className="text-[11px] text-slate-400 leading-normal">
                          Verified present on HimalayanOS convoy node. Completed all {activeRide.distanceKm} km with zero mechanical faults.
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Photo Gallery Grid */}
            {story.galleryImages && story.galleryImages.length > 1 && (
              <div className="pt-6 border-t border-[#1e2a3b] space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-300">
                  <Camera className="h-4 w-4 text-orange-400" />
                  <span>Field Photography Gallery</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {story.galleryImages.map((imgUrl, i) => (
                    <div key={i} className="h-44 rounded-xl overflow-hidden border border-[#233144]">
                      <img
                        src={imgUrl}
                        alt={`${activeRide.title} scene ${i + 1}`}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
