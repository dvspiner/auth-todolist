import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState } from '../types/auth.types.ts'
import { AuthResponse } from '../../../types/authTypes.ts'

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      loginRequest: (state, _action: PayloadAction<{ username: string; password: string }>) => {
        state.loading = true
        state.error = null
      },
      loginSuccess: (state, action: PayloadAction<AuthResponse>) => {
        state.isAuthenticated = true
        state.user = action.payload.user
        state.loading = false
        state.error = null
        console.log(action.payload)
        localStorage.setItem('authToken', action.payload.token)
      },
      loginFailure: (state, action: PayloadAction<string>) => {
        state.isAuthenticated = false
        state.user = null
        state.loading = false
        state.error = action.payload
      },
      logout: (state) => {
        state.isAuthenticated = false
        state.loading = false
        state.user = null
        state.error = null
        localStorage.removeItem('authToken')
      },
    },
  },
)

export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions
export default authSlice.reducer