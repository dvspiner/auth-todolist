import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RegisterDto, RegisterState } from '../types/sign-up.types'

const initialState: RegisterState = {
  error: null,
  loading: false,
}

const signUpSlice = createSlice({
  name: 'signUp',
  initialState: initialState,
  reducers: {
    signUpRequest: (state, action:PayloadAction<RegisterDto>) => {
      console.log(action)
      state.loading = true
      state.error = null
    },
    signUpSuccess: (state) => {
      state.error = null
      state.loading = false
    },
    signUpFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.loading = false
    },
  },
})


export const { signUpRequest, signUpSuccess, signUpFailed } = signUpSlice.actions
export default signUpSlice.reducer