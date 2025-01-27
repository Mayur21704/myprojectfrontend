//perfect logic and ui////////////////////////////////////////////////////////////////////////////////////////
// import { useEffect, useMemo } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setFilters } from "../store/flightReducer";
// import {
//   useLazyGetSingleFlightsQuery,
//   useLazyGetRoundFlightsQuery,
// } from "../store/flightSlice";
// import { useNavigate } from "react-router-dom";

// const FlightResult = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { filters } = useSelector((state) => state.flight);

//   const handleMoreDetailsClick = (flight) => {
//     navigate(`/flightDetails/${flight.id}`);
//   };

//   const [
//     getSingleFlights,
//     { data: singleFlightData, isLoading: isSingleLoading },
//   ] = useLazyGetSingleFlightsQuery();
//   const [
//     getRoundFlights,
//     { data: roundFlightData, isLoading: isRoundLoading },
//   ] = useLazyGetRoundFlightsQuery();

//   useEffect(() => {
//     if (filters.tripType === "oneWay") {
//       getSingleFlights({
//         origin: filters.origin,
//         destination: filters.destination,
//         date: filters.date,
//         adults: filters.adults,
//         travelClass: filters.travelClass,
//       });
//     } else {
//       getRoundFlights({
//         origin: filters.origin,
//         destination: filters.destination,
//         date: filters.date,
//         adults: filters.adults,
//         returnDate: filters.returnDate,
//         travelClass: filters.travelClass,
//       });
//     }
//   }, [
//     filters.tripType,
//     filters.origin,
//     filters.destination,
//     filters.date,
//     filters.returnDate,
//     filters.adults,
//     filters.travelClass,
//   ]);

//   const handleFilterChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === "checkbox") {
//       if (checked) {
//         dispatch(setFilters({ [name]: value }));
//       } else {
//         dispatch(setFilters({ [name]: "" }));
//       }
//     } else {
//       dispatch(setFilters({ [name]: value }));
//     }
//   };

//   const flights =
//     filters.tripType === "oneWay"
//       ? singleFlightData?.data || []
//       : roundFlightData?.data || [];

//   const filteredFlights = useMemo(() => {
//     let result = flights;

//     if (filters.airline) {
//       result = result.filter(
//         (flight) => flight.airlineName === filters.airline
//       );
//     }

//     return result;
//   }, [flights, filters.airline]);

//   // Loading spinner
//   if (isSingleLoading || isRoundLoading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   // No flights found
//   if (filteredFlights.length === 0) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-[200px] bg-gray-100 p-6 rounded-lg shadow-md">
//         <svg
//           className="w-16 h-16 text-gray-400 mb-4"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M12 6v12m6-6H6"
//           />
//         </svg>
//         <h3 className="text-xl font-semibold text-gray-700">
//           No Flights Found
//         </h3>
//         <p className="text-gray-500 mt-2 text-lg">
//           We could not find any flights matching your criteria.
//         </p>
//         <button
//           onClick={() => navigate("/")}
//           className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 mt-4"
//         >
//           Go to Search
//         </button>
//       </div>
//     );
//   }

//   const airlines =
//     filteredFlights.length > 0
//       ? [...new Set(filteredFlights.map((flight) => flight.airlineName))]
//       : [];

//   const date = new Date(filters.date);

//   const formattedDate = date.toLocaleDateString("en-GB", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });

//   return (
//     <section
//       id="flight_results"
//       className="bg-white px-4 py-12 sm:px-6 lg:px-8"
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row gap-6">
//           {/* Filters Sidebar */}
//           <div className="w-full md:w-64 bg-white rounded-lg border border-neutral-300 p-4 space-y-6 h-fit shadow-lg">
//             <div className="border-b border-neutral-300 pb-4">
//               <h3 className="text-lg font-medium text-gray-900 mb-4">
//                 Filters
//               </h3>
//               <div className="space-y-2">
//                 <p className="text-sm text-neutral-600">
//                   {filteredFlights.length} flights found
//                 </p>
//                 {filters.tripType === "oneWay" ? (
//                   <p className="text-sm text-neutral-600">
//                     {filters.origin} → {filters.destination}
//                   </p>
//                 ) : (
//                   <div>
//                     <p className="text-sm text-neutral-600">
//                       {filters.origin} → {filters.destination}
//                     </p>
//                     <p className="text-sm text-neutral-600">
//                       {filters.destination} → {filters.origin}
//                     </p>
//                   </div>
//                 )}
//                 <p className="text-sm text-neutral-600">{formattedDate}</p>
//               </div>
//             </div>

//             {/* Airline Class Filter */}
//             <div className="mb-6">
//               <label
//                 htmlFor="travelClass"
//                 className="block text-sm font-semibold text-gray-700"
//               >
//                 Class
//               </label>
//               <select
//                 name="travelClass"
//                 value={filters.travelClass || ""}
//                 onChange={handleFilterChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               >
//                 <option value="">Select Class</option>
//                 <option value="BUSINESS">Business</option>
//                 <option value="ECONOMY">Economy</option>
//                 <option value="FIRST">First</option>
//               </select>
//             </div>

//             {/* Airlines Filter */}
//             <div>
//               <h4 className="text-sm font-medium text-gray-900 mb-3">
//                 Airlines
//               </h4>
//               <div className="space-y-2">
//                 {airlines.map((airline, idx) => (
//                   <label key={idx} className="flex items-center">
//                     <input
//                       type="checkbox"
//                       className="form-checkbox h-4 w-4 text-blue-500 bg-neutral-100 border-neutral-300 rounded"
//                       onChange={handleFilterChange}
//                       name="airline"
//                       value={airline}
//                       checked={filters.airline === airline}
//                     />
//                     <span className="ml-2 text-sm text-neutral-600">
//                       {airline}
//                     </span>
//                   </label>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Flight Results */}
//           <div className="flex-1 space-y-4">
//             <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
//               Flight Results
//             </h2>
//             {filteredFlights.map((flight) => {
//               const itineraries = flight.itineraries;
//               const firstLeg = itineraries[0].segments[0]; // Origin → Destination
//               const returnLeg = itineraries[1]?.segments[0]; // Destination → Origin (for round trip)

//               const departureDateFirstLeg = new Date(firstLeg.departure.at);
//               const arrivalDateFirstLeg = new Date(firstLeg.arrival.at);
//               const departureTimeFirstLeg =
//                 departureDateFirstLeg.toLocaleTimeString("en-GB", {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 });
//               const arrivalTimeFirstLeg =
//                 arrivalDateFirstLeg.toLocaleTimeString("en-GB", {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 });

//               const departureDateReturnLeg = new Date(
//                 returnLeg?.departure?.at || 0
//               );
//               const arrivalDateReturnLeg = new Date(
//                 returnLeg?.arrival?.at || 0
//               );
//               const departureTimeReturnLeg =
//                 departureDateReturnLeg.toLocaleTimeString("en-GB", {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 });
//               const arrivalTimeReturnLeg =
//                 arrivalDateReturnLeg.toLocaleTimeString("en-GB", {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 });

//               const durationFirstLeg = itineraries[0].duration; // First leg duration
//               const durationReturnLeg = itineraries[1]?.duration; // Return leg duration

//               return (
//                 <div
//                   key={flight.id}
//                   className="bg-white rounded-lg border border-neutral-300 p-6 hover:border-neutral-400 transition-colors duration-200 shadow-lg"
//                 >
//                   <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
//                     <div className="flex items-center mb-4 lg:mb-0">
//                       <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mr-4">
//                         {flight.airlineLogo && (
//                           <img
//                             src={flight.airlineLogo}
//                             alt={flight.airlineName}
//                             className="h-16 w-16 rounded-full object-cover border border-gray-200"
//                           />
//                         )}
//                       </div>
//                       <div>
//                         <p className="text-gray-900 font-medium">
//                           {flight.airlineName}
//                         </p>
//                         <p className="text-sm text-neutral-600">
//                           Flight {firstLeg.aircraft.code}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="flex-1 lg:mx-8">
//                       {/* First Leg: Origin → Destination */}
//                       <div className="flex items-center justify-between max-w-md mx-auto">
//                         <div className="text-center">
//                           <p className="text-lg font-bold text-gray-800">
//                             {departureTimeFirstLeg}
//                           </p>
//                           <p className="text-sm text-neutral-600">
//                             at {firstLeg.departure.terminal} terminal
//                           </p>
//                         </div>

//                         <div className="flex-1 mx-4">
//                           <div className="relative flex items-center">
//                             <div className="h-0.5 flex-1 bg-neutral-300"></div>
//                             <svg
//                               className="w-4 h-4 text-neutral-400 mx-2"
//                               fill="none"
//                               stroke="currentColor"
//                               viewBox="0 0 24 24"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M5 12h14m-7-7l7 7-7 7"
//                               />
//                             </svg>
//                             <div className="h-0.5 flex-1 bg-neutral-300"></div>
//                           </div>
//                           <p className="text-center text-sm text-neutral-600 mt-1">
//                             {durationFirstLeg}
//                           </p>
//                         </div>

//                         <div className="text-center">
//                           <p className="text-lg font-bold text-gray-800">
//                             {arrivalTimeFirstLeg}
//                           </p>
//                           <p className="text-sm text-neutral-600">
//                             at {firstLeg.arrival.terminal} terminal
//                           </p>
//                         </div>
//                       </div>

//                       {/* Second Leg: Destination → Origin (for round trip) */}
//                       {filters.tripType === "roundTrip" && returnLeg && (
//                         <div className="mt-8">
//                           <div className="flex items-center justify-between">
//                             <div className="text-center">
//                               <p className="text-lg font-bold text-gray-800">
//                                 {departureTimeReturnLeg}
//                               </p>
//                               <p className="text-sm text-neutral-600">
//                                 at
//                                 {returnLeg.departure.terminal} terminal
//                               </p>
//                             </div>

//                             <div className="flex-1 mx-4">
//                               <div className="relative flex items-center">
//                                 <div className="h-0.5 flex-1 bg-neutral-300"></div>
//                                 <svg
//                                   className="w-4 h-4 text-neutral-400 mx-2"
//                                   fill="none"
//                                   stroke="currentColor"
//                                   viewBox="0 0 24 24"
//                                 >
//                                   <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M5 12h14m-7-7l7 7-7 7"
//                                   />
//                                 </svg>
//                                 <div className="h-0.5 flex-1 bg-neutral-300"></div>
//                               </div>
//                               <p className="text-center text-sm text-neutral-600 mt-1">
//                                 {durationReturnLeg}
//                               </p>
//                             </div>

//                             <div className="text-center">
//                               <p className="text-lg font-bold text-gray-800">
//                                 {arrivalTimeReturnLeg}
//                               </p>
//                               <p className="text-sm text-neutral-600">
//                                 at {returnLeg.arrival.terminal} terminal
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                     </div>

//                     <div className="text-center lg:text-right mt-4 lg:mt-0">
//                       <p className="text-2xl font-bold text-gray-800">
//                         ${flight.price?.total}
//                       </p>
//                       <button
//                         className="mt-2 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
//                         onClick={() => handleMoreDetailsClick(flight)}
//                       >
//                         Select
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FlightResult;

//select btn rerender fixed

// import { useEffect, useMemo, useCallback } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setFilters, setSelectedFlight } from "../store/flightReducer";
// import {
//   useLazyGetSingleFlightsQuery,
//   useLazyGetRoundFlightsQuery,
// } from "../store/flightSlice";
// import { useNavigate } from "react-router-dom";

// const FlightResult = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { filters } = useSelector((state) => state.flight);

//   const handleMoreDetailsClick = useCallback(
//     (flight) => {
//       dispatch(setSelectedFlight(flight));

//       navigate(`/flightDetails/${flight.id}`);
//     },
//     [navigate]
//   );

//   const [
//     getSingleFlights,
//     { data: singleFlightData, isLoading: isSingleLoading },
//   ] = useLazyGetSingleFlightsQuery();
//   const [
//     getRoundFlights,
//     { data: roundFlightData, isLoading: isRoundLoading },
//   ] = useLazyGetRoundFlightsQuery();

//   useEffect(() => {
//     if (filters.tripType === "oneWay") {
//       getSingleFlights({
//         origin: filters.origin,
//         destination: filters.destination,
//         date: filters.date,
//         adults: filters.adults,
//         travelClass: filters.travelClass,
//       });
//     } else {
//       getRoundFlights({
//         origin: filters.origin,
//         destination: filters.destination,
//         date: filters.date,
//         adults: filters.adults,
//         returnDate: filters.returnDate,
//         travelClass: filters.travelClass,
//       });
//     }
//   }, [
//     filters.tripType,
//     filters.origin,
//     filters.destination,
//     filters.date,
//     filters.returnDate,
//     filters.adults,
//     filters.travelClass,
//     getSingleFlights,
//     getRoundFlights,
//   ]);

//   const handleFilterChange = useCallback(
//     (e) => {
//       const { name, value, type, checked } = e.target;
//       if (type === "checkbox") {
//         dispatch(setFilters({ [name]: checked ? value : "" }));
//       } else {
//         dispatch(setFilters({ [name]: value }));
//       }
//     },
//     [dispatch]
//   );

//   const flights =
//     filters.tripType === "oneWay"
//       ? singleFlightData?.data || []
//       : roundFlightData?.data || [];

//   const filteredFlights = useMemo(() => {
//     let result = flights;

//     if (filters.airline) {
//       result = result.filter(
//         (flight) => flight.airlineName === filters.airline
//       );
//     }

//     return result;
//   }, [flights, filters.airline]);

//   // Loading spinner
//   if (isSingleLoading || isRoundLoading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   // No flights found
//   if (filteredFlights.length === 0) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-[200px] bg-gray-100 p-6 rounded-lg shadow-md">
//         <svg
//           className="w-16 h-16 text-gray-400 mb-4"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M12 6v12m6-6H6"
//           />
//         </svg>
//         <h3 className="text-xl font-semibold text-gray-700">
//           No Flights Found
//         </h3>
//         <p className="text-gray-500 mt-2 text-lg">
//           We could not find any flights matching your criteria.
//         </p>
//         <button
//           onClick={() => navigate("/")}
//           className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 mt-4"
//         >
//           Go to Search
//         </button>
//       </div>
//     );
//   }

//   const airlines =
//     filteredFlights.length > 0
//       ? [...new Set(filteredFlights.map((flight) => flight.airlineName))]
//       : [];

//   const date = new Date(filters.date);

//   const formattedDate = date.toLocaleDateString("en-GB", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });

//   return (
//     <section
//       id="flight_results"
//       className="bg-white px-4 py-12 sm:px-6 lg:px-8"
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row gap-6">
//           {/* Filters Sidebar */}
//           <div className="w-full md:w-64 bg-white rounded-lg border border-neutral-300 p-4 space-y-6 h-fit shadow-lg">
//             <div className="border-b border-neutral-300 pb-4">
//               <h3 className="text-lg font-medium text-gray-900 mb-4">
//                 Filters
//               </h3>
//               <div className="space-y-2">
//                 <p className="text-sm text-neutral-600">
//                   {filteredFlights.length} flights found
//                 </p>
//                 {filters.tripType === "oneWay" ? (
//                   <p className="text-sm text-neutral-600">
//                     {filters.origin} → {filters.destination}
//                   </p>
//                 ) : (
//                   <div>
//                     <p className="text-sm text-neutral-600">
//                       {filters.origin} → {filters.destination}
//                     </p>
//                     <p className="text-sm text-neutral-600">
//                       {filters.destination} → {filters.origin}
//                     </p>
//                   </div>
//                 )}
//                 <p className="text-sm text-neutral-600">{formattedDate}</p>
//               </div>
//             </div>

//             {/* Airline Class Filter */}
//             <div className="mb-6">
//               <label
//                 htmlFor="travelClass"
//                 className="block text-sm font-semibold text-gray-700"
//               >
//                 Class
//               </label>
//               <select
//                 name="travelClass"
//                 value={filters.travelClass || ""}
//                 onChange={handleFilterChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               >
//                 <option value="">Select Class</option>
//                 <option value="BUSINESS">Business</option>
//                 <option value="ECONOMY">Economy</option>
//                 <option value="FIRST">First</option>
//               </select>
//             </div>

//             {/* Airlines Filter */}
//             <div>
//               <h4 className="text-sm font-medium text-gray-900 mb-3">
//                 Airlines
//               </h4>
//               <div className="space-y-2">
//                 {airlines.map((airline, idx) => (
//                   <label key={idx} className="flex items-center">
//                     <input
//                       type="checkbox"
//                       className="form-checkbox h-4 w-4 text-blue-500 bg-neutral-100 border-neutral-300 rounded"
//                       onChange={handleFilterChange}
//                       name="airline"
//                       value={airline}
//                       checked={filters.airline === airline}
//                     />
//                     <span className="ml-2 text-sm text-neutral-600">
//                       {airline}
//                     </span>
//                   </label>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Flight Results */}
//           <div className="flex-1 space-y-4">
//             <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
//               Flight Results
//             </h2>
//             {filteredFlights.map((flight) => {
//               const itineraries = flight.itineraries;
//               const firstLeg = itineraries[0].segments[0]; // Origin → Destination
//               const returnLeg = itineraries[1]?.segments[0]; // Destination → Origin (for round trip)

//               const departureDateFirstLeg = new Date(firstLeg.departure.at);
//               const arrivalDateFirstLeg = new Date(firstLeg.arrival.at);
//               const departureTimeFirstLeg =
//                 departureDateFirstLeg.toLocaleTimeString("en-GB", {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 });
//               const arrivalTimeFirstLeg =
//                 arrivalDateFirstLeg.toLocaleTimeString("en-GB", {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 });

//               const departureDateReturnLeg = new Date(
//                 returnLeg?.departure?.at || 0
//               );
//               const arrivalDateReturnLeg = new Date(
//                 returnLeg?.arrival?.at || 0
//               );
//               const departureTimeReturnLeg =
//                 departureDateReturnLeg.toLocaleTimeString("en-GB", {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 });
//               const arrivalTimeReturnLeg =
//                 arrivalDateReturnLeg.toLocaleTimeString("en-GB", {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 });

//               const durationFirstLeg = itineraries[0].duration; // First leg duration
//               const durationReturnLeg = itineraries[1]?.duration; // Return leg duration

//               return (
//                 <div
//                   key={flight.id}
//                   className="bg-white rounded-lg border border-neutral-300 p-6 hover:border-neutral-400 transition-colors duration-200 shadow-lg"
//                 >
//                   <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
//                     <div className="flex items-center mb-4 lg:mb-0">
//                       <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mr-4">
//                         {flight.airlineLogo && (
//                           <img
//                             src={flight.airlineLogo}
//                             alt={flight.airlineName}
//                             className="h-16 w-16 rounded-full object-cover border border-gray-200"
//                           />
//                         )}
//                       </div>
//                       <div>
//                         <p className="text-gray-900 font-medium">
//                           {flight.airlineName}
//                         </p>
//                         <p className="text-sm text-neutral-600">
//                           Flight {firstLeg.aircraft.code}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="flex-1 lg:mx-8">
//                       {/* First Leg: Origin → Destination */}
//                       <div className="flex items-center justify-between max-w-md mx-auto">
//                         <div className="text-center">
//                           <p className="text-lg font-bold text-gray-800">
//                             {departureTimeFirstLeg}
//                           </p>
//                           <p className="text-sm text-neutral-600">
//                             at {firstLeg.departure.terminal} terminal
//                           </p>
//                         </div>

//                         <div className="flex-1 mx-4">
//                           <div className="relative flex items-center">
//                             <div className="h-0.5 flex-1 bg-neutral-300"></div>
//                             <svg
//                               className="w-4 h-4 text-neutral-400 mx-2"
//                               fill="none"
//                               stroke="currentColor"
//                               viewBox="0 0 24 24"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M5 12h14m-7-7l7 7-7 7"
//                               />
//                             </svg>
//                             <div className="h-0.5 flex-1 bg-neutral-300"></div>
//                           </div>
//                           <p className="text-center text-sm text-neutral-600 mt-1">
//                             {durationFirstLeg}
//                           </p>
//                         </div>

//                         <div className="text-center">
//                           <p className="text-lg font-bold text-gray-800">
//                             {arrivalTimeFirstLeg}
//                           </p>
//                           <p className="text-sm text-neutral-600">
//                             at {firstLeg.arrival.terminal} terminal
//                           </p>
//                         </div>
//                       </div>

//                       {/* Second Leg: Destination → Origin (for round trip) */}
//                       {filters.tripType === "roundTrip" && returnLeg && (
//                         <div className="mt-8">
//                           <div className="flex items-center justify-between">
//                             <div className="text-center">
//                               <p className="text-lg font-bold text-gray-800">
//                                 {departureTimeReturnLeg}
//                               </p>
//                               <p className="text-sm text-neutral-600">
//                                 at {returnLeg.departure.terminal} terminal
//                               </p>
//                             </div>

//                             <div className="flex-1 mx-4">
//                               <div className="relative flex items-center">
//                                 <div className="h-0.5 flex-1 bg-neutral-300"></div>
//                                 <svg
//                                   className="w-4 h-4 text-neutral-400 mx-2"
//                                   fill="none"
//                                   stroke="currentColor"
//                                   viewBox="0 0 24 24"
//                                 >
//                                   <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M5 12h14m-7-7l7 7-7 7"
//                                   />
//                                 </svg>
//                                 <div className="h-0.5 flex-1 bg-neutral-300"></div>
//                               </div>
//                               <p className="text-center text-sm text-neutral-600 mt-1">
//                                 {durationReturnLeg}
//                               </p>
//                             </div>

//                             <div className="text-center">
//                               <p className="text-lg font-bold text-gray-800">
//                                 {arrivalTimeReturnLeg}
//                               </p>
//                               <p className="text-sm text-neutral-600">
//                                 at {returnLeg.arrival.terminal} terminal
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                     </div>

//                     <div className="text-center lg:text-right mt-4 lg:mt-0">
//                       <p className="text-2xl font-bold text-gray-800">
//                         ${flight.price?.total}
//                       </p>
//                       <button
//                         className="mt-2 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
//                         onClick={() => handleMoreDetailsClick(flight)}
//                       >
//                         Select
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FlightResult;

// import { useEffect, useMemo, useCallback, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setFilters, setSelectedFlight } from "../store/flightReducer";
// import {
//   useLazyGetSingleFlightsQuery,
//   useLazyGetRoundFlightsQuery,
// } from "../store/flightSlice";
// import { useNavigate } from "react-router-dom";

// const FlightResult = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { filters } = useSelector((state) => state.flight);
//   const [lastFilters, setLastFilters] = useState(filters); // Track last filters

//   const handleMoreDetailsClick = useCallback(
//     (flight) => {
//       dispatch(setSelectedFlight(flight));
//       navigate(`/flightDetails/${flight.id}`);
//     },
//     [dispatch, navigate]
//   );

//   const [
//     getSingleFlights,
//     { data: singleFlightData, isLoading: isSingleLoading },
//   ] = useLazyGetSingleFlightsQuery();
//   const [
//     getRoundFlights,
//     { data: roundFlightData, isLoading: isRoundLoading },
//   ] = useLazyGetRoundFlightsQuery();

//   // Memoize the API call trigger
//   const fetchFlights = useMemo(() => {
//     if (filters.tripType === "oneWay") {
//       return getSingleFlights({
//         origin: filters.origin,
//         destination: filters.destination,
//         date: filters.date,
//         adults: filters.adults,
//         travelClass: filters.travelClass,
//       });
//     } else {
//       return getRoundFlights({
//         origin: filters.origin,
//         destination: filters.destination,
//         date: filters.date,
//         adults: filters.adults,
//         returnDate: filters.returnDate,
//         travelClass: filters.travelClass,
//       });
//     }
//   }, [
//     filters.tripType,
//     filters.origin,
//     filters.destination,
//     filters.date,
//     filters.returnDate,
//     filters.adults,
//     filters.travelClass, // Only add travelClass when it's a part of the API call
//     getSingleFlights,
//     getRoundFlights,
//   ]);

//   useEffect(() => {
//     // Call the API only if the filters have changed from the last ones
//     if (JSON.stringify(filters) !== JSON.stringify(lastFilters)) {
//       fetchFlights();
//       setLastFilters(filters); // Update lastFilters after the API call
//     }
//   }, [filters, fetchFlights, lastFilters]); // Only re-fetch when necessary

//   const handleFilterChange = useCallback(
//     (e) => {
//       const { name, value, type, checked } = e.target;
//       if (type === "checkbox") {
//         dispatch(setFilters({ [name]: checked ? value : "" }));
//       } else {
//         dispatch(setFilters({ [name]: value }));
//       }
//     },
//     [dispatch]
//   );

//   const flights =
//     filters.tripType === "oneWay"
//       ? singleFlightData?.data || []
//       : roundFlightData?.data || [];

//   const filteredFlights = useMemo(() => {
//     let result = flights;

//     if (filters.airline) {
//       result = result.filter(
//         (flight) => flight.airlineName === filters.airline
//       );
//     }

//     return result;
//   }, [flights, filters.airline]);

//   // Loading spinner
//   if (isSingleLoading || isRoundLoading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   // No flights found
//   if (filteredFlights.length === 0) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-[200px] bg-gray-100 p-6 rounded-lg shadow-md">
//         <svg
//           className="w-16 h-16 text-gray-400 mb-4"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M12 6v12m6-6H6"
//           />
//         </svg>
//         <h3 className="text-xl font-semibold text-gray-700">
//           No Flights Found
//         </h3>
//         <p className="text-gray-500 mt-2 text-lg">
//           We could not find any flights matching your criteria.
//         </p>
//         <button
//           onClick={() => navigate("/")}
//           className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 mt-4"
//         >
//           Go to Search
//         </button>
//       </div>
//     );
//   }

//   const airlines =
//     filteredFlights.length > 0
//       ? [...new Set(filteredFlights.map((flight) => flight.airlineName))]
//       : [];

//   const date = new Date(filters.date);

//   const formattedDate = date.toLocaleDateString("en-GB", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });

//   return (
//     <section
//       id="flight_results"
//       className="bg-white px-4 py-12 sm:px-6 lg:px-8"
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row gap-6">
//           {/* Filters Sidebar */}
//           <div className="w-full md:w-64 bg-white rounded-lg border border-neutral-300 p-4 space-y-6 h-fit shadow-lg">
//             <div className="border-b border-neutral-300 pb-4">
//               <h3 className="text-lg font-medium text-gray-900 mb-4">
//                 Filters
//               </h3>
//               <div className="space-y-2">
//                 <p className="text-sm text-neutral-600">
//                   {filteredFlights.length} flights found
//                 </p>
//                 {filters.tripType === "oneWay" ? (
//                   <p className="text-sm text-neutral-600">
//                     {filters.origin} → {filters.destination}
//                   </p>
//                 ) : (
//                   <div>
//                     <p className="text-sm text-neutral-600">
//                       {filters.origin} → {filters.destination}
//                     </p>
//                     <p className="text-sm text-neutral-600">
//                       {filters.destination} → {filters.origin}
//                     </p>
//                   </div>
//                 )}
//                 <p className="text-sm text-neutral-600">{formattedDate}</p>
//               </div>
//             </div>

//             {/* Airline Class Filter */}
//             <div className="mb-6">
//               <label
//                 htmlFor="travelClass"
//                 className="block text-sm font-semibold text-gray-700"
//               >
//                 Class
//               </label>
//               <select
//                 name="travelClass"
//                 value={filters.travelClass || ""}
//                 onChange={handleFilterChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               >
//                 <option value="">Select Class</option>
//                 <option value="BUSINESS">Business</option>
//                 <option value="ECONOMY">Economy</option>
//                 <option value="FIRST">First</option>
//               </select>
//             </div>

//             {/* Airlines Filter */}
//             <div>
//               <h4 className="text-sm font-medium text-gray-900 mb-3">
//                 Airlines
//               </h4>
//               <div className="space-y-2">
//                 {airlines.map((airline, idx) => (
//                   <label key={idx} className="flex items-center">
//                     <input
//                       type="checkbox"
//                       className="form-checkbox h-4 w-4 text-blue-500 bg-neutral-100 border-neutral-300 rounded"
//                       onChange={handleFilterChange}
//                       name="airline"
//                       value={airline}
//                       checked={filters.airline === airline}
//                     />
//                     <span className="ml-2 text-sm text-neutral-600">
//                       {airline}
//                     </span>
//                   </label>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Flight Results */}
//           <div className="flex-1 space-y-4">
//             <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
//               Flight Results
//             </h2>
//             {filteredFlights.map((flight) => {
//               const itineraries = flight.itineraries;
//               const firstLeg = itineraries[0].segments[0]; // Origin → Destination
//               const returnLeg = itineraries[1]?.segments[0]; // Destination → Origin (for round trip)

//               const departureDateFirstLeg = new Date(firstLeg.departure.at);
//               const arrivalDateFirstLeg = new Date(firstLeg.arrival.at);
//               const departureTimeFirstLeg =
//                 departureDateFirstLeg.toLocaleTimeString("en-GB", {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 });
//               const arrivalTimeFirstLeg =
//                 arrivalDateFirstLeg.toLocaleTimeString("en-GB", {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 });

//               const departureDateReturnLeg = new Date(
//                 returnLeg?.departure?.at || 0
//               );
//               const arrivalDateReturnLeg = new Date(
//                 returnLeg?.arrival?.at || 0
//               );
//               const departureTimeReturnLeg =
//                 departureDateReturnLeg.toLocaleTimeString("en-GB", {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 });
//               const arrivalTimeReturnLeg =
//                 arrivalDateReturnLeg.toLocaleTimeString("en-GB", {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 });

//               const durationFirstLeg = itineraries[0].duration; // First leg duration
//               const durationReturnLeg = itineraries[1]?.duration; // Return leg duration

//               return (
//                 <div
//                   key={flight.id}
//                   className="bg-white rounded-lg border border-neutral-300 p-6 hover:border-neutral-400 transition-colors duration-200 shadow-lg"
//                 >
//                   <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
//                     <div className="flex items-center mb-4 lg:mb-0">
//                       <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mr-4">
//                         {flight.airlineLogo && (
//                           <img
//                             src={flight.airlineLogo}
//                             alt={flight.airlineName}
//                             className="h-16 w-16 rounded-full object-cover border border-gray-200"
//                           />
//                         )}
//                       </div>
//                       <div>
//                         <p className="text-gray-900 font-medium">
//                           {flight.airlineName}
//                         </p>
//                         <p className="text-sm text-neutral-600">
//                           Flight {firstLeg.aircraft.code}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="flex-1 lg:mx-8">
//                       {/* First Leg: Origin → Destination */}
//                       <div className="flex items-center justify-between max-w-md mx-auto">
//                         <div className="text-center">
//                           <p className="text-lg font-bold text-gray-800">
//                             {departureTimeFirstLeg}
//                           </p>
//                           <p className="text-sm text-neutral-600">
//                             at {firstLeg.departure.terminal} terminal
//                           </p>
//                         </div>

//                         <div className="flex-1 mx-4">
//                           <div className="relative flex items-center">
//                             <div className="h-0.5 flex-1 bg-neutral-300"></div>
//                             <svg
//                               className="w-4 h-4 text-neutral-400 mx-2"
//                               fill="none"
//                               stroke="currentColor"
//                               viewBox="0 0 24 24"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M5 12h14m-7-7l7 7-7 7"
//                               />
//                             </svg>
//                             <div className="h-0.5 flex-1 bg-neutral-300"></div>
//                           </div>
//                           <p className="text-center text-sm text-neutral-600 mt-1">
//                             {durationFirstLeg}
//                           </p>
//                         </div>

//                         <div className="text-center">
//                           <p className="text-lg font-bold text-gray-800">
//                             {arrivalTimeFirstLeg}
//                           </p>
//                           <p className="text-sm text-neutral-600">
//                             at {firstLeg.arrival.terminal} terminal
//                           </p>
//                         </div>
//                       </div>

//                       {/* Second Leg: Destination → Origin (for round trip) */}
//                       {filters.tripType === "roundTrip" && returnLeg && (
//                         <div className="mt-8">
//                           <div className="flex items-center justify-between">
//                             <div className="text-center">
//                               <p className="text-lg font-bold text-gray-800">
//                                 {departureTimeReturnLeg}
//                               </p>
//                               <p className="text-sm text-neutral-600">
//                                 at {returnLeg.departure.terminal} terminal
//                               </p>
//                             </div>

//                             <div className="flex-1 mx-4">
//                               <div className="relative flex items-center">
//                                 <div className="h-0.5 flex-1 bg-neutral-300"></div>
//                                 <svg
//                                   className="w-4 h-4 text-neutral-400 mx-2"
//                                   fill="none"
//                                   stroke="currentColor"
//                                   viewBox="0 0 24 24"
//                                 >
//                                   <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M5 12h14m-7-7l7 7-7 7"
//                                   />
//                                 </svg>
//                                 <div className="h-0.5 flex-1 bg-neutral-300"></div>
//                               </div>
//                               <p className="text-center text-sm text-neutral-600 mt-1">
//                                 {durationReturnLeg}
//                               </p>
//                             </div>

//                             <div className="text-center">
//                               <p className="text-lg font-bold text-gray-800">
//                                 {arrivalTimeReturnLeg}
//                               </p>
//                               <p className="text-sm text-neutral-600">
//                                 at {returnLeg.arrival.terminal} terminal
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                     </div>

//                     <div className="text-center lg:text-right mt-4 lg:mt-0">
//                       <p className="text-2xl font-bold text-gray-800">
//                         ${flight.price?.total}
//                       </p>
//                       <button
//                         className="mt-2 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
//                         onClick={() => handleMoreDetailsClick(flight)}
//                       >
//                         Select
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FlightResult;

//trried code fix redux  best ui and all functionality working
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilters,
  setSelectedFlight,
  setSingleFlights,
  setRoundTripFlights,
} from "../store/flightReducer";
import {
  useLazyGetSingleFlightsQuery,
  useLazyGetRoundFlightsQuery,
} from "../store/slices/flightSlice";
import { useNavigate } from "react-router-dom";
// import Search from "./Search";

const FlightResult = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { filters, currencyCode, currencySymbol } = useSelector(
    (state) => state.flight
  );
  const [lastFilters, setLastFilters] = useState(filters);

  const handleMoreDetailsClick = (flight) => {
    dispatch(setSelectedFlight(flight));
    navigate(`/flightDetails/${flight.id}`);
  };

  const [
    getSingleFlights,
    { data: singleFlightData, isLoading: isSingleLoading },
  ] = useLazyGetSingleFlightsQuery();
  const [
    getRoundFlights,
    { data: roundFlightData, isLoading: isRoundLoading },
  ] = useLazyGetRoundFlightsQuery();

  useEffect(() => {
    const commonParams = {
      origin: filters.origin,
      destination: filters.destination,
      date: filters.date,
      adults: filters.adults,
      travelClass: filters.travelClass,
      currencyCode,
    };

    // Include 'children' in the params only if it's greater than 0
    if (filters.children > 0) {
      commonParams.children = filters.children;
    }

    if (filters.tripType === "oneWay") {
      // For one-way flights, call `getSingleFlights`
      getSingleFlights(commonParams);
    } else {
      // For round-trip flights, call `getRoundFlights`
      const roundTripParams = {
        ...commonParams,
        returnDate: filters.returnDate,
      };
      getRoundFlights(roundTripParams);
    }
  }, [
    filters.tripType,
    filters.origin,
    filters.destination,
    filters.date,
    filters.returnDate,
    filters.adults,
    filters.travelClass,
    filters.children, // Add children to the dependency array
    currencyCode,
  ]);

  useEffect(() => {
    // Call the API only if the filters have changed from the last ones
    if (JSON.stringify(filters) !== JSON.stringify(lastFilters)) {
      setLastFilters(filters); // Update lastFilters after the API call
    }
  }, [filters, lastFilters]); // Only re-fetch when necessary

  useEffect(() => {
    // Dispatch the fetched flight data to Redux based on tripType
    if (filters.tripType === "oneWay" && singleFlightData) {
      dispatch(setSingleFlights({ data: singleFlightData?.data || [] }));
    } else if (filters.tripType === "roundTrip" && roundFlightData) {
      dispatch(setRoundTripFlights({ data: roundFlightData?.data || [] }));
    }
  }, [singleFlightData, roundFlightData, filters.tripType, dispatch]);
  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (checked) {
        dispatch(setFilters({ [name]: value }));
      } else {
        dispatch(setFilters({ [name]: "" }));
      }
    } else {
      dispatch(setFilters({ [name]: value }));
    }
  };

  const flights =
    filters.tripType === "oneWay"
      ? singleFlightData?.data || []
      : roundFlightData?.data || [];

  const filteredFlights = useMemo(() => {
    let result = flights;

    if (filters.airline) {
      result = result.filter(
        (flight) => flight.airlineName === filters.airline
      );
    }

    return result;
  }, [flights, filters.airline]);

  // Loading spinner
  if (isSingleLoading || isRoundLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (filteredFlights.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[200px] bg-gray-100 p-6 rounded-lg shadow-md">
        <svg
          className="w-16 h-16 text-gray-400 mb-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v12m6-6H6"
          />
        </svg>
        <h3 className="text-xl font-semibold text-gray-700">
          No Flights Found
        </h3>
        <p className="text-gray-500 mt-2 text-lg">
          We could not find any flights matching your criteria.
        </p>
        <button
          onClick={() => navigate("/flightSearch")}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 mt-4"
        >
          Go to Search
        </button>
      </div>
    );
  }

  const airlines =
    filteredFlights.length > 0
      ? [...new Set(filteredFlights.map((flight) => flight.airlineName))]
      : [];

  const date = new Date(filters.date);

  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <section
      id="flight_results"
      className="bg-white px-4 py-12 sm:px-6 lg:px-8"
    >
      {/* <Search /> */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="w-full md:w-64 bg-white rounded-lg border border-neutral-300 p-4 space-y-6 h-fit shadow-lg">
            <div className="border-b border-neutral-300 pb-4">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Filters
              </h3>
              <div className="space-y-2">
                <p className="text-sm text-neutral-600">
                  {filteredFlights.length} flights found
                </p>
                {filters.tripType === "oneWay" ? (
                  <p className="text-sm text-neutral-600">
                    {filters.origin} → {filters.destination}
                  </p>
                ) : (
                  <div>
                    <p className="text-sm text-neutral-600">
                      {filters.origin} → {filters.destination}
                    </p>
                    <p className="text-sm text-neutral-600">
                      {filters.destination} → {filters.origin}
                    </p>
                  </div>
                )}
                <p className="text-sm text-neutral-600">{formattedDate}</p>
              </div>
            </div>

            {/* Airline Class Filter */}
            <div className="mb-6">
              <label
                htmlFor="travelClass"
                className="block text-sm font-semibold text-gray-700"
              >
                Class
              </label>
              <select
                name="travelClass"
                value={filters.travelClass || ""}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Class</option>
                <option value="BUSINESS">Business</option>
                <option value="ECONOMY">Economy</option>
                <option value="FIRST">First</option>
              </select>
            </div>

            {/* Airlines Filter */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-3">
                Airlines
              </h4>
              <div className="space-y-2">
                {airlines.map((airline, idx) => (
                  <label key={idx} className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-500 bg-neutral-100 border-neutral-300 rounded"
                      onChange={handleFilterChange}
                      name="airline"
                      value={airline}
                      checked={filters.airline === airline}
                    />
                    <span className="ml-2 text-sm text-neutral-600">
                      {airline}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Flight Results */}
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
              Flight Results
            </h2>
            {filteredFlights.map((flight) => {
              const itineraries = flight.itineraries;
              const firstLeg = itineraries[0].segments[0]; // Origin → Destination
              const returnLeg = itineraries[1]?.segments[0]; // Destination → Origin (for round trip)

              const departureDateFirstLeg = new Date(firstLeg.departure.at);
              const arrivalDateFirstLeg = new Date(firstLeg.arrival.at);
              const departureTimeFirstLeg =
                departureDateFirstLeg.toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                });
              const arrivalTimeFirstLeg =
                arrivalDateFirstLeg.toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                });

              const departureDateReturnLeg = new Date(
                returnLeg?.departure?.at || 0
              );
              const arrivalDateReturnLeg = new Date(
                returnLeg?.arrival?.at || 0
              );
              const departureTimeReturnLeg =
                departureDateReturnLeg.toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                });
              const arrivalTimeReturnLeg =
                arrivalDateReturnLeg.toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                });

              const durationFirstLeg = itineraries[0].duration; // First leg duration
              const durationReturnLeg = itineraries[1]?.duration; // Return leg duration

              return (
                <div
                  key={flight.id}
                  className="bg-white rounded-lg border border-neutral-300 p-6 hover:border-neutral-400 transition-colors duration-200 shadow-lg"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-center mb-4 lg:mb-0">
                      <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mr-4">
                        {flight.airlineLogo && (
                          <img
                            src={flight.airlineLogo}
                            alt={flight.airlineName}
                            className="h-16 w-16 rounded-full object-cover border border-gray-200"
                          />
                        )}
                      </div>
                      <div>
                        <p className="text-gray-900 font-medium">
                          {flight.airlineName}
                        </p>
                        <p className="text-sm text-neutral-600">
                          Flight {firstLeg.aircraft.code}
                        </p>
                      </div>
                    </div>

                    <div className="flex-1 lg:mx-8">
                      {/* First Leg: Origin → Destination */}
                      <div className="flex items-center justify-between max-w-md mx-auto">
                        <div className="text-center">
                          <p className="text-lg font-bold text-gray-800">
                            {departureTimeFirstLeg}
                          </p>
                          <p className="text-sm text-neutral-600">
                            at {firstLeg.departure.terminal || 3} terminal
                          </p>
                        </div>

                        <div className="flex-1 mx-4">
                          <div className="relative flex items-center">
                            <div className="h-0.5 flex-1 bg-neutral-300"></div>
                            <svg
                              className="w-4 h-4 text-neutral-400 mx-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 12h14m-7-7l7 7-7 7"
                              />
                            </svg>
                            <div className="h-0.5 flex-1 bg-neutral-300"></div>
                          </div>
                          <p className="text-center text-sm text-neutral-600 mt-1">
                            {durationFirstLeg}
                          </p>
                        </div>

                        <div className="text-center">
                          <p className="text-lg font-bold text-gray-800">
                            {arrivalTimeFirstLeg}
                          </p>
                          <p className="text-sm text-neutral-600">
                            at {firstLeg.arrival.terminal || 3} terminal
                          </p>
                        </div>
                      </div>

                      {/* Second Leg: Destination → Origin (for round trip) */}
                      {filters.tripType === "roundTrip" && returnLeg && (
                        <div className="mt-8">
                          <div className="flex items-center justify-between">
                            <div className="text-center">
                              <p className="text-lg font-bold text-gray-800">
                                {departureTimeReturnLeg}
                              </p>
                              <p className="text-sm text-neutral-600">
                                at {returnLeg.departure.terminal || 2} terminal
                              </p>
                            </div>

                            <div className="flex-1 mx-4">
                              <div className="relative flex items-center">
                                <div className="h-0.5 flex-1 bg-neutral-300"></div>
                                <svg
                                  className="w-4 h-4 text-neutral-400 mx-2"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 12h14m-7-7l7 7-7 7"
                                  />
                                </svg>
                                <div className="h-0.5 flex-1 bg-neutral-300"></div>
                              </div>
                              <p className="text-center text-sm text-neutral-600 mt-1">
                                {durationReturnLeg}
                              </p>
                            </div>

                            <div className="text-center">
                              <p className="text-lg font-bold text-gray-800">
                                {arrivalTimeReturnLeg}
                              </p>
                              <p className="text-sm text-neutral-600">
                                at {returnLeg.arrival.terminal || 2} terminal
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="text-center lg:text-right mt-4 lg:mt-0">
                      <p className="text-2xl font-bold text-gray-800">
                        {currencySymbol}
                        {flight.price?.total}
                      </p>
                      <button
                        className="mt-2 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
                        onClick={() => handleMoreDetailsClick(flight)}
                      >
                        Select
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightResult;
