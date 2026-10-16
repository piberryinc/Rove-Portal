export type MembershipStatus = 'active' | 'expiring_soon' | 'expired' | 'suspended';

export type UserRole = 'guest' | 'member' | 'admin';

export type BikeCategory =
  | 'Adventure (ADV)'
  | 'Tourer & Cruiser'
  | 'Dual-Sport & Enduro'
  | 'Scrambler & Classic';

export interface EmergencyContact {
  name: string;
  phone: string;
  relation: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  badgeType: 'gold' | 'silver' | 'bronze' | 'special';
  dateEarned: string;
}

export interface MemberStats {
  odometerKm: number;
  longestExpeditionKm: number;
  trailAssistsCount: number;
  desertBivouacsCount: number;
}

export interface Member {
  id: string; // e.g. BMC-2026-0101
  name: string;
  email: string;
  phone: string;
  avatarUrl: string;
  bikeModel: string;
  bikeCategory: BikeCategory;
  bloodGroup: string;
  area: string;
  bio?: string;
  joinedDate: string; // YYYY-MM-DD
  membershipStatus: MembershipStatus;
  membershipExpiry: string; // YYYY-MM-DD
  planName: string;
  totalKmRidden: number;
  ridesAttended: number;
  elevationGainM: number;
  role: 'member' | 'road_captain' | 'lead_scout';
  emergencyContact: EmergencyContact;
  qrCodeData: string;
  himalayanOsHandle?: string;
  achievements?: Achievement[];
  stats?: MemberStats;
}

export interface RideRSVP {
  memberId: string;
  memberName: string;
  avatarUrl?: string;
  bikeModel?: string;
  status: 'going' | 'interested' | 'declined';
  updatedAt: string;
}

export type AttendanceStatus = 'present' | 'absent' | 'dns' | 'marshal';

export interface AttendanceRecord {
  memberId: string;
  memberName: string;
  status: AttendanceStatus;
  verifiedAt?: string;
  notes?: string;
}

export interface LatLngLiteral {
  lat: number;
  lng: number;
}

export interface RideStory {
  narrative: string;
  atmosphere: string;
  terrainLog: string;
  atgattAudit: string;
  coverImage: string;
  galleryImages: string[];
  riderQuotes: {
    rider: string;
    bike: string;
    quote: string;
  }[];
}

export interface RideEvent {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  time: string;
  assemblyPoint: string;
  assemblyCoords?: LatLngLiteral;
  destination: string;
  destinationCoords?: LatLngLiteral;
  distanceKm: number;
  elevationM: number;
  pacePacing: string;
  terrain: 'Desert Highway' | 'Salt Flats & Corrugations' | 'Ghat Switchbacks' | 'Backcountry Riverbed & Sand';
  isPaidRide: boolean;
  nonMemberFee: number;
  supportVehicle: boolean;
  mechanicalSupport: boolean;
  breakfastIncluded: boolean;
  rideLeader: string;
  maxSlots: number;
  description: string;
  rsvps: RideRSVP[];
  attendance: AttendanceRecord[];
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  routeHighlights: string[];
  himalayanOsChannel?: string;
  fuelRangeRequiredKm?: number;
  story?: RideStory;
}

export interface PartnerPerk {
  id: string;
  partnerName: string;
  category: 'Garage & Dyno Works' | 'Armor & Riding Gear' | 'Highway Dhaba & Pitstop' | 'Suspension & Medical';
  discount: string;
  description: string;
  location: string;
  address: string;
  contact: string;
  badge: string;
  coords?: LatLngLiteral;
}
