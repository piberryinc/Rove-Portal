import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Member } from '../types';
import { Compass, Users, Plus, Search, Edit2, Trash2, RefreshCw, Download, Radio, Shield, Wrench, CheckCircle2 } from 'lucide-react';

interface Props {
  onOpenAddMember: () => void;
  onOpenEditMember: (member: Member) => void;
}

export const AdminPortal: React.FC<Props> = ({ onOpenAddMember, onOpenEditMember }) => {
  const {
    members,
    rides,
    deleteMember,
    updateMember,
    extendMembership,
    updateAttendance,
    showNotification
  } = useApp();

  const [adminTab, setAdminTab] = useState<'members' | 'attendance' | 'field_readiness'>('members');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedRideId, setSelectedRideId] = useState<string>(rides[0]?.id || '');
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  const activeRide = rides.find((r) => r.id === selectedRideId) || rides[0];

  const filteredMembers = members.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.bikeModel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.phone.includes(searchQuery);
    const matchesStatus = statusFilter === 'all' || m.membershipStatus === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Collective Moto Metrics (Scrubbed of financial revenue calculations!)
  const totalRidersCount = members.length;
  const leadScoutsCount = members.filter((m) => m.role === 'lead_scout' || m.role === 'road_captain').length;
  const collectiveOdometer = members.reduce((sum, m) => sum + (m.stats?.odometerKm || m.totalKmRidden || 0), 0);
  const totalExpeditionsCount = rides.length;

  // Attendance metrics for selected ride
  const checkedInCount = activeRide ? activeRide.attendance.filter((a) => a.status === 'present' || a.status === 'marshal').length : 0;
  const totalRsvps = activeRide ? activeRide.rsvps.filter((r) => r.status === 'going').length : 0;
  const attendanceRate = totalRsvps > 0 ? Math.round((checkedInCount / totalRsvps) * 100) : 0;

  // CSV Export utility
  const exportMembersCSV = () => {
    const headers = ['Rider ID,Name,Callsign,Email,Phone,Motorcycle,Category,Role,Status,Expiry Date,Odometer KM,Emergency Contact'];
    const rows = members.map((m) =>
      `"${m.id}","${m.name}","${m.himalayanOsHandle || '@bmc_rider'}","${m.email}","${m.phone}","${m.bikeModel}","${m.bikeCategory}","${m.role}","${m.membershipStatus}","${m.membershipExpiry}",${m.totalKmRidden},"${m.emergencyContact.name} (${m.emergencyContact.phone})"`
    );
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Bhuj_Moto_Club_Roster_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showNotification('Rider roster exported to CSV successfully!', 'success');
  };

  const exportAttendanceCSV = () => {
    if (!activeRide) return;
    const headers = ['Rider ID,Rider Name,Attendance Status,Verified At,Notes'];
    const rows = activeRide.attendance.map((a) =>
      `"${a.memberId}","${a.memberName}","${a.status}","${a.verifiedAt || 'N/A'}","${a.notes || ''}"`
    );
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Expedition_Attendance_${activeRide.id}_${activeRide.date}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showNotification(`Attendance for ${activeRide.title} exported!`, 'success');
  };

  return (
    <div className="bg-[#0b0f14] py-8 sm:py-12 md:py-16 min-h-screen w-full max-w-full overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 w-full">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 sm:pb-6 border-b border-[#1c2635] w-full">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-orange-400 uppercase">
              <Compass className="h-4 w-4 text-orange-400" />
              <span>Ride Control Console</span>
              <span aria-hidden="true">·</span>
              <span>Lead Scouts & Road Captains</span>
            </div>
            <h1 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-white truncate">
              Bhuj Moto Club Ride Operations
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Field telemetry, rider induction, kickstand check-in rosters, and overland safety sweeps.
            </p>
          </div>

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={exportMembersCSV}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#273548] bg-[#141b26] text-xs font-medium text-slate-200 hover:text-white hover:border-orange-500/50 transition-colors cursor-pointer"
            >
              <Download className="h-3.5 w-3.5 text-orange-400" />
              <span>Export Roster CSV</span>
            </button>

            <button
              onClick={onOpenAddMember}
              className="btn-ember flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              <span>Induct Rider</span>
            </button>
          </div>
        </div>

        {/* Operational Telemetry Summary (No Financial Revenue Counters) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
          <div className="rounded-2xl border border-[#233144] bg-[#121924] p-4 sm:p-5 flex flex-col justify-between shadow-xl">
            <span className="text-[11px] font-mono text-slate-400 uppercase">TOTAL ROSTER</span>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="font-mono text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
                {totalRidersCount}
              </span>
              <span className="text-xs font-semibold text-emerald-400 font-mono">
                {leadScoutsCount} Scouts & Captains
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-[#233144] bg-[#121924] p-4 sm:p-5 flex flex-col justify-between shadow-xl">
            <span className="text-[11px] font-mono text-slate-400 uppercase">COLLECTIVE ODOMETER</span>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="font-mono text-2xl sm:text-3xl font-extrabold text-orange-400 tabular-nums">
                {collectiveOdometer.toLocaleString()}
              </span>
              <span className="text-xs text-slate-400 font-mono">KM Across Kutch</span>
            </div>
          </div>

          <div className="rounded-2xl border border-[#233144] bg-[#121924] p-4 sm:p-5 flex flex-col justify-between shadow-xl">
            <span className="text-[11px] font-mono text-slate-400 uppercase">EXPEDITION RADAR</span>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="font-mono text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
                {totalExpeditionsCount}
              </span>
              <span className="text-xs font-semibold text-amber-400 font-mono">
                100% Sweep Supported
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-[#233144] bg-[#121924] p-4 sm:p-5 flex flex-col justify-between shadow-xl">
            <span className="text-[11px] font-mono text-slate-400 uppercase">SAFETY & COMMS</span>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="font-mono text-2xl sm:text-3xl font-extrabold text-emerald-400 tabular-nums">
                100%
              </span>
              <span className="text-xs font-mono text-slate-400">ATGATT Verified</span>
            </div>
          </div>
        </div>

        {/* Console Mode Selector Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#121924] border border-[#233144] rounded-xl text-xs max-w-fit">
          <button
            onClick={() => setAdminTab('members')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
              adminTab === 'members'
                ? 'bg-orange-500 text-white font-bold shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Users className="h-4 w-4" />
            <span>Rider Roster & Pass Management</span>
          </button>
          <button
            onClick={() => setAdminTab('attendance')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
              adminTab === 'attendance'
                ? 'bg-orange-500 text-white font-bold shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Compass className="h-4 w-4" />
            <span>Expedition Attendance & Sweep Check-in</span>
          </button>
          <button
            onClick={() => setAdminTab('field_readiness')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
              adminTab === 'field_readiness'
                ? 'bg-orange-500 text-white font-bold shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Wrench className="h-4 w-4" />
            <span>Field Sweep Readiness</span>
          </button>
        </div>

        {/* Tab 1: Rider Roster Table */}
        {adminTab === 'members' && (
          <div className="rounded-2xl border border-[#233144] bg-[#121924] overflow-hidden shadow-2xl">
            {/* Search and Filters Bar */}
            <div className="p-4 sm:p-5 border-b border-[#1e2a3b] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search name, callsign, bike, or ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-[#0c121a] border border-[#233144] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <span className="text-xs text-slate-400 font-mono">Status:</span>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="rounded-lg bg-[#0c121a] border border-[#233144] px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-orange-500 cursor-pointer"
                >
                  <option value="all">All Riders</option>
                  <option value="active">Active Verified</option>
                  <option value="expiring_soon">Expiring Soon</option>
                  <option value="expired">Renewal Due</option>
                </select>
              </div>
            </div>

            {/* Roster Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="border-b border-[#1e2a3b] bg-[#0c121a] font-mono uppercase text-slate-400 text-[10px]">
                  <tr>
                    <th className="px-4 py-3">Rider & Callsign</th>
                    <th className="px-4 py-3">Motorcycle</th>
                    <th className="px-4 py-3">Role</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Odometer</th>
                    <th className="px-4 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#182333]">
                  {filteredMembers.map((m) => {
                    const roleBadge = {
                      lead_scout: 'text-amber-400 font-bold',
                      road_captain: 'text-orange-400 font-bold',
                      member: 'text-slate-300'
                    }[m.role] || 'text-slate-300';

                    return (
                      <tr key={m.id} className="hover:bg-[#16202c] transition-colors">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <img
                              src={m.avatarUrl}
                              alt={m.name}
                              className="h-8 w-8 rounded-full object-cover border border-[#273548]"
                            />
                            <div>
                              <div className="font-semibold text-white">{m.name}</div>
                              <div className="font-mono text-[10px] text-orange-400">
                                {m.id} · {m.himalayanOsHandle || '@bmc_rider'}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-3">
                          <div className="font-medium text-slate-200">{m.bikeModel}</div>
                          <div className="text-[10px] text-slate-400 font-mono">{m.bikeCategory}</div>
                        </td>

                        <td className="px-4 py-3">
                          <span className={`text-[11px] font-mono uppercase ${roleBadge}`}>
                            {m.role.replace('_', ' ')}
                          </span>
                        </td>

                        <td className="px-4 py-3">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[#273548] bg-[#0e1520] text-emerald-400">
                            {m.membershipStatus.toUpperCase()}
                          </span>
                        </td>

                        <td className="px-4 py-3 font-mono text-white tabular-nums">
                          {(m.stats?.odometerKm || m.totalKmRidden || 0).toLocaleString()} KM
                        </td>

                        <td className="px-4 py-3 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => onOpenEditMember(m)}
                              title="Edit Rider Dossier"
                              className="p-1.5 rounded-lg border border-[#233144] bg-[#0c121a] hover:border-orange-500/50 text-slate-300 hover:text-white transition-colors cursor-pointer"
                            >
                              <Edit2 className="h-3.5 w-3.5 text-orange-400" />
                            </button>

                            <button
                              onClick={() => extendMembership(m.id, 3)}
                              title="Extend Patron Support"
                              className="p-1.5 rounded-lg border border-[#233144] bg-[#0c121a] hover:border-emerald-500/50 text-slate-300 hover:text-white transition-colors cursor-pointer"
                            >
                              <RefreshCw className="h-3.5 w-3.5 text-emerald-400" />
                            </button>

                            {confirmDeleteId === m.id ? (
                              <button
                                onClick={() => {
                                  deleteMember(m.id);
                                  setConfirmDeleteId(null);
                                }}
                                className="px-2 py-1 text-[10px] bg-red-600 text-white font-bold rounded cursor-pointer"
                              >
                                Confirm
                              </button>
                            ) : (
                              <button
                                onClick={() => setConfirmDeleteId(m.id)}
                                title="Remove Rider"
                                className="p-1.5 rounded-lg border border-[#233144] bg-[#0c121a] hover:border-red-500/50 text-slate-400 hover:text-red-400 transition-colors cursor-pointer"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Attendance Check-in */}
        {adminTab === 'attendance' && (
          <div className="rounded-2xl border border-[#233144] bg-[#121924] p-6 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1e2a3b]">
              <div>
                <h3 className="font-display font-bold text-white text-lg">Kickstand Roll Call</h3>
                <p className="text-xs text-slate-400">Verify attendance and ATGATT safety compliance before flag-off.</p>
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={selectedRideId}
                  onChange={(e) => setSelectedRideId(e.target.value)}
                  className="rounded-lg bg-[#0c121a] border border-[#233144] px-3 py-1.5 text-xs text-white focus:outline-none focus:border-orange-500 cursor-pointer"
                >
                  {rides.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.title} ({r.date})
                    </option>
                  ))}
                </select>

                <button
                  onClick={exportAttendanceCSV}
                  className="btn-secondary px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1 cursor-pointer"
                >
                  <Download className="h-3.5 w-3.5 text-orange-400" />
                  <span>Export</span>
                </button>
              </div>
            </div>

            {/* Attendance Roster */}
            <div className="space-y-3">
              {activeRide.rsvps.map((rsvp) => {
                const record = activeRide.attendance.find((a) => a.memberId === rsvp.memberId);
                const currentStatus = record?.status || 'absent';

                return (
                  <div
                    key={rsvp.memberId}
                    className="p-3.5 rounded-xl border border-[#1e2a3b] bg-[#0c121a] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                  >
                    <div>
                      <div className="font-semibold text-white">{rsvp.memberName}</div>
                      <div className="text-[11px] font-mono text-orange-400">
                        {rsvp.memberId} · {rsvp.bikeModel || 'Motorcycle'}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateAttendance(activeRide.id, rsvp.memberId, 'present')}
                        className={`px-3 py-1 rounded font-bold text-xs cursor-pointer ${
                          currentStatus === 'present'
                            ? 'bg-emerald-500 text-white'
                            : 'bg-[#16202c] border border-[#233144] text-slate-300 hover:text-white'
                        }`}
                      >
                        Present
                      </button>

                      <button
                        onClick={() => updateAttendance(activeRide.id, rsvp.memberId, 'marshal')}
                        className={`px-3 py-1 rounded font-bold text-xs cursor-pointer ${
                          currentStatus === 'marshal'
                            ? 'bg-amber-500 text-white'
                            : 'bg-[#16202c] border border-[#233144] text-slate-300 hover:text-white'
                        }`}
                      >
                        Road Captain / Sweep
                      </button>

                      <button
                        onClick={() => updateAttendance(activeRide.id, rsvp.memberId, 'absent')}
                        className={`px-3 py-1 rounded font-bold text-xs cursor-pointer ${
                          currentStatus === 'absent'
                            ? 'bg-slate-700 text-slate-300'
                            : 'bg-[#16202c] border border-[#233144] text-slate-400 hover:text-white'
                        }`}
                      >
                        Absent
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 3: Field Sweep Readiness */}
        {adminTab === 'field_readiness' && (
          <div className="rounded-2xl border border-[#233144] bg-[#121924] p-6 shadow-2xl space-y-6">
            <div className="pb-3 border-b border-[#1e2a3b]">
              <h3 className="font-display font-bold text-white text-lg">Trail Sweep & Recovery Status</h3>
              <p className="text-xs text-slate-400">Field logistics checklist for the trailing 4x4 recovery truck and medical team.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-[#1e2a3b] bg-[#0c121a] space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-xs">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Trailing 4x4 Recovery Truck</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Mahindra Thar 4x4 with recovery winch, ramps, and dual-motorcycle tie-down bed. Verified fueled and staged.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[#1e2a3b] bg-[#0c121a] space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-xs">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Wilderness Medical Kit</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Splints, burn dressings, chest seals, sterile saline eye washes for desert dust, and oxygen canister inspected by Dr. Hetal Bhatt.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[#1e2a3b] bg-[#0c121a] space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-xs">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Mechanical Spares Stash</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  21-inch, 19-inch, and 17-inch heavy-duty tubes, puncture vulcanizing kit, 520 master links, 10W-50 oil, and 12V air compressors.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
