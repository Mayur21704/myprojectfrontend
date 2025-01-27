// import { useParams, useNavigate } from "react-router-dom";
// import { Button, Divider } from "antd";
// import { ArrowLeftOutlined } from "@ant-design/icons"; // For Back button icon

// const FlightDetails = ({ flightData }) => {
//   const { id } = useParams(); // Get flight ID from URL parameters
//   const navigate = useNavigate();

//   // Flight data can be fetched using the ID if not passed directly via props
//   // If flightData is passed as a prop, we can skip the API call
//   const flight = flightData ? flightData : {}; // Replace with the logic to fetch flight by ID if needed.

//   // Go back to previous page
//   const handleGoBack = () => {
//     navigate(-1); // Go back to the previous page
//   };

//   return (

//   );
// };

// export default FlightDetails;

// import { useNavigate, useParams } from "react-router-dom"; // For extracting URL params
// import { useSelector } from "react-redux"; // To fetch the flight data
// import { Button, Divider } from "antd";
// import { ArrowLeftOutlined } from "@ant-design/icons";

// const FlightDetails = () => {
//   const { id } = useParams(); // Extract flight ID from URL
//   const flight = useSelector((state) =>
//     state.flight.singleFlights.data.find((flight) => flight.id === id)
//   ); // Find the flight based on the ID from Redux store

//   const navigate = useNavigate();
//   // If the flight is not found or ID is invalid, show a message
//   if (!flight) {
//     return <div>Flight not found!</div>;
//   }

//   const handleGoBack = () => {
//     navigate("/flights");
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       {/* Back Button */}
//       <div className="mb-4">
//         <Button
//           type="primary"
//           icon={<ArrowLeftOutlined />}
//           onClick={handleGoBack}
//           className="bg-blue-500 text-white"
//         >
//           Go Back
//         </Button>
//       </div>

//       <div className="bg-white shadow-xl rounded-lg p-8">
//         {/* Flight Header */}
//         <div className="flex justify-between items-center mb-6">
//           <div className="flex items-center space-x-6">
//             {flight.airlineLogo && (
//               <img
//                 src={flight.airlineLogo}
//                 alt={flight.airlineName}
//                 className="h-16 w-16 rounded-full border border-gray-300"
//               />
//             )}
//             <div>
//               <h3 className="text-2xl font-bold text-gray-800">
//                 {flight.airlineName}
//               </h3>
//               <p className="text-sm text-gray-500">
//                 Flight Number: {flight.flightNumber || "N/A"}
//               </p>
//             </div>
//           </div>
//           <div className="text-right">
//             <p className="text-2xl font-bold text-blue-600">
//               ₹{flight.price?.total || "N/A"}
//             </p>
//             <p className="text-sm text-gray-400">
//               Base Price: ₹{flight.price?.base || "N/A"}
//             </p>
//           </div>
//         </div>

//         {/* Flight Segments */}
//         <Divider
//           orientation="left"
//           className="text-lg font-semibold text-gray-700"
//         >
//           Flight Segments
//         </Divider>
//         <div>
//           {flight.itineraries?.map((itinerary, idx) => (
//             <div key={idx} className="space-y-4">
//               {itinerary?.segments.map((segment, segIdx) => (
//                 <div
//                   key={segIdx}
//                   className="bg-gray-50 p-4 rounded-lg shadow-md"
//                 >
//                   <div className="flex justify-between items-center mb-3">
//                     <div>
//                       <p className="text-xl font-semibold">
//                         {segment.departure?.iataCode} →{" "}
//                         {segment.arrival?.iataCode}
//                       </p>
//                       <p className="text-sm text-gray-500">
//                         {segment.duration || "N/A"} | Flight Number:{" "}
//                         {segment.number || "N/A"}
//                       </p>
//                     </div>
//                     <div className="text-sm text-gray-600">
//                       <p>Aircraft: {segment.aircraft?.code || "N/A"}</p>
//                     </div>
//                   </div>
//                   <div className="text-sm text-gray-500">
//                     <p>
//                       Departure:{" "}
//                       {new Date(segment.departure?.at).toLocaleString() ||
//                         "N/A"}{" "}
//                       at {segment.departure?.terminal || "N/A"} Terminal
//                     </p>
//                     <p>
//                       Arrival:{" "}
//                       {new Date(segment.arrival?.at).toLocaleString() || "N/A"}{" "}
//                       at {segment.arrival?.terminal || "N/A"} Terminal
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>

//         {/* Traveler Pricing */}
//         <Divider
//           orientation="left"
//           className="text-lg font-semibold text-gray-700"
//         >
//           Pricing Details
//         </Divider>
//         <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
//           <p className="text-sm text-gray-500">
//             Total Price for {flight.travelerPricings[0]?.travelerId || "N/A"}: ₹
//             {flight.travelerPricings[0]?.price?.total || "N/A"}
//           </p>
//         </div>

//         {/* Amenities Section */}
//         <Divider
//           orientation="left"
//           className="text-lg font-semibold text-gray-700"
//         >
//           Amenities
//         </Divider>
//         <div>
//           {flight.travelerPricings[0]?.amenities &&
//           flight.travelerPricings[0]?.amenities.length > 0 ? (
//             <ul className="list-disc pl-6 space-y-2">
//               {flight.travelerPricings[0]?.amenities.map((amenity, idx) => (
//                 <li key={idx} className="text-sm text-gray-600">
//                   {amenity.description || "No description"}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-sm text-gray-500">No amenities available.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlightDetails;

// import { useNavigate, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Button, Divider } from "antd";
// import {
//   ArrowLeftOutlined,
//   CoffeeOutlined,
//   CheckCircleOutlined,
//   DeleteOutlined,
//   FileTextOutlined,
//   DollarCircleOutlined,
// } from "@ant-design/icons"; // Icons for amenities

// const FlightDetails = () => {
//   const { id } = useParams(); // Extract flight ID from URL
//   const { singleFlights, roundTripFlights } = useSelector(
//     (state) => state.flight
//   );

//   // Find the flight based on the ID from Redux store
//   const flight =
//     singleFlights.data.find((flight) => flight.id === id) ||
//     roundTripFlights.data.find((flight) => flight.id === id);

//   const navigate = useNavigate();

//   if (!flight) {
//     return <div>Flight not found!</div>;
//   }

//   const handleGoBack = () => {
//     navigate("/flights");
//   };

//   // Define a mapping for amenity types to icons
//   const amenityIcons = {
//     PRE_RESERVED_SEAT: <CheckCircleOutlined className="text-green-500" />,
//     MEAL: <CoffeeOutlined className="text-yellow-500" />,
//     REFUNDABLE_TICKET: <DeleteOutlined className="text-red-500" />,
//     FREE_CHECKED_BAGGAGE: <FileTextOutlined className="text-blue-500" />,
//     CHANGEABLE_TICKET: <CheckCircleOutlined className="text-blue-500" />,
//     BRANDED_FARES: <DollarCircleOutlined className="text-gray-500" />,
//   };

//   const renderAmenities = (amenities) => {
//     return amenities?.map((amenity, idx) => {
//       return (
//         <li
//           key={idx}
//           className="text-sm text-gray-600 flex items-center space-x-2"
//         >
//           {/* Use the amenity type to pick the correct icon */}
//           {amenityIcons[amenity.amenityType] || (
//             <CheckCircleOutlined className="text-gray-500" />
//           )}
//           <span>{amenity.description || "No description available"}</span>
//           {amenity.isChargeable && (
//             <span className="text-xs text-red-500 ml-2">+ Chargeable</span> // Optionally display if chargeable
//           )}
//         </li>
//       );
//     });
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       {/* Back Button */}
//       <div className="mb-4">
//         <Button
//           type="primary"
//           icon={<ArrowLeftOutlined />}
//           onClick={handleGoBack}
//           className="bg-blue-500 text-white"
//         >
//           Go Back
//         </Button>
//       </div>

//       <div className="bg-white shadow-xl rounded-lg p-8">
//         {/* Flight Header */}
//         <div className="flex justify-between items-center mb-6">
//           <div className="flex items-center space-x-6">
//             {flight.airlineLogo && (
//               <img
//                 src={flight.airlineLogo}
//                 alt={flight.airlineName}
//                 className="h-16 w-16 rounded-full border border-gray-300"
//               />
//             )}
//             <div>
//               <h3 className="text-2xl font-bold text-gray-800">
//                 {flight.airlineName}
//               </h3>
//               <p className="text-sm text-gray-500">
//                 Flight Number: {flight.flightNumber || "N/A"}
//               </p>
//             </div>
//           </div>
//           <div className="text-right">
//             <p className="text-2xl font-bold text-blue-600">
//               ₹{flight.price?.total || "N/A"}
//             </p>
//             <p className="text-sm text-gray-400">
//               Base Price: ₹{flight.price?.base || "N/A"}
//             </p>
//           </div>
//         </div>

//         {/* Flight Segments */}
//         <Divider
//           orientation="left"
//           className="text-lg font-semibold text-gray-700"
//         >
//           Flight Segments
//         </Divider>
//         <div>
//           {flight.itineraries?.map((itinerary, idx) => (
//             <div key={idx} className="space-y-4">
//               {itinerary?.segments.map((segment, segIdx) => (
//                 <div
//                   key={segIdx}
//                   className="bg-gray-50 p-4 rounded-lg shadow-md"
//                 >
//                   <div className="flex justify-between items-center mb-3">
//                     <div>
//                       <p className="text-xl font-semibold">
//                         {segment.departure?.iataCode} →{" "}
//                         {segment.arrival?.iataCode}
//                       </p>
//                       <p className="text-sm text-gray-500">
//                         {segment.duration || "N/A"} | Flight Number:{" "}
//                         {segment.number || "N/A"}
//                       </p>
//                     </div>
//                     <div className="text-sm text-gray-600">
//                       <p>Aircraft: {segment.aircraft?.code || "N/A"}</p>
//                     </div>
//                   </div>
//                   <div className="text-sm text-gray-500">
//                     <p>
//                       Departure:{" "}
//                       {new Date(segment.departure?.at).toLocaleString() ||
//                         "N/A"}{" "}
//                       at {segment.departure?.terminal || "N/A"} Terminal
//                     </p>
//                     <p>
//                       Arrival:{" "}
//                       {new Date(segment.arrival?.at).toLocaleString() || "N/A"}{" "}
//                       at {segment.arrival?.terminal || "N/A"} Terminal
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>

//         {/* Traveler Pricing */}
//         <Divider
//           orientation="left"
//           className="text-lg font-semibold text-gray-700"
//         >
//           Pricing Details
//         </Divider>
//         <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
//           <p className="text-sm text-gray-500">
//             Total Price for {flight.travelerPricings[0]?.travelerId || "N/A"}: ₹
//             {flight.travelerPricings[0]?.price?.total || "N/A"}
//           </p>
//         </div>

//         {/* Amenities Section */}
//         <Divider
//           orientation="left"
//           className="text-lg font-semibold text-gray-700"
//         >
//           Amenities
//         </Divider>
//         <div>
//           {flight.travelerPricings[0]?.fareDetailsBySegment[0]?.amenities &&
//           flight.travelerPricings[0]?.fareDetailsBySegment[0]?.amenities
//             .length > 0 ? (
//             <ul className="list-disc pl-6 space-y-2">
//               {renderAmenities(
//                 flight.travelerPricings[0]?.fareDetailsBySegment[0]?.amenities
//               )}
//             </ul>
//           ) : (
//             <p className="text-sm text-gray-500">No amenities available.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlightDetails;

// import { useNavigate, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Button, Divider, Collapse } from "antd";
// import {
//   ArrowLeftOutlined,
//   CoffeeOutlined,
//   CheckCircleOutlined,
//   DeleteOutlined,
//   FileTextOutlined,
//   DollarCircleOutlined,
// } from "@ant-design/icons";

// const { Panel } = Collapse;

// const FlightDetails = () => {
//   const { id } = useParams();
//   const { singleFlights, roundTripFlights } = useSelector(
//     (state) => state.flight
//   );

//   // Find the flight based on the ID from Redux store
//   const flight =
//     singleFlights.data.find((flight) => flight.id === id) ||
//     roundTripFlights.data.find((flight) => flight.id === id);

//   const navigate = useNavigate();

//   if (!flight) {
//     return <div>Flight not found!</div>;
//   }

//   const handleGoBack = () => {
//     navigate("/flights");
//   };

//   const amenityIcons = {
//     PRE_RESERVED_SEAT: <CheckCircleOutlined className="text-green-500" />,
//     MEAL: <CoffeeOutlined className="text-yellow-500" />,
//     REFUNDABLE_TICKET: <DeleteOutlined className="text-red-500" />,
//     FREE_CHECKED_BAGGAGE: <FileTextOutlined className="text-blue-500" />,
//     CHANGEABLE_TICKET: <CheckCircleOutlined className="text-blue-500" />,
//     BRANDED_FARES: <DollarCircleOutlined className="text-gray-500" />,
//   };

//   const renderAmenities = (amenities) => {
//     return amenities?.map((amenity, idx) => (
//       <li
//         key={idx}
//         className="text-sm text-gray-600 flex items-center space-x-2"
//       >
//         {amenityIcons[amenity.amenityType] || (
//           <CheckCircleOutlined className="text-gray-500" />
//         )}
//         <span>{amenity.description || "No description available"}</span>
//         {amenity.isChargeable && (
//           <span className="text-xs text-red-500 ml-2">+ Chargeable</span>
//         )}
//       </li>
//     ));
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       {/* Back Button */}
//       <div className="mb-4">
//         <Button
//           type="primary"
//           icon={<ArrowLeftOutlined />}
//           onClick={handleGoBack}
//           className="bg-blue-500 text-white"
//         >
//           Go Back
//         </Button>
//       </div>

//       <div className="bg-white shadow-xl rounded-lg p-8">
//         {/* Flight Header */}
//         <div className="flex justify-between items-center mb-6">
//           <div className="flex items-center space-x-6">
//             {flight.airlineLogo && (
//               <img
//                 src={flight.airlineLogo}
//                 alt={flight.airlineName}
//                 className="h-16 w-16 rounded-full border border-gray-300"
//               />
//             )}
//             <div>
//               <h3 className="text-2xl font-bold text-gray-800">
//                 {flight.airlineName}
//               </h3>
//               <p className="text-sm text-gray-500">
//                 Flight No: {flight.flightNumber || "N/A"}
//               </p>
//             </div>
//           </div>
//           <div className="text-right">
//             <p className="text-3xl font-bold text-blue-600">
//               ₹{flight.price?.total || "N/A"}
//             </p>
//             <p className="text-sm text-gray-400">
//               Base Price: ₹{flight.price?.base || "N/A"}
//             </p>
//           </div>
//         </div>

//         {/* Flight Segments with Collapsibles */}
//         <Divider
//           orientation="left"
//           className="text-lg font-semibold text-gray-700"
//         >
//           Flight Segments
//         </Divider>
//         <Collapse>
//           {flight.itineraries?.map((itinerary, idx) => (
//             <Panel header={`Segment ${idx + 1}`} key={idx}>
//               {itinerary?.segments.map((segment, segIdx) => (
//                 <div
//                   key={segIdx}
//                   className="bg-gray-50 p-4 rounded-lg shadow-md mb-4"
//                 >
//                   <div className="flex justify-between items-center mb-3">
//                     <div>
//                       <p className="text-xl font-semibold">
//                         {segment.departure?.iataCode} →{" "}
//                         {segment.arrival?.iataCode}
//                       </p>
//                       <p className="text-sm text-gray-500">
//                         {segment.duration || "N/A"} | Flight No:{" "}
//                         {segment.number || "N/A"}
//                       </p>
//                     </div>
//                     <div className="text-sm text-gray-600">
//                       <p>Aircraft: {segment.aircraft?.code || "N/A"}</p>
//                     </div>
//                   </div>
//                   <div className="text-sm text-gray-500">
//                     <p>
//                       Departure:{" "}
//                       {new Date(segment.departure?.at).toLocaleString() ||
//                         "N/A"}
//                       at {segment.departure?.terminal || "N/A"} Terminal
//                     </p>
//                     <p>
//                       Arrival:{" "}
//                       {new Date(segment.arrival?.at).toLocaleString() || "N/A"}
//                       at {segment.arrival?.terminal || "N/A"} Terminal
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </Panel>
//           ))}
//         </Collapse>

//         {/* Traveler Pricing */}
//         <Divider
//           orientation="left"
//           className="text-lg font-semibold text-gray-700"
//         >
//           Pricing Details
//         </Divider>
//         <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
//           <p className="text-sm text-gray-500">
//             Total Price: ₹{flight.travelerPricings[0]?.price?.total || "N/A"}
//           </p>
//         </div>

//         {/* Amenities Section */}
//         <Divider
//           orientation="left"
//           className="text-lg font-semibold text-gray-700"
//         >
//           Amenities
//         </Divider>
//         <div>
//           {flight.travelerPricings[0]?.fareDetailsBySegment[0]?.amenities &&
//           flight.travelerPricings[0]?.fareDetailsBySegment[0]?.amenities
//             .length > 0 ? (
//             <ul className="list-disc pl-6 space-y-2">
//               {renderAmenities(
//                 flight.travelerPricings[0]?.fareDetailsBySegment[0]?.amenities
//               )}
//             </ul>
//           ) : (
//             <p className="text-sm text-gray-500">No amenities available.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlightDetails;

//changed ui

// import { useNavigate, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Button } from "antd";
// import { ArrowLeftOutlined, CheckCircleOutlined, CoffeeOutlined, DeleteOutlined, DollarCircleOutlined, FileTextOutlined } from "@ant-design/icons";

// const FlightDetails = () => {
//   const { id } = useParams();
//   const { singleFlights, roundTripFlights } = useSelector(
//     (state) => state.flight
//   );

//   // Find the flight based on the ID from Redux store
//   const flight =
//     singleFlights.data.find((flight) => flight.id === id) ||
//     roundTripFlights.data.find((flight) => flight.id === id);

//   const navigate = useNavigate();

//   if (!flight) {
//     return <div>Flight not found!</div>;
//   }

//   const handleGoBack = () => {
//     navigate("/flights");
//   };

//    const amenityIcons = {
//      PRE_RESERVED_SEAT: <CheckCircleOutlined className="text-green-500" />,
//      MEAL: <CoffeeOutlined className="text-yellow-500" />,
//      REFUNDABLE_TICKET: <DeleteOutlined className="text-red-500" />,
//      FREE_CHECKED_BAGGAGE: <FileTextOutlined className="text-blue-500" />,
//      CHANGEABLE_TICKET: <CheckCircleOutlined className="text-blue-500" />,
//      BRANDED_FARES: <DollarCircleOutlined className="text-gray-500" />,
//    };

//    const renderAmenities = (amenities) => {
//      return amenities?.map((amenity, idx) => (
//        <li
//          key={idx}
//          className="text-sm text-gray-600 flex items-center space-x-2"
//        >
//          {amenityIcons[amenity.amenityType] || (
//            <CheckCircleOutlined className="text-gray-500" />
//          )}
//          <span>{amenity.description || "No description available"}</span>
//          {amenity.isChargeable && (
//            <span className="text-xs text-red-500 ml-2">+ Chargeable</span>
//          )}
//        </li>
//      ));
//    };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//       {/* Back Button */}
//       <div className="mb-6">
//         <Button
//           type="primary"
//           icon={<ArrowLeftOutlined />}
//           onClick={handleGoBack}
//           className="bg-blue-500 text-white"
//         >
//           Go Back
//         </Button>
//       </div>

//       {/* Flight Header */}
//       <div className="flex items-center justify-between">
//         <div className="flex items-center space-x-4">
//           <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
//             {/* Airline Logo */}
//             {flight.airlineLogo && (
//               <img
//                 src={flight.airlineLogo}
//                 alt={flight.airlineName}
//                 className="h-6 w-6"
//               />
//             )}
//           </div>
//           <div>
//             <h2 className="text-lg font-semibold">{flight.airlineName}</h2>
//             <p className="text-gray-500">Flight {flight.flightNumber}</p>
//           </div>
//         </div>
//         <div className="text-xl font-semibold">
//           <p className="text-3xl font-bold text-blue-600">
//             ₹{flight.price?.total || "N/A"}
//           </p>
//           <p className="text-sm text-gray-400">
//             Base Price: ₹{flight.price?.base || "N/A"}
//           </p>
//         </div>
//       </div>

//       {/* Flight Timing and Route */}
//       <div className="mt-6">
//         <div className="flex justify-between text-center">
//           <div>
//             <p className="text-2xl font-bold">
//               {new Date(flight.departure?.at).toLocaleTimeString()}
//             </p>
//             <p className="text-gray-500">
//               {new Date(flight.departure?.at).toLocaleDateString()}
//             </p>
//             <p className="text-gray-700">{flight.departure?.iataCode}</p>
//           </div>
//           <div className="flex items-center">
//             <div className="w-20 border-t border-gray-300"></div>
//             <p className="mx-2 text-sm text-gray-500">
//               {flight.itineraries?.[0]?.segments?.[0]?.duration || "N/A"} •{" "}
//               {flight.itineraries?.[0]?.segments?.[0]?.flightMode || "Non-stop"}
//             </p>
//             <div className="w-20 border-t border-gray-300"></div>
//           </div>
//           <div>
//             <p className="text-2xl font-bold">
//               {new Date(flight.arrival?.at).toLocaleTimeString()}
//             </p>
//             <p className="text-gray-500">
//               {new Date(flight.arrival?.at).toLocaleDateString()}
//             </p>
//             <p className="text-gray-700">{flight.arrival?.iataCode}</p>
//           </div>
//         </div>
//       </div>

//       {/* Included Amenities */}
//       <div className="mt-6">
//         <h3 className="text-lg font-semibold">Included Amenities</h3>
//         <div className="grid grid-cols-2 gap-4 mt-4">
//           {flight.amenities?.map((amenity, index) => (
//             <div className="flex items-center space-x-2" key={index}>
//               <span className="w-4 h-4 text-blue-500">&#x2713;</span>
//               <p>{amenity}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Fare Rules */}
//       <div className="mt-6">
//         <h3 className="text-lg font-semibold">Fare Rules</h3>
//         <div className="mt-4 space-y-2 text-gray-700">
//           {flight.fareRules?.map((rule, index) => (
//             <div className="flex items-start space-x-2" key={index}>
//               <span className="text-blue-500">&#9432;</span>
//               <p>{rule}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Continue Button */}
//       <button className="w-full py-3 mt-6 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
//         Continue to Seat Selection
//       </button>
//     </div>
//   );
// };

// export default FlightDetails;

///changed ui

// import { useNavigate, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Button, Divider, Collapse } from "antd";
// import {
//   ArrowLeftOutlined,
//   CoffeeOutlined,
//   CheckCircleOutlined,
//   DeleteOutlined,
//   FileTextOutlined,
//   DollarCircleOutlined,
// } from "@ant-design/icons";

// const FlightDetails = () => {
//   const { id } = useParams();
//   const { singleFlights, roundTripFlights } = useSelector(
//     (state) => state.flight
//   );

//   // Find the flight based on the ID from Redux store
//   const flight =
//     singleFlights.data.find((flight) => flight.id === id) ||
//     roundTripFlights.data.find((flight) => flight.id === id);

//   const navigate = useNavigate();

//   if (!flight) {
//     return <div>Flight not found!</div>;
//   }

//   const handleGoBack = () => {
//     navigate("/flights");
//   };

//   const amenityIcons = {
//     PRE_RESERVED_SEAT: <CheckCircleOutlined className="text-green-500" />,
//     MEAL: <CoffeeOutlined className="text-yellow-500" />,
//     REFUNDABLE_TICKET: <DeleteOutlined className="text-red-500" />,
//     FREE_CHECKED_BAGGAGE: <FileTextOutlined className="text-blue-500" />,
//     CHANGEABLE_TICKET: <CheckCircleOutlined className="text-blue-500" />,
//     BRANDED_FARES: <DollarCircleOutlined className="text-gray-500" />,
//   };

//   const renderAmenities = (amenities) => {
//     return amenities?.map((amenity, idx) => (
//       <li
//         key={idx}
//         className="text-sm text-gray-600 flex items-center space-x-2"
//       >
//         {amenityIcons[amenity.amenityType] || (
//           <CheckCircleOutlined className="text-gray-500" />
//         )}
//         <span>{amenity.description || "No description available"}</span>
//         {amenity.isChargeable && (
//           <span className="text-xs text-red-500 ml-2">+ Chargeable</span>
//         )}
//       </li>
//     ));
//   };

//   const renderFlightSegments = () => {
//     return flight.itineraries?.map((itinerary, idx) => {
//       const isRoundTrip = roundTripFlights.data.length > 0;
//       return (
//         <div key={idx}>
//           {/* If Roundtrip, show divider between segments */}
//           {isRoundTrip && idx > 0 && (
//             <Divider
//               orientation="left"
//               className="text-lg font-semibold text-gray-700"
//             >
//               Return Flight Segment
//             </Divider>
//           )}

//           {/* Iterate over flight segments */}
//           {itinerary?.segments.map((segment, segIdx) => (
//             <div
//               key={segIdx}
//               className="bg-gray-50 p-4 rounded-lg shadow-md mb-4"
//             >
//               <div className="flex justify-between items-center mb-3">
//                 <div>
//                   <p className="text-xl font-semibold">
//                     {segment.departure?.iataCode} → {segment.arrival?.iataCode}
//                   </p>
//                   <p className="text-sm text-gray-500">
//                     {segment.duration || "N/A"} | Flight No:{" "}
//                     {segment.number || "N/A"}
//                   </p>
//                 </div>
//                 <div className="text-sm text-gray-600">
//                   <p>Aircraft: {segment.aircraft?.code || "N/A"}</p>
//                 </div>
//               </div>
//               <div className="text-sm text-gray-500">
//                 <p>
//                   Departure:{" "}
//                   {new Date(segment.departure?.at).toLocaleString() || "N/A"} at{" "}
//                   {segment.departure?.terminal || "N/A"} Terminal
//                 </p>
//                 <p>
//                   Arrival:{" "}
//                   {new Date(segment.arrival?.at).toLocaleString() || "N/A"} at{" "}
//                   {segment.arrival?.terminal || "N/A"} Terminal
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       );
//     });
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//       {/* Back Button */}
//       <div className="mb-6">
//         <Button
//           type="primary"
//           icon={<ArrowLeftOutlined />}
//           onClick={handleGoBack}
//           className="bg-blue-500 text-white"
//         >
//           Go Back
//         </Button>
//       </div>

//       {/* Flight Header */}
//       <div className="flex items-center justify-between">
//         <div className="flex items-center space-x-4">
//           <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
//             {/* Airline Logo */}
//             {flight.airlineLogo && (
//               <img
//                 src={flight.airlineLogo}
//                 alt={flight.airlineName}
//                 className="h-6 w-6"
//               />
//             )}
//           </div>
//           <div>
//             <h2 className="text-lg font-semibold">{flight.airlineName}</h2>
//             <p className="text-gray-500">Flight {flight.flightNumber}</p>
//           </div>
//         </div>
//         <div className="text-xl font-semibold">
//           ₹{flight.price?.total || "N/A"}
//         </div>
//       </div>

//       {/* Flight Segments */}
//       <Divider
//         orientation="left"
//         className="text-lg font-semibold text-gray-700"
//       >
//         Flight Segments
//       </Divider>

//       {/* Conditionally Render Segments (for round-trip and single flight) */}
//       <Collapse>{renderFlightSegments()}</Collapse>

//       {/* Pricing and Amenities */}
//       <Divider
//         orientation="left"
//         className="text-lg font-semibold text-gray-700"
//       >
//         Pricing & Amenities
//       </Divider>

//       {/* Pricing Details */}
//       <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
//         <p className="text-sm text-gray-500">
//           Total Price: ₹{flight.travelerPricings[0]?.price?.total || "N/A"}
//         </p>
//       </div>

//       {/* Amenities Section */}
//       <div>
//         {flight.travelerPricings[0]?.fareDetailsBySegment[0]?.amenities &&
//         flight.travelerPricings[0]?.fareDetailsBySegment[0]?.amenities.length >
//           0 ? (
//           <ul className="list-disc pl-6 space-y-2">
//             {renderAmenities(
//               flight.travelerPricings[0]?.fareDetailsBySegment[0]?.amenities
//             )}
//           </ul>
//         ) : (
//           <p className="text-sm text-gray-500">No amenities available.</p>
//         )}
//       </div>

//       {/* Continue Button */}
//       <button className="w-full py-3 mt-6 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
//         Continue to Seat Selection
//       </button>
//     </div>
//   );
// };

// export default FlightDetails;

//updated ui upper one is basic but all working

// import { useNavigate, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { MdArrowBack, MdCheckCircle, MdCancel } from "react-icons/md"; // Back Arrow, Check Circle, Cancel
// import { FaRegSmileBeam, FaSuitcase } from "react-icons/fa"; // Meal, Baggage
// import { IoIosArrowForward } from "react-icons/io"; // Changeable Ticket
// import { GiMoneyStack } from "react-icons/gi"; // Branded Fares

// const FlightDetails = () => {
//   const { id } = useParams();
//   const { singleFlights, roundTripFlights } = useSelector(
//     (state) => state.flight
//   );

//   // Find the flight based on the ID from Redux store
//   const flight =
//     singleFlights.data.find((flight) => flight.id === id) ||
//     roundTripFlights.data.find((flight) => flight.id === id);

//   const navigate = useNavigate();

//   if (!flight) {
//     return <div>Flight not found!</div>;
//   }

//   const handleGoBack = () => {
//     navigate("/flights");
//   };

//   const amenityIcons = {
//     PRE_RESERVED_SEAT: <MdCheckCircle className="text-green-500" />,
//     MEAL: <FaRegSmileBeam className="text-yellow-500" />,
//     REFUNDABLE_TICKET: <MdCancel className="text-red-500" />,
//     FREE_CHECKED_BAGGAGE: <FaSuitcase className="text-blue-500" />,
//     CHANGEABLE_TICKET: <IoIosArrowForward className="text-blue-500" />,
//     BRANDED_FARES: <GiMoneyStack className="text-gray-500" />,
//   };

//   const renderAmenities = (amenities) => {
//     return amenities?.map((amenity, idx) => (
//       <li
//         key={idx}
//         className="text-sm text-gray-600 flex items-center space-x-2"
//       >
//         {amenityIcons[amenity.amenityType] || (
//           <MdCheckCircle className="text-gray-500" />
//         )}
//         <span>{amenity.description || "No description available"}</span>
//         {amenity.isChargeable && (
//           <span className="text-xs text-red-500 ml-2">+ Chargeable</span>
//         )}
//       </li>
//     ));
//   };

//   const renderFlightSegments = () => {
//     return flight.itineraries?.map((itinerary, idx) => {
//       const isRoundTrip = roundTripFlights.data.length > 0;
//       return (
//         <div key={idx}>
//           {/* If Roundtrip, show divider between segments */}
//           {isRoundTrip && idx > 0 && (
//             <div className="my-4 text-lg font-semibold text-gray-700">
//               <span>Return Flight Segment</span>
//             </div>
//           )}

//           {/* Iterate over flight segments */}
//           {itinerary?.segments.map((segment, segIdx) => (
//             <div
//               key={segIdx}
//               className="bg-gray-50 p-4 rounded-lg shadow-md mb-4"
//             >
//               <div className="flex justify-between items-center mb-3">
//                 <div>
//                   <p className="text-xl font-semibold">
//                     {segment.departure?.iataCode} → {segment.arrival?.iataCode}
//                   </p>
//                   <p className="text-sm text-gray-500">
//                     {segment.duration || "N/A"} | Flight No:{" "}
//                     {segment.number || "N/A"}
//                   </p>
//                 </div>
//                 <div className="text-sm text-gray-600">
//                   <p>Aircraft: {segment.aircraft?.code || "N/A"}</p>
//                 </div>
//               </div>
//               <div className="text-sm text-gray-500">
//                 <p>
//                   Departure:{" "}
//                   {new Date(segment.departure?.at).toLocaleString() || "N/A"} at{" "}
//                   {segment.departure?.terminal || "N/A"} Terminal
//                 </p>
//                 <p>
//                   Arrival:{" "}
//                   {new Date(segment.arrival?.at).toLocaleString() || "N/A"} at{" "}
//                   {segment.arrival?.terminal || "N/A"} Terminal
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       );
//     });
//   };

//   return (
//     <section
//       id="flight_details"
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
//           <div className="flex items-center justify-between mb-6">
//             <div className="flex items-center space-x-4">
//               <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
//                 {/* Airline Logo */}
//                 {flight.airlineLogo && (
//                   <img
//                     src={flight.airlineLogo}
//                     alt={flight.airlineName}
//                     className="h-6 w-6"
//                   />
//                 )}
//               </div>
//               <div>
//                 <h2 className="text-lg font-semibold">{flight.airlineName}</h2>
//                 <p className="text-gray-500">Flight {flight.flightNumber}</p>
//               </div>
//             </div>
//             <div className="text-xl font-semibold">
//               ₹{flight.price?.total || "N/A"}
//             </div>
//           </div>

//           {/* Flight Segments */}
//           <div className="my-4 text-lg font-semibold text-gray-700">
//             Flight Segments
//           </div>
//           <div className="space-y-4">{renderFlightSegments()}</div>

//           {/* Pricing and Amenities */}
//           <div className="my-4 text-lg font-semibold text-gray-700">
//             Pricing & Amenities
//           </div>

//           {/* Pricing Details */}
//           <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
//             <p className="text-sm text-gray-500">
//               Total Price: ₹{flight.travelerPricings[0]?.price?.total || "N/A"}
//             </p>
//           </div>

//           {/* Amenities Section */}
//           <div>
//             {flight.travelerPricings[0]?.fareDetailsBySegment[0]?.amenities &&
//             flight.travelerPricings[0]?.fareDetailsBySegment[0]?.amenities
//               .length > 0 ? (
//               <ul className="list-disc pl-6 space-y-2">
//                 {renderAmenities(
//                   flight.travelerPricings[0]?.fareDetailsBySegment[0]?.amenities
//                 )}
//               </ul>
//             ) : (
//               <p className="text-sm text-gray-500">No amenities available.</p>
//             )}
//           </div>

//           {/* Continue Button */}
//           <button className="w-full py-3 mt-6 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
//             Continue to Seat Selection
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FlightDetails;

// import { useNavigate, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { MdArrowBack, MdCheckCircle, MdCancel } from "react-icons/md";
// import { FaRegSmileBeam, FaSuitcase } from "react-icons/fa";
// import { IoIosArrowForward } from "react-icons/io";
// import { GiMoneyStack } from "react-icons/gi";
// import { PiShoppingBag } from "react-icons/pi";

// const FlightDetails = () => {
//   const { id } = useParams();
//   const { singleFlights, roundTripFlights, currencySymbol } = useSelector(
//     (state) => state.flight
//   );

//   // Find the flight based on the ID from Redux store
//   const flight =
//     singleFlights.data.find((flight) => flight.id === id) ||
//     roundTripFlights.data.find((flight) => flight.id === id);

//   const navigate = useNavigate();

//   if (!flight) {
//     return <div>Flight not found!</div>;
//   }

//   const handleGoBack = () => {
//     navigate("/flights");
//   };

//   const amenityIcons = {
//     PRE_RESERVED_SEAT: <MdCheckCircle className="text-green-500" />,
//     MEAL: <FaRegSmileBeam className="text-yellow-500" />,
//     REFUNDABLE_TICKET: <MdCancel className="text-red-500" />,
//     FREE_CHECKED_BAGGAGE: <FaSuitcase className="text-blue-500" />,
//     CHANGEABLE_TICKET: <IoIosArrowForward className="text-blue-500" />,
//     BRANDED_FARES: <GiMoneyStack className="text-gray-500" />,
//   };

//   const renderAmenities = (amenities) => {
//     return amenities?.map((amenity, idx) => (
//       <div key={idx} className="flex items-center">
//         {amenityIcons[amenity.amenityType] || (
//           <MdCheckCircle className="text-gray-500" />
//         )}
//         <span className="text-gray-700 ml-2 capitalize">
//           {amenity.description || "No description available"}
//         </span>
//         {amenity.isChargeable && (
//           <span className="text-xs text-red-500 ml-2">+ Chargeable</span>
//         )}
//       </div>
//     ));
//   };

//   const renderFlightSegments = () => {
//     return flight.itineraries?.map((itinerary, idx) => {
//       const isRoundTrip = roundTripFlights.data.length > 0;
//       return (
//         <div key={idx}>
//           {/* If Roundtrip, show divider between segments */}
//           {isRoundTrip && idx > 0 && (
//             <div className="my-4 text-lg font-semibold text-gray-700">
//               <span>Return Flight Segment</span>
//             </div>
//           )}

//           {/* Iterate over flight segments */}
//           {itinerary?.segments.map((segment, segIdx) => (
//             <div
//               key={segIdx}
//               className="bg-gray-50 p-4 rounded-lg shadow-md mb-4"
//             >
//               <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-3">
//                 {/* Departure Information */}
//                 <div className="text-center mb-4 md:mb-0">
//                   <p className="text-2xl font-bold text-gray-800">
//                     {new Date(segment.departure?.at).toLocaleTimeString()}
//                   </p>
//                   <p className="text-lg text-gray-400">
//                     {new Date(segment.departure?.at).toLocaleDateString()}
//                   </p>
//                   <p className="text-gray-500">{segment.departure?.iataCode}</p>
//                 </div>

//                 {/* Divider */}
//                 <div className="flex-1 px-8 flex flex-col items-center">
//                   <div className="w-full flex items-center justify-center mb-2">
//                     <div className="h-0.5 flex-1 bg-gray-300"></div>
//                     <svg
//                       className="w-6 h-6 text-gray-400 mx-4"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M5 12h14m-7-7l7 7-7 7"
//                       />
//                     </svg>
//                     <div className="h-0.5 flex-1 bg-gray-300"></div>
//                   </div>
//                   <p className="text-gray-500">
//                     {segment.duration || "N/A"} •{" "}
//                     {segment.stopovers?.length > 0 ? "1 stop" : "Non-stop"}
//                   </p>
//                 </div>

//                 {/* Arrival Information */}
//                 <div className="text-center">
//                   <p className="text-2xl font-bold text-gray-800">
//                     {new Date(segment.arrival?.at).toLocaleTimeString()}
//                   </p>
//                   <p className="text-lg text-gray-400">
//                     {new Date(segment.arrival?.at).toLocaleDateString()}
//                   </p>
//                   <p className="text-gray-500">{segment.arrival?.iataCode}</p>
//                 </div>
//               </div>

//               {/* Additional Information (Flight Details) */}
//               <div className="text-sm text-gray-500">
//                 <p>Flight No: {segment.number || "32A"}</p>
//                 <p>
//                   Departure Terminal: {segment.departure?.terminal || 3} |
//                   Arrival Terminal: {segment.arrival?.terminal || 3}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       );
//     });
//   };

//   return (
//     <section
//       id="flight_details"
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
//           <div className="border-b border-gray-200 pb-6 mb-6">
//             <div className="flex flex-col md:flex-row md:items-center md:justify-between">
//               <div className="flex items-center mb-4 md:mb-0">
//                 <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mr-4">
//                   {/* Airline Logo */}
//                   {flight.airlineLogo && (
//                     <img
//                       src={flight.airlineLogo}
//                       alt={flight.airlineName}
//                       className="h-6 w-6"
//                     />
//                   )}
//                 </div>
//                 <div>
//                   <h2 className="text-xl font-bold text-gray-800">
//                     {flight.airlineName}
//                   </h2>
//                   <p className="text-gray-500">Flight {flight.flightNumber}</p>
//                 </div>
//               </div>
//               <div className="text-right">
//                 <p className="text-3xl font-bold text-gray-800">
//                   {currencySymbol}
//                   {flight.price?.total || "N/A"}
//                 </p>
//                 <p className="text-sm text-gray-500">per passenger</p>
//               </div>
//             </div>
//           </div>

//           {/* Flight Segments */}
//           <div className="space-y-6">{renderFlightSegments()}</div>

//           {/* Amenities Section */}
//           <div className="bg-gray-200/30 p-6 rounded-lg border border-gray-300">
//             <h3 className="text-lg font-medium text-gray-800 mb-4">
//               Included Amenities
//             </h3>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               {renderAmenities(
//                 flight.travelerPricings[0].fareDetailsBySegment[0].amenities
//               )}
//               <div className="text-gray-700">
//                 <p className="uppercase flex items-center gap-3 ">
//                   <PiShoppingBag />
//                   included Checked Bags
//                 </p>
//                 <p>
//                   {
//                     flight.travelerPricings[0].fareDetailsBySegment[0]
//                       .includedCheckedBags.weight
//                   }{" "}
//                   <span></span>
//                   {
//                     flight.travelerPricings[0].fareDetailsBySegment[0]
//                       .includedCheckedBags.weightUnit
//                   }
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Fare Rules */}
//           <div className="bg-gray-200/30 p-6 rounded-lg border border-gray-300 mt-6">
//             <h3 className="text-lg font-medium text-gray-800 mb-4">
//               Fare Rules
//             </h3>
//             <div className="space-y-3">
//               <div className="flex items-start">
//                 <MdCheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
//                 <div>
//                   <p className="text-gray-700">Cancellation</p>
//                   <p className="text-sm text-gray-500">
//                     Cancellation available with fee up to 24 hours before
//                     departure
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <MdCheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
//                 <div>
//                   <p className="text-gray-700">Date Change</p>
//                   <p className="text-sm text-gray-500">
//                     Date changes allowed with fee subject to availability
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Action Button */}
//           <div className="mt-8 text-center">
//             <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200">
//               Continue to Seat Selection
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FlightDetails;

//changed

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdArrowBack, MdCheckCircle, MdCancel } from "react-icons/md";
import { FaRegSmileBeam, FaSuitcase } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { GiMoneyStack } from "react-icons/gi";
import { PiShoppingBag } from "react-icons/pi";
import { resetPassengerData } from "../store/passengerReducer";

const FlightDetails = () => {
  const { id } = useParams();
  const { singleFlights, roundTripFlights, currencySymbol } = useSelector(
    (state) => state.flight
  );

  // Find the flight based on the ID from Redux store
  const flight =
    singleFlights.data.find((flight) => flight.id === id) ||
    roundTripFlights.data.find((flight) => flight.id === id);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!flight) {
    return <div>Flight not found!</div>;
  }

  const handleGoBack = () => {
    navigate("/flights");
  };
  const handleContinueToSeatSelection = () => {
    // Navigate to the passenger page
    dispatch(resetPassengerData());

    navigate(`/passenger/${id}`);
  };

  const amenityIcons = {
    PRE_RESERVED_SEAT: <MdCheckCircle className="text-green-500" />,
    MEAL: <FaRegSmileBeam className="text-yellow-500" />,
    REFUNDABLE_TICKET: <MdCancel className="text-red-500" />,
    FREE_CHECKED_BAGGAGE: <FaSuitcase className="text-blue-500" />,
    CHANGEABLE_TICKET: <IoIosArrowForward className="text-blue-500" />,
    BRANDED_FARES: <GiMoneyStack className="text-gray-500" />,
  };

  const renderAmenities = (amenities) => {
    return amenities?.map((amenity, idx) => (
      <div key={idx} className="flex items-center">
        {amenityIcons[amenity.amenityType] || (
          <MdCheckCircle className="text-gray-500" />
        )}
        <span className="text-gray-700 ml-2 capitalize">
          {amenity.description || "No description available"}
        </span>
        {amenity.isChargeable && (
          <span className="text-xs text-red-500 ml-2">+ Chargeable</span>
        )}
      </div>
    ));
  };

  const renderFlightSegments = () => {
    return flight.itineraries?.map((itinerary, idx) => {
      const isRoundTrip = roundTripFlights.data.length > 0;
      return (
        <div key={idx}>
          {/* If Roundtrip, show divider between segments */}
          {isRoundTrip && idx > 0 && (
            <div className="my-4 text-lg font-semibold text-gray-700">
              <span>Return Flight Segment</span>
            </div>
          )}

          {/* Iterate over flight segments */}
          {itinerary?.segments.map((segment, segIdx) => (
            <div
              key={segIdx}
              className="bg-gray-50 p-4 rounded-lg shadow-md mb-4"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-3">
                {/* Departure Information */}
                <div className="text-center mb-4 md:mb-0">
                  <p className="text-2xl font-bold text-gray-800">
                    {new Date(segment.departure?.at).toLocaleTimeString()}
                  </p>
                  <p className="text-lg text-gray-400">
                    {new Date(segment.departure?.at).toLocaleDateString()}
                  </p>
                  <p className="text-gray-500">{segment.departure?.iataCode}</p>
                </div>

                {/* Divider */}
                <div className="flex-1 px-8 flex flex-col items-center">
                  <div className="w-full flex items-center justify-center mb-2">
                    <div className="h-0.5 flex-1 bg-gray-300"></div>
                    <svg
                      className="w-6 h-6 text-gray-400 mx-4"
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
                    <div className="h-0.5 flex-1 bg-gray-300"></div>
                  </div>
                  <p className="text-gray-500">
                    {segment.duration || "N/A"} •{" "}
                    {segment.stopovers?.length > 0 ? "1 stop" : "Non-stop"}
                  </p>
                </div>

                {/* Arrival Information */}
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800">
                    {new Date(segment.arrival?.at).toLocaleTimeString()}
                  </p>
                  <p className="text-lg text-gray-400">
                    {new Date(segment.arrival?.at).toLocaleDateString()}
                  </p>
                  <p className="text-gray-500">{segment.arrival?.iataCode}</p>
                </div>
              </div>

              {/* Additional Information (Flight Details) */}
              <div className="text-sm text-gray-500">
                <p>Flight No: {segment.number || "32A"}</p>
                <p>
                  Departure Terminal: {segment.departure?.terminal || 3} |
                  Arrival Terminal: {segment.arrival?.terminal || 3}
                </p>
              </div>
            </div>
          ))}
        </div>
      );
    });
  };

  return (
    <section
      id="flight_details"
      className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-md">
          {/* Back Button */}
          <div className="mb-6">
            <button
              onClick={handleGoBack}
              className="flex items-center text-blue-500 hover:text-blue-600"
            >
              <MdArrowBack className="mr-2" />
              Go Back
            </button>
          </div>

          {/* Flight Header */}
          <div className="border-b border-gray-200 pb-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                  {/* Airline Logo */}
                  {flight.airlineLogo && (
                    <img
                      src={flight.airlineLogo}
                      alt={flight.airlineName}
                      className="h-6 w-6"
                    />
                  )}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    {flight.airlineName}
                  </h2>
                  <p className="text-gray-500">Flight {flight.flightNumber}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-gray-800">
                  {currencySymbol}
                  {flight.price?.total || "N/A"}
                </p>
                <p className="text-sm text-gray-500">per passenger</p>
              </div>
            </div>
          </div>

          {/* Flight Segments */}
          <div className="space-y-6">{renderFlightSegments()}</div>

          {/* Amenities Section */}
          <div className="bg-gray-200/30 p-6 rounded-lg border border-gray-300">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Included Amenities
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {renderAmenities(
                flight.travelerPricings[0].fareDetailsBySegment[0].amenities
              )}
              <div className="text-gray-700">
                <p className="uppercase flex items-center gap-3 ">
                  <PiShoppingBag />
                  included Checked Bags
                </p>
                <p>
                  {
                    flight.travelerPricings[0].fareDetailsBySegment[0]
                      .includedCheckedBags.weight
                  }{" "}
                  {
                    flight.travelerPricings[0].fareDetailsBySegment[0]
                      .includedCheckedBags.weightUnit
                  }
                </p>
              </div>
              <div className="text-gray-700">
                <p className="uppercase flex items-center gap-3">
                  <FaSuitcase />
                  Free Carry-On Bag
                </p>
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <div className="mt-8 text-center">
            <button
              onClick={handleContinueToSeatSelection}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Continue to Seat Selection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightDetails;
