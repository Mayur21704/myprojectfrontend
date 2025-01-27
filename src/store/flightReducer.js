// import { createSlice } from "@reduxjs/toolkit";

// // Initial state of the flight data
// const initialState = {
//   singleFlights: { data: [] }, // Ensure data is always an array
//   roundTripFlights: { data: [] }, // Default to an empty array
//   error: null, // Default to null
//   airports: [],
// };

// const flightSlice = createSlice({
//   name: "flights",
//   initialState,
//   reducers: {
//     setSingleFlights: (state, action) => {
//       state.singleFlights = action.payload;
//     },
//     setRoundTripFlights: (state, action) => {
//       state.roundTripFlights = action.payload;
//     },
//     setError: (state, action) => {
//       state.error = action.payload;
//     },
//     setAirports: (state, action) => {
//       state.airports = action.payload;
//     },
//   },
// });

// // Export actions to dispatch
// export const { setSingleFlights, setRoundTripFlights, setError } =
//   flightSlice.actions;

// // Export the reducer to use in the store
// export default flightSlice.reducer;

// src/app/flightReducer.js

// import { createSlice } from "@reduxjs/toolkit";

// // Initial state of the flight data
// const initialState = {
//   singleFlights: { data: [] },
//   roundTripFlights: { data: [] },
//   error: null,
//   airports: [],
//   filters: {
//     travelClass: "ECONOMY",
//   },
// };

// const flightSlice = createSlice({
//   name: "flights",
//   initialState,
//   reducers: {
//     setSingleFlights: (state, action) => {
//       state.singleFlights = action.payload;
//     },
//     setRoundTripFlights: (state, action) => {
//       state.roundTripFlights = action.payload;
//     },
//     setError: (state, action) => {
//       state.error = action.payload;
//     },
//     setAirports: (state, action) => {
//       state.airports = action.payload;
//     },
//     setFilters: (state, action) => {
//       state.filters = { ...state.filters, ...action.payload };
//     },
//     resetFilters: (state) => {
//       state.filters = initialState.filters;
//     },
//   },
// });

// export const {
//   setSingleFlights,
//   setRoundTripFlights,
//   setError,
//   setAirports,
//   setFilters,
//   resetFilters,
// } = flightSlice.actions;

// export default flightSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// // Initial state with default params
// const initialState = {
//   singleFlights: { data: [] },
//   roundTripFlights: { data: [] },
//   error: null,
//   airports: [],
//   filters: {
//     origin: "",
//     destination: "",
//     date: "",
//     returnDate: "",
//     adults: 1,
//     tripType: "oneWay",
//     travelClass: "ECONOMY",
//   },
// };

// const flightSlice = createSlice({
//   name: "flight",
//   initialState,
//   reducers: {
//     setFilters: (state, action) => {
//       state.filters = { ...state.filters, ...action.payload }; // Update filters in Redux state
//     },
//     setSingleFlights: (state, action) => {
//       state.singleFlights = action.payload;
//     },
//     setRoundTripFlights: (state, action) => {
//       state.roundTripFlights = action.payload;
//     },
//     setAirports: (state, action) => {
//       state.airports = action.payload;
//     },
//     setError: (state, action) => {
//       state.error = action.payload;
//     },
//   },
// });

// export const {
//   setFilters,
//   setSingleFlights,
//   setRoundTripFlights,
//   setError,
//   setAirports,
// } = flightSlice.actions;

// export default flightSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  singleFlights: { data: [] },
  roundTripFlights: { data: [] },
  error: null,
  airports: [
    { type: "origin", cityName: "" }, // Placeholder for origin
    { type: "destination", cityName: "" }, // Placeholder for destination
  ],
  filters: {
    origin: "",
    destination: "",
    date: "",
    returnDate: "",
    adults: 1,
    children: 0,
    tripType: "oneWay",
    travelClass: "ECONOMY",
  },
  currencyCode: "INR",
  currencySymbol: "₹",
  selectedFlight: null, // Add selected flight to state
};

const flightSlice = createSlice({
  name: "flightReducer",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }; // Update filters in Redux state
    },
    setSingleFlights: (state, action) => {
      state.singleFlights = action.payload;
    },
    setRoundTripFlights: (state, action) => {
      state.roundTripFlights = action.payload;
    },
    setAirports: (state, action) => {
      const { type, cityName } = action.payload; // e.g., { type: 'origin', cityName: 'Delhi' }

      // Use spread operator to update the corresponding type (origin or destination)
      state.airports = state.airports.map((air) =>
        air.type === type ? { ...air, cityName } : air
      );
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSelectedFlight: (state, action) => {
      state.selectedFlight = action.payload; // Set the selected flight
    },
    setCurrencyCode: (state, action) => {
      state.currencyCode = action.payload;
    },
    setCurrencySymbol: (state, action) => {
      state.currencySymbol = action.payload;
    },
  },
});

export const {
  setFilters,
  setSingleFlights,
  setRoundTripFlights,
  setError,
  setAirports,
  setSelectedFlight, // Export action
  setCurrencyCode,
  setCurrencySymbol,
} = flightSlice.actions;

export default flightSlice.reducer;
