import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { RideEvent } from '../types';
import { Calendar, Clock, MapPin, Gauge, Mountain, Users, Check, Fuel, Radio, Shield } from 'lucide-react';

export const UpcomingRides: React.FC = () => {
  const { rides, currentMember, userRole, rsvpRide, setActiveTab } = useApp();
  const [filterTerrain, setFilterTerrain] = useState<string>('all');

  const upcomingRides = rides.filter((r) => r.status === 'upcoming');

  const filteredUpcoming = filterTerrain === 'all'
    ? upcomingRides
    : upcomingRides.filter((r) => r.terrain.toLowerCase().includes(filterTerrain.toLowerCase()));

  const getMemberRsvpStatus = (ride: RideEvent) => {
    const entry = ride.rsvps.find((r) => r.memberId === currentMember.id);
    return entry?.status || null;
  };

  return (
    <section className="bg-[#0b0f14] py-12 sm:py-16 border-t border-[#1c2635] w-full max-w-full overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-orange-400 uppercase">
              <span>Expedition Radar</span>
              <span aria-hidden="true">·</span>
              <span>Kutch Overland Runs</span>
            </div>
            <h2 className="mt-2 font-display text-2xl sm:text-4xl font-black tracking-tight text-white break-words">
              Upcoming Motorcycle Expeditions
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed font-normal">
              Every rollout is supported by our trailing 4x4 sweep truck with recovery winch, emergency spares, and HimalayanOS mesh audio. All vetted riders ride free.
            </p>
          </div>

          {/* Terrain Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#121924] border border-[#233144] rounded-xl overflow-x-auto max-w-full">
            {['all', 'Highway', 'Switchbacks', 'Sand'].map((t) => (
              <button
                key={t}
                onClick={() => setFilterTerrain(t)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  filterTerrain === t
                    ? 'bg-orange-500 text-white font-bold shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t === 'all' ? 'All Terrains' : t}
              </button>
            ))}
          </div>
        </div>

        {/* Rides Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full">
          {filteredUpcoming.map((ride) => {
            const rsvpStatus = getMemberRsvpStatus(ride);
            const goingCount = ride.rsvps.filter((r) => r.status === 'going').length;

            return (
              <div
                key={ride.id}
                className="group rounded-2xl border border-[#233144] bg-[#121924] p-5 sm:p-7 hover:border-orange-500/50 transition-all flex flex-col justify-between shadow-xl w-full overflow-hidden"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#1c2635]">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                      <Calendar className="h-4 w-4 text-orange-400" />
                      <span className="font-bold text-white">{ride.date}</span>
                      <span className="text-slate-600">·</span>
                      <Clock className="h-3.5 w-3.5 text-slate-400" />
                      <span>{ride.time}</span>
                    </div>

                    {ride.himalayanOsChannel && (
                      <span className="flex items-center gap-1 rounded bg-orange-500/15 border border-orange-500/30 px-2 py-0.5 font-mono text-[10px] font-bold text-orange-400">
                        <Radio className="h-3 w-3" />
                        <span>{ride.himalayanOsChannel}</span>
                      </span>
                    )}
                  </div>

                  <div className="mt-4">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors break-words">
                      {ride.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {ride.description}
                    </p>
                  </div>

                  {/* Route Specs Grid */}
                  <div className="mt-5 grid grid-cols-3 gap-2.5 text-center text-xs">
                    <div className="rounded-xl bg-[#0b0f14] p-2.5 border border-[#1e2a3b]">
                      <div className="text-[10px] text-orange-400 font-mono flex items-center justify-center gap-1 font-semibold">
                        <Gauge className="h-3 w-3 text-orange-400" />
                        <span>DISTANCE</span>
                      </div>
                      <div className="font-mono text-base font-bold text-white mt-1 tabular-nums">
                        {ride.distanceKm} KM
                      </div>
                    </div>

                    <div className="rounded-xl bg-[#0b0f14] p-2.5 border border-[#1e2a3b]">
                      <div className="text-[10px] text-amber-400 font-mono flex items-center justify-center gap-1 font-semibold">
                        <Fuel className="h-3 w-3" />
                        <span>MIN FUEL</span>
                      </div>
                      <div className="font-mono text-base font-bold text-slate-200 mt-1 tabular-nums">
                        {ride.fuelRangeRequiredKm || 200} KM
                      </div>
                    </div>

                    <div className="rounded-xl bg-[#0b0f14] p-2.5 border border-[#1e2a3b]">
                      <div className="text-[10px] text-slate-400 font-mono">FORMATION</div>
                      <div className="font-mono text-xs sm:text-sm font-semibold text-slate-300 mt-1 truncate">
                        {ride.pacePacing.split('·')[0]}
                      </div>
                    </div>
                  </div>

                  {/* Logistics and Assembly details */}
                  <div className="mt-4 rounded-xl bg-[#0b0f14] p-3 text-xs text-slate-300 space-y-1.5 border border-[#1e2a3b]">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-3.5 w-3.5 text-orange-400 shrink-0 mt-0.5" />
                      <div className="min-w-0">
                        <span className="text-slate-400">Flag-off Assembly:</span>{' '}
                        <strong className="text-white">{ride.assemblyPoint}</strong>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between pt-1 border-t border-[#1e2a3b] text-[11px] font-mono">
                      <span className="text-emerald-400">Trailing 4x4 Sweep Active</span>
                      <span className="text-slate-400">Lead: {ride.rideLeader.split('&')[0]}</span>
                    </div>
                  </div>
                </div>

                {/* RSVP and Action Bar */}
                <div className="mt-6 pt-4 border-t border-[#1c2635] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-300">
                    <Users className="h-3.5 w-3.5 text-orange-400" />
                    <span className="font-mono font-semibold">{goingCount} Throttles Confirmed</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => rsvpRide(ride.id, rsvpStatus === 'going' ? 'declined' : 'going')}
                      className={`flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        rsvpStatus === 'going'
                          ? 'bg-emerald-600 text-white font-bold shadow-xs'
                          : 'btn-ember text-white'
                      }`}
                    >
                      {rsvpStatus === 'going' ? (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          <span>Throttle Confirmed</span>
                        </>
                      ) : (
                        <span>Confirm RSVP Free</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
