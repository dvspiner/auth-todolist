import { User } from '../../../types/user.type'

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  loading: boolean,
  error: string | null
}

export type LoginCredentials = {
  username: string,
  password: string
}

export type AuthResponse = {
  user: User,
  token: string
}