import React, { createContext, useContext, useState, useEffect } from 'react';
import { Member, RideEvent, PartnerPerk, UserRole, AttendanceStatus } from '../types';
import { INITIAL_MEMBERS, INITIAL_RIDES, INITIAL_PARTNER_PERKS } from '../data/initialData';

interface AppContextType {
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  currentMember: Member;
  setCurrentMemberId: (id: string) => void;
  members: Member[];
  rides: RideEvent[];
  partnerPerks: PartnerPerk[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  
  // Member CRUD
  addMember: (data: Partial<Member>) => Member;
  updateMember: (id: string, updates: Partial<Member>) => void;
  deleteMember: (id: string) => void;
  extendMembership: (id: string, months?: number) => void;
  
  // Rides & RSVP
  rsvpRide: (rideId: string, status: 'going' | 'interested' | 'declined') => void;
  addRide: (ride: Omit<RideEvent, 'id' | 'rsvps' | 'attendance'>) => RideEvent;
  updateRide: (rideId: string, updates: Partial<RideEvent>) => void;
  updateAttendance: (rideId: string, memberId: string, status: AttendanceStatus, notes?: string) => void;
  
  // Modals
  isCheckoutModalOpen: boolean;
  openCheckoutModal: () => void;
  closeCheckoutModal: () => void;
  isScannerModalOpen: boolean;
  scannerTargetMemberId: string | null;
  openScannerModal: (memberId?: string) => void;
  closeScannerModal: () => void;
  isEditProfileModalOpen: boolean;
  openEditProfileModal: () => void;
  closeEditProfileModal: () => void;
  
  // Notification Toast
  notification: { message: string; type: 'success' | 'info' | 'warning' } | null;
  showNotification: (message: string, type?: 'success' | 'info' | 'warning') => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  MEMBERS: 'bmc_members_v2',
  RIDES: 'bmc_rides_v2',
  ROLE: 'bmc_user_role_v2',
  CURRENT_MEMBER: 'bmc_current_member_id_v2',
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [members, setMembers] = useState<Member[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.MEMBERS);
      return saved ? JSON.parse(saved) : INITIAL_MEMBERS;
    } catch {
      return INITIAL_MEMBERS;
    }
  });

  const [rides, setRides] = useState<RideEvent[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.RIDES);
      return saved ? JSON.parse(saved) : INITIAL_RIDES;
    } catch {
      return INITIAL_RIDES;
    }
  });

  const [userRole, setUserRoleState] = useState<UserRole>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ROLE);
      return (saved as UserRole) || 'guest';
    } catch {
      return 'guest';
    }
  });

  const [currentMemberId, setCurrentMemberIdState] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CURRENT_MEMBER);
      return saved || 'BMC-2026-0101';
    } catch {
      return 'BMC-2026-0101';
    }
  });

  const [activeTab, setActiveTab] = useState<string>('home');
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [isScannerModalOpen, setIsScannerModalOpen] = useState(false);
  const [scannerTargetMemberId, setScannerTargetMemberId] = useState<string | null>(null);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'info' | 'warning' } | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.MEMBERS, JSON.stringify(members));
    } catch (e) {
      console.warn('Storage sync failed', e);
    }
  }, [members]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.RIDES, JSON.stringify(rides));
    } catch (e) {
      console.warn('Storage sync failed', e);
    }
  }, [rides]);

  const setUserRole = (role: UserRole) => {
    setUserRoleState(role);
    try {
      localStorage.setItem(STORAGE_KEYS.ROLE, role);
    } catch {}
    if (role === 'member') {
      setActiveTab('member-portal');
      showNotification('Switched to Club Rider profile (Devendra Zala)', 'info');
    } else if (role === 'admin') {
      setActiveTab('admin-portal');
      showNotification('Switched to Lead Scout Console (Vikramsinh Jadeja)', 'info');
    } else {
      setActiveTab('home');
      showNotification('Exploring as Solo Rider', 'info');
    }
  };

  const setCurrentMemberId = (id: string) => {
    setCurrentMemberIdState(id);
    try {
      localStorage.setItem(STORAGE_KEYS.CURRENT_MEMBER, id);
    } catch {}
  };

  const currentMember = members.find((m) => m.id === currentMemberId) || members[0] || INITIAL_MEMBERS[0];

  const showNotification = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification((curr) => (curr?.message === message ? null : curr));
    }, 4000);
  };

  const addMember = (data: Partial<Member>): Member => {
    const today = new Date();
    const expiry = new Date();
    expiry.setDate(today.getDate() + 90); // 3 months

    const nextNum = members.length + 100;
    const newId = `BMC-2026-0${nextNum}`;
    
    const newMember: Member = {
      id: newId,
      name: data.name || 'New Rider',
      email: data.email || 'rider@bhujmotoclub.org',
      phone: data.phone || '+91 98000 00000',
      avatarUrl: data.avatarUrl || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80',
      bikeModel: data.bikeModel || 'Royal Enfield Himalayan 450',
      bikeCategory: data.bikeCategory || 'Adventure (ADV)',
      bloodGroup: data.bloodGroup || 'B+',
      area: data.area || 'Bhuj, Kutch',
      joinedDate: today.toISOString().split('T')[0],
      membershipStatus: 'active',
      membershipExpiry: expiry.toISOString().split('T')[0],
      planName: 'Patron Supporter',
      totalKmRidden: 0,
      ridesAttended: 0,
      elevationGainM: 0,
      role: 'member',
      himalayanOsHandle: `@rider_${nextNum}`,
      emergencyContact: data.emergencyContact || {
        name: 'Emergency Contact',
        phone: '+91 98000 00000',
        relation: 'Family'
      },
      qrCodeData: `BMC-VERIFIED:${newId}:${(data.name || 'NEW-RIDER').toUpperCase()}:EXP-${expiry.toISOString().split('T')[0]}`
    };

    setMembers((prev) => [newMember, ...prev]);
    showNotification(`Rider ${newMember.name} inducted into Bhuj Moto Club with callsign ${newMember.id}!`, 'success');
    return newMember;
  };

  const updateMember = (id: string, updates: Partial<Member>) => {
    setMembers((prev) =>
      prev.map((m) => {
        if (m.id === id) {
          const updated = { ...m, ...updates };
          updated.qrCodeData = `BMC-VERIFIED:${updated.id}:${updated.name.toUpperCase().replace(/\s+/g, '-')}:EXP-${updated.membershipExpiry}`;
          return updated;
        }
        return m;
      })
    );
    showNotification(`Rider profile updated!`, 'success');
  };

  const deleteMember = (id: string) => {
    const target = members.find((m) => m.id === id);
    setMembers((prev) => prev.filter((m) => m.id !== id));
    showNotification(`Rider ${target?.name || id} removed from club roster.`, 'info');
  };

  const extendMembership = (id: string, months = 3) => {
    setMembers((prev) =>
      prev.map((m) => {
        if (m.id === id) {
          const baseDate = new Date(m.membershipExpiry) > new Date() ? new Date(m.membershipExpiry) : new Date();
          baseDate.setDate(baseDate.getDate() + months * 30);
          const newExpiryStr = baseDate.toISOString().split('T')[0];
          return {
            ...m,
            membershipExpiry: newExpiryStr,
            membershipStatus: 'active',
            qrCodeData: `BMC-VERIFIED:${m.id}:${m.name.toUpperCase().replace(/\s+/g, '-')}:EXP-${newExpiryStr}`
          };
        }
        return m;
      })
    );
    showNotification(`Patron support extended by ${months} months! Status: Active.`, 'success');
  };

  const rsvpRide = (rideId: string, status: 'going' | 'interested' | 'declined') => {
    const activeMember = userRole === 'admin' ? members.find((m) => m.role === 'lead_scout') || currentMember : currentMember;
    
    setRides((prev) =>
      prev.map((ride) => {
        if (ride.id === rideId) {
          const existingIndex = ride.rsvps.findIndex((r) => r.memberId === activeMember.id);
          const newRsvps = [...ride.rsvps];
          const newEntry = {
            memberId: activeMember.id,
            memberName: activeMember.name,
            avatarUrl: activeMember.avatarUrl,
            bikeModel: activeMember.bikeModel,
            status,
            updatedAt: new Date().toISOString().split('T')[0]
          };

          if (existingIndex >= 0) {
            newRsvps[existingIndex] = newEntry;
          } else {
            newRsvps.push(newEntry);
          }

          return { ...ride, rsvps: newRsvps };
        }
        return ride;
      })
    );

    const labels = { going: 'Confirmed! Throttle locked for this expedition', interested: 'Marked on radar', declined: 'RSVP updated' };
    showNotification(`${labels[status]}`, 'success');
  };

  const addRide = (rideData: Omit<RideEvent, 'id' | 'rsvps' | 'attendance'>): RideEvent => {
    const nextRideNum = rides.length + 1010;
    const newRide: RideEvent = {
      ...rideData,
      id: `RIDE-2026-${nextRideNum}`,
      rsvps: [],
      attendance: []
    };
    setRides((prev) => [newRide, ...prev]);
    showNotification(`New expedition "${newRide.title}" mapped and briefed!`, 'success');
    return newRide;
  };

  const updateRide = (rideId: string, updates: Partial<RideEvent>) => {
    setRides((prev) =>
      prev.map((r) => (r.id === rideId ? { ...r, ...updates } : r))
    );
    showNotification('Expedition briefing updated!', 'success');
  };

  const updateAttendance = (rideId: string, memberId: string, status: AttendanceStatus, notes?: string) => {
    const member = members.find((m) => m.id === memberId);
    if (!member) return;

    setRides((prev) =>
      prev.map((ride) => {
        if (ride.id === rideId) {
          const existingIndex = ride.attendance.findIndex((a) => a.memberId === memberId);
          const newAttendance = [...ride.attendance];
          const record = {
            memberId,
            memberName: member.name,
            status,
            verifiedAt: status === 'present' || status === 'marshal' ? new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : undefined,
            notes
          };

          if (existingIndex >= 0) {
            newAttendance[existingIndex] = record;
          } else {
            newAttendance.push(record);
          }

          return { ...ride, attendance: newAttendance };
        }
        return ride;
      })
    );

    if (status === 'present' || status === 'marshal') {
      const ride = rides.find((r) => r.id === rideId);
      if (ride) {
        setMembers((prev) =>
          prev.map((m) => {
            if (m.id === memberId) {
              return {
                ...m,
                ridesAttended: m.ridesAttended + 1,
                totalKmRidden: m.totalKmRidden + ride.distanceKm,
                elevationGainM: m.elevationGainM + ride.elevationM
              };
            }
            return m;
          })
        );
      }
    }

    showNotification(`Kickstand check-in for ${member.name} marked as ${status.toUpperCase()}.`, 'info');
  };

  const openCheckoutModal = () => setIsCheckoutModalOpen(true);
  const closeCheckoutModal = () => setIsCheckoutModalOpen(false);

  const openScannerModal = (memberId?: string) => {
    setScannerTargetMemberId(memberId || null);
    setIsScannerModalOpen(true);
  };
  const closeScannerModal = () => {
    setIsScannerModalOpen(false);
    setScannerTargetMemberId(null);
  };

  const openEditProfileModal = () => setIsEditProfileModalOpen(true);
  const closeEditProfileModal = () => setIsEditProfileModalOpen(false);

  return (
    <AppContext.Provider
      value={{
        userRole,
        setUserRole,
        currentMember,
        setCurrentMemberId,
        members,
        rides,
        partnerPerks: INITIAL_PARTNER_PERKS,
        activeTab,
        setActiveTab,
        addMember,
        updateMember,
        deleteMember,
        extendMembership,
        rsvpRide,
        addRide,
        updateRide,
        updateAttendance,
        isCheckoutModalOpen,
        openCheckoutModal,
        closeCheckoutModal,
        isScannerModalOpen,
        scannerTargetMemberId,
        openScannerModal,
        closeScannerModal,
        isEditProfileModalOpen,
        openEditProfileModal,
        closeEditProfileModal,
        notification,
        showNotification
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
