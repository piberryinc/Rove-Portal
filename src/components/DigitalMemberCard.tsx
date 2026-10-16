import React, { useState } from 'react';
import { Member } from '../types';
import { useApp } from '../context/AppContext';
import { Compass, QrCode, ShieldCheck, AlertCircle, RefreshCw, Radio } from 'lucide-react';

interface Props {
  member: Member;
  interactive?: boolean;
}

export const DigitalMemberCard: React.FC<Props> = ({ member, interactive = true }) => {
  const [flipped, setFlipped] = useState(false);
  const { openScannerModal, extendMembership } = useApp();

  const isExpired = member.membershipStatus === 'expired';
  const isExpiringSoon = member.membershipStatus === 'expiring_soon';

  const roleLabel = {
    lead_scout: 'LEAD SCOUT',
    road_captain: 'ROAD CAPTAIN',
    member: 'CLUB RIDER'
  }[member.role] || 'CLUB RIDER';

  const statusConfig = {
    active: { label: 'VERIFIED', color: 'text-emerald-400 bg-emerald-950/50 border-emerald-500/50' },
    expiring_soon: { label: 'EXPIRING SOON', color: 'text-amber-300 bg-amber-950/50 border-amber-500/50' },
    expired: { label: 'RENEWAL DUE', color: 'text-red-400 bg-red-950/40 border-red-500/40' },
    suspended: { label: 'SUSPENDED', color: 'text-slate-400 bg-slate-900 border-slate-700' },
  }[member.membershipStatus] || { label: 'VERIFIED', color: 'text-emerald-400 bg-emerald-950/50 border-emerald-500/50' };

  return (
    <div className="w-full max-w-[400px] mx-auto overflow-hidden">
      {/* 3D Flip Card Container */}
      <div
        className="perspective-1000 w-full cursor-pointer select-none"
        onClick={() => interactive && setFlipped(!flipped)}
        title="Click to flip pass"
      >
        <div
          className={`relative w-full aspect-[1.58/1] transition-transform duration-700 transform-style-3d ${
            flipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* FRONT OF CARD - BHUJ MOTO CLUB ADVENTURE PASS */}
          <div className="absolute inset-0 backface-hidden rounded-2xl border border-orange-500/40 bg-gradient-to-br from-[#1a1510] via-[#121924] to-[#0c121a] p-4 sm:p-5 shadow-2xl flex flex-col justify-between overflow-hidden">
            {/* Ambient amber glow */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 h-32 w-32 rounded-full bg-orange-500/15 blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-32 w-32 rounded-full bg-amber-500/10 blur-2xl pointer-events-none" />
            
            {/* Top Ember Ribbon */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-400" />

            {/* Header: Crest & Status */}
            <div className="flex items-start justify-between gap-2 pt-0.5">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/20 border border-orange-500/50 text-orange-400 shrink-0">
                  <Compass className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="font-display text-xs sm:text-sm font-black tracking-tight text-white truncate">
                    BHUJ MOTO CLUB
                  </div>
                  <div className="text-[9px] text-orange-400 font-mono tracking-wider truncate font-semibold">
                    OFFICIAL RIDER PASS · KUTCH
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1">
                <div className="px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-mono font-bold border shrink-0 bg-orange-600/20 text-orange-400 border-orange-500/40">
                  {roleLabel}
                </div>
                <div className={`px-1.5 py-0.2 rounded text-[8px] font-mono font-bold shrink-0 ${statusConfig.color}`}>
                  {statusConfig.label}
                </div>
              </div>
            </div>

            {/* Middle: Rider Identity & Motorcycle */}
            <div className="my-auto grid grid-cols-12 gap-2 items-center">
              <div className="col-span-8 min-w-0">
                <div className="text-[8px] sm:text-[9px] text-slate-400 uppercase tracking-wider font-mono">Callsign & Rider</div>
                <div className="font-display text-sm sm:text-base font-extrabold text-white truncate">
                  {member.name}
                </div>
                <div className="mt-0.5 space-y-0.5 text-[9px] sm:text-[10px]">
                  <div className="font-mono text-orange-300 truncate">
                    {member.bikeModel}
                  </div>
                  <div className="text-slate-400 flex items-center gap-2">
                    <span>Blood: <strong className="text-white font-mono">{member.bloodGroup}</strong></span>
                    <span>·</span>
                    <span className="text-amber-400 font-mono">{member.himalayanOsHandle || '@bmc_rider'}</span>
                  </div>
                </div>
              </div>

              {/* QR Code Graphic */}
              <div className="col-span-4 flex justify-end">
                <div className="p-1 rounded-lg bg-white shadow-md shrink-0">
                  <svg className="h-10 w-10 sm:h-12 sm:w-12" viewBox="0 0 100 100" fill="black">
                    <rect x="0" y="0" width="30" height="30" fill="black" />
                    <rect x="5" y="5" width="20" height="20" fill="white" />
                    <rect x="10" y="10" width="10" height="10" fill="black" />
                    
                    <rect x="70" y="0" width="30" height="30" fill="black" />
                    <rect x="75" y="5" width="20" height="20" fill="white" />
                    <rect x="80" y="10" width="10" height="10" fill="black" />

                    <rect x="0" y="70" width="30" height="30" fill="black" />
                    <rect x="5" y="75" width="20" height="20" fill="white" />
                    <rect x="10" y="80" width="10" height="10" fill="black" />

                    <rect x="40" y="10" width="15" height="15" fill="black" />
                    <rect x="40" y="40" width="20" height="20" fill="black" />
                    <rect x="65" y="45" width="15" height="15" fill="black" />
                    <rect x="40" y="70" width="20" height="10" fill="black" />
                    <rect x="70" y="75" width="15" height="15" fill="black" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom Row: Member ID, Expiry & Tap to Flip */}
            <div className="flex items-center justify-between border-t border-[#1f2a39] pt-2 text-[9px] font-mono text-slate-400">
              <div>
                ID: <strong className="text-white font-mono">{member.id}</strong>
              </div>
              <div className="text-[8px] text-orange-400/80 animate-pulse">
                Click to flip specs ↺
              </div>
            </div>
          </div>

          {/* BACK OF CARD: EMERGENCY & HIMALAYANOS ICE INFO */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl border border-orange-500/40 bg-gradient-to-br from-[#121924] via-[#0c121a] to-[#070b10] p-4 sm:p-5 shadow-2xl flex flex-col justify-between overflow-hidden text-xs">
            <div className="flex items-center justify-between border-b border-[#233144] pb-2">
              <span className="font-display font-bold text-white text-xs">IN CASE OF EMERGENCY (ICE)</span>
              <span className="text-[10px] font-mono text-orange-400">BMC FIELD PROTOCOL</span>
            </div>

            <div className="space-y-2 text-[11px] text-slate-300">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-[9px] text-slate-400 block font-mono">EMERGENCY CONTACT</span>
                  <span className="font-semibold text-white truncate block">{member.emergencyContact.name} ({member.emergencyContact.relation})</span>
                  <span className="font-mono text-orange-400">{member.emergencyContact.phone}</span>
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 block font-mono">BLOOD GROUP</span>
                  <span className="font-bold text-amber-400 font-mono text-sm">{member.bloodGroup}</span>
                </div>
              </div>

              <div>
                <span className="text-[9px] text-slate-400 block font-mono">HIMALAYANOS MESH COMMS</span>
                <span className="text-white font-mono">{member.himalayanOsHandle || '@bmc_convoy'} · Ch 04 Rann Mesh</span>
              </div>
            </div>

            <div className="border-t border-[#233144] pt-2 flex items-center justify-between text-[10px] text-slate-400">
              <span className="truncate">Bhuj Moto Club · Zero Rider Left Behind</span>
              <span className="font-mono text-orange-400 font-bold">ATGATT VERIFIED</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
