import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adults: [], // Array to hold adult passenger details
  children: [], // Array to hold children passenger details
  email: "", // Email for the booking
};

const passengerSlice = createSlice({
  name: "passengerData",
  initialState,
  reducers: {
    // Set the entire passengers array (both adults and children)
    setPassengerDetails: (state, action) => {
      const { adults, children, email } = action.payload;
      state.adults = adults || [];
      state.children = children || [];
      state.email = email || "";
    },

    // Update individual passenger information (firstName, lastName, dob)
    updatePassenger: (state, action) => {
      const { type, index, field, value } = action.payload;
      if (type === "adult" && state.adults[index]) {
        state.adults[index][field] = value; // Update adult details
      } else if (type === "child" && state.children[index]) {
        state.children[index][field] = value; // Update child details
      }
    },

    // Set email for the booking
    setEmail: (state, action) => {
      state.email = action.payload;
    },

    // Reset the passenger data when needed (e.g., on form reset or page reload)
    resetPassengerData: (state) => {
      state.adults = [];
      state.children = [];
      state.email = "";
    },
  },
});

export const {
  setPassengerDetails,
  updatePassenger,
  setEmail,
  resetPassengerData,
} = passengerSlice.actions;

export default passengerSlice.reducer;
