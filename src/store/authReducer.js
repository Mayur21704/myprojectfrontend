// // authSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   user: null, // Initialize user as null
//   token: localStorage.getItem("token") || null, // Load token from localStorage
//   status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
//   error: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setUser: (state, action) => {
//       console.log(action.payload);

//       state.user = action.payload.user;
//       state.token = action.payload.token;
//     },
//     logOut: (state) => {
//       state.user = null;
//       state.token = null;
//       localStorage.removeItem("token");
//     },
//   },
// });

// export const { setUser, logOut } = authSlice.actions;
// export default authSlice.reducer;

//Refresh fix when user do refresh he is logged in
// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const storedUser = JSON.parse(localStorage.getItem("user"));
const storedToken = localStorage.getItem("token");

const initialState = {
  user: storedUser || null,
  token: storedToken || null,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      // Store in localStorage to persist across refreshes
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
