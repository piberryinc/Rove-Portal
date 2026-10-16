import React, { useState } from 'react';
import { Map, AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps';
import { useApp } from '../context/AppContext';
import { RideEvent, PartnerPerk } from '../types';
import { Compass, Wrench, MapPin, Calendar, Phone, Navigation } from 'lucide-react';

interface Props {
  selectedRideId?: string | null;
  onSelectRide?: (ride: RideEvent) => void;
  filterMode?: 'all' | 'rides' | 'partners';
}

export const ClubGoogleMap: React.FC<Props> = ({ selectedRideId, onSelectRide, filterMode = 'all' }) => {
  const { rides, partnerPerks, currentMember, userRole, rsvpRide, openScannerModal } = useApp();

  const [activePin, setActivePin] = useState<{
    type: 'ride' | 'partner';
    data: RideEvent | PartnerPerk;
  } | null>(null);

  const [mapMode, setMapMode] = useState<'all' | 'rides' | 'partners'>(filterMode);

  // Default center at Bhuj, Kutch
  const defaultCenter = { lat: 23.242, lng: 69.667 };

  // If a ride is selected, find its assembly coords
  const selectedRide = rides.find((r) => r.id === selectedRideId);
  const center = selectedRide?.assemblyCoords || defaultCenter;

  const upcomingRides = rides.filter((r) => r.status === 'upcoming');

  return (
    <div className="relative w-full max-w-full rounded-2xl border border-[#233144] bg-[#121924] overflow-hidden shadow-2xl flex flex-col">
      {/* Map Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 sm:p-4 bg-[#0e141d]/95 border-b border-[#1e2a3b] backdrop-blur-md z-10 w-full">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-orange-500/10 border border-orange-500/30 text-orange-400 shrink-0">
            <Navigation className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </div>
          <div className="min-w-0">
            <h4 className="font-display text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 truncate">
              <span className="truncate">Kutch Waypoint Navigator</span>
              <span className="text-[9px] font-mono text-orange-400 bg-orange-500/15 px-1.5 py-0.5 rounded border border-orange-500/30 shrink-0 font-semibold">
                RADAR
              </span>
            </h4>
            <div className="text-[10px] text-slate-400 font-mono truncate">
              Assembly Gates & Partner Garages
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-1 p-0.5 sm:p-1 bg-[#131b26] border border-[#222e3e] rounded-lg text-xs shrink-0">
          <button
            onClick={() => setMapMode('all')}
            className={`px-2 sm:px-2.5 py-1 rounded text-[11px] font-medium transition-colors cursor-pointer ${
              mapMode === 'all'
                ? 'bg-orange-500 text-white font-bold shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All Waypoints
          </button>
          <button
            onClick={() => setMapMode('rides')}
            className={`px-2 sm:px-2.5 py-1 rounded text-[11px] font-medium transition-colors flex items-center gap-1 cursor-pointer ${
              mapMode === 'rides'
                ? 'bg-orange-500 text-white font-bold shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Compass className="h-3 w-3" />
            <span>Expeditions</span>
          </button>
          <button
            onClick={() => setMapMode('partners')}
            className={`px-2 sm:px-2.5 py-1 rounded text-[11px] font-medium transition-colors flex items-center gap-1 cursor-pointer ${
              mapMode === 'partners'
                ? 'bg-orange-500 text-white font-bold shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Wrench className="h-3 w-3" />
            <span>Garages</span>
          </button>
        </div>
      </div>

      {/* Google Map Container with explicit CSS height */}
      <div className="relative w-full h-[280px] xs:h-[320px] sm:h-[400px] md:h-[460px] overflow-hidden">
        <Map
          defaultCenter={defaultCenter}
          defaultZoom={11}
          center={center}
          mapId="DEMO_MAP_ID"
          internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
          gestureHandling="greedy"
          disableDefaultUI={false}
          className="w-full h-full"
        >
          {/* Ride Assembly Pins (Convoy Amber) */}
          {(mapMode === 'all' || mapMode === 'rides') &&
            upcomingRides.map((ride) => {
              if (!ride.assemblyCoords) return null;
              const isSelected = ride.id === selectedRideId;

              return (
                <AdvancedMarker
                  key={`ride-${ride.id}`}
                  position={ride.assemblyCoords}
                  title={ride.title}
                  onClick={() => {
                    setActivePin({ type: 'ride', data: ride });
                    if (onSelectRide) onSelectRide(ride);
                  }}
                >
                  <div
                    className={`group relative flex items-center justify-center cursor-pointer transition-transform hover:scale-110 ${
                      isSelected ? 'scale-125 z-30' : 'z-20'
                    }`}
                  >
                    <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-orange-600 text-white shadow-xl border-2 border-white ring-2 ring-orange-400/60">
                      <Compass className="h-4 w-4 stroke-[2.5]" />
                    </div>
                    <div className="absolute -bottom-1 h-2 w-2 rotate-45 bg-orange-600 border-r border-b border-white" />
                  </div>
                </AdvancedMarker>
              );
            })}

          {/* Partner Garage Pins */}
          {(mapMode === 'all' || mapMode === 'partners') &&
            partnerPerks.map((partner) => {
              if (!partner.coords) return null;

              return (
                <AdvancedMarker
                  key={`partner-${partner.id}`}
                  position={partner.coords}
                  title={partner.partnerName}
                  onClick={() => setActivePin({ type: 'partner', data: partner })}
                >
                  <div className="group relative flex items-center justify-center cursor-pointer transition-transform hover:scale-110 z-10">
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#182333] text-amber-300 shadow-xl border-2 border-amber-400 ring-2 ring-amber-500/40">
                      <Wrench className="h-3.5 w-3.5" />
                    </div>
                    <div className="absolute -bottom-1 h-1.5 w-1.5 rotate-45 bg-[#182333] border-r border-b border-amber-400" />
                  </div>
                </AdvancedMarker>
              );
            })}

          {/* Interactive Info Window */}
          {activePin && activePin.type === 'ride' && (
            <InfoWindow
              position={(activePin.data as RideEvent).assemblyCoords}
              onCloseClick={() => setActivePin(null)}
            >
              {(() => {
                const ride = activePin.data as RideEvent;
                const memberRsvp = ride.rsvps.find((r) => r.memberId === currentMember.id)?.status;

                return (
                  <div className="p-1 max-w-[240px] sm:max-w-[260px] text-slate-900 font-sans">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-orange-700 font-mono uppercase">
                      <Calendar className="h-3 w-3 text-orange-600" />
                      <span>{ride.date} · {ride.time}</span>
                    </div>

                    <h4 className="font-display font-bold text-sm text-slate-950 mt-1 leading-snug">
                      {ride.title}
                    </h4>

                    <div className="mt-2 text-xs text-slate-600 space-y-1">
                      <div className="flex items-center gap-1 font-semibold text-slate-800 text-[11px]">
                        <MapPin className="h-3 w-3 text-orange-600 shrink-0" />
                        <span className="truncate">{ride.assemblyPoint}</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] pt-1 border-t border-slate-200">
                        <span className="font-mono">Distance: <strong>{ride.distanceKm} KM</strong></span>
                        <span className="text-orange-700 font-bold font-mono">
                          {ride.himalayanOsChannel || 'Mesh Ch 04'}
                        </span>
                      </div>
                    </div>

                    {userRole !== 'guest' && (
                      <div className="mt-2.5 pt-1.5 border-t border-slate-200">
                        <button
                          onClick={() => rsvpRide(ride.id, 'going')}
                          className={`w-full py-1 px-2 rounded text-xs font-bold transition-colors cursor-pointer ${
                            memberRsvp === 'going'
                              ? 'bg-orange-600 text-white'
                              : 'bg-slate-900 text-white hover:bg-orange-600'
                          }`}
                        >
                          {memberRsvp === 'going' ? '✓ Throttle Confirmed' : 'RSVP Going'}
                        </button>
                      </div>
                    )}
                  </div>
                );
              })()}
            </InfoWindow>
          )}

          {activePin && activePin.type === 'partner' && (
            <InfoWindow
              position={(activePin.data as PartnerPerk).coords}
              onCloseClick={() => setActivePin(null)}
            >
              {(() => {
                const partner = activePin.data as PartnerPerk;

                return (
                  <div className="p-1 max-w-[240px] sm:max-w-[260px] text-slate-900 font-sans">
                    <span className="inline-block text-[9px] font-mono font-bold text-orange-800 bg-orange-100 px-1.5 py-0.5 rounded">
                      {partner.discount}
                    </span>

                    <h4 className="font-display font-bold text-sm text-slate-950 mt-1 leading-snug">
                      {partner.partnerName}
                    </h4>

                    <p className="mt-1 text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {partner.description}
                    </p>

                    <div className="mt-2 text-[11px] text-slate-500 pt-1 border-t border-slate-200 space-y-0.5">
                      <div className="flex items-center gap-1 truncate">
                        <MapPin className="h-3 w-3 text-orange-600 shrink-0" />
                        <span className="truncate">{partner.address}</span>
                      </div>
                      <div className="flex items-center gap-1 font-mono">
                        <Phone className="h-3 w-3 text-slate-400 shrink-0" />
                        <span>{partner.contact}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => openScannerModal()}
                      className="mt-2.5 w-full rounded bg-slate-900 py-1 text-xs font-bold text-white hover:bg-orange-600 transition-colors cursor-pointer"
                    >
                      Verify Pass Here
                    </button>
                  </div>
                );
              })()}
            </InfoWindow>
          )}
        </Map>
      </div>

      {/* Map Legend Footer */}
      <div className="p-2.5 sm:p-3 bg-[#0e141d] border-t border-[#1e2a3b] flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 font-mono w-full">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-orange-500 border border-white" />
            <span className="text-slate-300 text-[11px]">Expedition Assembly Gates</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400 border border-[#182333]" />
            <span className="text-slate-300 text-[11px]">Partner Garages & Outposts</span>
          </div>
        </div>

        <span className="text-[10px] text-slate-500 hidden sm:inline">
          Click any waypoint on Google Maps for route briefs & direct RSVPs
        </span>
      </div>
    </div>
  );
};
