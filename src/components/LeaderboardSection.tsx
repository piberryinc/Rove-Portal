import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Trophy, Medal, Award, Flame, Mountain, Gauge } from 'lucide-react';

export const LeaderboardSection: React.FC = () => {
  const { members } = useApp();
  const [metric, setMetric] = useState<'km' | 'elevation' | 'rides'>('km');

  // Sort members based on selected metric
  const sortedMembers = [...members].sort((a, b) => {
    if (metric === 'km') return b.totalKmRidden - a.totalKmRidden;
    if (metric === 'elevation') return b.elevationGainM - a.elevationGainM;
    return b.ridesAttended - a.ridesAttended;
  });

  return (
    <section className="bg-[#0b0f14] py-10 sm:py-16 md:py-20 border-t border-[#1c2635] w-full max-w-full overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-orange-400 uppercase">
              <span>Club Hall of Fame</span>
              <span aria-hidden="true">·</span>
              <span>Live Statistics</span>
            </div>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white break-words">
              Ride Participation Leaderboard
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed">
              Track individual endurance achievements, climbing meters conquered across Kutch, and overall ride consistency.
            </p>
          </div>

          {/* Metric Selector Tabs */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-[#121924] border border-[#233144] rounded-xl text-xs max-w-full">
            <button
              onClick={() => setMetric('km')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors font-medium cursor-pointer ${
                metric === 'km' ? 'bg-orange-500 text-white font-bold shadow-xs' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Gauge className="h-3.5 w-3.5" />
              <span>Distance (KM)</span>
            </button>
            <button
              onClick={() => setMetric('elevation')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors font-medium cursor-pointer ${
                metric === 'elevation' ? 'bg-orange-500 text-white font-bold shadow-xs' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Mountain className="h-3.5 w-3.5" />
              <span>Elevation (m)</span>
            </button>
            <button
              onClick={() => setMetric('rides')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors font-medium cursor-pointer ${
                metric === 'rides' ? 'bg-orange-500 text-white font-bold shadow-xs' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Flame className="h-3.5 w-3.5" />
              <span>Rides Attended</span>
            </button>
          </div>
        </div>

        {/* Podium Top 3 Cards - Rich Gold, Silver, Bronze Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full">
          {sortedMembers.slice(0, 3).map((m, idx) => {
            const podiums = [
              { place: '1st Gold', color: 'from-[#2e2013] via-[#1a171a] to-[#121924]', border: 'border-amber-500/60', badge: 'text-amber-300 font-bold', icon: Trophy, ring: 'border-amber-400' },
              { place: '2nd Silver', color: 'from-[#1c2738] via-[#151f2d] to-[#121924]', border: 'border-slate-400/50', badge: 'text-slate-200 font-semibold', icon: Medal, ring: 'border-slate-300' },
              { place: '3rd Bronze', color: 'from-[#291a13] via-[#1c1514] to-[#121924]', border: 'border-orange-500/50', badge: 'text-orange-300 font-medium', icon: Award, ring: 'border-orange-400' },
            ][idx];
            const Icon = podiums.icon;

            return (
              <div
                key={m.id}
                className={`relative rounded-2xl border ${podiums.border} bg-gradient-to-b ${podiums.color} p-4 sm:p-6 flex flex-col justify-between shadow-xl w-full overflow-hidden`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={m.avatarUrl}
                      alt={m.name}
                      referrerPolicy="no-referrer"
                      className={`h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 ${podiums.ring} object-cover shrink-0`}
                    />
                    <div className="min-w-0">
                      <div className="font-display font-bold text-white text-sm sm:text-base truncate">
                        {m.name}
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono truncate">
                        {m.bikeModel}
                      </div>
                    </div>
                  </div>

                  <div className={`flex items-center gap-1 text-xs font-mono shrink-0 ${podiums.badge}`}>
                    <Icon className="h-4 w-4" />
                    <span>{podiums.place}</span>
                  </div>
                </div>

                <div className="mt-4 sm:mt-5 pt-3 border-t border-[#202d3e] grid grid-cols-3 gap-1.5 text-center">
                  <div className="min-w-0">
                    <div className="text-[9px] text-slate-400 font-mono truncate">TOTAL KM</div>
                    <div className="font-mono text-xs sm:text-sm font-bold text-white tabular-nums truncate">{m.totalKmRidden} km</div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] text-slate-400 font-mono truncate">CLIMB</div>
                    <div className="font-mono text-xs sm:text-sm font-bold text-amber-400 tabular-nums truncate">+{m.elevationGainM}m</div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] text-slate-400 font-mono truncate">RIDES</div>
                    <div className="font-mono text-xs sm:text-sm font-bold text-orange-400 tabular-nums truncate">{m.ridesAttended}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full Table with Guaranteed Mobile Scroll and Padding */}
        <div className="rounded-2xl border border-[#233144] bg-[#121924] overflow-hidden shadow-2xl w-full max-w-full">
          <div className="sm:hidden px-3 py-1.5 bg-[#141d2a] text-[10px] text-slate-400 font-mono border-b border-[#202c3b] flex items-center justify-between">
            <span>← Swipe horizontally to view full table →</span>
            <span className="text-orange-400 font-bold">{sortedMembers.length} Riders</span>
          </div>
          <div className="overflow-x-auto w-full max-w-full">
            <table className="w-full text-left text-xs sm:text-sm text-slate-200 min-w-[580px]">
              <thead className="bg-[#0e141d] text-[10px] sm:text-xs font-mono uppercase text-slate-400 border-b border-[#1e2a3b]">
                <tr>
                  <th scope="col" className="px-4 sm:px-6 py-3.5">Rank</th>
                  <th scope="col" className="px-4 sm:px-6 py-3.5">Rider & Bike</th>
                  <th scope="col" className="px-4 sm:px-6 py-3.5">Bhuj Area</th>
                  <th scope="col" className="px-4 sm:px-6 py-3.5 text-right">Total KM</th>
                  <th scope="col" className="px-4 sm:px-6 py-3.5 text-right">Elevation Gain</th>
                  <th scope="col" className="px-4 sm:px-6 py-3.5 text-right">Rides</th>
                  <th scope="col" className="px-4 sm:px-6 py-3.5 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e2a3b]">
                {sortedMembers.map((member, index) => {
                  return (
                    <tr
                      key={member.id}
                      className="hover:bg-[#151f2e] transition-colors"
                    >
                      <td className="px-4 sm:px-6 py-3.5 font-mono">
                        <span
                          className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                            index === 0
                              ? 'bg-amber-400 text-slate-950 font-extrabold shadow-sm'
                              : index === 1
                              ? 'bg-slate-300 text-slate-950 font-bold'
                              : index === 2
                              ? 'bg-orange-500 text-white font-bold'
                              : 'bg-[#182333] text-slate-400 border border-[#233144]'
                          }`}
                        >
                          {index + 1}
                        </span>
                      </td>

                      <td className="px-4 sm:px-6 py-3.5">
                        <div className="flex items-center gap-3">
                          <img
                            src={member.avatarUrl}
                            alt=""
                            className="h-8 w-8 rounded-full object-cover border border-[#27374d] shrink-0"
                          />
                          <div className="min-w-0">
                            <div className="font-semibold text-white truncate">
                              {member.name}
                            </div>
                            <div className="text-[11px] text-slate-400 font-mono truncate max-w-[140px] sm:max-w-none">
                              {member.bikeModel}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 sm:px-6 py-3.5 text-slate-400">
                        {member.area}
                      </td>

                      <td className="px-4 sm:px-6 py-3.5 text-right font-mono font-bold text-white tabular-nums">
                        {member.totalKmRidden} km
                      </td>

                      <td className="px-4 sm:px-6 py-3.5 text-right font-mono text-amber-400 tabular-nums">
                        +{member.elevationGainM} m
                      </td>

                      <td className="px-4 sm:px-6 py-3.5 text-right font-mono text-orange-400 tabular-nums">
                        {member.ridesAttended}
                      </td>

                      <td className="px-4 sm:px-6 py-3.5 text-center">
                        <span
                          className={`rounded px-2 py-0.5 text-[10px] font-mono font-bold border ${
                            member.membershipStatus === 'active'
                              ? 'bg-emerald-950/50 text-emerald-400 border-emerald-500/40'
                              : member.membershipStatus === 'expiring_soon'
                              ? 'bg-amber-950/50 text-amber-400 border-amber-500/40'
                              : 'bg-slate-900 text-slate-400 border-slate-800'
                          }`}
                        >
                          {member.membershipStatus.toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
