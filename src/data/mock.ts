export type DeliveryStatus = 'pending' | 'in-transit' | 'delivered' | 'exception'

export interface Delivery {
  id: string
  trackingNumber: string
  recipient: string
  address: string
  city: string
  state: string
  status: DeliveryStatus
  driver: string
  route: string
  scheduledDate: string
  deliveredAt: string | null
  weight: string
  notes: string
}

export interface RouteRecord {
  id: string
  name: string
  driver: string
  region: string
  stops: number
  completed: number
  status: 'active' | 'complete' | 'unassigned'
  vehicleId: string
  startTime: string
  estimatedEnd: string
}

export interface TeamMember {
  id: string
  name: string
  avatar: string
  email: string
  role: string
  region: string
  status: 'active' | 'on-leave' | 'inactive'
  joined: string
  deliveries: number
}

export const deliveries: Delivery[] = [
  { id: 'd001', trackingNumber: 'MOM-224801', recipient: 'Amazon — CMH1 Fulfillment',    address: '6050 Gateway Blvd',       city: 'Groveport',  state: 'OH', status: 'delivered',  driver: 'Ashley Williams', route: 'RT-07', scheduledDate: '2026-03-27', deliveredAt: '2026-03-27T08:42:00', weight: '318 lbs', notes: '' },
  { id: 'd002', trackingNumber: 'MOM-224802', recipient: 'Amazon — CMH2 Sort Center',    address: '2600 Tradeport Blvd',     city: 'Columbus',   state: 'OH', status: 'delivered',  driver: 'Ashley Williams', route: 'RT-07', scheduledDate: '2026-03-27', deliveredAt: '2026-03-27T10:05:00', weight: '540 lbs', notes: 'Loading dock B' },
  { id: 'd003', trackingNumber: 'MOM-224803', recipient: 'Amazon — CMH3 Fulfillment',    address: '1000 Rickenbacker Pkwy W', city: 'Columbus',  state: 'OH', status: 'in-transit', driver: 'Ashley Williams', route: 'RT-07', scheduledDate: '2026-03-27', deliveredAt: null,                   weight: '412 lbs', notes: '' },
  { id: 'd004', trackingNumber: 'MOM-224804', recipient: 'Amazon — CMH4 Delivery Stn',   address: '5500 Crosswind Rd',       city: 'Columbus',   state: 'OH', status: 'in-transit', driver: 'Ashley Williams', route: 'RT-07', scheduledDate: '2026-03-27', deliveredAt: null,                   weight: '227 lbs', notes: 'Signature required' },
  { id: 'd005', trackingNumber: 'MOM-224805', recipient: 'Amazon — CMH5 Fulfillment',    address: '2900 Rohr Rd',            city: 'Grove City', state: 'OH', status: 'pending',    driver: 'Unassigned',      route: 'RT-09', scheduledDate: '2026-03-28', deliveredAt: null,                   weight: '601 lbs', notes: '' },
  { id: 'd006', trackingNumber: 'MOM-224806', recipient: 'Amazon — CMH6 Sort Center',    address: '4900 Perimeter Dr',       city: 'Columbus',   state: 'OH', status: 'pending',    driver: 'Unassigned',      route: 'RT-09', scheduledDate: '2026-03-28', deliveredAt: null,                   weight: '380 lbs', notes: 'Oversized pallet' },
  { id: 'd007', trackingNumber: 'MOM-224807', recipient: 'Amazon — LCK1 Air Hub',        address: '2260 Cargo Rd',           city: 'Columbus',   state: 'OH', status: 'exception',  driver: 'Ashley Williams', route: 'RT-07', scheduledDate: '2026-03-26', deliveredAt: null,                   weight: '175 lbs', notes: 'Access gate code rejected — contact site ops' },
  { id: 'd008', trackingNumber: 'MOM-224808', recipient: 'Walmart DC — Obetz',           address: '3800 Fisher Rd',          city: 'Columbus',   state: 'OH', status: 'delivered',  driver: 'Ashley Williams', route: 'RT-04', scheduledDate: '2026-03-26', deliveredAt: '2026-03-26T13:18:00', weight: '892 lbs', notes: '' },
  { id: 'd009', trackingNumber: 'MOM-224809', recipient: 'Amazon — CMH7 Fulfillment',    address: '7200 Diley Rd',           city: 'Canal Winchester', state: 'OH', status: 'pending', driver: 'Unassigned', route: '',      scheduledDate: '2026-03-29', deliveredAt: null,                   weight: '455 lbs', notes: '' },
  { id: 'd010', trackingNumber: 'MOM-224810', recipient: 'FedEx Ground — Columbus Hub',  address: '1600 Georgesville Rd',    city: 'Columbus',   state: 'OH', status: 'delivered',  driver: 'Ashley Williams', route: 'RT-04', scheduledDate: '2026-03-25', deliveredAt: '2026-03-25T11:50:00', weight: '244 lbs', notes: '' },
]

export const routes: RouteRecord[] = [
  { id: 'RT-04', name: 'Columbus Southside — Groveport & Obetz',   driver: 'Ashley Williams', region: 'Central Ohio', stops: 8,  completed: 8, status: 'complete',   vehicleId: 'VH-2218', startTime: '06:00', estimatedEnd: '13:30' },
  { id: 'RT-07', name: 'Columbus East — Rickenbacker Corridor',     driver: 'Ashley Williams', region: 'Central Ohio', stops: 10, completed: 6, status: 'active',     vehicleId: 'VH-1104', startTime: '07:30', estimatedEnd: '15:45' },
  { id: 'RT-09', name: 'Columbus West — Grove City & Georgesville', driver: 'Unassigned',      region: 'Central Ohio', stops: 7,  completed: 0, status: 'unassigned', vehicleId: '',        startTime: '08:00', estimatedEnd: '14:00' },
  { id: 'RT-11', name: 'Canal Winchester & Pickerington Loop',      driver: 'Unassigned',      region: 'Central Ohio', stops: 6,  completed: 0, status: 'unassigned', vehicleId: '',        startTime: '09:00', estimatedEnd: '14:30' },
  { id: 'RT-13', name: 'Columbus North — Crosswind & Polaris',      driver: 'Ashley Williams', region: 'Central Ohio', stops: 9,  completed: 4, status: 'active',     vehicleId: 'VH-3302', startTime: '06:45', estimatedEnd: '15:00' },
  { id: 'RT-15', name: 'LCK Air Hub Express',                       driver: 'Unassigned',      region: 'Central Ohio', stops: 5,  completed: 0, status: 'unassigned', vehicleId: '',        startTime: '10:00', estimatedEnd: '14:00' },
]

export const teamMembers: TeamMember[] = [
  { id: 'emp-001', name: 'Dash Dunmire',     avatar: 'DD', email: 'dash.dunmire@momentum.com',     role: 'Chief Executive Officer',                                 region: 'Central', status: 'active',   joined: '2026-03-25', deliveries: 0 },
  { id: 'emp-002', name: 'Nate Deisner',     avatar: 'ND', email: 'nate.deisner@momentum.com',     role: 'President / Co-Founder · CEO, Globes',                    region: 'Central', status: 'active',   joined: '2026-03-25', deliveries: 0 },
  { id: 'emp-003', name: 'Juzheng Bian',     avatar: 'JB', email: 'juzheng.bian@momentum.com',     role: 'Chief Operating Officer',                                 region: 'Central', status: 'active',   joined: '2026-03-25', deliveries: 0 },
  { id: 'emp-004', name: 'Elliot Durbin',    avatar: 'ED', email: 'elliot.durbin@momentum.com',    role: 'Chief Financial Officer',                                 region: 'Central', status: 'active',   joined: '2026-03-25', deliveries: 0 },
  { id: 'emp-005', name: 'Jackson Capra',    avatar: 'JC', email: 'jackson.capra@momentum.com',    role: 'Chief Human Resources Officer & Chief Marketing Officer', region: 'Central', status: 'active',   joined: '2026-03-25', deliveries: 0 },
  { id: 'emp-006', name: 'Ashley Williams',  avatar: 'AW', email: 'ashley.williams@momentum.com',  role: 'Driver',                                                  region: 'Central', status: 'inactive', joined: '2026-03-25', deliveries: 0 },
]

export const weeklyStats = [
  { day: 'Mon', delivered: 214, exceptions: 3 },
  { day: 'Tue', delivered: 198, exceptions: 5 },
  { day: 'Wed', delivered: 241, exceptions: 2 },
  { day: 'Thu', delivered: 267, exceptions: 4 },
  { day: 'Fri', delivered: 189, exceptions: 7 },
  { day: 'Sat', delivered: 132, exceptions: 1 },
  { day: 'Sun', delivered: 88, exceptions: 0 },
]
