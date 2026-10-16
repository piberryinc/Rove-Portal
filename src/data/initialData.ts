import { Member, RideEvent, PartnerPerk } from '../types';

export const INITIAL_MEMBERS: Member[] = [
  {
    id: 'BMC-2026-0001',
    name: 'Vikramsinh Jadeja',
    email: 'scout@bhujmotoclub.org',
    phone: '+91 94260 11223',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    bikeModel: 'Royal Enfield Himalayan 450 Kamet White',
    bikeCategory: 'Adventure (ADV)',
    bloodGroup: 'O+',
    area: 'Jubilee Ground, Bhuj',
    bio: 'Lead Scout at Bhuj Moto Club. 14 years exploring the uncharted sand washes, salt trails, and ancient passes of Kutch and the Thar. Passionate about wilderness navigation, HimalayanOS mesh comms, and mentoring rookie riders.',
    joinedDate: '2025-01-10',
    membershipStatus: 'active',
    membershipExpiry: '2027-01-10',
    planName: 'Patron Supporter',
    totalKmRidden: 28400,
    ridesAttended: 48,
    elevationGainM: 14200,
    role: 'lead_scout',
    emergencyContact: {
      name: 'Riddhi Jadeja',
      phone: '+91 94260 88776',
      relation: 'Spouse',
    },
    qrCodeData: 'BMC-SCOUT:BMC-2026-0001:VIKRAMSINH-JADEJA:LEAD-SCOUT',
    himalayanOsHandle: '@vikram_scout',
    stats: {
      odometerKm: 28400,
      longestExpeditionKm: 680,
      trailAssistsCount: 34,
      desertBivouacsCount: 19,
    },
    achievements: [
      { id: 'ach-v1', title: 'Great Rann Pioneer', description: 'Mapped and validated 12 GPS overland corridors across the Kutch salt basin', badgeType: 'gold', dateEarned: '2025-11-12' },
      { id: 'ach-v2', title: 'HimalayanOS Architect', description: 'Co-developed club offline topographic mesh nodes for desert dead zones', badgeType: 'special', dateEarned: '2026-01-15' },
      { id: 'ach-v3', title: 'Iron Sweep Commander', description: 'Marshaled 40+ group throttle runs with 100% zero-drop safety record', badgeType: 'gold', dateEarned: '2026-06-30' }
    ]
  },
  {
    id: 'BMC-2026-0101',
    name: 'Devendra Zala',
    email: 'devendra.zala@kutchriders.in',
    phone: '+91 98251 44820',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    bikeModel: 'BMW F 850 GS Adventure Triple Black',
    bikeCategory: 'Adventure (ADV)',
    bloodGroup: 'B+',
    area: 'Mundra Relocation Site, Bhuj',
    bio: 'Long-haul tourer chasing early morning sunrises across the salt flat horizons. Believer in strict ATGATT, technical throttle control, and endless cups of ginger tea at remote desert highway dhabas.',
    joinedDate: '2026-07-15',
    membershipStatus: 'active',
    membershipExpiry: '2026-11-15',
    planName: 'Patron Supporter',
    totalKmRidden: 14850,
    ridesAttended: 22,
    elevationGainM: 9200,
    role: 'member',
    emergencyContact: {
      name: 'Raghav Zala',
      phone: '+91 98251 99312',
      relation: 'Brother',
    },
    qrCodeData: 'BMC-MEMBER:BMC-2026-0101:DEVENDRA-ZALA:EXP-2026-11-15',
    himalayanOsHandle: '@dev_zala_gs',
    stats: {
      odometerKm: 14850,
      longestExpeditionKm: 520,
      trailAssistsCount: 12,
      desertBivouacsCount: 8,
    },
    achievements: [
      { id: 'ach-1', title: 'White Rann Midnight Bivouac', description: 'Conquered the 240K Great Rann moonlit expedition under starry skies', badgeType: 'gold', dateEarned: '2026-08-20' },
      { id: 'ach-2', title: 'Kalo Dungar Peak Raid', description: 'Paced the high switchbacks up the highest point in Kutch', badgeType: 'silver', dateEarned: '2026-08-04' },
      { id: 'ach-3', title: 'ATGATT Master Guard', description: 'Completed 20 group runs with 100% full-armor gear compliance', badgeType: 'special', dateEarned: '2026-09-01' }
    ]
  },
  {
    id: 'BMC-2026-0102',
    name: 'Aarti Vaghela',
    email: 'aarti.vaghela@gmail.com',
    phone: '+91 97129 33411',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    bikeModel: 'KTM 390 Adventure SW Spoke Wheel',
    bikeCategory: 'Dual-Sport & Enduro',
    bloodGroup: 'A+',
    area: 'College Road, Bhuj',
    bio: 'Road Captain and wilderness first responder. Lives for technical riverbed gravel, rocky scrambles, and sand washes in Khari Nadi. Leads our safety workshops and gear inspections before major rallies.',
    joinedDate: '2026-08-01',
    membershipStatus: 'active',
    membershipExpiry: '2026-12-01',
    planName: 'Patron Supporter',
    totalKmRidden: 16400,
    ridesAttended: 26,
    elevationGainM: 11800,
    role: 'road_captain',
    emergencyContact: {
      name: 'Dharmesh Vaghela',
      phone: '+91 97129 99887',
      relation: 'Father',
    },
    qrCodeData: 'BMC-CAPTAIN:BMC-2026-0102:AARTI-VAGHELA:ROAD-CAPTAIN',
    himalayanOsHandle: '@aarti_captain',
    stats: {
      odometerKm: 16400,
      longestExpeditionKm: 460,
      trailAssistsCount: 28,
      desertBivouacsCount: 14,
    },
    achievements: [
      { id: 'ach-a1', title: 'Khari Nadi Gorge Scout', description: 'Led 18 riders through tricky sandstone riverbeds with zero spills', badgeType: 'gold', dateEarned: '2026-08-15' },
      { id: 'ach-a2', title: 'Wilderness Trauma First Responder', description: 'Certified EMT level 2 rider trained in field fracture stabilization', badgeType: 'special', dateEarned: '2026-08-01' }
    ]
  },
  {
    id: 'BMC-2026-0103',
    name: 'Mehul Patel',
    email: 'mehul.patel@outlook.com',
    phone: '+91 98982 77654',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    bikeModel: 'Triumph Scrambler 400X Khaki Green',
    bikeCategory: 'Scrambler & Classic',
    bloodGroup: 'B+',
    area: 'Madhapar Highway, Bhuj',
    bio: 'Scrambler enthusiast and overland photography nerd. Enjoys fast highway sweepers transitioning into rugged dirt trails, capturing the raw beauty of Kutch on 35mm film.',
    joinedDate: '2026-07-20',
    membershipStatus: 'active',
    membershipExpiry: '2026-11-20',
    planName: 'Patron Supporter',
    totalKmRidden: 11200,
    ridesAttended: 17,
    elevationGainM: 7200,
    role: 'member',
    emergencyContact: {
      name: 'Kavita Patel',
      phone: '+91 98982 11234',
      relation: 'Sister',
    },
    qrCodeData: 'BMC-MEMBER:BMC-2026-0103:MEHUL-PATEL:EXP-2026-11-20',
    himalayanOsHandle: '@mehul_scrambler',
    stats: {
      odometerKm: 11200,
      longestExpeditionKm: 420,
      trailAssistsCount: 7,
      desertBivouacsCount: 5,
    },
    achievements: [
      { id: 'ach-m1', title: 'Mandvi Coastal Throttle', description: 'Completed high-speed 185K cross-district sweep along the Arabian sea', badgeType: 'silver', dateEarned: '2026-08-28' }
    ]
  },
  {
    id: 'BMC-2026-0104',
    name: 'Pooja Danicha',
    email: 'pooja.danicha@gmail.com',
    phone: '+91 94088 12399',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    bikeModel: 'Royal Enfield Interceptor 650 Canyon Red',
    bikeCategory: 'Tourer & Cruiser',
    bloodGroup: 'AB+',
    area: 'Prag Mahal Heritage Quarter, Bhuj',
    bio: 'Twin-cylinder cruiser devotee. Loves the deep burble of the 650 parallel twin echoing off ancient fort walls and rolling across the wide open salt highways.',
    joinedDate: '2026-07-02',
    membershipStatus: 'expiring_soon',
    membershipExpiry: '2026-10-25',
    planName: 'Patron Supporter',
    totalKmRidden: 8900,
    ridesAttended: 14,
    elevationGainM: 5100,
    role: 'member',
    emergencyContact: {
      name: 'Jatin Danicha',
      phone: '+91 94088 99882',
      relation: 'Spouse',
    },
    qrCodeData: 'BMC-MEMBER:BMC-2026-0104:POOJA-DANICHA:EXP-2026-10-25',
    himalayanOsHandle: '@pooja_650',
    stats: {
      odometerKm: 8900,
      longestExpeditionKm: 340,
      trailAssistsCount: 4,
      desertBivouacsCount: 3,
    },
    achievements: [
      { id: 'ach-p1', title: 'Hamirsar Sunset Cruiser', description: 'Marshaled 10 heritage city throttle strolls', badgeType: 'bronze', dateEarned: '2026-09-12' }
    ]
  },
  {
    id: 'BMC-2026-0105',
    name: 'Karan Thacker',
    email: 'karan.thacker@yahoo.co.in',
    phone: '+91 99240 55112',
    avatarUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80',
    bikeModel: 'Hero XPulse 200 4V Pro Rally Edition',
    bikeCategory: 'Dual-Sport & Enduro',
    bloodGroup: 'O-',
    area: 'Mirzapar Road, Bhuj',
    bio: 'Hard enduro rider who considers paved roads mere transit stages to reach sand dunes and boulder washes. Master of field tyre changes and emergency tube vulcanizing.',
    joinedDate: '2026-06-15',
    membershipStatus: 'active',
    membershipExpiry: '2026-12-15',
    planName: 'Patron Supporter',
    totalKmRidden: 9400,
    ridesAttended: 16,
    elevationGainM: 8400,
    role: 'member',
    emergencyContact: {
      name: 'Hitesh Thacker',
      phone: '+91 99240 11990',
      relation: 'Father',
    },
    qrCodeData: 'BMC-MEMBER:BMC-2026-0105:KARAN-THACKER:EXP-2026-12-15',
    himalayanOsHandle: '@karan_xpulse',
    stats: {
      odometerKm: 9400,
      longestExpeditionKm: 380,
      trailAssistsCount: 19,
      desertBivouacsCount: 7,
    },
    achievements: [
      { id: 'ach-k1', title: 'Sandwash Dune Conqueror', description: 'Traversed the tricky Banni grassland sands without bogging down', badgeType: 'bronze', dateEarned: '2026-07-10' }
    ]
  },
  {
    id: 'BMC-2026-0106',
    name: 'Dr. Hetal Bhatt',
    email: 'dr.hetal.bhatt@bhujclinic.org',
    phone: '+91 98242 88123',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    bikeModel: 'Ducati DesertX Star White Silk',
    bikeCategory: 'Adventure (ADV)',
    bloodGroup: 'O+',
    area: 'Hospital Road, Bhuj',
    bio: 'Trauma surgeon by profession, adventure rallyist on weekends. Firm advocate that adventure riding in open landscapes is the finest therapy for the soul. Active advisor for our emergency sweep medical kit.',
    joinedDate: '2026-08-10',
    membershipStatus: 'active',
    membershipExpiry: '2026-11-10',
    planName: 'Patron Supporter',
    totalKmRidden: 13200,
    ridesAttended: 19,
    elevationGainM: 9800,
    role: 'member',
    emergencyContact: {
      name: 'Manish Bhatt',
      phone: '+91 98242 33445',
      relation: 'Spouse',
    },
    qrCodeData: 'BMC-MEMBER:BMC-2026-0106:HETAL-BHATT:EXP-2026-11-10',
    himalayanOsHandle: '@doc_desertx',
    stats: {
      odometerKm: 13200,
      longestExpeditionKm: 580,
      trailAssistsCount: 15,
      desertBivouacsCount: 9,
    },
    achievements: [
      { id: 'ach-h1', title: 'Expedition Medical Lead', description: 'Equipped and inspected 8 remote desert raid trauma bags', badgeType: 'gold', dateEarned: '2026-09-22' }
    ]
  },
  {
    id: 'BMC-2026-0107',
    name: 'Jayesh Solanki',
    email: 'jayesh.solanki@gmail.com',
    phone: '+91 94278 44001',
    avatarUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80',
    bikeModel: 'Honda Transalp XL750 Ross White',
    bikeCategory: 'Adventure (ADV)',
    bloodGroup: 'A-',
    area: 'Anjar Highway Junction, Bhuj',
    bio: 'Road Captain and veteran mechanic. Known for carrying a complete toolbox in his heavy-duty aluminum side cases. Can diagnose a carburettor cough or ECU sensor quirk by ear.',
    joinedDate: '2026-08-20',
    membershipStatus: 'active',
    membershipExpiry: '2026-11-20',
    planName: 'Patron Supporter',
    totalKmRidden: 17800,
    ridesAttended: 24,
    elevationGainM: 12100,
    role: 'road_captain',
    emergencyContact: {
      name: 'Pravin Solanki',
      phone: '+91 94278 77665',
      relation: 'Brother',
    },
    qrCodeData: 'BMC-CAPTAIN:BMC-2026-0107:JAYESH-SOLANKI:ROAD-CAPTAIN',
    himalayanOsHandle: '@jayesh_transalp',
    stats: {
      odometerKm: 17800,
      longestExpeditionKm: 620,
      trailAssistsCount: 42,
      desertBivouacsCount: 16,
    },
    achievements: [
      { id: 'ach-j1', title: 'Master Trail Wrench', description: 'Rescued 14 disabled motorcycles in remote desert washouts with field fabrication', badgeType: 'gold', dateEarned: '2026-09-05' }
    ]
  }
];

export const INITIAL_RIDES: RideEvent[] = [
  {
    id: 'RIDE-2026-1001',
    title: 'Great Rann Dawn Throttle 160K Expedition',
    date: '2026-10-24',
    time: '05:00 AM IST (KSU 05:30 AM)',
    assemblyPoint: 'Hamirsar Lake Promenade, West Gate, Bhuj',
    assemblyCoords: { lat: 23.2504, lng: 69.6642 },
    destination: 'White Desert Salt Outpost & Khavda Highway',
    destinationCoords: { lat: 23.8858, lng: 69.8322 },
    distanceKm: 160,
    elevationM: 380,
    pacePacing: 'Cruising 75-90 km/h · Staggered Formation',
    terrain: 'Desert Highway',
    isPaidRide: false,
    nonMemberFee: 0,
    supportVehicle: true,
    mechanicalSupport: true,
    breakfastIncluded: true,
    rideLeader: 'Lead Scout Vikramsinh Jadeja & Road Captain Aarti Vaghela',
    maxSlots: 35,
    description: 'Our signature dawn throttle run slicing through the tranquil salt plains of Kutch. Experience the cool desert morning air as the horizon glows gold. Backed by our trailing 4x4 recovery truck with spare fuel, tyre changers, high-pressure inflators, and hot Kathiyawadi breakfast at Bhirandiyara.',
    routeHighlights: [
      'Hamirsar Lake Assembly & Safety Briefing',
      'Rudramata Dam Fast Asphalt Sweep',
      'Bhirandiyara Mawa & Chai Stop',
      'White Rann Outpost Salt Pan Gathering'
    ],
    status: 'upcoming',
    himalayanOsChannel: 'Ch 04 (Great Rann Mesh)',
    fuelRangeRequiredKm: 220,
    rsvps: [
      { memberId: 'BMC-2026-0101', memberName: 'Devendra Zala', bikeModel: 'BMW F 850 GS', status: 'going', updatedAt: '2026-10-14' },
      { memberId: 'BMC-2026-0102', memberName: 'Aarti Vaghela', bikeModel: 'KTM 390 Adventure', status: 'going', updatedAt: '2026-10-14' },
      { memberId: 'BMC-2026-0103', memberName: 'Mehul Patel', bikeModel: 'Triumph Scrambler 400X', status: 'going', updatedAt: '2026-10-15' },
      { memberId: 'BMC-2026-0106', memberName: 'Dr. Hetal Bhatt', bikeModel: 'Ducati DesertX', status: 'going', updatedAt: '2026-10-15' },
      { memberId: 'BMC-2026-0107', memberName: 'Jayesh Solanki', bikeModel: 'Honda Transalp XL750', status: 'going', updatedAt: '2026-10-16' }
    ],
    attendance: []
  },
  {
    id: 'RIDE-2026-1002',
    title: 'Kalo Dungar Peak Raid & Black Hills Switchbacks 140K',
    date: '2026-10-28',
    time: '05:30 AM IST (KSU 06:00 AM)',
    assemblyPoint: 'Bhujia Fort Royal Base, Bhuj',
    assemblyCoords: { lat: 23.2435, lng: 69.6912 },
    destination: 'Kalo Dungar Highest Peak Watchpoint (462m)',
    destinationCoords: { lat: 23.9050, lng: 69.8050 },
    distanceKm: 140,
    elevationM: 880,
    pacePacing: 'Technical Ghats & Mountain Corridors',
    terrain: 'Ghat Switchbacks',
    isPaidRide: false,
    nonMemberFee: 0,
    supportVehicle: true,
    mechanicalSupport: true,
    breakfastIncluded: false,
    rideLeader: 'Road Captain Aarti Vaghela',
    maxSlots: 30,
    description: 'Technical hill climb up the highest geographical elevation in Kutch. Tight hairpin switchbacks, panoramic views overlooking the shimmering northern Rann, and testing body positioning and engine braking. Strict ATGATT required.',
    routeHighlights: [
      'Bhujia Hill Base Muster',
      'Khavda Ascent & Gravity Hill Phenomenon',
      'Dattatreya Temple Viewpoint Summit',
      'Hillside Village Chai & Throttle Cool Down'
    ],
    status: 'upcoming',
    himalayanOsChannel: 'Ch 07 (Black Hills Repeater)',
    fuelRangeRequiredKm: 180,
    rsvps: [
      { memberId: 'BMC-2026-0101', memberName: 'Devendra Zala', bikeModel: 'BMW F 850 GS', status: 'going', updatedAt: '2026-10-15' },
      { memberId: 'BMC-2026-0102', memberName: 'Aarti Vaghela', bikeModel: 'KTM 390 Adventure', status: 'going', updatedAt: '2026-10-14' },
      { memberId: 'BMC-2026-0105', memberName: 'Karan Thacker', bikeModel: 'Hero XPulse 200 4V', status: 'going', updatedAt: '2026-10-15' }
    ],
    attendance: []
  },
  {
    id: 'RIDE-2026-1003',
    title: 'Mandvi Arabian Coastline & Windmill Highway 190K',
    date: '2026-11-02',
    time: '05:15 AM IST (KSU 05:45 AM)',
    assemblyPoint: 'Jubilee Ground Pavilion, Bhuj',
    assemblyCoords: { lat: 23.2475, lng: 69.6690 },
    destination: 'Mandvi Wind Farm Beach & Vijay Vilas Palace',
    destinationCoords: { lat: 22.8333, lng: 69.3556 },
    distanceKm: 190,
    elevationM: 320,
    pacePacing: '80-100 km/h Open Highway Cruising',
    terrain: 'Desert Highway',
    isPaidRide: false,
    nonMemberFee: 0,
    supportVehicle: true,
    mechanicalSupport: true,
    breakfastIncluded: true,
    rideLeader: 'Lead Scout Vikramsinh Jadeja & Road Captain Jayesh Solanki',
    maxSlots: 40,
    description: 'Fast, smooth cross-district sweep connecting Bhuj to the Arabian Sea coastline. Rolling sea breezes, the colossal turbines of Mandvi Wind Farm, and beachfront breakfast with fresh coconut water and warm parathas.',
    routeHighlights: [
      'Bhuj Jubilee Flag-off',
      'Deshalpar Fast Highway Sweep',
      'Mandvi Coastal Windmill Boulevard',
      'Vijay Vilas Historic Coastline Pitstop'
    ],
    status: 'upcoming',
    himalayanOsChannel: 'Ch 02 (Coastal Nomad)',
    fuelRangeRequiredKm: 250,
    rsvps: [
      { memberId: 'BMC-2026-0103', memberName: 'Mehul Patel', bikeModel: 'Triumph Scrambler 400X', status: 'going', updatedAt: '2026-10-16' },
      { memberId: 'BMC-2026-0104', memberName: 'Pooja Danicha', bikeModel: 'RE Interceptor 650', status: 'going', updatedAt: '2026-10-16' },
      { memberId: 'BMC-2026-0106', memberName: 'Dr. Hetal Bhatt', bikeModel: 'Ducati DesertX', status: 'going', updatedAt: '2026-10-16' }
    ],
    attendance: []
  },
  {
    id: 'RIDE-2026-1004',
    title: 'Khari Nadi Sandstone Canyon Dual-Sport Rally 75K',
    date: '2026-11-08',
    time: '06:00 AM IST (KSU 06:30 AM)',
    assemblyPoint: 'Mirzapar Junction Highway Outpost, Bhuj',
    assemblyCoords: { lat: 23.2210, lng: 69.6420 },
    destination: 'Khari Nadi Sandstone Gorges & Dry Riverbed Wash',
    destinationCoords: { lat: 23.2185, lng: 69.5820 },
    distanceKm: 75,
    elevationM: 460,
    pacePacing: 'Technical Sand & Boulder Crawl · Dual-Sport Focused',
    terrain: 'Backcountry Riverbed & Sand',
    isPaidRide: false,
    nonMemberFee: 0,
    supportVehicle: true,
    mechanicalSupport: true,
    breakfastIncluded: false,
    rideLeader: 'Road Captain Aarti Vaghela & Karan Thacker',
    maxSlots: 20,
    description: 'Off-road exploration through the dramatic sandstone canyons and dry riverbeds of Khari Nadi. Deep sand berms, rock ledges, tyre pressure deflation coaching, and practicing recovery winch techniques with our 4x4 sweep Thar.',
    routeHighlights: [
      'Mirzapar Gravel Trailhead',
      'Khari Nadi Canyon Bottom Sand Wash',
      'Sandstone Overlook Plateau Bivouac Site',
      'Khedoi Backcountry Traverse'
    ],
    status: 'upcoming',
    himalayanOsChannel: 'Ch 09 (Enduro Tactical)',
    fuelRangeRequiredKm: 120,
    rsvps: [
      { memberId: 'BMC-2026-0102', memberName: 'Aarti Vaghela', bikeModel: 'KTM 390 Adventure', status: 'going', updatedAt: '2026-10-15' },
      { memberId: 'BMC-2026-0105', memberName: 'Karan Thacker', bikeModel: 'Hero XPulse 200 4V', status: 'going', updatedAt: '2026-10-15' },
      { memberId: 'BMC-2026-0107', memberName: 'Jayesh Solanki', bikeModel: 'Honda Transalp XL750', status: 'going', updatedAt: '2026-10-16' }
    ],
    attendance: []
  },

  // Completed Story-Driven Rides
  {
    id: 'RIDE-2026-0922',
    title: 'The Great Rann Midnight Bivouac & Tropic of Cancer Raid',
    date: '2026-09-22',
    time: '04:30 PM Departure · Overnight Bivouac',
    assemblyPoint: 'Hamirsar Lake West Gate, Bhuj',
    assemblyCoords: { lat: 23.2504, lng: 69.6642 },
    destination: 'Northern Tropic of Cancer Line & Khavda Dunes',
    destinationCoords: { lat: 23.8440, lng: 69.7280 },
    distanceKm: 240,
    elevationM: 520,
    pacePacing: 'Endurance Touring & Night Salt Navigation',
    terrain: 'Salt Flats & Corrugations',
    isPaidRide: false,
    nonMemberFee: 0,
    supportVehicle: true,
    mechanicalSupport: true,
    breakfastIncluded: true,
    rideLeader: 'Lead Scout Vikramsinh Jadeja & Road Captain Aarti Vaghela',
    maxSlots: 25,
    description: 'An unforgettable overnight expedition into the silence of the White Desert. Rolling out at twilight, setting up campfire bivouacs under the Milky Way, and navigating the vast salt flats by starlight.',
    routeHighlights: [
      'Twilight flag-off from Bhuj city gates',
      'Crossing the Tropic of Cancer monument at dusk',
      'Wilderness bivouac campsite setup in the sand dunes',
      'Campfire brewing, stargazing, and dawn ride across the salt basin'
    ],
    status: 'completed',
    himalayanOsChannel: 'Ch 01 (Desert Mesh Alpha)',
    fuelRangeRequiredKm: 320,
    rsvps: [
      { memberId: 'BMC-2026-0001', memberName: 'Vikramsinh Jadeja', bikeModel: 'RE Himalayan 450', status: 'going', updatedAt: '2026-09-19' },
      { memberId: 'BMC-2026-0101', memberName: 'Devendra Zala', bikeModel: 'BMW F 850 GS', status: 'going', updatedAt: '2026-09-18' },
      { memberId: 'BMC-2026-0102', memberName: 'Aarti Vaghela', bikeModel: 'KTM 390 Adventure', status: 'going', updatedAt: '2026-09-18' },
      { memberId: 'BMC-2026-0103', memberName: 'Mehul Patel', bikeModel: 'Triumph Scrambler 400X', status: 'going', updatedAt: '2026-09-19' },
      { memberId: 'BMC-2026-0105', memberName: 'Karan Thacker', bikeModel: 'Hero XPulse 200 4V', status: 'going', updatedAt: '2026-09-19' },
      { memberId: 'BMC-2026-0106', memberName: 'Dr. Hetal Bhatt', bikeModel: 'Ducati DesertX', status: 'going', updatedAt: '2026-09-18' }
    ],
    attendance: [
      { memberId: 'BMC-2026-0001', memberName: 'Vikramsinh Jadeja', status: 'marshal', verifiedAt: '2026-09-22 16:15' },
      { memberId: 'BMC-2026-0101', memberName: 'Devendra Zala', status: 'present', verifiedAt: '2026-09-22 16:20' },
      { memberId: 'BMC-2026-0102', memberName: 'Aarti Vaghela', status: 'marshal', verifiedAt: '2026-09-22 16:15' },
      { memberId: 'BMC-2026-0103', memberName: 'Mehul Patel', status: 'present', verifiedAt: '2026-09-22 16:25' },
      { memberId: 'BMC-2026-0105', memberName: 'Karan Thacker', status: 'present', verifiedAt: '2026-09-22 16:22' },
      { memberId: 'BMC-2026-0106', memberName: 'Dr. Hetal Bhatt', status: 'present', verifiedAt: '2026-09-22 16:28' }
    ],
    story: {
      narrative: 'Twenty-four riders rolled out of Bhuj as the autumn sun dipped toward the horizon, casting crimson flares across the windscreen glass. As we crossed the Tropic of Cancer marker at kilometre 42, the highway surrendered to the endless expanse of the Great Rann. Riding in tight staggered formation with our HimalayanOS mesh comms linking the helmets, the desert fell completely quiet except for the deep exhaust pulses of our adventure singles and parallel twins. We pitched our canvas bivouacs on the rim of the dunes near Khavda, lit a dry acacia campfire, and shared hot rotla, garlic chutney, and spiced black tea under a sky ablaze with the Milky Way. At 5:15 AM, before the first dawn light, we fired the engines again to ride across the crystalline white salt crust as the sun rose like molten copper over the rim of the earth.',
      atmosphere: 'Crisp 16°C desert night breeze following a blistering 38°C afternoon. Total silence once the engines clicked off, punctuated only by crackling firewood and distant wild asses.',
      terrainLog: '160 km of fast, sweeping two-lane tarmac leading into 80 km of hard-packed salt crust, corrugations, and soft dune aprons. Cold tyre pressures dropped by 6 PSI for the sand traverse.',
      atgattAudit: '100% full-gear compliance verified at the Hamirsar staging gate: armored cordura jackets, knee-braced riding pants, waterproof dual-sport boots, and ECE/DOT helmets with dust goggles.',
      coverImage: '/src/assets/images/moto_desert_camp_1792180047148.jpg',
      galleryImages: [
        '/src/assets/images/moto_desert_camp_1792180047148.jpg',
        '/src/assets/images/kutch_moto_expedition_1792180029584.jpg',
        '/src/assets/images/moto_workshop_gear_1792180063776.jpg'
      ],
      riderQuotes: [
        {
          rider: 'Devendra Zala',
          bike: 'BMW F 850 GS Adventure',
          quote: 'When we shut off the throttles in the middle of the salt pan at 2:00 AM, the silence was deafening. You realize this is why we ride. Not for trophies, not for speed, but for this raw connection to the land and the brothers beside you.'
        },
        {
          rider: 'Dr. Hetal Bhatt',
          bike: 'Ducati DesertX',
          quote: 'The HimalayanOS mesh kept all 24 bikes connected across dead zones where phones had zero signal. It gives you the confidence to push deeper into the wilderness knowing the sweep crew is right there.'
        },
        {
          rider: 'Karan Thacker',
          bike: 'Hero XPulse 200 4V',
          quote: 'No dropped riders, no broken chains, zero egos. Just honest campfire brotherhood and the smell of desert dust on leather.'
        }
      ]
    }
  },
  {
    id: 'RIDE-2026-0910',
    title: 'The Road to Heaven & Harappan Salt Crossing 280K',
    date: '2026-09-10',
    time: '04:45 AM Departure',
    assemblyPoint: 'Jubilee Ground Pavilion, Bhuj',
    assemblyCoords: { lat: 23.2475, lng: 69.6690 },
    destination: 'Dholavira Ancient Citadel & Khavda Island Highway',
    destinationCoords: { lat: 23.8890, lng: 70.2100 },
    distanceKm: 280,
    elevationM: 410,
    pacePacing: '85-95 km/h Open Highway Paceline',
    terrain: 'Desert Highway',
    isPaidRide: false,
    nonMemberFee: 0,
    supportVehicle: true,
    mechanicalSupport: true,
    breakfastIncluded: true,
    rideLeader: 'Lead Scout Vikramsinh Jadeja & Road Captain Jayesh Solanki',
    maxSlots: 30,
    description: 'Traversing the legendary 30-kilometre dead-straight blacktop cutting directly through the shining white salt plains of Khadir Bet to the 5,000-year-old Harappan ruins of Dholavira.',
    routeHighlights: [
      '04:45 AM rollout from Bhuj Jubilee Pavilion',
      'The legendary 30km Road to Heaven causeway through the white salt lake',
      'Dholavira ancient water reservoirs & UNESCO world heritage exploration',
      'Sunset return via Rapar highway outpost'
    ],
    status: 'completed',
    himalayanOsChannel: 'Ch 03 (Heaven Causeway)',
    fuelRangeRequiredKm: 340,
    rsvps: [
      { memberId: 'BMC-2026-0001', memberName: 'Vikramsinh Jadeja', bikeModel: 'RE Himalayan 450', status: 'going', updatedAt: '2026-09-07' },
      { memberId: 'BMC-2026-0101', memberName: 'Devendra Zala', bikeModel: 'BMW F 850 GS', status: 'going', updatedAt: '2026-09-06' },
      { memberId: 'BMC-2026-0102', memberName: 'Aarti Vaghela', bikeModel: 'KTM 390 Adventure', status: 'going', updatedAt: '2026-09-06' },
      { memberId: 'BMC-2026-0104', memberName: 'Pooja Danicha', bikeModel: 'RE Interceptor 650', status: 'going', updatedAt: '2026-09-07' },
      { memberId: 'BMC-2026-0107', memberName: 'Jayesh Solanki', bikeModel: 'Honda Transalp XL750', status: 'going', updatedAt: '2026-09-07' }
    ],
    attendance: [
      { memberId: 'BMC-2026-0001', memberName: 'Vikramsinh Jadeja', status: 'marshal', verifiedAt: '2026-09-10 04:40' },
      { memberId: 'BMC-2026-0101', memberName: 'Devendra Zala', status: 'present', verifiedAt: '2026-09-10 04:42' },
      { memberId: 'BMC-2026-0102', memberName: 'Aarti Vaghela', status: 'present', verifiedAt: '2026-09-10 04:41' },
      { memberId: 'BMC-2026-0104', memberName: 'Pooja Danicha', status: 'present', verifiedAt: '2026-09-10 04:45' },
      { memberId: 'BMC-2026-0107', memberName: 'Jayesh Solanki', status: 'marshal', verifiedAt: '2026-09-10 04:38' }
    ],
    story: {
      narrative: 'There are few roads on this continent that evoke sheer awe like the causeway cutting across the Rann of Kutch to the ancient island of Khadir Bet. Riding the Road to Heaven feels like piloting through an optical infinity: pristine jet-black tarmac stretching into a mirage, framed on both flanks by blinding white salt that dissolves into the pale blue horizon. We held a steady 85 km/h staggered cruising formation, leaning into the crosswinds that whip off the Gulf of Kutch. At Dholavira, we rested beneath the ancient stone ramparts of an urban civilisation that understood water conservation five millennia ago, reflecting on the enduring spirit of human exploration.',
      atmosphere: 'Blinding white horizon under clear desert sun, dry 34°C heat with 40 km/h crosswinds on the causeway.',
      terrainLog: '280 km total distance. Pure highway surface with severe crosswinds requiring disciplined throttle management and body lean.',
      atgattAudit: 'All riders equipped with full-face tinted visors, hydration bladder backpacks, high-visibility arm bands, and CE-armored jackets.',
      coverImage: '/src/assets/images/kutch_moto_expedition_1792180029584.jpg',
      galleryImages: [
        '/src/assets/images/kutch_moto_expedition_1792180029584.jpg',
        '/src/assets/images/moto_workshop_gear_1792180063776.jpg',
        '/src/assets/images/moto_desert_camp_1792180047148.jpg'
      ],
      riderQuotes: [
        {
          rider: 'Vikramsinh Jadeja',
          bike: 'Royal Enfield Himalayan 450',
          quote: 'The Road to Heaven is where you truly understand throttle discipline. Crosswinds test your composure, and the scenery strips away every mundane distraction.'
        },
        {
          rider: 'Pooja Danicha',
          bike: 'Royal Enfield Interceptor 650',
          quote: 'The twin engine sang all the way to Khadir Bet. Having the lead scouts signaling every hazard 500 metres ahead made the long haul pure joy.'
        }
      ]
    }
  }
];

export const INITIAL_PARTNER_PERKS: PartnerPerk[] = [
  {
    id: 'PARTNER-01',
    partnerName: 'Desert Torque Motorcycle Works',
    category: 'Garage & Dyno Works',
    discount: 'Complimentary Pre-Ride Inspection & Spares Support',
    description: 'Master motorcycle garage specializing in Royal Enfield, KTM Adventure, and multi-cylinder ADV bikes. Offers comprehensive 28-point pre-expedition torque audits, valve clearances, spoke tensioning, chain slack adjustment, and priority roadside rescue staging.',
    location: 'Bhuj Station Road',
    address: 'Opp. Old Bus Terminal, Station Road, Bhuj, Kutch 370001',
    contact: '+91 94280 22331',
    badge: 'Official Club Technical Garage',
    coords: { lat: 23.2560, lng: 69.6730 }
  },
  {
    id: 'PARTNER-02',
    partnerName: 'Overland Moto Gear & Armor Studio',
    category: 'Armor & Riding Gear',
    discount: 'Rider Brotherhood Fittings & Safety Gear Audits',
    description: 'Dedicated ATGATT outfitter carrying ECE 22.06 certified helmets, Cordura armored jackets, CE Level 2 back protectors, waterproof touring boots, and heavy-duty luggage panniers. Free helmet sanitation, visor treatment, and ergonomic handlebar riser consultations.',
    location: 'College Road, Bhuj',
    address: 'Near Jubilee Ground, College Road, Bhuj 370001',
    contact: '+91 98252 87612',
    badge: 'ATGATT Gear Partner',
    coords: { lat: 23.2450, lng: 69.6640 }
  },
  {
    id: 'PARTNER-03',
    partnerName: 'Highway Nomad Rider Dhaba & Fuel Rest',
    category: 'Highway Dhaba & Pitstop',
    discount: 'Clubhouse Gathering Point & Pure Well Water Refills',
    description: 'The historic motorcycle staging post for Bhuj Moto Club. Secure parking for 50+ motorcycles, shaded paddock, cold buttermilk, Kathiyawadi hot rotla, and fresh ginger chai. Complimentary high-pressure air compressor for post-sandwash inflation.',
    location: 'Hamirsar Lake West Promenade',
    address: 'Shop 4, Lakeview Complex, Hamirsar, Bhuj 370001',
    contact: '+91 97140 55981',
    badge: 'Clubhouse Staging Point',
    coords: { lat: 23.2515, lng: 69.6610 }
  },
  {
    id: 'PARTNER-04',
    partnerName: 'Kutch Trailside Moto Medic & Suspension Hub',
    category: 'Suspension & Medical',
    discount: 'Emergency Field Recovery & ADV Suspension Tuning',
    description: 'Specialized overland suspension servicing, fork seal replacement, nitrogen rear-shock recharging, and wilderness medical trauma support. Stocks specialized off-road tube repair patches, tyre irons, and field first-aid splints.',
    location: 'Mirzapar Junction, Bhuj',
    address: 'Plot 12, Mirzapar Highway Corridor, Bhuj 370001',
    contact: '+91 94269 11099',
    badge: 'Expedition Medical & Recovery Partner',
    coords: { lat: 23.2210, lng: 69.6420 }
  }
];
