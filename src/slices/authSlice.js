import { createSlice } from '@reduxjs/toolkit'

const loadUser = () => {
  try {
    const saved = localStorage.getItem('user')
    return saved ? JSON.parse(saved) : null
  } catch {
    return null
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: loadUser() },
  reducers: {
    login: (state, action) => {
      state.user = action.payload
      localStorage.setItem('user', JSON.stringify(action.payload))
    },
    logout: (state) => {
      state.user = null
      localStorage.removeItem('user')
    },
    updateProfile: (state, action) => {
      state.user = { ...state.user, ...action.payload }
      localStorage.setItem('user', JSON.stringify(state.user))
    },
  },
})

export const { login, logout, updateProfile } = authSlice.actions
export const selectUser = (state) => state.auth.user

export default authSlice.reducer
