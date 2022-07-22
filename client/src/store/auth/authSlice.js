import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: localStorage.getItem("auth") ? true : false,
  authData: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
    setAuthData: (state, action) => {
      state.authData = action.payload;
    },
  },
});

export const { setAuth, setAuthData } = authSlice.actions;

export default authSlice.reducer;
