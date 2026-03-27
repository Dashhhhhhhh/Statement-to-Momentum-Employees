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
    async (email: string, password: string): Promise<{ ok: boolean; error?: string }> => {
      await new Promise((r) => setTimeout(r, 600))
      const record = MOCK_USERS[email.toLowerCase()]
      if (!record || record.password !== password) {
        return { ok: false, error: 'Invalid email or password.' }
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password: _, ...user } = record
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
