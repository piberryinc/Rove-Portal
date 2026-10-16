import React from 'react';
import { useApp } from '../context/AppContext';
import { Users, Wrench, CreditCard, Ticket, CheckCircle, ArrowRight, QrCode, Zap } from 'lucide-react';
import communityImage from '../assets/images/perk_community_riders_1790712451469.jpg';
import mechanicImage from '../assets/images/perk_mechanical_support_1790712439816.jpg';

export const PerksSection: React.FC = () => {
  const { openCheckoutModal, openScannerModal, setActiveTab, userRole } = useApp();

  return (
    <section className="relative bg-[#0b0f14] py-10 sm:py-16 md:py-20 border-t border-[#1c2635] w-full max-w-full overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-orange-400 uppercase">
            <span>Official Benefits</span>
            <span aria-hidden="true">·</span>
            <span>All-Inclusive Pass</span>
          </div>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white break-words">
            Engineered for Passionate Cyclists in Bhuj & Kutch
          </h2>
          <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
            Every perk is backed by real local infrastructure: trained ride marshals, dedicated motorized sweep vans, authentic partner workshops across Bhuj, and guaranteed free entry to landmark rides.
          </p>
        </div>

        {/* 4 Core Perks Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 w-full">
          {/* Perk 1: Skilled & Supportive Riders, Discounts, Training */}
          <div className="group rounded-2xl border border-[#233144] bg-[#121924] overflow-hidden hover:border-orange-500/50 transition-all flex flex-col justify-between shadow-xl w-full">
            <div className="relative h-48 sm:h-56 w-full overflow-hidden">
              <img
                src={communityImage}
                alt="Skilled and supportive cyclists gathering in Bhuj"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121924] via-[#121924]/40 to-transparent" />
              <div className="absolute top-3 left-3 rounded-lg bg-[#0b0f14]/85 backdrop-blur-md px-3 py-1 text-xs font-mono text-orange-400 border border-orange-500/30 font-semibold">
                01. Community & Training
              </div>
            </div>

            <div className="p-4 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-orange-400 mb-2">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-orange-400/80 font-bold">Perk 1</span>
                </div>
                <h3 className="font-display text-lg sm:text-2xl font-bold text-white break-words">
                  Skilled & Supportive Riders, Local Shop Discounts & Exclusive Training
                </h3>
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Ride alongside seasoned breveteers, national-level triathletes, and supportive marshals who ensure no cyclist is ever dropped. Members receive up to 20% off Shimano parts, tire replacements, and apparel at top Bhuj bike shops, plus invite-only workshops on cadence, endurance fueling in Kutch heat, and paceline drafting.
                </p>

                <div className="mt-4 sm:mt-5 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-400 shrink-0" />
                    <span>Weekly paceline & interval climb training on Bhujia Hill</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-400 shrink-0" />
                    <span>Up to 20% discount at Kutch Cyclery & Apex Bike Studio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-400 shrink-0" />
                    <span>Biomechanics & bike-fit consultations for injury prevention</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-[#1e2a3b] flex items-center justify-between">
                <button
                  onClick={() => setActiveTab('partners')}
                  className="text-xs font-bold text-orange-400 hover:text-orange-300 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>View Bhuj Partner Shops</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Perk 2: On-Road Support & Mechanical Assistance */}
          <div className="group rounded-2xl border border-[#233144] bg-[#121924] overflow-hidden hover:border-orange-500/50 transition-all flex flex-col justify-between shadow-xl w-full">
            <div className="relative h-48 sm:h-56 w-full overflow-hidden">
              <img
                src={mechanicImage}
                alt="On road mechanical assistance and emergency repair kits"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121924] via-[#121924]/40 to-transparent" />
              <div className="absolute top-3 left-3 rounded-lg bg-[#0b0f14]/85 backdrop-blur-md px-3 py-1 text-xs font-mono text-orange-400 border border-orange-500/30 font-semibold">
                02. SAG & Mechanical Sweep
              </div>
            </div>

            <div className="p-4 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-orange-400 mb-2">
                  <Wrench className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-orange-400/80 font-bold">Perk 2</span>
                </div>
                <h3 className="font-display text-lg sm:text-2xl font-bold text-white break-words">
                  On-Road Support & Mechanical Assistance with Emergency Repair Kits
                </h3>
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Never worry about a flat tire or broken chain on the deserted stretches to White Rann or Mandvi. Our motorized sweep vehicle trails major group rides equipped with high-pressure track pumps, spare inner tubes (700c & MTB), chain breakers, derailleur hangers, quick-links, and medical first-aid trauma kits.
                </p>

                <div className="mt-4 sm:mt-5 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-400 shrink-0" />
                    <span>Trailing SAG vehicle on all 50K+ endurance & weekend brevets</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-400 shrink-0" />
                    <span>Mobile puncture patching, quick-links & emergency spare tubes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-400 shrink-0" />
                    <span>Hydration refills, electrolytes & first-aid trauma response</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-[#1e2a3b] flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] text-slate-400 font-mono">Weekend peloton routes</span>
                <span className="text-xs font-bold text-orange-400 bg-orange-500/10 border border-orange-500/30 px-2 py-0.5 rounded">
                  Included in ₹349 Pass
                </span>
              </div>
            </div>
          </div>

          {/* Perk 3: Member Card on Website Portal */}
          <div className="rounded-2xl border border-[#233144] bg-[#121924] p-4 sm:p-7 hover:border-orange-500/50 transition-all flex flex-col justify-between shadow-xl w-full">
            <div>
              <div className="flex items-center gap-2 text-orange-400 mb-2">
                <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-orange-400/80 font-bold">Perk 3</span>
              </div>
              <h3 className="font-display text-lg sm:text-2xl font-bold text-white break-words">
                Member Card on Website Portal to Easily Scan at Partner Locations
              </h3>
              <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Your high-security digital pass is always accessible on your smartphone via the BBC member portal. Show it at partner retail counters, workshops, and cafes across Bhuj. The embedded QR code and barcode instantly verify your active membership status and unlock exclusive 15–20% discounts on the spot.
              </p>

              {/* Interactive Card Feature Demonstration */}
              <div className="mt-4 sm:mt-5 rounded-xl border border-[#253448] bg-[#0d131b] p-3 sm:p-4">
                <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-[#1c2837] font-mono">
                  <span>BBC DIGITAL PASS SYSTEM</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    VERIFIED
                  </span>
                </div>
                <div className="mt-2.5 sm:mt-3 grid grid-cols-3 gap-2 text-left">
                  <div className="min-w-0">
                    <div className="text-[9px] sm:text-[10px] text-slate-400 font-mono truncate">FORMAT</div>
                    <div className="text-xs font-bold text-white truncate">Web / Apple Pass</div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] sm:text-[10px] text-slate-400 font-mono truncate">OPTICAL</div>
                    <div className="text-xs font-mono text-orange-400 truncate">QR & Code 128</div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] sm:text-[10px] text-slate-400 font-mono truncate">OFFLINE</div>
                    <div className="text-xs font-semibold text-white truncate">Ready to Save</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-[#1e2a3b] flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => openScannerModal()}
                className="flex items-center gap-1.5 rounded-lg border border-[#273548] bg-[#16202c] px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white hover:border-orange-500/50 transition-colors cursor-pointer"
              >
                <QrCode className="h-4 w-4 text-orange-400" />
                <span>Test Scanner Simulator</span>
              </button>

              <button
                onClick={() => {
                  if (userRole === 'member') {
                    setActiveTab('member-portal');
                  } else {
                    openCheckoutModal();
                  }
                }}
                className="text-xs font-bold text-orange-400 hover:text-orange-300 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>{userRole === 'member' ? 'View My Member Card' : 'Get Your Digital Card'}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Perk 4: Free Rides for Paid Rides and Event Entry */}
          <div className="rounded-2xl border border-[#233144] bg-[#121924] p-4 sm:p-7 hover:border-orange-500/50 transition-all flex flex-col justify-between shadow-xl w-full">
            <div>
              <div className="flex items-center gap-2 text-orange-400 mb-2">
                <Ticket className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-orange-400/80 font-bold">Perk 4</span>
              </div>
              <h3 className="font-display text-lg sm:text-2xl font-bold text-white break-words">
                100% Free Entry for Paid Rides, Century Brevets & Flagship Events
              </h3>
              <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Guest riders pay ₹350–₹500 per entry for support van logistics, catered post-ride breakfast, and official certificates. As an active BBC member, every single premium club expedition is completely complimentary—your ₹349 pass pays for itself with just one weekend ride!
              </p>

              {/* Financial comparison matrix */}
              <div className="mt-4 sm:mt-5 grid grid-cols-2 gap-2.5 sm:gap-3 text-xs">
                <div className="rounded-xl border border-[#223043] bg-[#0e141d] p-3 min-w-0">
                  <div className="text-slate-400 font-medium text-[10px] sm:text-[11px] truncate">Guest / Non-Member</div>
                  <div className="mt-1 font-mono text-sm sm:text-lg font-bold text-slate-300 truncate">₹350 – ₹499</div>
                  <div className="mt-0.5 text-[9px] sm:text-[10px] text-slate-500 leading-tight">per ticket for White Rann / Mandvi Century</div>
                </div>
                <div className="rounded-xl border border-orange-500/40 bg-orange-500/5 p-3 min-w-0">
                  <div className="text-orange-400 font-bold text-[10px] sm:text-[11px] truncate">BBC Pass Holder</div>
                  <div className="mt-1 font-mono text-sm sm:text-lg font-extrabold text-orange-400 truncate">₹0 FREE</div>
                  <div className="mt-0.5 text-[9px] sm:text-[10px] text-orange-300/80 leading-tight">Included in flat ₹349 membership</div>
                </div>
              </div>
            </div>

            <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-[#1e2a3b] flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs text-slate-300 font-semibold flex items-center gap-1">
                <Zap className="h-3.5 w-3.5 text-orange-400" />
                <span>Unlimited ride entries for 90 days</span>
              </span>
              <button
                onClick={() => setActiveTab('calendar')}
                className="text-xs font-bold text-orange-400 hover:text-orange-300 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>View Free Schedule</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Callout Banner */}
        <div className="mt-8 sm:mt-12 rounded-2xl border border-orange-500/30 bg-gradient-to-r from-[#141b26] via-[#1a2332] to-[#141b26] p-5 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl w-full">
          <div className="max-w-2xl min-w-0">
            <span className="text-xs font-mono uppercase tracking-wider text-orange-400 font-bold">
              Official Membership
            </span>
            <h3 className="mt-1 font-display text-xl sm:text-3xl font-extrabold text-white break-words">
              Flat ₹349 for 3 Months. Full Access.
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              Instant digital card issuance, immediate ride RSVPs, breakdown recovery coverage, and partner discounts across Bhuj. No hidden charges or renewal traps.
            </p>
          </div>

          <button
            onClick={openCheckoutModal}
            className="btn-ember w-full sm:w-auto shrink-0 flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-xs sm:text-sm font-extrabold transition-all text-center cursor-pointer active:scale-98"
          >
            <span>Activate 3-Month Pass (₹349)</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
