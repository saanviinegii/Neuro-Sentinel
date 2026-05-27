import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',

  initialState: {
    authenticated: false,
    threatLevel: 'GREEN',
    confidence: 0
  },

  reducers: {

    setAuthentication(state, action) {
      state.authenticated = action.payload
    },

    setThreatLevel(state, action) {
      state.threatLevel = action.payload
    },

    setConfidence(state, action) {
      state.confidence = action.payload
    }
  }
})

export const {
  setAuthentication,
  setThreatLevel,
  setConfidence
} = authSlice.actions

export default authSlice.reducer