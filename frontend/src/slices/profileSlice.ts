import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

// Define your User type (adjust fields based on your backend/user model)
interface User {
  id: string
  name: string
  email: string
  // add other fields like role, avatar, etc.
}

// Define state shape
interface ProfileState {
  user: User | null
  loading: boolean
}

// Safely check for localStorage (SSR-safe)
const getStoredUser = (): User | null => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("user")
    return stored ? (JSON.parse(stored) as User) : null
  }
  return null
}

const initialState: ProfileState = {
  user: getStoredUser(),
  loading: false,
}

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload
      // also update localStorage when user changes (only on client)
      if (typeof window !== "undefined") {
        if (action.payload) {
          localStorage.setItem("user", JSON.stringify(action.payload))
        } else {
          localStorage.removeItem("user")
        }
      }
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
  },
})

export const { setUser, setLoading } = profileSlice.actions
export default profileSlice.reducer
