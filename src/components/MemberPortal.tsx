import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { DigitalMemberCard } from './DigitalMemberCard';
import { CreateProfileModal } from './CreateProfileModal';
import { Compass, ShieldCheck, Edit3, MapPin, Clock, ArrowRight, QrCode, Radio, Fuel, Wrench, Tent, Plus } from 'lucide-react';

export const MemberPortal: React.FC = () => {
  const {
    currentMember,
    setCurrentMemberId,
    members,
    rides,
    rsvpRide,
    extendMembership,
    openEditProfileModal,
    openScannerModal,
    setActiveTab
  } = useApp();

  const [isCreateProfileOpen, setIsCreateProfileOpen] = useState(false);

  const upcomingRides = rides.filter((r) => r.status === 'upcoming');
  const myRsvps = upcomingRides.map((ride) => {
    const rsvp = ride.rsvps.find((r) => r.memberId === currentMember.id);
    return {
      ride,
      rsvpStatus: rsvp?.status || null
    };
  });

  const memberStats = currentMember.stats || {
    odometerKm: currentMember.totalKmRidden || 12400,
    longestExpeditionKm: 480,
    trailAssistsCount: 12,
    desertBivouacsCount: 6
  };

  const roleTitle = {
    lead_scout: 'Lead Scout',
    road_captain: 'Road Captain',
    member: 'Club Rider'
  }[currentMember.role] || 'Club Rider';

  return (
    <div className="bg-[#0b0f14] py-8 sm:py-12 md:py-16 min-h-screen w-full max-w-full overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 space-y-8 sm:space-y-10 w-full">
        {/* Top Header & Rider Callsign Switcher */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#1c2635] w-full">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-orange-400 uppercase">
              <span>Rider Dossier</span>
              <span aria-hidden="true">·</span>
              <span>HimalayanOS Callsign: {currentMember.himalayanOsHandle || '@bmc_rider'}</span>
            </div>
            <h1 className="mt-1 font-display text-2xl sm:text-3xl md:text-4xl font-black text-white truncate">
              {currentMember.name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 flex flex-wrap items-center gap-2">
              <span>ID: <strong className="font-mono text-orange-400">{currentMember.id}</strong></span>
              <span>·</span>
              <span>Role: <strong className="text-amber-400">{roleTitle}</strong></span>
              <span>·</span>
              <span className="truncate max-w-[200px] sm:max-w-none">Machine: <strong className="text-slate-200">{currentMember.bikeModel}</strong></span>
            </p>
          </div>

          {/* Profile Switcher & Add Rider Button */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 bg-[#121924] border border-[#233144] p-1.5 sm:p-2 rounded-xl text-xs max-w-full">
              <span className="text-slate-400 text-[11px] font-mono hidden xs:inline">Select Rider:</span>
              <select
                value={currentMember.id}
                onChange={(e) => setCurrentMemberId(e.target.value)}
                className="bg-[#0a0f16] border border-[#27374d] rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none focus:border-orange-500 max-w-[190px] sm:max-w-none cursor-pointer"
              >
                {members.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name} ({m.bikeModel.split(' ')[0]})
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => setIsCreateProfileOpen(true)}
              className="btn-ember flex items-center gap-1.5 rounded-xl px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs font-bold transition-all shadow-sm shrink-0 cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              <span>Induct Rider</span>
            </button>
          </div>
        </div>

        {/* Main Grid: Digital Rider Pass + Odyssey Telemetry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
          {/* Left Column: Digital Pass + Emergency Specs */}
          <div className="lg:col-span-5 space-y-6 w-full">
            <div className="rounded-2xl border border-[#233144] bg-[#121924] p-5 sm:p-6 shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#1e2a3b]">
                <div className="flex items-center gap-2">
                  <Compass className="h-4 w-4 text-orange-400" />
                  <h3 className="font-display font-bold text-white text-base">Digital Rider Pass</h3>
                </div>
                <button
                  onClick={openEditProfileModal}
                  className="flex items-center gap-1 text-xs text-orange-400 hover:text-orange-300 transition-colors cursor-pointer"
                >
                  <Edit3 className="h-3.5 w-3.5" />
                  <span>Edit Specs</span>
                </button>
              </div>

              {/* Verifiable 3D Flip Pass Component */}
              <DigitalMemberCard member={currentMember} />

              <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                <span>Verified for all Kutch expeditions</span>
                <button
                  onClick={() => openScannerModal(currentMember.id)}
                  className="text-orange-400 hover:underline font-mono font-semibold cursor-pointer"
                >
                  Test QR Check-in
                </button>
              </div>
            </div>

            {/* HimalayanOS Comms & ICE Card */}
            <div className="rounded-2xl border border-[#233144] bg-[#121924] p-5 sm:p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-[#1e2a3b] pb-3">
                <span className="font-display font-bold text-white text-sm flex items-center gap-2">
                  <Radio className="h-4 w-4 text-orange-400" />
                  HimalayanOS & Emergency (ICE)
                </span>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">READY</span>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between py-1 border-b border-[#1c2838]">
                  <span className="text-slate-400">Mesh Comms Callsign</span>
                  <span className="font-mono font-bold text-orange-400">{currentMember.himalayanOsHandle || '@bmc_rider'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#1c2838]">
                  <span className="text-slate-400">Blood Group</span>
                  <span className="font-mono font-bold text-white">{currentMember.bloodGroup}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#1c2838]">
                  <span className="text-slate-400">ICE Emergency Contact</span>
                  <span className="text-white font-medium">{currentMember.emergencyContact.name} ({currentMember.emergencyContact.phone})</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Preferred Terrain</span>
                  <span className="text-slate-200">{currentMember.bikeCategory}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Odyssey Stats (No Leaderboard!) + RSVPs */}
          <div className="lg:col-span-7 space-y-6 w-full">
            {/* Odyssey Telemetry Metrics */}
            <div className="rounded-2xl border border-[#233144] bg-[#121924] p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#1e2a3b]">
                <h3 className="font-display font-bold text-white text-base">Overland Odyssey Telemetry</h3>
                <span className="text-xs font-mono text-orange-400">Verified Throttle Hours</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3.5 rounded-xl bg-[#0c121a] border border-[#1e2a3b]">
                  <div className="text-[10px] text-slate-400 font-mono">TOTAL ODOMETER</div>
                  <div className="text-lg sm:text-xl font-bold font-mono text-white mt-1 tabular-nums">
                    {memberStats.odometerKm.toLocaleString()} KM
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0c121a] border border-[#1e2a3b]">
                  <div className="text-[10px] text-slate-400 font-mono">LONGEST RUN</div>
                  <div className="text-lg sm:text-xl font-bold font-mono text-amber-400 mt-1 tabular-nums">
                    {memberStats.longestExpeditionKm} KM
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0c121a] border border-[#1e2a3b]">
                  <div className="text-[10px] text-slate-400 font-mono">TRAIL ASSISTS</div>
                  <div className="text-lg sm:text-xl font-bold font-mono text-emerald-400 mt-1 tabular-nums">
                    {memberStats.trailAssistsCount}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0c121a] border border-[#1e2a3b]">
                  <div className="text-[10px] text-slate-400 font-mono">DESERT BIVOUACS</div>
                  <div className="text-lg sm:text-xl font-bold font-mono text-orange-400 mt-1 tabular-nums">
                    {memberStats.desertBivouacsCount} Nights
                  </div>
                </div>
              </div>
            </div>

            {/* Rider Bio & Philosophy */}
            {currentMember.bio && (
              <div className="rounded-2xl border border-[#233144] bg-[#121924] p-6 shadow-xl space-y-2">
                <h4 className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">Rider Manifesto & Field Notes</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {currentMember.bio}
                </p>
              </div>
            )}

            {/* Upcoming Expeditions RSVPs */}
            <div className="rounded-2xl border border-[#233144] bg-[#121924] p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#1e2a3b]">
                <h3 className="font-display font-bold text-white text-base">My Expedition Schedule</h3>
                <button
                  onClick={() => setActiveTab('calendar')}
                  className="text-xs text-orange-400 hover:text-orange-300 font-semibold cursor-pointer"
                >
                  View Full Calendar
                </button>
              </div>

              <div className="space-y-3">
                {myRsvps.map(({ ride, rsvpStatus }) => (
                  <div
                    key={ride.id}
                    className="p-4 rounded-xl border border-[#1e2a3b] bg-[#0c121a] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                  >
                    <div className="space-y-1 min-w-0">
                      <div className="font-semibold text-white truncate text-sm">{ride.title}</div>
                      <div className="text-slate-400 flex flex-wrap items-center gap-2 text-[11px]">
                        <span>{ride.date}</span>
                        <span>·</span>
                        <span>{ride.distanceKm} KM</span>
                        <span>·</span>
                        <span className="text-orange-400">{ride.himalayanOsChannel || 'Mesh Ch 04'}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => rsvpRide(ride.id, rsvpStatus === 'going' ? 'declined' : 'going')}
                        className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-colors cursor-pointer ${
                          rsvpStatus === 'going'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                            : 'btn-secondary text-slate-200'
                        }`}
                      >
                        {rsvpStatus === 'going' ? 'Confirmed' : 'Reserve Spot'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <CreateProfileModal
        isOpen={isCreateProfileOpen}
        onClose={() => setIsCreateProfileOpen(false)}
      />
    </div>
  );
};
