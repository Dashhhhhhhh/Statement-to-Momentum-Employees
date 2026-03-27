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
  { id: 'd001', trackingNumber: 'MOM-881234', recipient: 'Hartley Supply Co.', address: '4400 Industrial Pkwy', city: 'Columbus', state: 'OH', status: 'delivered', driver: 'Marcus Reed', route: 'RT-07', scheduledDate: '2026-03-27', deliveredAt: '2026-03-27T10:14:00', weight: '42 lbs', notes: '' },
  { id: 'd002', trackingNumber: 'MOM-881235', recipient: 'Apex Retail Group', address: '1200 Commerce Blvd', city: 'Indianapolis', state: 'IN', status: 'in-transit', driver: 'Priya Nair', route: 'RT-12', scheduledDate: '2026-03-27', deliveredAt: null, weight: '118 lbs', notes: 'Loading dock required' },
  { id: 'd003', trackingNumber: 'MOM-881236', recipient: 'Metro Med Supplies', address: '800 Health Way', city: 'Cincinnati', state: 'OH', status: 'pending', driver: 'Unassigned', route: 'RT-04', scheduledDate: '2026-03-28', deliveredAt: null, weight: '23 lbs', notes: 'Temperature-sensitive' },
  { id: 'd004', trackingNumber: 'MOM-881237', recipient: 'Blue Ridge Parts', address: '311 Foundry Rd', city: 'Louisville', state: 'KY', status: 'exception', driver: 'Darnell Kim', route: 'RT-09', scheduledDate: '2026-03-26', deliveredAt: null, weight: '205 lbs', notes: 'Address not found — recipient contact required' },
  { id: 'd005', trackingNumber: 'MOM-881238', recipient: 'Sunrise Foods LLC', address: '59 Cold Storage Dr', city: 'Detroit', state: 'MI', status: 'delivered', driver: 'Alicia Vega', route: 'RT-03', scheduledDate: '2026-03-26', deliveredAt: '2026-03-26T14:32:00', weight: '340 lbs', notes: '' },
  { id: 'd006', trackingNumber: 'MOM-881239', recipient: 'Pinnacle Electronics', address: '7200 Tech Corridor', city: 'Chicago', state: 'IL', status: 'in-transit', driver: 'Marcus Reed', route: 'RT-07', scheduledDate: '2026-03-27', deliveredAt: null, weight: '61 lbs', notes: 'Signature required' },
  { id: 'd007', trackingNumber: 'MOM-881240', recipient: 'Riverbend Furniture', address: '2500 Warehouse Row', city: 'St. Louis', state: 'MO', status: 'pending', driver: 'Unassigned', route: '', scheduledDate: '2026-03-29', deliveredAt: null, weight: '480 lbs', notes: 'White-glove delivery' },
  { id: 'd008', trackingNumber: 'MOM-881241', recipient: 'Northgate Grocery', address: '98 Distribution Ave', city: 'Milwaukee', state: 'WI', status: 'delivered', driver: 'Priya Nair', route: 'RT-12', scheduledDate: '2026-03-25', deliveredAt: '2026-03-25T09:05:00', weight: '712 lbs', notes: '' },
  { id: 'd009', trackingNumber: 'MOM-881242', recipient: 'Summit Auto Parts', address: '45 Industrial Loop', city: 'Cleveland', state: 'OH', status: 'in-transit', driver: 'Darnell Kim', route: 'RT-09', scheduledDate: '2026-03-27', deliveredAt: null, weight: '88 lbs', notes: '' },
  { id: 'd010', trackingNumber: 'MOM-881243', recipient: 'GreenLeaf Nurseries', address: '1850 Farm Road', city: 'Kansas City', state: 'MO', status: 'pending', driver: 'Unassigned', route: '', scheduledDate: '2026-03-30', deliveredAt: null, weight: '155 lbs', notes: 'Fragile — plant material' },
]

export const routes: RouteRecord[] = [
  { id: 'RT-03', name: 'Detroit Metro South', driver: 'Alicia Vega', region: 'Midwest', stops: 12, completed: 12, status: 'complete', vehicleId: 'VH-2218', startTime: '06:30', estimatedEnd: '15:00' },
  { id: 'RT-04', name: 'Cincinnati Loop', driver: 'Unassigned', region: 'Ohio Valley', stops: 8, completed: 0, status: 'unassigned', vehicleId: '', startTime: '08:00', estimatedEnd: '14:30' },
  { id: 'RT-07', name: 'Chicago–Columbus Corridor', driver: 'Marcus Reed', region: 'Central', stops: 16, completed: 9, status: 'active', vehicleId: 'VH-1104', startTime: '05:45', estimatedEnd: '17:30' },
  { id: 'RT-09', name: 'Louisville–Cleveland Express', driver: 'Darnell Kim', region: 'Ohio Valley', stops: 10, completed: 6, status: 'active', vehicleId: 'VH-3302', startTime: '07:00', estimatedEnd: '16:00' },
  { id: 'RT-12', name: 'Indy–Milwaukee Northern', driver: 'Priya Nair', region: 'Great Lakes', stops: 14, completed: 11, status: 'active', vehicleId: 'VH-0857', startTime: '06:00', estimatedEnd: '16:45' },
  { id: 'RT-15', name: 'St. Louis–KC Westbound', driver: 'Unassigned', region: 'Central', stops: 7, completed: 0, status: 'unassigned', vehicleId: '', startTime: '09:00', estimatedEnd: '15:00' },
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
