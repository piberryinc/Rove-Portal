import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { QrCode, CheckCircle2, AlertTriangle, X, Compass } from 'lucide-react';

export const MemberCardScannerModal: React.FC = () => {
  const { isScannerModalOpen, closeScannerModal, scannerTargetMemberId, members, extendMembership } = useApp();
  
  const [selectedId, setSelectedId] = useState<string>(scannerTargetMemberId || members[0]?.id || 'BMC-2026-0101');
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState<any>(null);

  React.useEffect(() => {
    if (scannerTargetMemberId) {
      setSelectedId(scannerTargetMemberId);
    }
  }, [scannerTargetMemberId]);

  if (!isScannerModalOpen) return null;

  const targetMember = members.find((m) => m.id === selectedId) || members[0];

  const handleSimulateScan = () => {
    setScanning(true);
    setScanResult(null);

    setTimeout(() => {
      setScanning(false);
      setScanResult({
        member: targetMember,
        scannedAt: new Date().toLocaleTimeString(),
        isValid: targetMember.membershipStatus === 'active' || targetMember.membershipStatus === 'expiring_soon'
      });
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-2.5 sm:p-4 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg rounded-2xl border border-[#233144] bg-[#121924] p-5 sm:p-7 shadow-2xl my-auto max-h-[90vh] overflow-y-auto">
        <button
          onClick={closeScannerModal}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 cursor-pointer transition-colors"
          aria-label="Close scanner"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/20 border border-orange-500/40 text-orange-400 shrink-0">
            <QrCode className="h-5 w-5" />
          </div>
          <div className="min-w-0 pr-8">
            <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-white truncate">
              Rally Checkpoint & Garage Terminal
            </h3>
            <p className="text-xs text-orange-400 font-mono font-semibold truncate">
              BMC Rider Pass Verification · Kutch Network
            </p>
          </div>
        </div>

        <p className="mt-3 text-xs text-slate-300 leading-relaxed font-normal">
          Simulates how checkpoint road captains or technicians at <strong>Desert Torque Works</strong> and <strong>Overland Moto Gear Studio</strong> verify a rider’s machine, ICE details, and active status.
        </p>

        {/* Member Card Selector */}
        <div className="mt-4 bg-[#0b0f14] p-3 rounded-xl border border-[#1e2a3b] flex flex-col xs:flex-row xs:items-center justify-between gap-2 text-xs">
          <span className="text-slate-400 font-mono text-[11px] shrink-0">Pass to Verify:</span>
          <select
            value={selectedId}
            onChange={(e) => {
              setSelectedId(e.target.value);
              setScanResult(null);
            }}
            className="w-full bg-[#16212e] border border-[#233144] rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none focus:border-orange-500 truncate cursor-pointer"
          >
            {members.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name} ({m.id}) — {m.bikeModel}
              </option>
            ))}
          </select>
        </div>

        {/* Scanner Viewport with Laser Beam */}
        <div className="mt-4 relative aspect-[16/9] w-full rounded-xl border-2 border-dashed border-[#2b3d54] bg-[#070b10] flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute top-2.5 left-2.5 h-4 w-4 border-t-2 border-l-2 border-orange-400" />
          <div className="absolute top-2.5 right-2.5 h-4 w-4 border-t-2 border-r-2 border-orange-400" />
          <div className="absolute bottom-2.5 left-2.5 h-4 w-4 border-b-2 border-l-2 border-orange-400" />
          <div className="absolute bottom-2.5 right-2.5 h-4 w-4 border-b-2 border-r-2 border-orange-400" />

          {scanning && (
            <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 shadow-[0_0_15px_#f97316] animate-bounce" />
          )}

          <div className="flex flex-col items-center gap-1.5 text-center p-3">
            <QrCode className={`h-8 w-8 sm:h-10 sm:w-10 ${scanning ? 'text-orange-400 animate-pulse' : 'text-slate-600'}`} />
            <div className="font-mono text-xs text-slate-300">
              {scanning ? 'Decoding BMC Pass Signature...' : 'Position Digital Pass within Frame'}
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center">
          <button
            onClick={handleSimulateScan}
            disabled={scanning}
            className="w-full btn-ember py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Compass className="h-4 w-4" />
            <span>{scanning ? 'Verifying Telemetry...' : 'Simulate Checkpoint Scan'}</span>
          </button>
        </div>

        {/* Scan Result Dialog Box */}
        {scanResult && (
          <div className={`mt-4 p-4 rounded-xl border ${scanResult.isValid ? 'bg-[#0f1d18] border-emerald-500/50' : 'bg-[#241014] border-red-500/50'} space-y-3`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {scanResult.isValid ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                ) : (
                  <AlertTriangle className="h-5 w-5 text-red-400 shrink-0" />
                )}
                <span className={`font-display font-bold text-sm ${scanResult.isValid ? 'text-emerald-300' : 'text-red-300'}`}>
                  {scanResult.isValid ? 'BMC VERIFIED RIDER PASS' : 'EXPIRED RIDER PASS'}
                </span>
              </div>
              <span className="font-mono text-[10px] text-slate-400">
                {scanResult.scannedAt}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 pt-1 border-t border-[#1e2a3b]">
              <div>
                <span className="text-[10px] text-slate-400 block font-mono">RIDER & ID</span>
                <strong className="text-white">{scanResult.member.name}</strong>
                <span className="block font-mono text-[10px] text-orange-400">{scanResult.member.id}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block font-mono">MACHINE & CATEGORY</span>
                <span className="text-white">{scanResult.member.bikeModel}</span>
                <span className="block text-[10px] text-slate-400 font-mono">{scanResult.member.bikeCategory}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block font-mono">BLOOD GROUP (ICE)</span>
                <strong className="text-amber-400 font-mono">{scanResult.member.bloodGroup}</strong>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block font-mono">EMERGENCY CONTACT</span>
                <span className="text-white">{scanResult.member.emergencyContact.name}</span>
                <span className="block font-mono text-[10px] text-slate-300">{scanResult.member.emergencyContact.phone}</span>
              </div>
            </div>

            {!scanResult.isValid && (
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => {
                    extendMembership(scanResult.member.id, 3);
                    setScanResult(null);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-orange-600 text-white font-bold text-xs hover:bg-orange-500 transition-colors cursor-pointer"
                >
                  Renew Patron Support (+3 Months)
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
