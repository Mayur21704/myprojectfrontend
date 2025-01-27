// // src/app/store.js
// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./authReducer";
// import flightReducer from "./flightReducer";
// import flightApi from "./slices/flightSlice";

// export const store = configureStore({
//   reducer: {
//     flight: flightReducer,
//     auth: authReducer,
//     [flightApi.reducerPath]: flightApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(flightApi.middleware),
// });

//updated passenger reducer with persist

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import flightReducer from "./flightReducer";
import flightApi from "./slices/flightSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Local storage for persistence
import passengerReducer from "./passengerReducer"; // Import the new passenger slice

// Define persist config for authReducer, flightReducer, and passengerReducer
const persistConfig = {
  key: "root", // The key for the persisted data
  storage, // Local storage to store the data
  // blacklist: ["singleFlights", ""],
  whitelist: [
    "adults",
    "airports",
    "children",
    "email",
    "filters",
    "selectedFlight",
    "token",
    "user",
    "singleFlights",
    "roundTripFlights",
  ],
};

// Persist the authReducer, flightReducer, and passengerReducer
const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedFlightReducer = persistReducer(persistConfig, flightReducer);
const persistedPassengerReducer = persistReducer(
  persistConfig,
  passengerReducer
); // Persist the passengerReducer

// Configure the store
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer, // Use the persisted authReducer here
    flight: persistedFlightReducer, // Use the persisted flightReducer here
    passenger: persistedPassengerReducer, // Add the passenger reducer here
    [flightApi.reducerPath]: flightApi.reducer, // API slice reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(flightApi.middleware), // Add the API middleware
});

// Create the persistor
export const persistor = persistStore(store);
