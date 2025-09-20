import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  signupData: Record<string, unknown> | null;
  loading: boolean;
  token: string | null;
  fullName: string | null;
  email: string | null;
  accountType: string | null;
  createdAt: string | null; // ISO string
  updatedAt: string | null; // ISO string
}

// Helper to load string values from localStorage
const getItem = (key: string): string | null => {
  if (typeof window !== "undefined" && window.localStorage) {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }
  return null;
};

const initialState: AuthState = {
  signupData: null,
  loading: false,
  token: getItem("token"),
  fullName: getItem("fullName"),
  email: getItem("email"),
  accountType: getItem("accountType"),
  createdAt: getItem("createdAt"),
  updatedAt: getItem("updatedAt"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSignupData: (state, action: PayloadAction<Record<string, unknown>>) => {
      state.signupData = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setAuthData: (
      state,
      action: PayloadAction<{
        token: string;
        fullName: string;
        email: string;
        accountType: string;
        createdAt: string; 
        updatedAt: string; 
      }>
    ) => {
      const { token, fullName, email, accountType, createdAt, updatedAt } = action.payload;

      state.token = token;
      state.fullName = fullName;
      state.email = email;
      state.accountType = accountType;
      state.createdAt = createdAt;
      state.updatedAt = updatedAt;

      // Save to localStorage
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("fullName", JSON.stringify(fullName));
      localStorage.setItem("email", JSON.stringify(email));
      localStorage.setItem("accountType", JSON.stringify(accountType));
      localStorage.setItem("createdAt", JSON.stringify(createdAt));
      localStorage.setItem("updatedAt", JSON.stringify(updatedAt));
    },
    logout: (state) => {
      state.token = null;
      state.signupData = null;
      state.fullName = null;
      state.email = null;
      state.accountType = null;
      state.createdAt = null;
      state.updatedAt = null;

      // Clear localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("fullName");
      localStorage.removeItem("email");
      localStorage.removeItem("accountType");
      localStorage.removeItem("createdAt");
      localStorage.removeItem("updatedAt");
    },
  },
});

export const { setSignupData, setLoading, setToken, setAuthData, logout } = authSlice.actions;
export default authSlice.reducer;
