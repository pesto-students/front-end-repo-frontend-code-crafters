import { createSlice } from "@reduxjs/toolkit";

// initialize token from session storage
const token = sessionStorage.getItem("token")
  ? sessionStorage.getItem("token")
  : null;

const initialState = {
  user: null,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.status = "loading";
    },
    loginSuccess: (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  authSlice.actions;
export default authSlice.reducer;
