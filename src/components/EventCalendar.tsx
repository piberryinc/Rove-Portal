import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { RideEvent } from '../types';
import { ClubGoogleMap } from './ClubGoogleMap';
import { Calendar as CalendarIcon, Clock, MapPin, Gauge, Mountain, Users, Check, Radio, Shield, Fuel } from 'lucide-react';

export const EventCalendar: React.FC = () => {
  const { rides, currentMember, userRole, rsvpRide } = useApp();

  const [selectedRideId, setSelectedRideId] = useState<string>(rides[0]?.id || '');
  const [terrainFilter, setTerrainFilter] = useState<string>('all');

  const upcomingRides = rides.filter((r) => r.status === 'upcoming');
  const filteredRides = terrainFilter === 'all'
    ? upcomingRides
    : upcomingRides.filter((r) => r.terrain.toLowerCase().includes(terrainFilter.toLowerCase()));

  const selectedRide = rides.find((r) => r.id === selectedRideId) || upcomingRides[0];

  const getRsvpStatus = (ride: RideEvent) => {
    return ride.rsvps.find((r) => r.memberId === currentMember.id)?.status || null;
  };

  return (
    <section className="bg-[#0b0f14] py-10 sm:py-16 md:py-20 border-t border-[#1c2635] w-full max-w-full overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-orange-400 uppercase">
              <span>Expedition Dispatch</span>
              <span aria-hidden="true">·</span>
              <span>Kutch Overland Radar</span>
            </div>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white break-words">
              Upcoming Group Expeditions & Route Briefings
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed font-normal">
              Explore scheduled rollouts, staging coordinates, HimalayanOS mesh channels, and terrain profiles. Select any expedition to pan the interactive Google Map directly to its assembly gate.
            </p>
          </div>

          {/* Terrain Filters */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 max-w-full">
            <div className="flex flex-wrap items-center gap-1 p-1 bg-[#121924] border border-[#233144] rounded-xl text-xs max-w-full">
              <button
                onClick={() => setTerrainFilter('all')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  terrainFilter === 'all' ? 'bg-orange-500 text-white font-bold shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                All Terrains
              </button>
              <button
                onClick={() => setTerrainFilter('highway')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  terrainFilter === 'highway' ? 'bg-orange-500 text-white font-bold shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                Highway
              </button>
              <button
                onClick={() => setTerrainFilter('ghat')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  terrainFilter === 'ghat' ? 'bg-orange-500 text-white font-bold shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                Ghats
              </button>
              <button
                onClick={() => setTerrainFilter('sand')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  terrainFilter === 'sand' ? 'bg-orange-500 text-white font-bold shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                Dual-Sport
              </button>
            </div>
          </div>
        </div>

        {/* Dual Layout: Interactive Calendar Schedule + Live Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start w-full">
          {/* Left Column: Calendar Events Feed with Direct RSVP */}
          <div className="lg:col-span-6 space-y-4 w-full min-w-0">
            <div className="flex items-center justify-between pb-1 text-xs font-mono">
              <span className="text-slate-400 uppercase tracking-wider text-[11px]">
                Click ride to pan Google Map:
              </span>
              <span className="text-orange-400 font-semibold">
                {filteredRides.length} Expeditions Briefed
              </span>
            </div>

            <div className="space-y-4 w-full">
              {filteredRides.map((ride) => {
                const isSelected = ride.id === selectedRide?.id;
                const rsvpStatus = getRsvpStatus(ride);
                const goingCount = ride.rsvps.filter((r) => r.status === 'going').length;

                return (
                  <div
                    key={ride.id}
                    onClick={() => setSelectedRideId(ride.id)}
                    className={`rounded-2xl border p-4 sm:p-5 md:p-6 transition-all cursor-pointer w-full overflow-hidden ${
                      isSelected
                        ? 'border-orange-500/80 bg-[#151e2b] shadow-xl ring-1 ring-orange-500/30'
                        : 'border-[#233144] bg-[#121924] hover:border-[#384c66]'
                    }`}
                  >
                    {/* Top Row: Date, Time & Channel */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#1e2a3b]">
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                        <CalendarIcon className="h-4 w-4 text-orange-400" />
                        <span className="font-bold text-white">{ride.date}</span>
                        <span className="text-slate-600">·</span>
                        <Clock className="h-3.5 w-3.5 text-slate-400" />
                        <span>{ride.time}</span>
                      </div>

                      {ride.himalayanOsChannel && (
                        <span className="flex items-center gap-1 font-mono text-[10px] font-bold text-orange-400 bg-orange-500/10 border border-orange-500/30 px-2 py-0.5 rounded">
                          <Radio className="h-3 w-3" />
                          <span>{ride.himalayanOsChannel}</span>
                        </span>
                      )}
                    </div>

                    {/* Ride Title & Description */}
                    <div className="mt-3">
                      <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-white flex items-center justify-between gap-2 break-words">
                        <span className="truncate">{ride.title}</span>
                        {isSelected && (
                          <span className="text-[10px] font-mono font-bold text-white bg-orange-600 px-2 py-0.5 rounded shrink-0">
                            FOCUSED
                          </span>
                        )}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                        {ride.description}
                      </p>
                    </div>

                    {/* Stats bar */}
                    <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="rounded-lg bg-[#0e141d] p-2 border border-[#202c3b] min-w-0">
                        <div className="text-[9px] sm:text-[10px] text-slate-400 font-mono truncate">TOTAL DISTANCE</div>
                        <div className="font-mono font-bold text-white text-xs sm:text-sm truncate">{ride.distanceKm} KM</div>
                      </div>
                      <div className="rounded-lg bg-[#0e141d] p-2 border border-[#202c3b] min-w-0">
                        <div className="text-[9px] sm:text-[10px] text-slate-400 font-mono truncate">MIN FUEL TANK</div>
                        <div className="font-mono font-bold text-amber-400 text-xs sm:text-sm truncate flex items-center justify-center gap-1">
                          <Fuel className="h-3 w-3" />
                          <span>{ride.fuelRangeRequiredKm || 200} KM</span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-[#0e141d] p-2 border border-[#202c3b] min-w-0">
                        <div className="text-[9px] sm:text-[10px] text-slate-400 font-mono truncate">FORMATION</div>
                        <div className="font-mono font-semibold text-slate-300 text-[11px] truncate">
                          {ride.pacePacing.split('·')[0]}
                        </div>
                      </div>
                    </div>

                    {/* Assembly & Lead Scout info */}
                    <div className="mt-3.5 pt-3 border-t border-[#1c2838] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-300">
                      <div className="flex items-center gap-1.5 truncate">
                        <MapPin className="h-3.5 w-3.5 text-orange-400 shrink-0" />
                        <span className="truncate">{ride.assemblyPoint}</span>
                      </div>
                      <div className="text-slate-400 text-[11px] shrink-0">
                        Leader: <strong className="text-slate-200">{ride.rideLeader.split('&')[0]}</strong>
                      </div>
                    </div>

                    {/* Interactive RSVP Action Controls */}
                    <div className="mt-4 pt-3 border-t border-[#1e2a3b] flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Users className="h-3.5 w-3.5 text-slate-400" />
                        <span><strong>{goingCount}</strong> riders throttle confirmed</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            rsvpRide(ride.id, rsvpStatus === 'going' ? 'declined' : 'going');
                          }}
                          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            rsvpStatus === 'going'
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50'
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

          {/* Right Column: Google Map with Ride Assembly Pin & Waypoints */}
          <div className="lg:col-span-6 sticky top-20 w-full min-w-0">
            <div className="rounded-2xl border border-[#233144] bg-[#121924] p-4 sm:p-5 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#1e2a3b]">
                <div className="min-w-0">
                  <h4 className="font-display font-bold text-white text-base truncate">
                    {selectedRide ? selectedRide.title : 'Kutch Waypoint Radar'}
                  </h4>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5 truncate">
                    <MapPin className="h-3.5 w-3.5 text-orange-400 shrink-0" />
                    <span>{selectedRide?.destination}</span>
                  </p>
                </div>
                <span className="font-mono text-xs text-orange-400 font-bold bg-[#141b26] border border-orange-500/30 px-2 py-0.5 rounded shrink-0">
                  {selectedRide?.distanceKm} KM
                </span>
              </div>

              {/* Render Google Map */}
              <div className="h-[380px] sm:h-[460px] w-full rounded-xl overflow-hidden border border-[#202d3e]">
                <ClubGoogleMap selectedRideId={selectedRide?.id} />
              </div>

              {/* Route Highlights Walkthrough */}
              {selectedRide?.routeHighlights && (
                <div className="space-y-2 pt-2 text-xs">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Expedition Corridors & Staging Points:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                    {selectedRide.routeHighlights.map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-[#0e141d] border border-[#202c3b]">
                        <span className="font-mono text-orange-400 text-[10px] font-bold">0{i + 1}.</span>
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
