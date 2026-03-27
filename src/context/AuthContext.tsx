import {
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'

export type EmployeeRole = 'driver' | 'dispatcher' | 'manager' | 'admin'

export interface Employee {
  id: string
  name: string
  email: string
  role: EmployeeRole
  region: string
  avatar: string
}

interface AuthState {
  user: Employee | null
  loading: boolean
}

interface AuthContextValue extends AuthState {
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>
  logout: () => void
}

const MOCK_USERS: Record<string, Employee & { password: string }> = {
  'alex.chen@momentum.com': {
    id: 'emp-001',
    name: 'Alex Chen',
    email: 'alex.chen@momentum.com',
    password: 'momentum1',
    role: 'admin',
    region: 'Central',
    avatar: 'AC',
  },
  'jordan.smith@momentum.com': {
    id: 'emp-002',
    name: 'Jordan Smith',
    email: 'jordan.smith@momentum.com',
    password: 'momentum1',
    role: 'dispatcher',
    region: 'West',
    avatar: 'JS',
  },
  'taylor.wong@momentum.com': {
    id: 'emp-003',
    name: 'Taylor Wong',
    email: 'taylor.wong@momentum.com',
    password: 'momentum1',
    role: 'driver',
    region: 'East',
    avatar: 'TW',
  },
}

const SESSION_KEY = 'momentum_session'

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({ user: null, loading: true })

  useEffect(() => {
    const timer = setTimeout(() => {
      let user: Employee | null = null
      try {
        const raw = sessionStorage.getItem(SESSION_KEY)
        if (raw) user = JSON.parse(raw) as Employee
      } catch {
        // ignore malformed session
      }
      setState({ user, loading: false })
    }, 0)
    return () => clearTimeout(timer)
  }, [])

  const login = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (email: string, _pw: string): Promise<{ ok: boolean; error?: string }> => {
      await new Promise((r) => setTimeout(r, 600))
      // Match known employee accounts; otherwise create a generic employee session
      const record = MOCK_USERS[email.toLowerCase()]
      let user: Employee
      if (record) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password: _, ...rest } = record
        user = rest
      } else {
        const name = email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
        const initials = name.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase()
        user = {
          id: `emp-${Date.now()}`,
          name,
          email: email.toLowerCase(),
          role: 'driver',
          region: 'Central',
          avatar: initials || '??',
        }
      }
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(user))
      setState({ user, loading: false })
      return { ok: true }
    },
    [],
  )

  const logout = useCallback(() => {
    sessionStorage.removeItem(SESSION_KEY)
    setState({ user: null, loading: false })
  }, [])

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext }
