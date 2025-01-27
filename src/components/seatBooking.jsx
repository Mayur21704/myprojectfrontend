// import { useNavigate, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { MdArrowBack } from "react-icons/md";
// import { PiShoppingBag } from "react-icons/pi";
// import { GiMoneyStack } from "react-icons/gi";
// import { FaSuitcase } from "react-icons/fa";
// import { useState } from "react";

// const SeatBooking = () => {
//   const { id } = useParams();
//   const { singleFlights, roundTripFlights, currencySymbol } = useSelector(
//     (state) => state.flight
//   );

//   // Find the flight based on the ID from Redux store
//   const flight =
//     singleFlights.data.find((flight) => flight.id === id) ||
//     roundTripFlights.data.find((flight) => flight.id === id);

//   const navigate = useNavigate();

//   // State to store selected seats
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   if (!flight) {
//     return <div>Flight not found!</div>;
//   }

//   const handleGoBack = () => {
//     navigate(`/flightDetails/${id}`);
//   };

//   // Seat Layout for a plane, typical 10 rows, with 6 seats in each row (ABC DEF)
//   const renderSeatMap = () => {
//     const rows = 10;
//     const seatsPerRow = 6;
//     let seatLayout = [];

//     for (let i = 0; i < rows; i++) {
//       let rowSeats = [];
//       for (let j = 0; j < seatsPerRow; j++) {
//         rowSeats.push({
//           row: i + 1,
//           seat: String.fromCharCode(65 + j), // A, B, C, D, E, F
//           isAvailable: Math.random() > 0.3, // Simulate availability for now (60% chance)
//         });
//       }
//       seatLayout.push(rowSeats);
//     }
//     return seatLayout;
//   };

//   // Handle seat selection/deselection
//   const handleSelectSeat = (row, seat) => {
//     const seatCode = `${row}${seat}`;
//     // Check if seat is already selected, and update accordingly
//     setSelectedSeats(
//       (prevSelected) =>
//         prevSelected.includes(seatCode)
//           ? prevSelected.filter((code) => code !== seatCode) // Deselect
//           : [...prevSelected, seatCode] // Select
//     );
//   };

//   // Render flight details (Airline, flight number, price)
//   const renderFlightInfo = () => {
//     return (
//       <div className="flex items-center mb-6">
//         <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mr-4">
//           {flight.airlineLogo && (
//             <img
//               src={flight.airlineLogo}
//               alt={flight.airlineName}
//               className="h-6 w-6"
//             />
//           )}
//         </div>
//         <div>
//           <h2 className="text-xl font-bold text-gray-800">
//             {flight.airlineName}
//           </h2>
//           <p className="text-gray-500">Flight {flight.flightNumber}</p>
//         </div>
//         <div className="ml-auto text-right">
//           <p className="text-3xl font-bold text-gray-800">
//             {currencySymbol}
//             {flight.price?.total || "N/A"}
//           </p>
//           <p className="text-sm text-gray-500">per passenger</p>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <section
//       id="seat_booking"
//       className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-8"
//     >
//       <div className="max-w-5xl mx-auto">
//         <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-md">
//           {/* Back Button */}
//           <div className="mb-6">
//             <button
//               onClick={handleGoBack}
//               className="flex items-center text-blue-500 hover:text-blue-600"
//             >
//               <MdArrowBack className="mr-2" />
//               Go Back
//             </button>
//           </div>

//           {/* Flight Header */}
//           {renderFlightInfo()}

//           {/* Seat Map */}
//           <div className="my-8">
//             <h3 className="text-lg font-medium text-gray-800 mb-4">
//               Choose Your Seat
//             </h3>
//             <div className="space-y-4">
//               {renderSeatMap().map((rowSeats, rowIndex) => (
//                 <div key={rowIndex} className="flex justify-center space-x-2">
//                   {rowSeats.map((seat) => (
//                     <button
//                       key={seat.seat}
//                       onClick={() => handleSelectSeat(seat.row, seat.seat)}
//                       className={`w-12 h-12 rounded-full border-2 text-white flex items-center justify-center ${
//                         seat.isAvailable
//                           ? selectedSeats.includes(`${seat.row}${seat.seat}`)
//                             ? "bg-blue-500"
//                             : "bg-green-200 hover:bg-green-300"
//                           : "bg-gray-300 cursor-not-allowed"
//                       }`}
//                       disabled={!seat.isAvailable}
//                     >
//                       {seat.seat}
//                     </button>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Selected Seats */}
//           {selectedSeats.length > 0 && (
//             <div className="my-6">
//               <h4 className="text-lg font-medium text-gray-800 mb-2">
//                 Selected Seats:
//               </h4>
//               <div className="flex flex-wrap gap-2">
//                 {selectedSeats.map((seatCode) => (
//                   <span
//                     key={seatCode}
//                     className="bg-blue-500 text-white px-3 py-1 rounded-lg"
//                   >
//                     {seatCode}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Amenities Section */}
//           <div className="bg-gray-200/30 p-6 rounded-lg border border-gray-300 mt-6">
//             <h3 className="text-lg font-medium text-gray-800 mb-4">
//               Included Amenities
//             </h3>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               <div className="text-gray-700">
//                 <p className="uppercase flex items-center gap-3">
//                   <PiShoppingBag />
//                   Included Checked Bags
//                 </p>
//                 <p>
//                   {
//                     flight.travelerPricings[0].fareDetailsBySegment[0]
//                       .includedCheckedBags.weight
//                   }{" "}
//                   {
//                     flight.travelerPricings[0].fareDetailsBySegment[0]
//                       .includedCheckedBags.weightUnit
//                   }
//                 </p>
//               </div>
//               <div className="text-gray-700">
//                 <p className="uppercase flex items-center gap-3">
//                   <FaSuitcase />
//                   Free Carry-On Bag
//                 </p>
//               </div>
//               <div className="text-gray-700">
//                 <p className="uppercase flex items-center gap-3">
//                   <GiMoneyStack />
//                   Branded Fare Included
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Confirm Button */}
//           <div className="mt-8 text-center">
//             <button
//               className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200"
//               onClick={() =>
//                 console.log("Confirm seat selection:", selectedSeats)
//               }
//             >
//               Confirm Seat Selection
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SeatBooking;

// import React, { useState } from "react";

// const SeatBooking = () => {
//   const [selectedSeat, setSelectedSeat] = useState(null);

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 font-sans">
//       {/* Header */}
//       <div className="bg-white p-4 shadow-md text-center font-bold text-lg border-b">
//         <h2 className="text-red-600">FLIGHTS</h2>
//         <div className="flex justify-between text-sm mt-2">
//           <p>
//             Wed, 8 JAN 25 <br /> 06:45 AMD
//           </p>
//           <p className="text-gray-500">Departure</p>
//           <p>
//             Wed, 8 JAN 25 <br /> 08:20 DEL
//           </p>
//         </div>
//       </div>

//       {/* Seat Selection */}
//       <div className="bg-white p-6 mt-4 shadow-md">
//         <h3 className="font-bold text-red-600 text-xl">
//           SELECT YOUR PREFERRED SEAT
//         </h3>
//         <p className="text-gray-500 mt-2">AHMEDABAD - DELHI</p>

//         {/* Seat Map Legend */}
//         <div className="bg-gray-100 p-4 mt-4 rounded-md">
//           <h4 className="font-semibold">HOW TO SELECT SEATS</h4>
//           <ul className="text-sm text-gray-600 list-disc pl-4">
//             <li>Select passenger and select seats</li>
//             <li className="text-blue-600 cursor-pointer">
//               Show keyboard instructions
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Seat Map */}
//       <div className="bg-white p-6 mt-4 shadow-md">
//         <h3 className="font-bold">SEATMAP LEGEND</h3>
//         <div className="flex flex-wrap gap-4 mt-2">
//           <div className="flex items-center">
//             <div className="w-6 h-6 bg-blue-400 mr-2"></div> Extra legroom seat
//           </div>
//           <div className="flex items-center">
//             <div className="w-6 h-6 bg-orange-400 mr-2"></div> Preferred Seat
//           </div>
//           <div className="flex items-center">
//             <div className="w-6 h-6 bg-purple-600 mr-2"></div> Seat Selected
//           </div>
//           <div className="flex items-center">
//             <div className="w-6 h-6 bg-gray-400 mr-2"></div> Seat Unavailable
//           </div>
//           <div className="flex items-center">
//             <div className="w-6 h-6 bg-red-600 mr-2"></div> Exit Row
//           </div>
//         </div>
//       </div>

//       {/* Seat Layout */}
//       <div className="bg-white p-6 mt-4 shadow-md text-center">
//         <h3 className="font-bold">Front of the Aircraft</h3>
//         <div className="grid grid-cols-6 gap-2 mt-4">
//           {[...Array(30).keys()].map((_, index) => (
//             <button
//               key={index}
//               className={`w-12 h-12 border rounded ${
//                 selectedSeat === index
//                   ? "bg-purple-600 text-white"
//                   : "bg-orange-400"
//               }`}
//               onClick={() => setSelectedSeat(index)}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="bg-white p-6 mt-4 shadow-md flex justify-between">
//         <button className="bg-gray-300 text-black px-4 py-2 rounded">
//           Back
//         </button>
//         <button className="bg-red-600 text-white px-4 py-2 rounded">
//           Add Seats Later
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SeatBooking;

//updated seat map

// import React, { useState } from "react";

// const SeatBooking = () => {
//   const [selectedSeat, setSelectedSeat] = useState(null);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 font-sans">
//       {/* Header */}
//       <div className="bg-white p-6 shadow-lg rounded-lg">
//         <h2 className="text-center text-3xl font-bold text-red-600">FLIGHTS</h2>
//         <div className="flex justify-between text-sm mt-2">
//           <div>
//             <p className="font-semibold">Wed, 8 JAN 25</p>
//             <p className="text-gray-500">06:45 AM</p>
//           </div>
//           <div className="text-center">
//             <p className="text-gray-500">Departure</p>
//             <p className="font-semibold">AHMEDABAD</p>
//           </div>
//           <div>
//             <p className="font-semibold">Wed, 8 JAN 25</p>
//             <p className="text-gray-500">08:20 AM</p>
//             <p className="font-semibold">DELHI</p>
//           </div>
//         </div>
//       </div>

//       {/* Seat Selection Instructions */}
//       <div className="bg-white p-6 mt-6 shadow-lg rounded-lg">
//         <h3 className="text-xl font-semibold text-red-600">
//           SELECT YOUR PREFERRED SEAT
//         </h3>
//         <p className="text-gray-500 mt-2">AHMEDABAD - DELHI</p>

//         {/* Seat Map Legend */}
//         <div className="bg-gray-100 p-4 mt-6 rounded-lg">
//           <h4 className="font-semibold">SEATMAP LEGEND</h4>
//           <div className="flex flex-wrap gap-4 mt-4">
//             <div className="flex items-center">
//               <div className="w-6 h-6 bg-blue-400 rounded-full mr-2"></div>{" "}
//               Extra legroom seat
//             </div>
//             <div className="flex items-center">
//               <div className="w-6 h-6 bg-orange-400 rounded-full mr-2"></div>{" "}
//               Preferred Seat
//             </div>
//             <div className="flex items-center">
//               <div className="w-6 h-6 bg-purple-600 rounded-full mr-2"></div>{" "}
//               Seat Selected
//             </div>
//             <div className="flex items-center">
//               <div className="w-6 h-6 bg-gray-400 rounded-full mr-2"></div> Seat
//               Unavailable
//             </div>
//             <div className="flex items-center">
//               <div className="w-6 h-6 bg-red-600 rounded-full mr-2"></div> Exit
//               Row
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Seat Layout */}
//       <div className="bg-white p-6 mt-6 shadow-lg rounded-lg">
//         <h3 className="text-xl font-semibold text-center">
//           Front of the Aircraft
//         </h3>
//         <div className="grid grid-cols-6 gap-4 mt-6">
//           {[...Array(30).keys()].map((_, index) => (
//             <button
//               key={index}
//               className={`w-14 h-14 border rounded-lg text-lg font-semibold transition duration-200 ease-in-out ${
//                 selectedSeat === index
//                   ? "bg-purple-600 text-white"
//                   : "bg-orange-400 text-black hover:bg-orange-500"
//               }`}
//               onClick={() => setSelectedSeat(index)}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="bg-white p-6 mt-6 shadow-lg rounded-lg flex justify-between">
//         <button className="bg-gray-300 text-black px-6 py-3 rounded-lg hover:bg-gray-400 transition duration-300">
//           Back
//         </button>
//         <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300">
//           Add Seats Later
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SeatBooking;

// import React, { useState } from "react";

// const SeatBooking = () => {
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   // Seat rows (mock data based on the image)
//   const rows = [
//     { row: 5, seats: ["B", "C", "D", "E"] },
//     { row: 7, seats: ["B", "C", "D", "E"] },
//     { row: 10, seats: ["B", "C", "D", "E"] },
//     { row: 12, seats: ["B", "C", "D", "E"] },
//     { row: 15, seats: ["A", "B", "C", "D", "E", "F"] },
//     { row: 16, seats: ["A", "B", "C", "D", "E", "F"] },
//     { row: 18, seats: ["A", "B", "C", "D", "E", "F"] },
//     { row: 21, seats: ["A", "B", "C", "D", "E", "F"] },
//     { row: 24, seats: ["A", "B", "C", "D", "E", "F"] },
//     { row: 27, seats: ["A", "B", "C", "D", "E", "F"] },
//     { row: 28, seats: ["A", "B", "C", "D", "E", "F"] },
//   ];

//   const toggleSeatSelection = (seat) => {
//     setSelectedSeats((prev) =>
//       prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
//     );
//   };

//   const isSelected = (seat) => selectedSeats.includes(seat);

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-red-600 text-center">
//           SELECT YOUR PREFERRED SEAT
//         </h1>
//         <p className="text-center text-gray-500 text-lg mt-2">
//           Ahmedabad - Delhi
//         </p>
//       </div>

//       {/* Seat Legend */}
//       <div className="max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-lg mb-8">
//         <h2 className="text-lg font-semibold text-gray-600 mb-4">
//           How to Select Seats
//         </h2>
//         <div className="flex items-center space-x-4">
//           <div className="flex items-center space-x-2">
//             <div className="h-4 w-4 bg-orange-500 rounded"></div>
//             <span className="text-sm text-gray-600">Preferred Seat</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <div className="h-4 w-4 bg-blue-500 rounded"></div>
//             <span className="text-sm text-gray-600">Seat Selected</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <div className="h-4 w-4 bg-gray-300 rounded"></div>
//             <span className="text-sm text-gray-600">Seat Unavailable</span>
//           </div>
//         </div>
//       </div>

//       {/* Seat Map */}
//       <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//         <div className="text-center text-sm text-gray-500 mb-4">
//           Front of the Aircraft
//         </div>
//         <div className="grid grid-cols-6 gap-4">
//           {rows.map((row, index) => (
//             <React.Fragment key={row.row}>
//               {row.seats.map((seat) => {
//                 const seatId = `${row.row}${seat}`;
//                 return (
//                   <button
//                     key={seatId}
//                     className={`h-12 w-12 text-center font-medium rounded-lg ${
//                       isSelected(seatId)
//                         ? "bg-blue-500 text-white"
//                         : "bg-orange-500 text-white hover:bg-orange-600"
//                     }`}
//                     onClick={() => toggleSeatSelection(seatId)}
//                   >
//                     {seatId}
//                   </button>
//                 );
//               })}
//               {/* Spacer for row alignment */}
//               {index === 3 && (
//                 <div className="col-span-6 h-8 flex justify-center items-center">
//                   <span className="text-sm text-gray-500">Exit Row</span>
//                 </div>
//               )}
//             </React.Fragment>
//           ))}
//         </div>
//         <div className="text-center text-sm text-gray-500 mt-4">
//           Back of the Aircraft
//         </div>
//       </div>

//       {/* Footer Buttons */}
//       <div className="max-w-4xl mx-auto mt-6 flex justify-between">
//         <button
//           className="px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
//           onClick={() => setSelectedSeats([])}
//         >
//           Clear Selection
//         </button>
//         <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
//           Add Seats Later
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SeatBooking;

//intial seat booking

// import React, { useState } from "react";
// import { useSelector } from "react-redux";

// const SeatBooking = () => {
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   // Define the seat rows and structure
//   const rows = [
//     { row: 5, seats: ["B", "C", "D", "E"] },
//     { row: 7, seats: ["B", "C", "D", "E"] },
//     { row: 10, seats: ["B", "C", "D", "E"] },
//     { row: 12, seats: ["B", "C", "D", "E"] },
//     { row: 15, seats: ["A", "B", "C", "D", "E", "F"] },
//     { row: 16, seats: ["A", "B", "C", "D", "E", "F"], isExitRow: true },
//     { row: 18, seats: ["A", "B", "C", "D", "E", "F"] },
//     { row: 21, seats: ["A", "B", "C", "D", "E", "F"] },
//     { row: 24, seats: ["A", "B", "C", "D", "E", "F"], isExitRow: true },
//     { row: 27, seats: ["A", "B", "C", "D", "E", "F"] },
//     { row: 28, seats: ["A", "B", "C", "D", "E", "F"] },
//   ];

//   const toggleSeatSelection = (seat) => {
//     setSelectedSeats((prev) =>
//       prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
//     );
//   };

//   const isSelected = (seat) => selectedSeats.includes(seat);

//   const { adults, children } = useSelector((state) => state.flight.filters);
//   console.log(adults);
//   console.log(children);

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-red-600 text-center">
//           SELECT YOUR PREFERRED SEAT
//         </h1>
//         <p className="text-center text-gray-500 text-lg mt-2">
//           Ahmedabad - Delhi
//         </p>
//       </div>

//       {/* Seat Map */}
//       <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//         <div className="text-center text-sm text-gray-500 mb-4">
//           Front of the Aircraft
//         </div>

//         <div className="flex flex-col space-y-6">
//           {rows.map((row) => (
//             <div key={row.row} className="flex items-center space-x-2">
//               {/* Row Number */}
//               <span className="w-8 text-center font-semibold text-gray-600">
//                 {row.row}
//               </span>
//               {/* Seats */}
//               <div className="grid grid-cols-6 gap-2">
//                 {row.seats.map((seat) => {
//                   const seatId = `${row.row}${seat}`;
//                   const isExitRow = row.isExitRow && ["A", "F"].includes(seat);

//                   return (
//                     <button
//                       key={seatId}
//                       className={`h-12 w-12 text-center font-medium rounded-lg ${
//                         isExitRow
//                           ? "bg-gray-100 border-2 border-gray-400 text-gray-600"
//                           : isSelected(seatId)
//                           ? "bg-blue-500 text-white"
//                           : "bg-orange-500 text-white hover:bg-orange-600"
//                       }`}
//                       onClick={() => !isExitRow && toggleSeatSelection(seatId)}
//                     >
//                       {seatId}
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Labels for Exit Row, Toilets */}
//         <div className="flex justify-between items-center mt-6">
//           <span className="text-sm text-gray-500">Exit Row</span>
//           <div className="flex space-x-4">
//             <div className="text-sm text-gray-500">Toilets</div>
//             <div className="text-sm text-gray-500">Gallery</div>
//           </div>
//         </div>

//         <div className="text-center text-sm text-gray-500 mt-4">
//           Back of the Aircraft
//         </div>
//       </div>

//       {/* Footer Buttons */}
//       <div className="max-w-4xl mx-auto mt-6 flex justify-between">
//         <button
//           className="px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
//           onClick={() => setSelectedSeats([])}
//         >
//           Clear Selection
//         </button>
//         <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
//           Add Seats Later
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SeatBooking;

//18-1 based on adults and children

// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { setPassengers } from "../store/flightReducer"; // assuming you have a Redux slice

// const SeatBooking = () => {
//   const dispatch = useDispatch();

//   // Get the number of adults and children from Redux store
//   const { adults, children } = useSelector((state) => state.passengerDetails);

//   const totalPassengers = adults + children; // Calculate total passengers

//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [seatLimit, setSeatLimit] = useState(totalPassengers); // Seat limit based on adults and children

//   // Define the seat rows and structure
//   const rows = [
//     { row: 5, seats: ["B", "C", "D", "E"] },
//     { row: 7, seats: ["B", "C", "D", "E"] },
//     { row: 10, seats: ["B", "C", "D", "E"] },
//     { row: 12, seats: ["B", "C", "D", "E"] },
//     { row: 15, seats: ["A", "B", "C", "D", "E", "F"] },
//     { row: 16, seats: ["A", "B", "C", "D", "E", "F"], isExitRow: true },
//     { row: 18, seats: ["A", "B", "C", "D", "E", "F"] },
//     { row: 21, seats: ["A", "B", "C", "D", "E", "F"] },
//     { row: 24, seats: ["A", "B", "C", "D", "E", "F"], isExitRow: true },
//     { row: 27, seats: ["A", "B", "C", "D", "E", "F"] },
//     { row: 28, seats: ["A", "B", "C", "D", "E", "F"] },
//   ];

//   // Handle seat selection and update the state
//   const toggleSeatSelection = (seat) => {
//     if (selectedSeats.length < seatLimit) {
//       setSelectedSeats((prev) =>
//         prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
//       );
//     }
//   };

//   const isSelected = (seat) => selectedSeats.includes(seat);
//   const isSeatAvailable = () => selectedSeats.length < seatLimit;

//   // Update seat limit whenever passengers count changes
//   useEffect(() => {
//     setSeatLimit(totalPassengers);
//   }, [adults, children]);

//   const handleAdultsChange = (e) => {
//     const updatedAdults = e.target.value;
//     dispatch(setPassengers({ adults: updatedAdults, children }));
//   };

//   const handleChildrenChange = (e) => {
//     const updatedChildren = e.target.value;
//     dispatch(setPassengers({ adults, children: updatedChildren }));
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-red-600 text-center">
//           SELECT YOUR PREFERRED SEAT
//         </h1>
//         <p className="text-center text-gray-500 text-lg mt-2">
//           Ahmedabad - Delhi
//         </p>
//       </div>

//       {/* Passenger Count Form */}
//       <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mb-8">
//         <h3 className="text-xl font-semibold text-gray-700">
//           Passenger Details
//         </h3>
//         <div className="flex space-x-6 mt-4">
//           <div>
//             <label className="block text-gray-600">Adults</label>
//             <input
//               type="number"
//               value={adults}
//               onChange={handleAdultsChange}
//               min="1"
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-600">Children</label>
//             <input
//               type="number"
//               value={children}
//               onChange={handleChildrenChange}
//               min="0"
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Seat Map */}
//       <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//         <div className="text-center text-sm text-gray-500 mb-4">
//           Front of the Aircraft
//         </div>

//         <div className="flex flex-col space-y-6">
//           {rows.map((row) => (
//             <div key={row.row} className="flex items-center space-x-2">
//               {/* Row Number */}
//               <span className="w-8 text-center font-semibold text-gray-600">
//                 {row.row}
//               </span>
//               {/* Seats */}
//               <div className="grid grid-cols-6 gap-2">
//                 {row.seats.map((seat) => {
//                   const seatId = `${row.row}${seat}`;
//                   const isExitRow = row.isExitRow && ["A", "F"].includes(seat);
//                   const isAvailable = isSeatAvailable();

//                   return (
//                     <button
//                       key={seatId}
//                       className={`h-12 w-12 text-center font-medium rounded-lg ${
//                         isExitRow
//                           ? "bg-gray-100 border-2 border-gray-400 text-gray-600"
//                           : isSelected(seatId)
//                           ? "bg-blue-500 text-white"
//                           : isAvailable
//                           ? "bg-orange-500 text-white hover:bg-orange-600"
//                           : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                       }`}
//                       onClick={() => isAvailable && toggleSeatSelection(seatId)}
//                       disabled={!isAvailable}
//                     >
//                       {seatId}
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Labels for Exit Row, Toilets */}
//         <div className="flex justify-between items-center mt-6">
//           <span className="text-sm text-gray-500">Exit Row</span>
//           <div className="flex space-x-4">
//             <div className="text-sm text-gray-500">Toilets</div>
//             <div className="text-sm text-gray-500">Gallery</div>
//           </div>
//         </div>

//         <div className="text-center text-sm text-gray-500 mt-4">
//           Back of the Aircraft
//         </div>
//       </div>

//       {/* Footer Buttons */}
//       <div className="max-w-4xl mx-auto mt-6 flex justify-between">
//         <button
//           className="px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
//           onClick={() => setSelectedSeats([])}
//         >
//           Clear Selection
//         </button>
//         <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
//           Add Seats Later
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SeatBooking;

// import React from "react";
// import { FaArrowRight, FaToilet, FaUtensils } from "react-icons/fa";

// const SeatBooking = () => {
//   return (
//     <div className="bg-white min-h-screen font-sans">
//       {/* Header */}
//       <header className="border-b">
//         <div className="flex items-center justify-between px-6 py-4">
//           {/* Logo and Steps */}
//           <div>
//             <h1 className="text-2xl font-bold text-red-600">AIR INDIA</h1>
//           </div>
//           <nav className="flex space-x-8">
//             <span className="text-red-600 font-bold">1. FLIGHTS</span>
//             <span className="text-gray-500">2. JOURNEY DETAILS</span>
//             <span className="text-gray-500">3. REVIEW & PAYMENT</span>
//           </nav>
//           {/* Fare Summary */}
//           <div className="text-right">
//             <p className="text-sm text-gray-600">Total Fare (1 Passenger):</p>
//             <p className="text-lg font-bold text-gray-800">INR 5,671</p>
//             <p className="text-sm text-blue-600">Booking Summary ▼</p>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="px-6 py-4">
//         {/* Title */}
//         <div>
//           <h2 className="text-lg font-bold text-gray-800">
//             SELECT YOUR PREFERRED SEAT
//           </h2>
//           <p className="text-sm text-gray-500">AHMEDABAD - DELHI</p>
//         </div>

//         {/* Instructions */}
//         <section className="mt-4">
//           <h3 className="font-semibold text-gray-700">HOW TO SELECT SEATS</h3>
//           <ul className="text-sm text-gray-500">
//             <li>- Select passenger and select seats</li>
//             <li>
//               -{" "}
//               <span className="text-blue-600 underline">
//                 Show keyboard instructions
//               </span>
//             </li>
//           </ul>
//         </section>

//         {/* Seatmap Legend */}
//         <section className="mt-6">
//           <div className="flex space-x-6">
//             <div className="flex items-center space-x-2">
//               <div className="w-4 h-4 bg-yellow-500"></div>
//               <p className="text-sm text-gray-600">Extra legroom seat</p>
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="w-4 h-4 bg-orange-500"></div>
//               <p className="text-sm text-gray-600">Preferred Seat</p>
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="w-4 h-4 bg-blue-500"></div>
//               <p className="text-sm text-gray-600">Seat Selected</p>
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="w-4 h-4 bg-gray-300"></div>
//               <p className="text-sm text-gray-600">Seat Unavailable</p>
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="w-4 h-4 bg-red-500"></div>
//               <p className="text-sm text-gray-600">Exit Row</p>
//             </div>
//             <div className="flex items-center space-x-2">
//               <FaToilet className="text-gray-600" />
//               <p className="text-sm text-gray-600">Toilets</p>
//             </div>
//             <div className="flex items-center space-x-2">
//               <FaUtensils className="text-gray-600" />
//               <p className="text-sm text-gray-600">Galley</p>
//             </div>
//           </div>
//         </section>

//         {/* Seatmap */}
//         <section className="mt-8">
//           {/* Seatmap Header */}
//           <div className="flex justify-between items-center">
//             <p className="text-sm font-semibold text-gray-600">Temp Temp</p>
//             <button className="text-blue-600 underline text-sm">
//               Clear Selection
//             </button>
//           </div>
//           {/* Seatmap Rows */}
//           <div className="mt-4 border p-4 rounded-lg">
//             <p className="text-center text-sm text-gray-600 font-semibold">
//               Front of the Aircraft ↑
//             </p>
//             <div className="grid grid-cols-6 gap-2 mt-4 text-center">
//               {/* Seat Blocks */}
//               <div className="bg-orange-500 p-2 rounded text-white">5B</div>
//               <div className="bg-orange-500 p-2 rounded text-white">6C</div>
//               <div className="bg-orange-500 p-2 rounded text-white">7B</div>
//               <div className="bg-gray-300 p-2 rounded">Unavailable</div>
//               <div className="bg-blue-500 p-2 rounded text-white">16A</div>
//               <div className="bg-red-500 p-2 rounded text-white">15B</div>
//             </div>
//             <p className="text-center text-sm text-gray-600 font-semibold mt-4">
//               Back of the Aircraft ↓
//             </p>
//           </div>
//         </section>

//         {/* Buttons */}
//         <section className="mt-6 flex justify-between">
//           <button className="bg-red-600 text-white px-4 py-2 rounded">
//             Back
//           </button>
//           <button className="border border-red-600 text-red-600 px-4 py-2 rounded">
//             Add Seats Later
//           </button>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="mt-8 px-6 py-4 border-t">
//         <p className="text-sm text-gray-500">
//           Copyright © 2024 Air India Ltd. All rights reserved. Use of this
//           website indicates your compliance with our Privacy Policy, Conditions
//           of Carriage, Terms, and Conditions.
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default SeatBooking;

// import React from "react";
// import { FaToilet, FaUtensils } from "react-icons/fa";

// const SeatBooking = () => {
//   const rows = 29; // Total rows
//   const columns = ["A", "B", "C", "D", "E", "F"]; // Seat columns
//   const seatTypes = {
//     extraLegroom: "bg-yellow-400",
//     preferred: "bg-orange-400",
//     selected: "bg-blue-400",
//     unavailable: "bg-gray-400",
//     exitRow: "bg-red-400",
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-4">
//       {/* Header Section */}
//       <header className="text-center mb-8">
//         <h1 className="text-2xl font-bold text-red-700">
//           SELECT YOUR PREFERRED SEAT
//         </h1>
//         <p className="text-lg text-gray-800 mt-2">Ahmedabad - Delhi</p>
//         <p className="text-sm text-gray-600">
//           08:20 (AMD) ➝ 09:55 (DEL) | Total Fee:{" "}
//           <span className="font-bold">INR 5,671</span>
//         </p>
//       </header>

//       {/* Instructions Section */}
//       <section className="mb-6 bg-gray-100 p-4 rounded-lg">
//         <h3 className="text-lg font-bold text-gray-800 mb-2">
//           HOW TO SELECT SEATS
//         </h3>
//         <ul className="list-disc list-inside text-sm text-gray-700">
//           <li>Select passenger and select seats</li>
//           <li>Show keyboard instructions</li>
//         </ul>
//       </section>

//       {/* Seatmap Legend */}
//       <section className="mb-6">
//         <h3 className="text-lg font-bold text-gray-800 mb-4">Seatmap Legend</h3>
//         <div className="flex flex-wrap gap-6">
//           {Object.entries(seatTypes).map(([type, color]) => (
//             <div key={type} className="flex items-center gap-2">
//               <span className={`w-4 h-4 ${color} rounded-sm`}></span>
//               <p className="text-sm text-gray-600 capitalize">
//                 {type.replace(/([A-Z])/g, " $1")}
//               </p>
//             </div>
//           ))}
//           <div className="flex items-center gap-2">
//             <FaToilet className="text-gray-600 text-lg" />
//             <p className="text-sm text-gray-600">Toilets</p>
//           </div>
//           <div className="flex items-center gap-2">
//             <FaUtensils className="text-gray-600 text-lg" />
//             <p className="text-sm text-gray-600">Galley</p>
//           </div>
//         </div>
//       </section>

//       {/* Seat Map */}
//       <section className="bg-gray-100 p-4 rounded-lg">
//         <div className="grid grid-cols-8 gap-4">
//           <p className="col-span-8 text-center font-bold">
//             Front of the Aircraft
//           </p>
//           {/* Rows of Seats */}
//           {Array.from({ length: rows }).map((_, rowIndex) => (
//             <div key={rowIndex} className="flex justify-between items-center">
//               {columns.map((column, seatIndex) => (
//                 <div
//                   key={`${rowIndex}-${seatIndex}`}
//                   className={`w-10 h-10 flex items-center justify-center text-sm font-bold rounded-sm ${
//                     rowIndex === 0 && column === "C"
//                       ? seatTypes.extraLegroom
//                       : rowIndex === 1
//                       ? seatTypes.preferred
//                       : seatTypes.unavailable
//                   } hover:shadow-md hover:cursor-pointer`}
//                 >
//                   {column}
//                 </div>
//               ))}
//               {/* Add Galley or Toilet for specific rows */}
//               {rowIndex === 0 || rowIndex === 28 ? (
//                 <div className="flex items-center gap-4">
//                   <FaUtensils className="text-gray-600 text-lg" />
//                   <FaToilet className="text-gray-600 text-lg" />
//                 </div>
//               ) : null}
//             </div>
//           ))}
//           <p className="col-span-8 text-center font-bold mt-4">
//             Back of the Aircraft
//           </p>
//         </div>
//       </section>

//       {/* Footer Buttons */}
//       <footer className="flex justify-between mt-6">
//         <button className="bg-gray-300 px-6 py-2 rounded-md hover:bg-gray-400">
//           Back
//         </button>
//         <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700">
//           Add Seats Later
//         </button>
//       </footer>
//     </div>
//   );
// };

// export default SeatBooking;

// import React, { useState } from "react";
// import { FaToilet, FaUtensils } from "react-icons/fa";

// const SeatBooking = () => {
//   const rows = 29; // Total rows
//   const columns = ["A", "B", "C", "D", "E", "F"]; // Seat columns
//   const seatTypes = {
//     extraLegroom: "bg-yellow-400",
//     preferred: "bg-orange-400",
//     selected: "bg-blue-400",
//     unavailable: "bg-gray-400",
//     exitRow: "bg-red-400",
//   };

//   // State to manage selected seats
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const handleSeatClick = (row, column) => {
//     const seatId = `${row}-${column}`;
//     if (!selectedSeats.includes(seatId)) {
//       setSelectedSeats([...selectedSeats, seatId]);
//     } else {
//       setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-4">
//       {/* Header Section */}
//       <header className="text-center mb-8">
//         <h1 className="text-2xl font-bold text-red-700">
//           SELECT YOUR PREFERRED SEAT
//         </h1>
//         <p className="text-lg text-gray-800 mt-2">Ahmedabad - Delhi</p>
//         <p className="text-sm text-gray-600">
//           08:20 (AMD) ➝ 09:55 (DEL) | Total Fee:{" "}
//           <span className="font-bold">INR 5,671</span>
//         </p>
//       </header>

//       {/* Instructions Section */}
//       <section className="mb-6 bg-gray-100 p-4 rounded-lg">
//         <h3 className="text-lg font-bold text-gray-800 mb-2">
//           HOW TO SELECT SEATS
//         </h3>
//         <ul className="list-disc list-inside text-sm text-gray-700">
//           <li>Select a seat to choose it</li>
//           <li>Click again to deselect</li>
//         </ul>
//       </section>

//       {/* Seatmap Legend */}
//       <section className="mb-6">
//         <h3 className="text-lg font-bold text-gray-800 mb-4">Seatmap Legend</h3>
//         <div className="flex flex-wrap gap-6">
//           {Object.entries(seatTypes).map(([type, color]) => (
//             <div key={type} className="flex items-center gap-2">
//               <span className={`w-4 h-4 ${color} rounded-sm`}></span>
//               <p className="text-sm text-gray-600 capitalize">
//                 {type.replace(/([A-Z])/g, " $1")}
//               </p>
//             </div>
//           ))}
//           <div className="flex items-center gap-2">
//             <FaToilet className="text-gray-600 text-lg" />
//             <p className="text-sm text-gray-600">Toilets</p>
//           </div>
//           <div className="flex items-center gap-2">
//             <FaUtensils className="text-gray-600 text-lg" />
//             <p className="text-sm text-gray-600">Galley</p>
//           </div>
//         </div>
//       </section>

//       {/* Seat Map */}
//       <section className="bg-gray-100 p-4 rounded-lg">
//         <div className="grid grid-cols-8 gap-4">
//           <p className="col-span-8 text-center font-bold">
//             Front of the Aircraft
//           </p>

//           {/* Rows of Seats */}
//           {Array.from({ length: rows }).map((_, rowIndex) => (
//             <div key={rowIndex} className="flex justify-between items-center">
//               {columns.map((column, seatIndex) => {
//                 const seatId = `${rowIndex}-${column}`;
//                 const isSelected = selectedSeats.includes(seatId);
//                 const isUnavailable = rowIndex === 1 || rowIndex === 28; // Unavailable seats in row 1 and last row
//                 const seatClass = isSelected
//                   ? seatTypes.selected
//                   : isUnavailable
//                   ? seatTypes.unavailable
//                   : rowIndex === 0 && column === "C"
//                   ? seatTypes.extraLegroom
//                   : rowIndex === 1
//                   ? seatTypes.preferred
//                   : "bg-white"; // Default class for available seats

//                 return (
//                   <div
//                     key={seatId}
//                     className={`w-10 h-10 flex items-center justify-center text-sm font-bold rounded-sm ${seatClass} hover:shadow-md hover:cursor-pointer`}
//                     onClick={() =>
//                       !isUnavailable && handleSeatClick(rowIndex, column)
//                     }
//                   >
//                     {column}
//                   </div>
//                 );
//               })}
//             </div>
//           ))}

//           <p className="col-span-8 text-center font-bold mt-4">
//             Back of the Aircraft
//           </p>
//         </div>
//       </section>

//       {/* Footer Buttons */}
//       <footer className="flex justify-between mt-6">
//         <button className="bg-gray-300 px-6 py-2 rounded-md hover:bg-gray-400">
//           Back
//         </button>
//         <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700">
//           Add Seats Later
//         </button>
//       </footer>
//     </div>
//   );
// };

// export default SeatBooking;

//little bit okkk

// import React from "react";
// import { FaToilet, FaSignOutAlt } from "react-icons/fa";

// const SeatBooking = () => {
//   const seatTypes = [
//     { label: "Extra Legroom", color: "bg-yellow-400" },
//     { label: "Preferred Seat", color: "bg-orange-500" },
//     { label: "Seat Selected", color: "bg-blue-500" },
//     { label: "Seat Unavailable", color: "bg-gray-300" },
//     { label: "Exit Row", color: "bg-green-400" },
//   ];

//   const rows = [
//     ["5A", "5B", "", "", "6C", "6D"],
//     ["7A", "7B", "", "", "7E", "7F"],
//     ["8A", "8B", "", "", "8E", "8F"],
//     ["9A", "9B", "", "", "9E", "9F"],
//     ["10A", "10B", "", "", "10E", "10F"],
//     ["11A", "11B", "", "", "11E", "11F"],
//     ["12A", "12B", "", "", "12E", "12F"],
//   ];

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Header */}
//       <header className="bg-white py-4 px-6 shadow-md">
//         <div className="flex justify-between items-center">
//           <h1 className="text-xl font-bold text-red-600">Air India</h1>
//           <div className="flex space-x-4 text-gray-600">
//             <span className="text-red-600 font-bold">2 Journey Details</span>
//             <span>3 Review & Payment</span>
//           </div>
//           <div className="text-right">
//             <p className="text-lg font-bold">INR 5,671</p>
//             <a href="#" className="text-sm underline text-blue-600">
//               Booking Summary
//             </a>
//           </div>
//         </div>
//       </header>

//       {/* Title Section */}
//       <div className="bg-white py-6 px-6 shadow-sm mb-6">
//         <h2 className="text-2xl font-bold">Select Your Preferred Seat</h2>
//         <p className="text-gray-600 text-sm">Ahmedabad - Delhi</p>
//       </div>

//       {/* Seat Selection Area */}
//       <main className="max-w-5xl mx-auto p-6">
//         {/* Legend */}
//         <div className="mb-6">
//           <h3 className="text-lg font-semibold mb-4">How to Select Seats</h3>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             {seatTypes.map((type, index) => (
//               <div key={index} className="flex items-center space-x-2">
//                 <div className={`w-6 h-6 ${type.color} rounded-md`} />
//                 <span className="text-sm">{type.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Seat Map */}
//         <div className="grid gap-4">
//           {rows.map((row, rowIndex) => (
//             <div key={rowIndex} className="flex space-x-2 justify-center">
//               {row.map((seat, seatIndex) => (
//                 <div
//                   key={seatIndex}
//                   className={`w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md hover:border hover:border-red-500 ${
//                     seat ? "" : "invisible"
//                   }`}
//                 >
//                   {seat && (
//                     <span className="text-xs font-medium text-gray-600">
//                       {seat}
//                     </span>
//                   )}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>

//         {/* Additional Icons */}
//         <div className="mt-6 flex justify-around items-center text-gray-600 text-sm">
//           <div className="flex items-center space-x-2">
//             <FaToilet className="text-xl" />
//             <span>Toilets</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <FaSignOutAlt className="text-xl" />
//             <span>Exit Row</span>
//           </div>
//         </div>

//         {/* Footer */}
//         <footer className="mt-10 text-center text-gray-500 text-sm">
//           <p>Copyright © 2024 Air India. All Rights Reserved.</p>
//         </footer>
//       </main>
//     </div>
//   );
// };

// export default SeatBooking;

//improvement of set selection

// import React from "react";
// import { FaToilet, FaSignOutAlt } from "react-icons/fa";

// const SeatBooking = () => {
//   const seatTypes = [
//     { label: "Extra Legroom", color: "bg-yellow-400" },
//     { label: "Preferred Seat", color: "bg-orange-500" },
//     { label: "Seat Selected", color: "bg-blue-500" },
//     { label: "Seat Unavailable", color: "bg-gray-300" },
//     { label: "Exit Row", color: "bg-green-400" },
//   ];

//   const rows = [
//     ["5A", "5B", "", "", "6C", "6D"],
//     ["7A", "7B", "", "", "7E", "7F"],
//     ["8A", "8B", "", "", "8E", "8F"],
//     ["9A", "9B", "", "", "9E", "9F"],
//     ["10A", "10B", "", "", "10E", "10F"],
//     ["11A", "11B", "", "", "11E", "11F"],
//     ["12A", "12B", "", "", "12E", "12F"],
//     ["15A", "15B", "", "", "15E", "15F"],
//     ["16A", "16B", "16C", "16D", "16E", "16F"],
//     ["17A", "17B", "", "", "17E", "17F"],
//     ["18A", "18B", "", "", "18E", "18F"],
//     ["19A", "19B", "", "", "19E", "19F"],
//     ["21A", "21B", "", "", "21E", "21F"],
//     ["24A", "24B", "24C", "", "24D", "24E", "24F"],
//     ["25A", "25B", "", "", "25E", "25F"],
//     ["26A", "26B", "", "", "26E", "26F"],
//     ["27A", "27B", "", "", "27E", "27F"],
//     ["28A", "28B", "", "", "28E", "28F"],
//     ["29A", "29B", "", "", "29E", "29F"],
//   ];

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Header */}
//       <header className="bg-white py-4 px-6 shadow-md">
//         <div className="flex justify-between items-center">
//           <h1 className="text-xl font-bold text-red-600">Air India</h1>
//           <div className="flex space-x-4 text-gray-600">
//             <span className="text-red-600 font-bold">2 Journey Details</span>
//             <span>3 Review & Payment</span>
//           </div>
//           <div className="text-right">
//             <p className="text-lg font-bold">INR 5,671</p>
//             <a href="#" className="text-sm underline text-blue-600">
//               Booking Summary
//             </a>
//           </div>
//         </div>
//       </header>

//       {/* Title Section */}
//       <div className="bg-white py-6 px-6 shadow-sm mb-6">
//         <h2 className="text-2xl font-bold">Select Your Preferred Seat</h2>
//         <p className="text-gray-600 text-sm">Ahmedabad - Delhi</p>
//       </div>

//       {/* Seat Selection Area */}
//       <main className="max-w-5xl mx-auto p-6">
//         {/* Legend */}
//         <div className="mb-6">
//           <h3 className="text-lg font-semibold mb-4">How to Select Seats</h3>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             {seatTypes.map((type, index) => (
//               <div key={index} className="flex items-center space-x-2">
//                 <div className={`w-6 h-6 ${type.color} rounded-md`} />
//                 <span className="text-sm">{type.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Seat Map */}
//         <div className="grid gap-4">
//           {rows.map((row, rowIndex) => (
//             <div key={rowIndex} className="flex space-x-2 justify-center">
//               {row.map((seat, seatIndex) => (
//                 <div
//                   key={seatIndex}
//                   className={`w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md hover:border hover:border-red-500 ${
//                     seat ? "" : "invisible"
//                   }`}
//                 >
//                   {seat && (
//                     <span className="text-xs font-medium text-gray-600">
//                       {seat}
//                     </span>
//                   )}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>

//         {/* Additional Icons */}
//         <div className="mt-6 flex justify-around items-center text-gray-600 text-sm">
//           <div className="flex items-center space-x-2">
//             <FaToilet className="text-xl" />
//             <span>Toilets</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <FaSignOutAlt className="text-xl" />
//             <span>Exit Row</span>
//           </div>
//         </div>

//         {/* Footer */}
//         <footer className="mt-10 text-center text-gray-500 text-sm">
//           <p>Copyright © 2024 Air India. All Rights Reserved.</p>
//         </footer>
//       </main>
//     </div>
//   );
// };

// export default SeatBooking;

// import React from "react";
// import { FaToilet, FaSignOutAlt } from "react-icons/fa";

// const SeatBooking = () => {
//   const seatTypes = [
//     { label: "Extra Legroom", color: "bg-yellow-400" },
//     { label: "Preferred Seat", color: "bg-orange-500" },
//     { label: "Seat Selected", color: "bg-blue-500" },
//     { label: "Seat Unavailable", color: "bg-red-400" },
//     { label: "Exit Row", color: "bg-green-400" },
//   ];

//   const rows = [
//     ["5A", "5B", "", "", "6C", "6D"],
//     ["7A", "7B", "", "", "7E", "7F"],
//     ["8A", "8B", "", "", "8E", "8F"],
//     ["9A", "9B", "", "", "9E", "9F"],
//     ["10A", "10B", "", "", "10E", "10F"],
//     ["11A", "11B", "", "", "11E", "11F"],
//     ["12A", "12B", "", "", "12E", "12F"],
//     ["15A", "15B", "", "", "15E", "15F"],
//     ["16A", "16B", "16C", "16D", "16E", "16F"],
//     ["17A", "17B", "", "", "17E", "17F"],
//     ["18A", "18B", "", "", "18E", "18F"],
//     ["19A", "19B", "", "", "19E", "19F"],
//     ["21A", "21B", "", "", "21E", "21F"],
//     ["24A", "24B", "24C", "", "24D", "24E", "24F"],
//     ["25A", "25B", "", "", "25E", "25F"],
//     ["26A", "26B", "", "", "26E", "26F"],
//     ["27A", "27B", "", "", "27E", "27F"],
//     ["28A", "28B", "", "", "28E", "28F"],
//     ["29A", "29B", "", "", "29E", "29F"],
//   ];

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Header */}
//       <header className="bg-white py-4 px-6 shadow-md">
//         <div className="flex justify-between items-center">
//           <h1 className="text-xl font-bold text-red-600">Air India</h1>
//           <div className="flex space-x-4 text-gray-600">
//             <span className="text-red-600 font-bold">2 Journey Details</span>
//             <span>3 Review & Payment</span>
//           </div>
//           <div className="text-right">
//             <p className="text-lg font-bold">INR 5,671</p>
//             <a href="#" className="text-sm underline text-blue-600">
//               Booking Summary
//             </a>
//           </div>
//         </div>
//       </header>

//       {/* Title Section */}
//       <div className="bg-white py-6 px-6 shadow-sm mb-6">
//         <h2 className="text-2xl font-bold">Select Your Preferred Seat</h2>
//         <p className="text-gray-600 text-sm">Ahmedabad - Delhi</p>
//       </div>

//       {/* Seat Selection Area */}
//       <main className="max-w-5xl mx-auto p-6">
//         {/* Legend */}
//         <div className="mb-6">
//           <h3 className="text-lg font-semibold mb-4">How to Select Seats</h3>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             {seatTypes.map((type, index) => (
//               <div key={index} className="flex items-center space-x-2">
//                 <div className={`w-6 h-6 ${type.color} rounded-md border`} />
//                 <span className="text-sm">{type.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Seat Map */}
//         <div className="grid gap-4">
//           {rows.map((row, rowIndex) => (
//             <div key={rowIndex} className="flex space-x-2 justify-center">
//               {row.map((seat, seatIndex) => (
//                 <div
//                   key={seatIndex}
//                   className={`w-10 h-10 flex items-center justify-center rounded-md ${
//                     seat
//                       ? seat === "6C" ||
//                         seat === "6D" ||
//                         seat === "15A" ||
//                         seat === "15B"
//                         ? "bg-red-400 cursor-not-allowed"
//                         : "bg-gray-200 hover:border hover:border-red-500"
//                       : "invisible"
//                   }`}
//                 >
//                   {seat && (
//                     <span className="text-xs font-medium text-gray-600">
//                       {seat}
//                     </span>
//                   )}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>

//         {/* Additional Icons */}
//         <div className="mt-6 flex justify-around items-center text-gray-600 text-sm">
//           <div className="flex items-center space-x-2">
//             <FaToilet className="text-xl text-blue-500" />
//             <span>Toilets</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <FaSignOutAlt className="text-xl text-green-600" />
//             <span>Exit Row</span>
//           </div>
//         </div>

//         {/* Footer */}
//         <footer className="mt-10 text-center text-gray-500 text-sm">
//           <p>Copyright © 2024 Air India. All Rights Reserved.</p>
//         </footer>
//       </main>
//     </div>
//   );
// };

// export default SeatBooking;

// import React from "react";
// import { FaToilet, FaSignOutAlt } from "react-icons/fa";

// const SeatBooking = () => {
//   const seatTypes = [
//     { label: "Extra Legroom", color: "bg-yellow-400" },
//     { label: "Preferred Seat", color: "bg-orange-500" },
//     { label: "Seat Selected", color: "bg-blue-500" },
//     { label: "Seat Unavailable", color: "bg-red-400" },
//     { label: "Exit Row", color: "bg-green-400" },
//   ];

//   const rows = [
//     ["5A", "5B", "", "", "6C", "6D"],
//     ["7A", "7B", "", "", "7E", "7F"],
//     ["8A", "8B", "", "", "8E", "8F"],
//     ["9A", "9B", "", "", "9E", "9F"],
//     ["10A", "10B", "", "", "10E", "10F"],
//     ["11A", "11B", "", "", "11E", "11F"],
//     ["12A", "12B", "", "", "12E", "12F"],
//     ["15A", "15B", "", "", "15E", "15F"],
//     ["16A", "16B", "16C", "16D", "16E", "16F"],
//     ["17A", "17B", "", "", "17E", "17F"],
//     ["18A", "18B", "", "", "18E", "18F"],
//     ["19A", "19B", "", "", "19E", "19F"],
//     ["21A", "21B", "", "", "21E", "21F"],
//     ["24A", "24B", "24C", "", "24D", "24E", "24F"],
//     ["25A", "25B", "", "", "25E", "25F"],
//     ["26A", "26B", "", "", "26E", "26F"],
//     ["27A", "27B", "", "", "27E", "27F"],
//     ["28A", "28B", "", "", "28E", "28F"],
//     ["29A", "29B", "", "", "29E", "29F"],
//   ];

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Header */}
//       <header className="border-b">
//         <div className="flex items-center justify-between px-6 py-4">
//           {/* Logo and Steps */}
//           <div>
//             <h1 className="text-2xl font-bold text-red-600">AIR INDIA</h1>
//           </div>
//           <nav className="flex space-x-8">
//             <span className="text-red-600 font-bold">1. FLIGHTS</span>
//             <span className="text-gray-500">2. JOURNEY DETAILS</span>
//             <span className="text-gray-500">3. REVIEW & PAYMENT</span>
//           </nav>
//           {/* Fare Summary */}
//           <div className="text-right">
//             <p className="text-sm text-gray-600">Total Fare (1 Passenger):</p>
//             <p className="text-lg font-bold text-gray-800">INR 5,671</p>
//             <p className="text-sm text-blue-600">Booking Summary ▼</p>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="px-6 py-4">
//         {/* Title */}
//         <div>
//           <h2 className="text-lg font-bold text-gray-800">
//             SELECT YOUR PREFERRED SEAT
//           </h2>
//           <p className="text-sm text-gray-500">AHMEDABAD - DELHI</p>
//         </div>

//         {/* Legend */}
//         <div className="mb-6">
//           <h3 className="text-lg font-semibold mb-4">How to Select Seats</h3>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             {seatTypes.map((type, index) => (
//               <div key={index} className="flex items-center space-x-2">
//                 <div className={`w-6 h-6 ${type.color} rounded-md border`} />
//                 <span className="text-sm">{type.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Seat Map */}
//         <div className="grid gap-4">
//           {rows.map((row, rowIndex) => (
//             <div key={rowIndex} className="flex space-x-2 justify-center">
//               {row.map((seat, seatIndex) => (
//                 <div
//                   key={seatIndex}
//                   className={`w-10 h-10 flex items-center justify-center rounded-md text-gray-600 font-medium text-xs ${
//                     seat
//                       ? seat === "6C" ||
//                         seat === "6D" ||
//                         seat === "15A" ||
//                         seat === "15B"
//                         ? "bg-red-400 cursor-not-allowed text-white"
//                         : "bg-gray-200 hover:border hover:border-red-500"
//                       : "invisible"
//                   }`}
//                 >
//                   {seat}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>

//         {/* Additional Icons */}
//         <div className="mt-6 flex justify-around items-center text-gray-600 text-sm">
//           <div className="flex items-center space-x-2">
//             <FaToilet className="text-2xl text-blue-500" />
//             <span>Toilets</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <FaSignOutAlt className="text-2xl text-green-600" />
//             <span>Exit Row</span>
//           </div>
//         </div>

//         {/* Footer */}
//         <footer className="mt-10 text-center text-gray-500 text-sm">
//           <p>Copyright © 2024 Air India. All Rights Reserved.</p>
//         </footer>
//       </main>
//     </div>
//   );
// };

// export default SeatBooking;

//from seat selection

// import React, { useState } from "react";
// import { FaToilet, FaSignOutAlt } from "react-icons/fa";

// const SeatBooking = () => {
//   // Seat types for legend
//   const seatTypes = [
//     { label: "Extra Legroom", color: "bg-yellow-400" },
//     { label: "Preferred Seat", color: "bg-orange-500" },
//     { label: "Seat Selected", color: "bg-blue-500" },
//     { label: "Seat Unavailable", color: "bg-red-400" },
//     { label: "Exit Row", color: "bg-green-400" },
//   ];

//   // Seat rows for rendering the seat map
//   const rows = [
//     ["5A", "5B", "", "", "6C", "6D"],
//     ["7A", "7B", "", "", "7E", "7F"],
//     ["8A", "8B", "", "", "8E", "8F"],
//     ["9A", "9B", "", "", "9E", "9F"],
//     ["10A", "10B", "", "", "10E", "10F"],
//     ["11A", "11B", "", "", "11E", "11F"],
//     ["12A", "12B", "", "", "12E", "12F"],
//     ["15A", "15B", "", "", "15E", "15F"],
//     ["16A", "16B", "16C", "16D", "16E", "16F"],
//     ["17A", "17B", "", "", "17E", "17F"],
//     ["18A", "18B", "", "", "18E", "18F"],
//     ["19A", "19B", "", "", "19E", "19F"],
//     ["21A", "21B", "", "", "21E", "21F"],
//     ["24A", "24B", "24C", "", "24D", "24E", "24F"],
//     ["25A", "25B", "", "", "25E", "25F"],
//     ["26A", "26B", "", "", "26E", "26F"],
//     ["27A", "27B", "", "", "27E", "27F"],
//     ["28A", "28B", "", "", "28E", "28F"],
//     ["29A", "29B", "", "", "29E", "29F"],
//   ];

//   // React state to keep track of selected seats
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   // Handle seat click
//   const handleSeatClick = (seat) => {
//     if (!seat) return; // Ignore empty seats

//     // Toggle seat selection
//     setSelectedSeats((prevSelectedSeats) =>
//       prevSelectedSeats.includes(seat)
//         ? prevSelectedSeats.filter((s) => s !== seat)
//         : [...prevSelectedSeats, seat]
//     );
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Header */}
//       <header className="border-b">
//         <div className="flex items-center justify-between px-6 py-4">
//           {/* Logo and Steps */}
//           <div>
//             <h1 className="text-2xl font-bold text-red-600">AIR INDIA</h1>
//           </div>
//           <nav className="flex space-x-8">
//             <span className="text-red-600 font-bold">1. FLIGHTS</span>
//             <span className="text-gray-500">2. JOURNEY DETAILS</span>
//             <span className="text-gray-500">3. REVIEW & PAYMENT</span>
//           </nav>
//           {/* Fare Summary */}
//           <div className="text-right">
//             <p className="text-sm text-gray-600">Total Fare (1 Passenger):</p>
//             <p className="text-lg font-bold text-gray-800">INR 5,671</p>
//             <p className="text-sm text-blue-600">Booking Summary ▼</p>
//           </div>
//         </div>
//       </header>

//       <p className="text-sm text-gray-500">AHMEDABAD - DELHI</p>

//       {/* Main Content */}
//       <main className="px-6 py-4">
//         {/* Title */}
//         <div>
//           <h2 className="text-lg font-bold text-gray-800">
//             SELECT YOUR PREFERRED SEAT
//           </h2>
//         </div>

//         {/* Legend */}
//         <div className="mb-6">
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             {seatTypes.map((type, index) => (
//               <div key={index} className="flex items-center space-x-2">
//                 <div className={`w-6 h-6 ${type.color} rounded-md border`} />
//                 <span className="text-sm">{type.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Seat Map */}
//         <div className="grid gap-4">
//           {rows.map((row, rowIndex) => (
//             <div key={rowIndex} className="flex space-x-2 justify-center">
//               {row.map((seat, seatIndex) => (
//                 <div
//                   key={seatIndex}
//                   onClick={() => handleSeatClick(seat)}
//                   className={`w-10 h-10 flex items-center justify-center rounded-md text-gray-600 font-medium text-xs cursor-pointer ${
//                     seat
//                       ? selectedSeats.includes(seat)
//                         ? "bg-blue-500 text-white"
//                         : seat === "6C" ||
//                           seat === "6D" ||
//                           seat === "15A" ||
//                           seat === "15B"
//                         ? "bg-red-400 cursor-not-allowed text-white"
//                         : "bg-gray-200 hover:border hover:border-red-500"
//                       : "invisible"
//                   }`}
//                 >
//                   {seat}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>

//         {/* Additional Icons */}
//         <div className="mt-6 flex justify-around items-center text-gray-600 text-sm">
//           <div className="flex items-center space-x-2">
//             <FaToilet className="text-2xl text-blue-500" />
//             <span>Toilets</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <FaSignOutAlt className="text-2xl text-green-600" />
//             <span>Exit Row</span>
//           </div>
//         </div>

//         {/* Footer */}
//         <footer className="mt-10 text-center text-gray-500 text-sm">
//           <p>Copyright © 2024 Air India. All Rights Reserved.</p>
//         </footer>
//       </main>
//     </div>
//   );
// };

// export default SeatBooking;

//best design like okkk

// import React, { useState } from "react";
// import { FaToilet, FaSignOutAlt } from "react-icons/fa";

// const SeatBooking = () => {
//   // Seat types for legend
//   const seatTypes = [
//     { label: "Extra Legroom", color: "bg-yellow-400" },
//     { label: "Preferred Seat", color: "bg-orange-500" },
//     { label: "Seat Selected", color: "bg-blue-500" },
//     { label: "Seat Unavailable", color: "bg-red-400" },
//     { label: "Exit Row", color: "bg-green-400" },
//   ];

//   // Seat rows for rendering the seat map
//   const rows = [
//     ["5A", "5B", "", "", "6C", "6D"],
//     ["7A", "7B", "", "", "7E", "7F"],
//     ["8A", "8B", "", "", "8E", "8F"],
//     ["9A", "9B", "", "", "9E", "9F"],
//     ["10A", "10B", "", "", "10E", "10F"],
//     ["11A", "11B", "", "", "11E", "11F"],
//     ["12A", "12B", "", "", "12E", "12F"],
//     ["15A", "15B", "", "", "15E", "15F"],
//     ["16A", "16B", "16C", "16D", "16E", "16F"],
//     ["17A", "17B", "", "", "17E", "17F"],
//     ["18A", "18B", "", "", "18E", "18F"],
//     ["19A", "19B", "", "", "19E", "19F"],
//     ["21A", "21B", "", "", "21E", "21F"],
//     ["24A", "24B", "24C", "", "24D", "24E", "24F"],
//     ["25A", "25B", "", "", "25E", "25F"],
//     ["26A", "26B", "", "", "26E", "26F"],
//     ["27A", "27B", "", "", "27E", "27F"],
//     ["28A", "28B", "", "", "28E", "28F"],
//     ["29A", "29B", "", "", "29E", "29F"],
//   ];

//   // React state to keep track of selected seats
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   // Handle seat click
//   const handleSeatClick = (seat) => {
//     if (!seat) return; // Ignore empty seats

//     // Toggle seat selection
//     setSelectedSeats((prevSelectedSeats) =>
//       prevSelectedSeats.includes(seat)
//         ? prevSelectedSeats.filter((s) => s !== seat)
//         : [...prevSelectedSeats, seat]
//     );
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Header */}
//       <header className="border-b bg-white">
//         <div className="flex items-center justify-between px-6 py-4">
//           {/* Logo and Steps */}
//           <div>
//             <h1 className="text-xl font-bold text-red-600">AIR INDIA</h1>
//           </div>
//           <nav className="flex space-x-8">
//             <span className="text-red-600 font-bold">1. FLIGHTS</span>
//             <span className="text-gray-500">2. JOURNEY DETAILS</span>
//             <span className="text-gray-500">3. REVIEW & PAYMENT</span>
//           </nav>
//           {/* Fare Summary */}
//           <div className="text-right">
//             <p className="text-sm text-gray-600">Total Fare (1 Passenger):</p>
//             <p className="text-lg font-bold text-gray-800">INR 5,671</p>
//             <p className="text-sm text-blue-600">Booking Summary ▼</p>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="px-6 py-4">
//         {/* Title */}
//         <div>
//           <h2 className="text-lg font-bold text-gray-800">
//             SELECT YOUR PREFERRED SEAT
//           </h2>
//           <p className="text-sm text-gray-500">AHMEDABAD - DELHI</p>
//         </div>

//         {/* Seat Legend */}
//         <div className="mb-6">
//           <h3 className="text-lg font-semibold mb-4">How to Select Seats</h3>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             {seatTypes.map((type, index) => (
//               <div key={index} className="flex items-center space-x-2">
//                 <div className={`w-6 h-6 ${type.color} rounded-md border`} />
//                 <span className="text-sm">{type.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Seat Map */}
//         <div className="grid gap-4">
//           {rows.map((row, rowIndex) => (
//             <div key={rowIndex} className="flex space-x-2 justify-center">
//               {row.map((seat, seatIndex) => (
//                 <div
//                   key={seatIndex}
//                   onClick={() => handleSeatClick(seat)}
//                   className={`w-10 h-10 flex items-center justify-center rounded-md text-gray-600 font-medium text-xs cursor-pointer ${
//                     seat
//                       ? selectedSeats.includes(seat)
//                         ? "bg-blue-500 text-white"
//                         : seat === "6C" ||
//                           seat === "6D" ||
//                           seat === "15A" ||
//                           seat === "15B"
//                         ? "bg-red-400 cursor-not-allowed text-white"
//                         : "bg-gray-200 hover:border hover:border-red-500"
//                       : "invisible"
//                   }`}
//                 >
//                   {seat}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>

//         {/* Additional Icons */}
//         <div className="mt-6 flex justify-around items-center text-gray-600 text-sm">
//           <div className="flex items-center space-x-2">
//             <FaToilet className="text-xl text-blue-500" />
//             <span>Toilets</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <FaSignOutAlt className="text-xl text-green-600" />
//             <span>Exit Row</span>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="mt-10 text-center text-gray-500 text-sm">
//         <p>Copyright © 2024 Air India. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default SeatBooking;

//design with funcnality

// import React, { useState, useEffect } from "react";
// import { FaToilet, FaSignOutAlt } from "react-icons/fa";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";

// const SeatBooking = () => {
//   const { id } = useParams();
//   const { singleFlights, roundTripFlights } = useSelector(
//     (state) => state.flight
//   );

//   // Find the flight based on the ID from Redux store
//   const flight =
//     singleFlights.data.find((flight) => flight.id === id) ||
//     roundTripFlights.data.find((flight) => flight.id === id);
//   console.log(flight);

//   // Seat types for legend
//   const seatTypes = [
//     { label: "Extra Legroom", color: "bg-yellow-400" },
//     { label: "Preferred Seat", color: "bg-orange-500" },
//     { label: "Seat Selected", color: "bg-blue-500" },
//     { label: "Seat Unavailable", color: "bg-red-400" },
//     { label: "Exit Row", color: "bg-green-400" },
//   ];

//   // Seat rows for rendering the seat map
//   const rows = [
//     ["5A", "5B", "", "", "6C", "6D"],
//     ["7A", "7B", "", "", "7E", "7F"],
//     ["8A", "8B", "", "", "8E", "8F"],
//     ["9A", "9B", "", "", "9E", "9F"],
//     ["10A", "10B", "", "", "10E", "10F"],
//     ["11A", "11B", "", "", "11E", "11F"],
//     ["12A", "12B", "", "", "12E", "12F"],
//     ["15A", "15B", "", "", "15E", "15F"],
//     ["16A", "16B", "16C", "16D", "16E", "16F"],
//     ["17A", "17B", "", "", "17E", "17F"],
//     ["18A", "18B", "", "", "18E", "18F"],
//     ["19A", "19B", "", "", "19E", "19F"],
//     ["21A", "21B", "", "", "21E", "21F"],
//     ["24A", "24B", "24C", "", "24D", "24E", "24F"],
//     ["25A", "25B", "", "", "25E", "25F"],
//     ["26A", "26B", "", "", "26E", "26F"],
//     ["27A", "27B", "", "", "27E", "27F"],
//     ["28A", "28B", "", "", "28E", "28F"],
//     ["29A", "29B", "", "", "29E", "29F"],
//   ];

//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [unavailableSeats, setUnavailableSeats] = useState([]);
//   const [flightDetails, setFlightDetails] = useState({
//     flightNumber: flight?.flightNumber || "N/A",
//     from: flight?.from || "N/A",
//     to: flight?.to || "N/A",
//   });

//   // Randomly select unavailable seats (max 8)
//   useEffect(() => {
//     const generateUnavailableSeats = () => {
//       const allSeats = rows.flat().filter((seat) => seat !== "");
//       const randomUnavailableSeats = [];
//       while (randomUnavailableSeats.length < 8) {
//         const randomIndex = Math.floor(Math.random() * allSeats.length);
//         const seat = allSeats[randomIndex];
//         if (!randomUnavailableSeats.includes(seat)) {
//           randomUnavailableSeats.push(seat);
//         }
//       }
//       setUnavailableSeats(randomUnavailableSeats);
//     };
//     generateUnavailableSeats();
//   }, []);

//   const handleSeatClick = (seat) => {
//     if (!seat || unavailableSeats.includes(seat)) return; // Ignore unavailable seats

//     setSelectedSeats((prevSelectedSeats) =>
//       prevSelectedSeats.includes(seat)
//         ? prevSelectedSeats.filter((s) => s !== seat)
//         : [...prevSelectedSeats, seat]
//     );
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Header */}
//       <header className="border-b bg-white">
//         <div className="flex items-center justify-between px-6 py-4">
//           {/* Logo and Flight Details */}
//           <div>
//             <h1 className="text-xl font-bold text-red-600">AIR INDIA</h1>
//             <p className="text-sm text-gray-500">
//               {flightDetails.from} - {flightDetails.to}
//             </p>
//             <p className="text-sm text-gray-500">
//               Flight No: {flightDetails.flightNumber}
//             </p>
//           </div>

//           {/* Fare Summary */}
//           <div className="text-right">
//             <p className="text-sm text-gray-600">Total Fare (1 Passenger):</p>
//             <p className="text-lg font-bold text-gray-800">INR </p>
//             <p className="text-sm text-blue-600">Booking Summary ▼</p>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="px-6 py-4">
//         <h2 className="text-lg font-bold text-gray-800">
//           SELECT YOUR PREFERRED SEAT
//         </h2>
//         <p className="text-sm text-gray-500">
//           {flightDetails.from} - {flightDetails.to}
//         </p>

//         {/* Seat Legend */}
//         <div className="mb-6">
//           <h3 className="text-lg font-semibold mb-4">How to Select Seats</h3>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             {seatTypes.map((type, index) => (
//               <div key={index} className="flex items-center space-x-2">
//                 <div className={`w-6 h-6 ${type.color} rounded-md border`} />
//                 <span className="text-sm">{type.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Seat Map */}
//         <div className="grid gap-4">
//           {rows.map((row, rowIndex) => (
//             <div key={rowIndex} className="flex space-x-2 justify-center">
//               {row.map((seat, seatIndex) => (
//                 <div
//                   key={seatIndex}
//                   onClick={() => handleSeatClick(seat)}
//                   className={`w-10 h-10 flex items-center justify-center rounded-md text-gray-600 font-medium text-xs cursor-pointer ${
//                     seat
//                       ? selectedSeats.includes(seat)
//                         ? "bg-blue-500 text-white"
//                         : unavailableSeats.includes(seat)
//                         ? "bg-red-400 cursor-not-allowed text-white"
//                         : "bg-gray-200 hover:border hover:border-red-500"
//                       : "invisible"
//                   }`}
//                 >
//                   {seat}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>

//         {/* Additional Icons */}
//         <div className="mt-6 flex justify-around items-center text-gray-600 text-sm">
//           <div className="flex items-center space-x-2">
//             <FaToilet className="text-xl text-blue-500" />
//             <span>Toilets</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <FaSignOutAlt className="text-xl text-green-600" />
//             <span>Exit Row</span>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="mt-10 text-center text-gray-500 text-sm">
//         <p>Copyright © 2024 Air India. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default SeatBooking;

//real value  best just Desing nd ui not funcnality

// import { useState, useEffect } from "react";
// import { FaToilet, FaSignOutAlt } from "react-icons/fa";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";

// const SeatBooking = () => {
//   const { id } = useParams();
//   const { singleFlights, roundTripFlights, filters, airports } = useSelector(
//     (state) => state.flight
//   );

//   const { adults, children } = filters;
//   console.log(adults);
//   console.log(children);

//   // Find the flight based on the ID from Redux store
//   const flight =
//     singleFlights.data.find((flight) => flight.id === id) ||
//     roundTripFlights.data.find((flight) => flight.id === id);
//   console.log(flight);

//   // Seat types for legend
//   const seatTypes = [
//     { label: "Extra Legroom", color: "bg-yellow-400" },
//     { label: "Preferred Seat", color: "bg-orange-500" },
//     { label: "Seat Selected", color: "bg-blue-500" },
//     { label: "Seat Unavailable", color: "bg-red-400" },
//     { label: "Exit Row", color: "bg-green-400" },
//   ];

//   // Seat rows for rendering the seat map
//   const rows = [
//     ["5A", "5B", "", "", "6C", "6D"],
//     ["7A", "7B", "", "", "7E", "7F"],
//     ["8A", "8B", "", "", "8E", "8F"],
//     ["9A", "9B", "", "", "9E", "9F"],
//     ["10A", "10B", "", "", "10E", "10F"],
//     ["11A", "11B", "", "", "11E", "11F"],
//     ["12A", "12B", "", "", "12E", "12F"],
//     ["15A", "15B", "", "", "15E", "15F"],
//     ["16A", "16B", "16C", "16D", "16E", "16F"],
//     ["17A", "17B", "", "", "17E", "17F"],
//     ["18A", "18B", "", "", "18E", "18F"],
//     ["19A", "19B", "", "", "19E", "19F"],
//     ["21A", "21B", "", "", "21E", "21F"],
//     ["24A", "24B", "24C", "", "24D", "24E", "24F"],
//     ["25A", "25B", "", "", "25E", "25F"],
//     ["26A", "26B", "", "", "26E", "26F"],
//     ["27A", "27B", "", "", "27E", "27F"],
//     ["28A", "28B", "", "", "28E", "28F"],
//     ["29A", "29B", "", "", "29E", "29F"],
//   ];

//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [unavailableSeats, setUnavailableSeats] = useState([]);

//   // Randomly select unavailable seats (max 8)
//   useEffect(() => {
//     const generateUnavailableSeats = () => {
//       const allSeats = rows.flat().filter((seat) => seat !== "");
//       const randomUnavailableSeats = [];
//       while (randomUnavailableSeats.length < 8) {
//         const randomIndex = Math.floor(Math.random() * allSeats.length);
//         const seat = allSeats[randomIndex];
//         if (!randomUnavailableSeats.includes(seat)) {
//           randomUnavailableSeats.push(seat);
//         }
//       }
//       setUnavailableSeats(randomUnavailableSeats);
//     };
//     generateUnavailableSeats();
//   }, []);

//   const handleSeatClick = (seat) => {
//     if (!seat || unavailableSeats.includes(seat)) return; // Ignore unavailable seats

//     if (selectedSeats.length < adults) {
//       setSelectedSeats((prevSelectedSeats) =>
//         prevSelectedSeats.includes(seat)
//           ? prevSelectedSeats.filter((s) => s !== seat)
//           : [...prevSelectedSeats, seat]
//       );
//     }
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Header */}
//       <header className="border-b bg-white">
//         <div className="flex items-center justify-between px-6 py-4">
//           {/* Logo and Flight Details */}
//           <div>
//             <h1 className="text-xl font-bold text-red-600">
//               {flight.airlineName}
//             </h1>
//             <p className="text-sm text-gray-500">
//               {flight.itineraries[0].segments[0].departure.iataCode} -{" "}
//               {flight.itineraries[0].segments[0].arrival.iataCode}
//             </p>
//             <p className="text-sm text-gray-500">
//               Flight No: {flight.itineraries[0].segments[0].aircraft.code}
//             </p>
//           </div>

//           {/* Fare Summary */}
//           <div className="text-right">
//             <p className="text-sm text-gray-600">
//               Total Fare ({adults + children ? children : 0} Passenger):
//             </p>
//             <p className="text-lg font-bold text-gray-800">
//               INR {flight.travelerPricings[0].price.total}
//             </p>
//           </div>
//         </div>
//       </header>

//       <main className="px-6 py-4">
//         <h2 className="text-lg font-bold text-gray-800">
//           SELECT YOUR PREFERRED SEAT
//         </h2>
//         <p className="text-sm text-gray-500">
//           {airports[0].cityName} - {airports[1].cityName}
//         </p>

//         <div className="mb-6">
//           <h3 className="text-lg font-semibold mb-4">How to Select Seats</h3>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             {seatTypes.map((type, index) => (
//               <div key={index} className="flex items-center space-x-2">
//                 <div className={`w-6 h-6 ${type.color} rounded-md border`} />
//                 <span className="text-sm">{type.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="grid gap-4">
//           {rows.map((row, rowIndex) => (
//             <div key={rowIndex} className="flex space-x-2 justify-center">
//               {row.map((seat, seatIndex) => (
//                 <div
//                   key={seatIndex}
//                   onClick={() => handleSeatClick(seat)}
//                   className={`w-10 h-10 flex items-center justify-center rounded-md text-gray-600 font-medium text-xs cursor-pointer ${
//                     seat
//                       ? selectedSeats.includes(seat)
//                         ? "bg-blue-500 text-white"
//                         : unavailableSeats.includes(seat)
//                         ? "bg-red-400 cursor-not-allowed text-white"
//                         : "bg-gray-200 hover:border hover:border-red-500"
//                       : "invisible"
//                   }`}
//                 >
//                   {seat}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>

//         <div className="mt-6 flex justify-around items-center text-gray-600 text-sm">
//           <div className="flex items-center space-x-2">
//             <FaToilet className="text-xl text-blue-500" />
//             <span>Toilets</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <FaSignOutAlt className="text-xl text-green-600" />
//             <span>Exit Row</span>
//           </div>
//         </div>
//       </main>

//       <footer className="mt-10 text-center text-gray-500 text-sm">
//         <p>Copyright © 2024 Air India. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default SeatBooking;




//funcnality based on passenger 


import { useState, useEffect } from "react";
import { FaToilet, FaSignOutAlt } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SeatBooking = () => {
  const { id, passengerId } = useParams(); // 'passengerId' will be dynamic based on the passenger count in URL
  const navigate = useNavigate();
  const { singleFlights, roundTripFlights, filters, airports } = useSelector(
    (state) => state.flight
  );

  const { adults, children } = filters;
  const totalPassengers = adults + children;

  // Find the flight based on the ID from Redux store
  const flight =
    singleFlights.data.find((flight) => flight.id === id) ||
    roundTripFlights.data.find((flight) => flight.id === id);

  // Seat types for legend
  const seatTypes = [
    { label: "Extra Legroom", color: "bg-yellow-400" },
    { label: "Preferred Seat", color: "bg-orange-500" },
    { label: "Seat Selected", color: "bg-blue-500" },
    { label: "Seat Unavailable", color: "bg-red-400" },
    { label: "Exit Row", color: "bg-green-400" },
  ];

  // Seat rows for rendering the seat map
  const rows = [
    ["5A", "5B", "", "", "6C", "6D"],
    ["7A", "7B", "", "", "7E", "7F"],
    ["8A", "8B", "", "", "8E", "8F"],
    ["9A", "9B", "", "", "9E", "9F"],
    ["10A", "10B", "", "", "10E", "10F"],
    ["11A", "11B", "", "", "11E", "11F"],
    ["12A", "12B", "", "", "12E", "12F"],
    ["15A", "15B", "", "", "15E", "15F"],
    ["16A", "16B", "16C", "16D", "16E", "16F"],
    ["17A", "17B", "", "", "17E", "17F"],
    ["18A", "18B", "", "", "18E", "18F"],
    ["19A", "19B", "", "", "19E", "19F"],
    ["21A", "21B", "", "", "21E", "21F"],
    ["24A", "24B", "24C", "", "24D", "24E", "24F"],
    ["25A", "25B", "", "", "25E", "25F"],
    ["26A", "26B", "", "", "26E", "26F"],
    ["27A", "27B", "", "", "27E", "27F"],
    ["28A", "28B", "", "", "28E", "28F"],
    ["29A", "29B", "", "", "29E", "29F"],
  ];

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [unavailableSeats, setUnavailableSeats] = useState([]);
  const [currentPassenger, setCurrentPassenger] = useState(
    parseInt(passengerId)
  ); // Track the current passenger's seat selection

  // Randomly select unavailable seats (max 8)
  useEffect(() => {
    const generateUnavailableSeats = () => {
      const allSeats = rows.flat().filter((seat) => seat !== "");
      const randomUnavailableSeats = [];
      while (randomUnavailableSeats.length < 8) {
        const randomIndex = Math.floor(Math.random() * allSeats.length);
        const seat = allSeats[randomIndex];
        if (!randomUnavailableSeats.includes(seat)) {
          randomUnavailableSeats.push(seat);
        }
      }
      setUnavailableSeats(randomUnavailableSeats);
    };
    generateUnavailableSeats();
  }, []);

  const handleSeatClick = (seat) => {
    if (!seat || unavailableSeats.includes(seat)) return; // Ignore unavailable seats

    // Select the seat for the current passenger
    setSelectedSeats((prevSelectedSeats) => {
      const newSeats = [...prevSelectedSeats];
      newSeats[currentPassenger - 1] = seat; // Store the seat for the current passenger
      return newSeats;
    });

    // If the current passenger is not the last one, move to the next passenger
    if (currentPassenger < totalPassengers) {
      const nextPassenger = currentPassenger + 1;
      setCurrentPassenger(nextPassenger);
      navigate(`/seatBooking/${id}/${nextPassenger}`); // Navigate to the next passenger's seat selection page
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo and Flight Details */}
          <div>
            <h1 className="text-xl font-bold text-red-600">
              {flight.airlineName}
            </h1>
            <p className="text-sm text-gray-500">
              {flight.itineraries[0].segments[0].departure.iataCode} -{" "}
              {flight.itineraries[0].segments[0].arrival.iataCode}
            </p>
            <p className="text-sm text-gray-500">
              Flight No: {flight.itineraries[0].segments[0].aircraft.code}
            </p>
          </div>

          {/* Fare Summary */}
          <div className="text-right">
            <p className="text-sm text-gray-600">
              Total Fare ({totalPassengers} Passenger):
            </p>
            <p className="text-lg font-bold text-gray-800">
              INR {flight.travelerPricings[0].price.total}
            </p>
          </div>
        </div>
      </header>

      <main className="px-6 py-4">
        <h2 className="text-lg font-bold text-gray-800">
          SELECT SEAT FOR PASSENGER {currentPassenger} OF {totalPassengers}
        </h2>
        <p className="text-sm text-gray-500">
          {airports[0].cityName} - {airports[1].cityName}
        </p>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">How to Select Seats</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {seatTypes.map((type, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className={`w-6 h-6 ${type.color} rounded-md border`} />
                <span className="text-sm">{type.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex space-x-2 justify-center">
              {row.map((seat, seatIndex) => (
                <div
                  key={seatIndex}
                  onClick={() => handleSeatClick(seat)}
                  className={`w-10 h-10 flex items-center justify-center rounded-md text-gray-600 font-medium text-xs cursor-pointer ${
                    seat
                      ? selectedSeats.includes(seat)
                        ? "bg-blue-500 text-white"
                        : unavailableSeats.includes(seat)
                        ? "bg-red-400 cursor-not-allowed text-white"
                        : "bg-gray-200 hover:border hover:border-red-500"
                      : "invisible"
                  }`}
                >
                  {seat}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-around items-center text-gray-600 text-sm">
          <div className="flex items-center space-x-2">
            <FaToilet className="text-xl text-blue-500" />
            <span>Toilets</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaSignOutAlt className="text-xl text-green-600" />
            <span>Exit Row</span>
          </div>
        </div>
      </main>

      <footer className="mt-10 text-center text-gray-500 text-sm">
        <p>Copyright © 2024 Air India. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default SeatBooking;
