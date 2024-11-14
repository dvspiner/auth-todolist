import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../types/user.type'

type AccountSate = {
  loading: boolean
  error: string | null
  user: User | null
}

const initialState: AccountSate = {
  user: null,
  loading: false,
  error: null,
}


type AccountMeResponse = {
  user: User
}

const accountSlice = createSlice({
  name: 'account',
  initialState: initialState,
  reducers: {
    fetchMeRequest: (state: AccountSate) => {
      state.loading = true
      state.error = null
    },
    fetchMeSuccess: (state: AccountSate, action: PayloadAction<AccountMeResponse>) => {
      state.user = action.payload.user
      state.loading = false
      state.error = null
    },
    fetchMeFailure: (state: AccountSate, action: PayloadAction<string>) => {
      state.user = null
      state.loading = false
      state.error = action.payload
    },

  },
})


export const { fetchMeRequest, fetchMeFailure, fetchMeSuccess } = accountSlice.actions
export default accountSlice.reducer