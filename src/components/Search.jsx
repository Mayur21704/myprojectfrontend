// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import {
//   useLazyGetRoundFlightsQuery,
//   useLazyGetAirportsQuery,
//   useLazyGetSingleFlightsQuery,
// } from "../store/flightSlice";
// import {
//   setFilters, // Change from setParams to setFilters
//   setSingleFlights,
//   setRoundTripFlights,
//   setError,
// } from "../store/flightReducer"; // Import actions
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify"; // Import toast

// // Custom Hook for Debouncing
// const useDebounce = (value, delay) => {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, delay]);

//   return debouncedValue;
// };

// const Search = () => {
//   const [params, setParamsState] = useState({
//     origin: "",
//     destination: "",
//     date: "",
//     returnDate: "",
//     adults: 1,
//     tripType: "oneWay",
//   });

//   const [airportData, setAirportData] = useState([]);
//   const [isOriginFocused, setIsOriginFocused] = useState(false);
//   const [isDestinationFocused, setIsDestinationFocused] = useState(false);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [getFlights] = useLazyGetSingleFlightsQuery();
//   const [getRoundTripFlights] = useLazyGetRoundFlightsQuery();
//   const [getAirports] = useLazyGetAirportsQuery();

//   const debouncedOrigin = useDebounce(params.origin, 500);
//   const debouncedDestination = useDebounce(params.destination, 500);

//   useEffect(() => {
//     if (debouncedOrigin) {
//       getAirports({ keyword: debouncedOrigin }).then((response) => {
//         if (response.data) {
//           setAirportData(response.data);
//         }
//       });
//     }
//   }, [debouncedOrigin, getAirports]);

//   useEffect(() => {
//     if (debouncedDestination) {
//       getAirports({ keyword: debouncedDestination }).then((response) => {
//         if (response.data) {
//           setAirportData(response.data);
//         }
//       });
//     }
//   }, [debouncedDestination, getAirports]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const updatedParams = { ...params, [name]: value };
//     setParamsState(updatedParams); // Local state update
//     dispatch(setFilters(updatedParams)); // Dispatch action to Redux store
//   };

//   const handleSelectAirport = (airport, field) => {
//     const updatedParams = { ...params, [field]: airport.iataCode };
//     setParamsState(updatedParams); // Update local state
//     dispatch(setFilters(updatedParams)); // Update params in Redux store
//     setAirportData([]); // Clear airport data after selection
//     if (field === "origin") setIsOriginFocused(false);
//     if (field === "destination") setIsDestinationFocused(false);
//   };

//  const handleSearchClick = () => {
//    let finalParams = cleanParams(params);
//    if (!finalParams) return;

//    // Validation for required fields
//    if (!params.origin) {
//      toast.error("Origin is required");
//      return;
//    }

//    if (!params.destination) {
//      toast.error("Destination is required");
//      return;
//    }

//    // 1. Check if Origin and Destination are the same
//    if (params.origin === params.destination) {
//      toast.error("Origin and Destination cannot be the same");
//      return;
//    }

//    if (!params.date) {
//      toast.error("Departure date is required");
//      return;
//    }

//    // 2. Check if Departure date is before today
//    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
//    if (params.date < today) {
//      toast.error("Departure date cannot be in the past");
//      return;
//    }

//    // Validation for round trip
//    if (params.tripType === "roundTrip") {
//      if (!params.returnDate) {
//        toast.error("Return date is required for round trip");
//        return;
//      }

//      // 3. Check if Return date is after Departure date for Round Trip
//      if (params.returnDate <= params.date) {
//        toast.error("Return date must be after departure date");
//        return;
//      }
//    }

//    if (!params.adults || params.adults < 1) {
//      toast.error("At least 1 adult is required");
//      return;
//    }
//    if (params.adults > 9) {
//      toast.error("Maximum 9 adults are allowed");
//      return;
//    }

//    // If everything is validated, fetch the flights
//    if (params.tripType === "oneWay") {
//      fetchFlights(getFlights, finalParams, "one-way");
//    } else {
//      fetchFlights(getRoundTripFlights, finalParams, "round-trip");
//    }
//  };

//   const cleanParams = (params) => {
//     let finalParams = { ...params };
//     if (params.tripType === "oneWay") {
//       delete finalParams.tripType;
//       delete finalParams.returnDate;
//     } else if (params.tripType === "roundTrip") {
//       delete finalParams.tripType;
//       if (!params.returnDate) {
//         dispatch(setError("Return date is required for round trips"));
//         return null;
//       }
//     }
//     return finalParams;
//   };

//   const fetchFlights = async (fetchApi, params, tripType) => {
//     try {
//       const response = await fetchApi(params);
//       if (response?.data) {
//         if (tripType === "one-way") {
//           dispatch(setSingleFlights(response.data));
//         } else {
//           dispatch(setRoundTripFlights(response.data));
//         }
//       }
//     } catch (error) {
//       console.log(error);
//       dispatch(setError(`Failed to fetch ${tripType} flights`));
//     } finally {
//       // Only navigate to /flights after the validation is complete
//       navigate("/flights");
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
//       {/* Origin */}
//       <div className="mb-4">
//         <label className="block text-gray-700 font-medium mb-2">Origin</label>
//         <div className="relative">
//           <input
//             type="text"
//             name="origin"
//             value={params.origin}
//             onChange={handleChange}
//             onFocus={() => setIsOriginFocused(true)}
//             className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
//             placeholder="Enter origin"
//           />
//           {isOriginFocused && airportData.length > 0 && (
//             <div className="absolute mt-2 w-full bg-white border border-gray-300 shadow-lg max-h-60 overflow-y-auto z-10">
//               {airportData.map((airport) => (
//                 <div
//                   key={airport.iataCode}
//                   className="p-3 cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleSelectAirport(airport, "origin")}
//                 >
//                   {airport.name} ({airport.iataCode}) - {airport.cityName},{" "}
//                   {airport.countryName}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Destination */}
//       <div className="mb-4">
//         <label className="block text-gray-700 font-medium mb-2">
//           Destination
//         </label>
//         <div className="relative">
//           <input
//             type="text"
//             name="destination"
//             value={params.destination}
//             onChange={handleChange}
//             onFocus={() => setIsDestinationFocused(true)}
//             className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
//             placeholder="Enter destination"
//           />
//           {isDestinationFocused && airportData.length > 0 && (
//             <div className="absolute mt-2 w-full bg-white border border-gray-300 shadow-lg max-h-60 overflow-y-auto z-10">
//               {airportData.map((airport) => (
//                 <div
//                   key={airport.iataCode}
//                   className="py-1 px-2 hover:bg-gray-200 cursor-pointer"
//                   onClick={() => handleSelectAirport(airport, "destination")}
//                 >
//                   {airport.name} ({airport.iataCode}) - {airport.cityName},{" "}
//                   {airport.countryName}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Departure Date */}
//       <div className="mb-4">
//         <label className="block text-gray-700 font-medium mb-2">
//           Departure Date
//         </label>
//         <input
//           type="date"
//           name="date"
//           value={params.date}
//           onChange={handleChange}
//           className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
//         />
//       </div>

//       {/* Return Date (Only visible for Round Trip) */}
//       {params.tripType === "roundTrip" && (
//         <div>
//           <label htmlFor="returnDate" className="block text-sm font-medium">
//             Return Date
//           </label>
//           <input
//             type="date"
//             id="returnDate"
//             name="returnDate"
//             value={params.returnDate}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-md"
//           />
//         </div>
//       )}

//       {/* Trip Type Selection (Radio Buttons) */}
//       <div className="flex items-center space-x-4 mb-4">
//         <div>
//           <input
//             type="radio"
//             id="oneWay"
//             name="tripType"
//             value="oneWay"
//             checked={params.tripType === "oneWay"}
//             onChange={handleChange}
//             className="mr-2"
//           />
//           <label htmlFor="oneWay" className="text-sm font-medium">
//             One Way
//           </label>
//         </div>
//         <div>
//           <input
//             type="radio"
//             id="roundTrip"
//             name="tripType"
//             value="roundTrip"
//             checked={params.tripType === "roundTrip"}
//             onChange={handleChange}
//             className="mr-2"
//           />
//           <label htmlFor="roundTrip" className="text-sm font-medium">
//             Round Trip
//           </label>
//         </div>
//       </div>

//       {/* Adults */}
//       <div className="mb-4">
//         <label className="block text-gray-700 font-medium mb-2">Adults</label>
//         <input
//           type="number"
//           name="adults"
//           value={params.adults}
//           onChange={handleChange}
//           className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
//           min="1"
//         />
//       </div>

//       {/* Search Button */}
//       <button
//         onClick={handleSearchClick}
//         className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
//       >
//         Search Flights
//       </button>
//     </div>
//   );
// };

// export default Search;

//ui with perfect functionality and design

// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify"; // Import toast
// import { setError, setFilters } from "../store/flightReducer"; // Import actions
// import { useLazyGetAirportsQuery } from "../store/flightSlice";
// import CurrencySelector from "./CurrencySelector";

// // Custom Hook for Debouncing
// const useDebounce = (value, delay) => {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, delay]);

//   return debouncedValue;
// };

// const Search = () => {
//   const [params, setParamsState] = useState({
//     origin: "",
//     destination: "",
//     date: "",
//     returnDate: "",
//     adults: 1,
//     tripType: "oneWay",
//     children: 0,
//   });

//   const [airportData, setAirportData] = useState([]);
//   const [isOriginFocused, setIsOriginFocused] = useState(false);
//   const [isDestinationFocused, setIsDestinationFocused] = useState(false);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [getAirports] = useLazyGetAirportsQuery();

//   const debouncedOrigin = useDebounce(params.origin, 500);
//   const debouncedDestination = useDebounce(params.destination, 500);

//   useEffect(() => {
//     if (debouncedOrigin) {
//       getAirports({ keyword: debouncedOrigin }).then((response) => {
//         if (response.data) {
//           setAirportData(response.data);
//         }
//       });
//     }
//   }, [debouncedOrigin, getAirports]);

//   useEffect(() => {
//     if (debouncedDestination) {
//       getAirports({ keyword: debouncedDestination }).then((response) => {
//         if (response.data) {
//           setAirportData(response.data);
//         }
//       });
//     }
//   }, [debouncedDestination, getAirports]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const updatedParams = { ...params, [name]: value };
//     setParamsState(updatedParams); // Local state update
//     dispatch(setFilters(updatedParams)); // Dispatch action to Redux store
//   };

//   const handleSelectAirport = (airport, field) => {
//     const updatedParams = { ...params, [field]: airport.iataCode };
//     setParamsState(updatedParams); // Update local state
//     dispatch(setFilters(updatedParams)); // Update params in Redux store
//     setAirportData([]); // Clear airport data after selection
//     if (field === "origin") setIsOriginFocused(false);
//     if (field === "destination") setIsDestinationFocused(false);
//   };

//   useEffect(() => {
//     if (params.tripType === "roundTrip" && !params.date) {
//       toast.error("Departure date is required for round trip");
//     }
//     if (params.tripType === "roundTrip" && !params.returnDate) {
//       toast.error("Return date is required for round trip");
//       return;
//     }
//   }, [params.tripType, params.date, params.returnDate]);

//   const handleSearchClick = () => {
//     let finalParams = cleanParams(params);
//     if (!finalParams) return;

//     // Validation for required fields
//     if (!params.origin) {
//       toast.error("Origin is required");
//       return;
//     }

//     if (!params.destination) {
//       toast.error("Destination is required");
//       return;
//     }

//     // 1. Check if Origin and Destination are the same
//     if (params.origin === params.destination) {
//       toast.error("Origin and Destination cannot be the same");
//       return;
//     }

//     // Trip type based validation:
//     if (params.tripType === "oneWay") {
//       if (!params.date) {
//         toast.error("Departure date is required for one-way trips");
//         return;
//       }
//       const today = new Date().toISOString().split("T")[0];
//       if (params.date < today) {
//         toast.error("Departure date cannot be in the past");
//         return;
//       }
//     } else if (params.tripType === "roundTrip") {
//       if (!params.date) {
//         toast.error("Departure date is required for round-trip");
//         return;
//       }
//       const today = new Date().toISOString().split("T")[0];
//       if (params.date < today) {
//         toast.error("Departure date cannot be in the past");
//         return;
//       }

//       if (params.returnDate <= params.date) {
//         toast.error("Return date must be after departure date");
//         return;
//       }
//     }

//     if (!params.adults || params.adults < 1) {
//       toast.error("At least 1 adult is required");
//       return;
//     }
//     if (params.adults > 9) {
//       toast.error("Maximum 9 adults are allowed");
//       return;
//     }

//     if (params.children < 0 || params.children > 9) {
//       toast.error("Children count should be between 0 and 9");
//       return;
//     }
//     // Dispatch filters and navigate to the flights page
//     dispatch(setFilters(finalParams));
//     navigate("/flights");
//   };

//   const cleanParams = (params) => {
//     let finalParams = { ...params };
//     if (params.tripType === "oneWay") {
//       delete finalParams.returnDate; // Remove returnDate for one-way trips
//     } else if (params.tripType === "roundTrip") {
//       if (!params.returnDate) {
//         dispatch(setError("Return date is required for round trips"));
//         return null;
//       }
//     }
//     if (params.children === 0) {
//       delete finalParams.children;
//     }
//     return finalParams;
//   };

//   return (
//     <>
//       <CurrencySelector />
//       <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
//         {/* Origin */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Origin</label>
//           <div className="relative">
//             <input
//               type="text"
//               name="origin"
//               value={params.origin}
//               onChange={handleChange}
//               onFocus={() => setIsOriginFocused(true)}
//               className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
//               placeholder="Enter origin"
//             />
//             {isOriginFocused && airportData.length > 0 && (
//               <div className="absolute mt-2 w-full bg-white border border-gray-300 shadow-lg max-h-60 overflow-y-auto z-10">
//                 {airportData.map((airport) => (
//                   <div
//                     key={airport.iataCode}
//                     className="p-3 cursor-pointer hover:bg-gray-100"
//                     onClick={() => handleSelectAirport(airport, "origin")}
//                   >
//                     {airport.name} ({airport.iataCode}) - {airport.cityName},{" "}
//                     {airport.countryName}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Destination */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">
//             Destination
//           </label>
//           <div className="relative">
//             <input
//               type="text"
//               name="destination"
//               value={params.destination}
//               onChange={handleChange}
//               onFocus={() => setIsDestinationFocused(true)}
//               className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
//               placeholder="Enter destination"
//             />
//             {isDestinationFocused && airportData.length > 0 && (
//               <div className="absolute mt-2 w-full bg-white border border-gray-300 shadow-lg max-h-60 overflow-y-auto z-10">
//                 {airportData.map((airport) => (
//                   <div
//                     key={airport.iataCode}
//                     className="py-1 px-2 hover:bg-gray-200 cursor-pointer"
//                     onClick={() => handleSelectAirport(airport, "destination")}
//                   >
//                     {airport.name} ({airport.iataCode}) - {airport.cityName},{" "}
//                     {airport.countryName}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Departure Date */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">
//             Departure Date
//           </label>
//           <input
//             type="date"
//             name="date"
//             value={params.date}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
//           />
//         </div>

//         {/* Return Date (Only visible for Round Trip) */}
//         {params.tripType === "roundTrip" && (
//           <div>
//             <label htmlFor="returnDate" className="block text-sm font-medium">
//               Return Date
//             </label>
//             <input
//               type="date"
//               id="returnDate"
//               name="returnDate"
//               value={params.returnDate}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-md"
//             />
//           </div>
//         )}

//         {/* Trip Type Selection (Radio Buttons) */}
//         <div className="flex items-center space-x-4 mb-4">
//           <div>
//             <input
//               type="radio"
//               id="oneWay"
//               name="tripType"
//               value="oneWay"
//               checked={params.tripType === "oneWay"}
//               onChange={handleChange}
//               className="mr-2"
//             />
//             <label htmlFor="oneWay" className="text-sm font-medium">
//               One Way
//             </label>
//           </div>
//           <div>
//             <input
//               type="radio"
//               id="roundTrip"
//               name="tripType"
//               value="roundTrip"
//               checked={params.tripType === "roundTrip"}
//               onChange={handleChange}
//               className="mr-2"
//             />
//             <label htmlFor="roundTrip" className="text-sm font-medium">
//               Round Trip
//             </label>
//           </div>
//         </div>

//         {/* Adults */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Adults</label>
//           <input
//             type="number"
//             name="adults"
//             value={params.adults}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
//             min="1"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">
//             Children <span>(2 to 12 year children)</span>
//           </label>
//           <input
//             type="number"
//             name="children"
//             value={params.children}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
//             min="0"
//           />
//         </div>

//         {/* Search Button */}
//         <button
//           onClick={handleSearchClick}
//           className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
//         >
//           Search Flights
//         </button>
//       </div>
//     </>
//   );
// };

// export default Search;

//without loading and not found

// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify"; // Import toast
// import { setError, setFilters } from "../store/flightReducer"; // Import actions
// import { useLazyGetAirportsQuery } from "../store/slices/flightSlice";
// import CurrencySelector from "./CurrencySelector";

// // Custom Hook for Debouncing
// const useDebounce = (value, delay) => {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, delay]);

//   return debouncedValue;
// };

// const Search = () => {
//   const [params, setParamsState] = useState({
//     origin: "",
//     destination: "",
//     date: "",
//     returnDate: "",
//     adults: 1,
//     tripType: "oneWay",
//     children: 0,
//   });

//   const [airportData, setAirportData] = useState([]);
//   const [isOriginFocused, setIsOriginFocused] = useState(false);
//   const [isDestinationFocused, setIsDestinationFocused] = useState(false);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [getAirports] = useLazyGetAirportsQuery();

//   const debouncedOrigin = useDebounce(params.origin, 500);
//   const debouncedDestination = useDebounce(params.destination, 500);

//   useEffect(() => {
//     if (debouncedOrigin) {
//       getAirports({ keyword: debouncedOrigin }).then((response) => {
//         if (response.data) {
//           setAirportData(response.data);
//         }
//       });
//     }
//   }, [debouncedOrigin, getAirports]);

//   useEffect(() => {
//     if (debouncedDestination) {
//       getAirports({ keyword: debouncedDestination }).then((response) => {
//         if (response.data) {
//           setAirportData(response.data);
//         }
//       });
//     }
//   }, [debouncedDestination, getAirports]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const updatedParams = { ...params, [name]: value };
//     setParamsState(updatedParams); // Local state update
//     dispatch(setFilters(updatedParams)); // Dispatch action to Redux store
//   };

//   const handleSelectAirport = (airport, field) => {
//     const updatedParams = { ...params, [field]: airport.iataCode };
//     setParamsState(updatedParams); // Update local state
//     dispatch(setFilters(updatedParams)); // Update params in Redux store
//     setAirportData([]); // Clear airport data after selection
//     if (field === "origin") setIsOriginFocused(false);
//     if (field === "destination") setIsDestinationFocused(false);
//   };

//   useEffect(() => {
//     if (params.tripType === "roundTrip" && !params.date) {
//       toast.error("Departure date is required for round trip");
//     }
//     if (params.tripType === "roundTrip" && !params.returnDate) {
//       toast.error("Return date is required for round trip");
//       return;
//     }
//   }, [params.tripType, params.date, params.returnDate]);

//   const handleSearchClick = () => {
//     let finalParams = cleanParams(params);
//     if (!finalParams) return;

//     // Validation for required fields
//     if (!params.origin) {
//       toast.error("Origin is required");
//       return;
//     }

//     if (!params.destination) {
//       toast.error("Destination is required");
//       return;
//     }

//     // 1. Check if Origin and Destination are the same
//     if (params.origin === params.destination) {
//       toast.error("Origin and Destination cannot be the same");
//       return;
//     }

//     // Trip type based validation:
//     if (params.tripType === "oneWay") {
//       if (!params.date) {
//         toast.error("Departure date is required for one-way trips");
//         return;
//       }
//       const today = new Date().toISOString().split("T")[0];
//       if (params.date < today) {
//         toast.error("Departure date cannot be in the past");
//         return;
//       }
//     } else if (params.tripType === "roundTrip") {
//       if (!params.date) {
//         toast.error("Departure date is required for round-trip");
//         return;
//       }
//       const today = new Date().toISOString().split("T")[0];
//       if (params.date < today) {
//         toast.error("Departure date cannot be in the past");
//         return;
//       }

//       if (params.returnDate <= params.date) {
//         toast.error("Return date must be after departure date");
//         return;
//       }
//     }

//     if (!params.adults || params.adults < 1) {
//       toast.error("At least 1 adult is required");
//       return;
//     }
//     if (params.adults > 9) {
//       toast.error("Maximum 9 adults are allowed");
//       return;
//     }

//     if (params.children < 0 || params.children > 9) {
//       toast.error("Children count should be between 0 and 9");
//       return;
//     }
//     // Dispatch filters and navigate to the flights page
//     dispatch(setFilters(finalParams));
//     navigate("/flights");
//   };

//   const cleanParams = (params) => {
//     let finalParams = { ...params };
//     if (params.tripType === "oneWay") {
//       delete finalParams.returnDate; // Remove returnDate for one-way trips
//     } else if (params.tripType === "roundTrip") {
//       if (!params.returnDate) {
//         dispatch(setError("Return date is required for round trips"));
//         return null;
//       }
//     }
//     if (params.children === 0) {
//       delete finalParams.children;
//     }
//     return finalParams;
//   };

//   return (
//     <>
//       <CurrencySelector />
//       <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
//         {/* Form Header */}
//         <h2 className="text-2xl font-semibold text-center mb-6">
//           Flight Search
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {/* Origin */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Origin
//             </label>
//             <div className="relative">
//               <input
//                 type="text"
//                 name="origin"
//                 value={params.origin}
//                 onChange={handleChange}
//                 onFocus={() => setIsOriginFocused(true)}
//                 className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
//                 placeholder="Enter origin"
//               />
//               {isOriginFocused && airportData.length > 0 && (
//                 <div className="absolute mt-2 w-full bg-white border border-gray-300 shadow-lg max-h-60 overflow-y-auto z-10">
//                   {airportData.map((airport) => (
//                     <div
//                       key={airport.iataCode}
//                       className="p-3 cursor-pointer hover:bg-gray-100"
//                       onClick={() => handleSelectAirport(airport, "origin")}
//                     >
//                       {airport.name} ({airport.iataCode}) - {airport.cityName},{" "}
//                       {airport.countryName}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Destination */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Destination
//             </label>
//             <div className="relative">
//               <input
//                 type="text"
//                 name="destination"
//                 value={params.destination}
//                 onChange={handleChange}
//                 onFocus={() => setIsDestinationFocused(true)}
//                 className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
//                 placeholder="Enter destination"
//               />
//               {isDestinationFocused && airportData.length > 0 && (
//                 <div className="absolute mt-2 w-full bg-white border border-gray-300 shadow-lg max-h-60 overflow-y-auto z-10">
//                   {airportData.map((airport) => (
//                     <div
//                       key={airport.iataCode}
//                       className="py-1 px-2 hover:bg-gray-200 cursor-pointer"
//                       onClick={() =>
//                         handleSelectAirport(airport, "destination")
//                       }
//                     >
//                       {airport.name} ({airport.iataCode}) - {airport.cityName},{" "}
//                       {airport.countryName}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Date and Return Date */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Departure Date
//             </label>
//             <input
//               type="date"
//               name="date"
//               value={params.date}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
//             />
//           </div>

//           {params.tripType === "roundTrip" && (
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">
//                 Return Date
//               </label>
//               <input
//                 type="date"
//                 name="returnDate"
//                 value={params.returnDate}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
//               />
//             </div>
//           )}
//         </div>

//         {/* Trip Type */}
//         <div className="flex items-center space-x-6 mb-6">
//           <div>
//             <input
//               type="radio"
//               id="oneWay"
//               name="tripType"
//               value="oneWay"
//               checked={params.tripType === "oneWay"}
//               onChange={handleChange}
//               className="mr-2"
//             />
//             <label htmlFor="oneWay" className="text-sm font-medium">
//               One Way
//             </label>
//           </div>
//           <div>
//             <input
//               type="radio"
//               id="roundTrip"
//               name="tripType"
//               value="roundTrip"
//               checked={params.tripType === "roundTrip"}
//               onChange={handleChange}
//               className="mr-2"
//             />
//             <label htmlFor="roundTrip" className="text-sm font-medium">
//               Round Trip
//             </label>
//           </div>
//         </div>

//         {/* Adults and Children */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Adults
//             </label>
//             <input
//               type="number"
//               name="adults"
//               value={params.adults}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
//               min="1"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Children <span>(2 to 12 year children)</span>
//             </label>
//             <input
//               type="number"
//               name="children"
//               value={params.children}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
//               min="0"
//             />
//           </div>
//         </div>

//         {/* Search Button */}
//         <button
//           onClick={handleSearchClick}
//           className="w-full bg-blue-500 text-white py-3 mt-4 rounded-md hover:bg-blue-600 transition"
//         >
//           Search Flights
//         </button>
//       </div>
//     </>
//   );
// };

// export default Search;

//after fresh start

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast
import { setAirports, setError, setFilters } from "../store/flightReducer"; // Import actions
import { useLazyGetAirportsQuery } from "../store/slices/flightSlice";
import CurrencySelector from "./CurrencySelector";
import { persistor } from "../store/store";

// Custom Hook for Debouncing
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const Search = () => {
  const [params, setParamsState] = useState({
    origin: "",
    destination: "",
    date: "",
    returnDate: "",
    adults: 1,
    tripType: "oneWay",
    children: 0,
  });

  const [originAirportData, setOriginAirportData] = useState([]);
  const [destinationAirportData, setDestinationAirportData] = useState([]);
  const [isOriginFocused, setIsOriginFocused] = useState(false);
  const [isDestinationFocused, setIsDestinationFocused] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [getAirports, { data }] = useLazyGetAirportsQuery();

  const debouncedOrigin = useDebounce(params.origin, 500);
  const debouncedDestination = useDebounce(params.destination, 500);

  useEffect(() => {
    if (debouncedOrigin) {
      setLoading(true);
      getAirports({ keyword: debouncedOrigin }).then((response) => {
        if (response.data) {
          setOriginAirportData(response.data);
        }
        setLoading(false);
      });
    } else {
      setOriginAirportData([]);
    }
  }, [debouncedOrigin, getAirports]);

  useEffect(() => {
    if (debouncedDestination) {
      setLoading(true);
      getAirports({ keyword: debouncedDestination }).then((response) => {
        if (response.data) {
          setDestinationAirportData(response.data);
        }
        setLoading(false);
      });
    } else {
      setDestinationAirportData([]);
    }
  }, [debouncedDestination, getAirports]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedParams = { ...params, [name]: value };
    setParamsState(updatedParams); // Local state update
    dispatch(setFilters(updatedParams)); // Dispatch action to Redux store
  };

  const handleSelectAirport = (airport, field) => {
    const updatedParams = { ...params, [field]: airport.iataCode };
    setParamsState(updatedParams); // Update local state
    dispatch(setFilters(updatedParams)); // Update params in Redux store
    if (field === "origin") {
      setOriginAirportData([]); // Clear origin data after selection
      setIsOriginFocused(false); // Close the dropdown
    }
    if (field === "destination") {
      setDestinationAirportData([]); // Clear destination data after selection
      setIsDestinationFocused(false); // Close the dropdown
    }

    dispatch(setAirports({ type: field, cityName: airport.cityName }));
  };

  useEffect(() => {
    if (params.tripType === "roundTrip" && !params.date) {
      toast.error("Departure date is required for round trip");
    }
    if (params.tripType === "roundTrip" && !params.returnDate) {
      toast.error("Return date is required for round trip");
      return;
    }
    persistor.purge();
  }, [params.tripType, params.date, params.returnDate]);

  const handleSearchClick = () => {
    let finalParams = cleanParams(params);
    if (!finalParams) return;

    // Validation for required fields
    if (!params.origin) {
      toast.error("Origin is required");
      return;
    }

    if (!params.destination) {
      toast.error("Destination is required");
      return;
    }

    // 1. Check if Origin and Destination are the same
    if (params.origin === params.destination) {
      toast.error("Origin and Destination cannot be the same");
      return;
    }

    // Trip type based validation:
    if (params.tripType === "oneWay") {
      if (!params.date) {
        toast.error("Departure date is required for one-way trips");
        return;
      }
      const today = new Date().toISOString().split("T")[0];
      if (params.date < today) {
        toast.error("Departure date cannot be in the past");
        return;
      }
    } else if (params.tripType === "roundTrip") {
      if (!params.date) {
        toast.error("Departure date is required for round-trip");
        return;
      }
      const today = new Date().toISOString().split("T")[0];
      if (params.date < today) {
        toast.error("Departure date cannot be in the past");
        return;
      }

      if (params.returnDate <= params.date) {
        toast.error("Return date must be after departure date");
        return;
      }
    }

    if (!params.adults || params.adults < 1) {
      toast.error("At least 1 adult is required");
      return;
    }
    if (params.adults > 9) {
      toast.error("Maximum 9 adults are allowed");
      return;
    }

    if (params.children < 0 || params.children > 9) {
      toast.error("Children count should be between 0 and 9");
      return;
    }
    // Dispatch filters and navigate to the flights page
    dispatch(setFilters(finalParams));
    navigate("/flights");
  };

  const cleanParams = (params) => {
    let finalParams = { ...params };
    if (params.tripType === "oneWay") {
      delete finalParams.returnDate; // Remove returnDate for one-way trips
    } else if (params.tripType === "roundTrip") {
      if (!params.returnDate) {
        dispatch(setError("Return date is required for round trips"));
        return null;
      }
    }
    if (params.children === 0) {
      delete finalParams.children;
    }
    return finalParams;
  };

  return (
    <>
      <CurrencySelector />
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        {/* Form Header */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          Flight Search
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Origin */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Origin
            </label>
            <div className="relative">
              <input
                type="text"
                name="origin"
                value={params.origin}
                onChange={handleChange}
                onFocus={() => setIsOriginFocused(true)}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                placeholder="Enter origin"
              />
              {isOriginFocused && loading && (
                <div className="absolute mt-2 w-full bg-white border border-gray-300 shadow-lg max-h-60 overflow-y-auto z-10">
                  <div className="p-3">Loading...</div>
                </div>
              )}
              {isOriginFocused &&
                !loading &&
                originAirportData.length === 0 && (
                  <div className="absolute mt-2 w-full bg-white border border-gray-300 shadow-lg max-h-60 overflow-y-auto z-10">
                    <div className="p-3">No airports found</div>
                  </div>
                )}
              {isOriginFocused && !loading && originAirportData.length > 0 && (
                <div className="absolute mt-2 w-full bg-white border border-gray-300 shadow-lg max-h-60 overflow-y-auto z-10">
                  {originAirportData.map((airport) => (
                    <div
                      key={airport.iataCode}
                      className="p-3 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSelectAirport(airport, "origin")}
                    >
                      {airport.name} ({airport.iataCode}) - {airport.cityName},{" "}
                      {airport.countryName}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Destination */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Destination
            </label>
            <div className="relative">
              <input
                type="text"
                name="destination"
                value={params.destination}
                onChange={handleChange}
                onFocus={() => setIsDestinationFocused(true)}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                placeholder="Enter destination"
              />
              {isDestinationFocused && loading && (
                <div className="absolute mt-2 w-full bg-white border border-gray-300 shadow-lg max-h-60 overflow-y-auto z-10">
                  <div className="p-3">Loading...</div>
                </div>
              )}
              {isDestinationFocused &&
                !loading &&
                destinationAirportData.length === 0 && (
                  <div className="absolute mt-2 w-full bg-white border border-gray-300 shadow-lg max-h-60 overflow-y-auto z-10">
                    <div className="p-3">No airports found</div>
                  </div>
                )}
              {isDestinationFocused &&
                !loading &&
                destinationAirportData.length > 0 && (
                  <div className="absolute mt-2 w-full bg-white border border-gray-300 shadow-lg max-h-60 overflow-y-auto z-10">
                    {destinationAirportData.map((airport) => (
                      <div
                        key={airport.iataCode}
                        className="py-1 px-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() =>
                          handleSelectAirport(airport, "destination")
                        }
                      >
                        {airport.name} ({airport.iataCode}) - {airport.cityName}
                        , {airport.countryName}
                      </div>
                    ))}
                  </div>
                )}
            </div>
          </div>
        </div>

        {/* Date and Return Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Departure Date
            </label>
            <input
              type="date"
              name="date"
              value={params.date}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          {params.tripType === "roundTrip" && (
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Return Date
              </label>
              <input
                type="date"
                name="returnDate"
                value={params.returnDate}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
          )}
        </div>

        {/* Trip Type */}
        <div className="flex items-center space-x-6 mb-6">
          <div>
            <input
              type="radio"
              id="oneWay"
              name="tripType"
              value="oneWay"
              checked={params.tripType === "oneWay"}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="oneWay" className="text-sm font-medium">
              One Way
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="roundTrip"
              name="tripType"
              value="roundTrip"
              checked={params.tripType === "roundTrip"}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="roundTrip" className="text-sm font-medium">
              Round Trip
            </label>
          </div>
        </div>

        {/* Adults and Children */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Adults
            </label>
            <input
              type="number"
              name="adults"
              value={params.adults}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
              min="1"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Children <span>(2 to 12 year children)</span>
            </label>
            <input
              type="number"
              name="children"
              value={params.children}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
              min="0"
            />
          </div>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearchClick}
          className="w-full bg-blue-500 text-white py-3 mt-4 rounded-md hover:bg-blue-600 transition"
        >
          Search Flights
        </button>
      </div>
    </>
  );
};

export default Search;

//with some glitch on input loading

// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify"; // Import toast
// import { setError, setFilters } from "../store/flightReducer"; // Import actions
// import { useLazyGetAirportsQuery } from "../store/slices/flightSlice";
// import CurrencySelector from "./CurrencySelector";

// // Custom Hook for Debouncing
// const useDebounce = (value, delay) => {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, delay]);

//   return debouncedValue;
// };

// const Search = () => {
//   const [params, setParamsState] = useState({
//     origin: "",
//     destination: "",
//     date: "",
//     returnDate: "",
//     adults: 1,
//     tripType: "oneWay",
//     children: 0,
//   });

//   const [originAirportData, setOriginAirportData] = useState([]);
//   const [destinationAirportData, setDestinationAirportData] = useState([]);
//   const [isOriginFocused, setIsOriginFocused] = useState(false);
//   const [isDestinationFocused, setIsDestinationFocused] = useState(false);
//   const [loadingOrigin, setLoadingOrigin] = useState(false); // Loading state for origin
//   const [loadingDestination, setLoadingDestination] = useState(false); // Loading state for destination

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [getAirports] = useLazyGetAirportsQuery();

//   const debouncedOrigin = useDebounce(params.origin, 500);
//   const debouncedDestination = useDebounce(params.destination, 500);

//   useEffect(() => {
//     if (debouncedOrigin) {
//       setLoadingOrigin(true); // Start loading state for origin
//       getAirports({ keyword: debouncedOrigin })
//         .then((response) => {
//           if (response.data) {
//             setOriginAirportData(response.data);
//           }
//         })
//         .catch(() => {
//           toast.error("Failed to load origin airports.");
//         })
//         .finally(() => {
//           setLoadingOrigin(false); // Stop loading state for origin
//         });
//     }
//   }, [debouncedOrigin, getAirports]);

//   useEffect(() => {
//     if (debouncedDestination) {
//       setLoadingDestination(true); // Start loading state for destination
//       getAirports({ keyword: debouncedDestination })
//         .then((response) => {
//           if (response.data) {
//             setDestinationAirportData(response.data);
//           }
//         })
//         .catch(() => {
//           toast.error("Failed to load destination airports.");
//         })
//         .finally(() => {
//           setLoadingDestination(false); // Stop loading state for destination
//         });
//     }
//   }, [debouncedDestination, getAirports]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const updatedParams = { ...params, [name]: value };
//     setParamsState(updatedParams); // Local state update
//     dispatch(setFilters(updatedParams)); // Dispatch action to Redux store
//   };

//   const handleSelectAirport = (airport, field) => {
//     const updatedParams = { ...params, [field]: airport.iataCode };
//     setParamsState(updatedParams); // Update local state
//     dispatch(setFilters(updatedParams)); // Update params in Redux store
//     if (field === "origin") {
//       setOriginAirportData([]); // Clear origin airport data
//       setIsOriginFocused(false); // Close the origin input dropdown
//     }
//     if (field === "destination") {
//       setDestinationAirportData([]); // Clear destination airport data
//       setIsDestinationFocused(false); // Close the destination input dropdown
//     }
//   };

//   useEffect(() => {
//     if (params.tripType === "roundTrip" && !params.date) {
//       toast.error("Departure date is required for round trip");
//     }
//     if (params.tripType === "roundTrip" && !params.returnDate) {
//       toast.error("Return date is required for round trip");
//       return;
//     }
//   }, [params.tripType, params.date, params.returnDate]);

//   const handleSearchClick = () => {
//     let finalParams = cleanParams(params);
//     if (!finalParams) return;

//     // Validation for required fields
//     if (!params.origin) {
//       toast.error("Origin is required");
//       return;
//     }

//     if (!params.destination) {
//       toast.error("Destination is required");
//       return;
//     }

//     // 1. Check if Origin and Destination are the same
//     if (params.origin === params.destination) {
//       toast.error("Origin and Destination cannot be the same");
//       return;
//     }

//     // Trip type based validation:
//     if (params.tripType === "oneWay") {
//       if (!params.date) {
//         toast.error("Departure date is required for one-way trips");
//         return;
//       }
//       const today = new Date().toISOString().split("T")[0];
//       if (params.date < today) {
//         toast.error("Departure date cannot be in the past");
//         return;
//       }
//     } else if (params.tripType === "roundTrip") {
//       if (!params.date) {
//         toast.error("Departure date is required for round-trip");
//         return;
//       }
//       const today = new Date().toISOString().split("T")[0];
//       if (params.date < today) {
//         toast.error("Departure date cannot be in the past");
//         return;
//       }

//       if (params.returnDate <= params.date) {
//         toast.error("Return date must be after departure date");
//         return;
//       }
//     }

//     if (!params.adults || params.adults < 1) {
//       toast.error("At least 1 adult is required");
//       return;
//     }
//     if (params.adults > 9) {
//       toast.error("Maximum 9 adults are allowed");
//       return;
//     }

//     if (params.children < 0 || params.children > 9) {
//       toast.error("Children count should be between 0 and 9");
//       return;
//     }
//     // Dispatch filters and navigate to the flights page
//     dispatch(setFilters(finalParams));
//     navigate("/flights");
//   };

//   const cleanParams = (params) => {
//     let finalParams = { ...params };
//     if (params.tripType === "oneWay") {
//       delete finalParams.returnDate; // Remove returnDate for one-way trips
//     } else if (params.tripType === "roundTrip") {
//       if (!params.returnDate) {
//         dispatch(setError("Return date is required for round trips"));
//         return null;
//       }
//     }
//     if (params.children === 0) {
//       delete finalParams.children;
//     }
//     return finalParams;
//   };

//   return (
//     <>
//       <CurrencySelector />
//       <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
//         {/* Form Header */}
//         <h2 className="text-2xl font-semibold text-center mb-6">
//           Flight Search
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {/* Origin */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Origin
//             </label>
//             <div className="relative">
//               <input
//                 type="text"
//                 name="origin"
//                 value={params.origin}
//                 onChange={handleChange}
//                 onFocus={() => setIsOriginFocused(true)}
//                 className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
//                 placeholder="Enter origin"
//               />
//               {isOriginFocused && originAirportData.length > 0 && (
//                 <div className="absolute mt-2 w-full bg-white border border-gray-300 shadow-lg max-h-60 overflow-y-auto z-10">
//                   {originAirportData.map((airport) => (
//                     <div
//                       key={airport.iataCode}
//                       className="p-3 cursor-pointer hover:bg-gray-100"
//                       onClick={() => handleSelectAirport(airport, "origin")}
//                     >
//                       {airport.name} ({airport.iataCode}) - {airport.cityName},{" "}
//                       {airport.countryName}
//                     </div>
//                   ))}
//                 </div>
//               )}
//               {loadingOrigin && (
//                 <div className="absolute mt-2 w-full bg-white border border-gray-300 shadow-lg z-10">
//                   <div className="p-3">Loading airports...</div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Destination */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Destination
//             </label>
//             <div className="relative">
//               <input
//                 type="text"
//                 name="destination"
//                 value={params.destination}
//                 onChange={handleChange}
//                 onFocus={() => setIsDestinationFocused(true)}
//                 className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
//                 placeholder="Enter destination"
//               />
//               {isDestinationFocused && destinationAirportData.length > 0 && (
//                 <div className="absolute mt-2 w-full bg-white border border-gray-300 shadow-lg max-h-60 overflow-y-auto z-10">
//                   {destinationAirportData.map((airport) => (
//                     <div
//                       key={airport.iataCode}
//                       className="py-1 px-2 hover:bg-gray-200 cursor-pointer"
//                       onClick={() =>
//                         handleSelectAirport(airport, "destination")
//                       }
//                     >
//                       {airport.name} ({airport.iataCode}) - {airport.cityName},{" "}
//                       {airport.countryName}
//                     </div>
//                   ))}
//                 </div>
//               )}
//               {loadingDestination && (
//                 <div className="absolute mt-2 w-full bg-white border border-gray-300 shadow-lg z-10">
//                   <div className="p-3">Loading airports...</div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Date and Return Date */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Departure Date
//             </label>
//             <input
//               type="date"
//               name="date"
//               value={params.date}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
//             />
//           </div>

//           {params.tripType === "roundTrip" && (
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">
//                 Return Date
//               </label>
//               <input
//                 type="date"
//                 name="returnDate"
//                 value={params.returnDate}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
//               />
//             </div>
//           )}
//         </div>

//         {/* Trip Type */}
//         <div className="flex items-center space-x-6 mb-6">
//           <div>
//             <input
//               type="radio"
//               id="oneWay"
//               name="tripType"
//               value="oneWay"
//               checked={params.tripType === "oneWay"}
//               onChange={handleChange}
//               className="mr-2"
//             />
//             <label htmlFor="oneWay" className="text-sm font-medium">
//               One Way
//             </label>
//           </div>
//           <div>
//             <input
//               type="radio"
//               id="roundTrip"
//               name="tripType"
//               value="roundTrip"
//               checked={params.tripType === "roundTrip"}
//               onChange={handleChange}
//               className="mr-2"
//             />
//             <label htmlFor="roundTrip" className="text-sm font-medium">
//               Round Trip
//             </label>
//           </div>
//         </div>

//         {/* Adults and Children */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Adults
//             </label>
//             <input
//               type="number"
//               name="adults"
//               value={params.adults}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
//               min="1"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Children <span>(2 to 12 year children)</span>
//             </label>
//             <input
//               type="number"
//               name="children"
//               value={params.children}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
//               min="0"
//             />
//           </div>
//         </div>

//         {/* Search Button */}
//         <button
//           onClick={handleSearchClick}
//           className="w-full bg-blue-500 text-white py-3 mt-4 rounded-md hover:bg-blue-600 transition"
//         >
//           Search Flights
//         </button>
//       </div>
//     </>
//   );
// };

// export default Search;
