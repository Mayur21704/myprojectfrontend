// import { useSelector } from "react-redux";
// import { useParams, useNavigate } from "react-router-dom";

// const PassengerInfo = () => {
//   const { id } = useParams(); // Get the flight ID from the URL
//   const navigate = useNavigate();

//   const { filters } = useSelector((state) => state.flight);
//   console.log(filters);

//   const handleContinueToSeatSelection = () => {
//     // Navigate to Seat Booking with the flight ID
//     navigate(`/seatBooking/${id}`);
//   };
//   return (
//     <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
//       {/* Header */}
//       <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//         Passenger Details
//       </h2>

//       <h3>Total Passenger {filters.adults + filters.children}</h3>

//       {/* Passenger Info */}
//       <div className="mb-8">
//         <h3 className="text-xl font-semibold text-gray-700 mb-4">
//           Passenger {} (Adult)
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* First Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               First Name
//             </label>
//             <input
//               type="text"
//               placeholder="Enter first name"
//               className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>
//           {/* Last Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               Last Name
//             </label>
//             <input
//               type="text"
//               placeholder="Enter last name"
//               className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>
//         </div>

//         {/* Date of Birth */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               Date of Birth
//             </label>
//             <input
//               type="date"
//               className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Contact Information */}
//       <div>
//         <h3 className="text-xl font-semibold text-gray-700 mb-4">
//           Contact Information
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               Email
//             </label>
//             <input
//               type="email"
//               placeholder="Enter email address"
//               className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>
//           {/* Phone Number */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               Phone Number (Optional)
//             </label>
//             <input
//               type="tel"
//               placeholder="Enter phone number"
//               className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           {/* Continue Button */}
//           <div className="mt-8 text-center">
//             <button
//               onClick={handleContinueToSeatSelection}
//               className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200"
//             >
//               Continue to Seat Selection
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PassengerInfo;

// import { useSelector } from "react-redux";
// import { useParams, useNavigate } from "react-router-dom";

// const PassengerInfo = () => {
//   const { id } = useParams(); // Get the flight ID from the URL
//   const navigate = useNavigate();

//   const { filters } = useSelector((state) => state.flight);
//   console.log(filters);

//   const handleContinueToSeatSelection = () => {
//     // Navigate to Seat Booking with the flight ID
//     navigate(`/seatBooking/${id}`);
//   };

//   // Generate input sections for adults and children
//   const generatePassengerInfo = (type, index) => {
//     return (
//       <div key={index} className="mb-8">
//         <h3 className="text-xl font-semibold text-gray-700 mb-4">
//           {type} {index + 1} ({type === "Adult" ? "Adult" : "Child"})
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* First Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               First Name
//             </label>
//             <input
//               type="text"
//               placeholder="Enter first name"
//               className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>
//           {/* Last Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               Last Name
//             </label>
//             <input
//               type="text"
//               placeholder="Enter last name"
//               className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>
//         </div>

//         {/* Date of Birth */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               Date of Birth
//             </label>
//             <input
//               type="date"
//               className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
//       {/* Header */}
//       <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//         Passenger Details
//       </h2>

//       <h3>
//         Total Passengers: {Number(filters.adults) + Number(filters.children)}
//       </h3>

//       {/* Generate form fields for adults */}
//       {Array.from({ length: filters.adults }).map((_, index) =>
//         generatePassengerInfo("Adult", index)
//       )}

//       {/* Generate form fields for children */}
//       {Array.from({ length: filters.children }).map((_, index) =>
//         generatePassengerInfo("Child", index)
//       )}

//       {/* Contact Information */}
//       <div>
//         <h3 className="text-xl font-semibold text-gray-700 mb-4">
//           Contact Information
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               Email
//             </label>
//             <input
//               type="email"
//               placeholder="Enter email address"
//               className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>
//           {/* Phone Number */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               Phone Number (Optional)
//             </label>
//             <input
//               type="tel"
//               placeholder="Enter phone number"
//               className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           {/* Continue Button */}
//           <div className="mt-8 text-center">
//             <button
//               onClick={handleContinueToSeatSelection}
//               className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200"
//             >
//               Continue to Seat Selection
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PassengerInfo;

//based on children age 0 to 12 dob customize

// import { useSelector } from "react-redux";
// import { useParams, useNavigate } from "react-router-dom";

// const PassengerInfo = () => {
//   const { id } = useParams(); // Get the flight ID from the URL
//   const navigate = useNavigate();

//   const { filters } = useSelector((state) => state.flight);
//   console.log(filters);

//   const handleContinueToSeatSelection = () => {
//     // Navigate to Seat Booking with the flight ID
//     navigate(`/seatBooking/${id}`);
//   };

//   // Generate input sections for adults and children
//   const generatePassengerInfo = (type, index) => {
//     // Get current date and calculate the min and max dates for children
//     const currentDate = new Date();
//     const currentYear = currentDate.getFullYear();
//     const minYear = currentYear - 12; // 12 years ago
//     const minDate = `${minYear}-01-01`; // Minimum date (12 years ago)
//     const maxDate = currentDate.toISOString().split("T")[0]; // Today's date in YYYY-MM-DD format

//     return (
//       <div key={index} className="mb-8">
//         <h3 className="text-xl font-semibold text-gray-700 mb-4">
//           {type} {index + 1} ({type === "Adult" ? "Adult" : "Child"})
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* First Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               First Name
//             </label>
//             <input
//               type="text"
//               placeholder="Enter first name"
//               className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>
//           {/* Last Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               Last Name
//             </label>
//             <input
//               type="text"
//               placeholder="Enter last name"
//               className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>
//         </div>

//         {/* Date of Birth */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               Date of Birth
//             </label>
//             <input
//               type="date"
//               min={minDate} // Set min date to 12 years ago
//               max={maxDate} // Set max date to current date
//               className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
//       {/* Header */}
//       <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//         Passenger Details
//       </h2>

//       <h3>
//         Total Passengers: {Number(filters.adults) + Number(filters.children)}
//       </h3>

//       {/* Generate form fields for adults */}
//       {Array.from({ length: filters.adults }).map((_, index) =>
//         generatePassengerInfo("Adult", index)
//       )}

//       {/* Generate form fields for children */}
//       {Array.from({ length: filters.children }).map((_, index) =>
//         generatePassengerInfo("Child", index)
//       )}

//       {/* Contact Information */}
//       <div>
//         <h3 className="text-xl font-semibold text-gray-700 mb-4">
//           Contact Information
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               Email
//             </label>
//             <input
//               type="email"
//               placeholder="Enter email address"
//               className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>
//           {/* Phone Number */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               Phone Number (Optional)
//             </label>
//             <input
//               type="tel"
//               placeholder="Enter phone number"
//               className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>
//         </div>

//         {/* Continue Button */}
//         <div className="mt-8 text-center">
//           <button
//             onClick={handleContinueToSeatSelection}
//             className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200"
//           >
//             Continue to Seat Selection
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PassengerInfo;

//collapsable arrow  with best ui  and functionality just not validation added in this

// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { useParams, useNavigate } from "react-router-dom";
// import { FaArrowDown, FaArrowUp } from "react-icons/fa"; // Importing both down and up arrows

// const PassengerInfo = () => {
//   const { id } = useParams(); // Get the flight ID from the URL
//   const navigate = useNavigate();

//   const { filters } = useSelector((state) => state.flight);
//   console.log(filters);

//   const handleContinueToSeatSelection = () => {
//     // Navigate to Seat Booking with the flight ID
//     navigate(`/seatBooking/${id}`);
//   };

//   // State to handle expansion/collapse of adults and children separately
//   const [expandedAdults, setExpandedAdults] = useState(
//     Array.from({ length: filters.adults }).fill(false)
//   );
//   const [expandedChildren, setExpandedChildren] = useState(
//     Array.from({ length: filters.children }).fill(false)
//   );

//   // Toggle expand/collapse for adults
//   const toggleAdultExpand = (index) => {
//     setExpandedAdults((prev) => {
//       const newExpanded = [...prev];
//       newExpanded[index] = !newExpanded[index];
//       return newExpanded;
//     });
//   };

//   // Toggle expand/collapse for children
//   const toggleChildExpand = (index) => {
//     setExpandedChildren((prev) => {
//       const newExpanded = [...prev];
//       newExpanded[index] = !newExpanded[index];
//       return newExpanded;
//     });
//   };

//   // Generate input sections for adults and children
//   const generatePassengerInfo = (type, index, isAdult) => {
//     // Get current date and calculate the min and max dates for children
//     const currentDate = new Date();
//     const currentYear = currentDate.getFullYear();
//     const minYear = currentYear - 12; // 12 years ago
//     const minDate = `${minYear}-01-01`; // Minimum date (12 years ago)
//     const maxDate = currentDate.toISOString().split("T")[0]; // Today's date in YYYY-MM-DD format

//     return (
//       <div key={index} className="mb-8">
//         <div
//           className="flex items-center justify-between cursor-pointer"
//           onClick={() => {
//             isAdult ? toggleAdultExpand(index) : toggleChildExpand(index);
//           }}
//         >
//           <span className="mr-2 text-xl font-semibold text-gray-700">
//             {type} {index + 1} ({type === "Adult" ? "Adult" : "Child"})
//           </span>
//           <span className="text-xl">
//             {/* Displaying either down or up arrow based on the expanded state */}
//             {isAdult ? (
//               expandedAdults[index] ? (
//                 <FaArrowUp className="transition-transform duration-200" />
//               ) : (
//                 <FaArrowDown className="transition-transform duration-200" />
//               )
//             ) : expandedChildren[index] ? (
//               <FaArrowUp className="transition-transform duration-200" />
//             ) : (
//               <FaArrowDown className="transition-transform duration-200" />
//             )}
//           </span>
//         </div>

//         {/* Collapsible content */}
//         {isAdult
//           ? expandedAdults[index] && (
//               <div className="mt-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {/* First Name */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-600">
//                       First Name
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter first name"
//                       className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                     />
//                   </div>
//                   {/* Last Name */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-600">
//                       Last Name
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter last name"
//                       className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                     />
//                   </div>
//                 </div>

//                 {/* Date of Birth */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-600">
//                       Date of Birth
//                     </label>
//                     <input
//                       type="date"
//                       className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                     />
//                   </div>
//                 </div>
//               </div>
//             )
//           : expandedChildren[index] && (
//               <div className="mt-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {/* First Name */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-600">
//                       First Name
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter first name"
//                       className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                     />
//                   </div>
//                   {/* Last Name */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-600">
//                       Last Name
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter last name"
//                       className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                     />
//                   </div>
//                 </div>

//                 {/* Date of Birth */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-600">
//                       Date of Birth
//                     </label>
//                     <input
//                       type="date"
//                       className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                     />
//                   </div>
//                 </div>
//               </div>
//             )}
//       </div>
//     );
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
//       {/* Header */}
//       <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//         Passenger Details
//       </h2>

//       <h3>
//         Total Passengers: {Number(filters.adults) + Number(filters.children)}
//       </h3>

//       {/* Generate form fields for adults */}
//       {Array.from({ length: filters.adults }).map((_, index) =>
//         generatePassengerInfo("Adult", index, true)
//       )}

//       {/* Generate form fields for children */}
//       {Array.from({ length: filters.children }).map((_, index) =>
//         generatePassengerInfo("Child", index, false)
//       )}

//       {/* Contact Information */}
//       <div>
//         <h3 className="text-xl font-semibold text-gray-700 mb-4">
//           Contact Information
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               Email
//             </label>
//             <input
//               type="email"
//               placeholder="Enter email address"
//               className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>
//           {/* Phone Number */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               Phone Number (Optional)
//             </label>
//             <input
//               type="tel"
//               placeholder="Enter phone number"
//               className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>
//         </div>

//         {/* Continue Button */}
//         <div className="mt-8 text-center">
//           <button
//             onClick={handleContinueToSeatSelection}
//             className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200"
//           >
//             Continue to Seat Selection
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PassengerInfo;

//validation added using react hook form

// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { useParams, useNavigate } from "react-router-dom";
// import { FaArrowDown, FaArrowUp } from "react-icons/fa";
// import { useForm, Controller } from "react-hook-form";
// import * as Yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

// // Validation Schema using Yup
// const schema = Yup.object().shape({
//   passengers: Yup.array().of(
//     Yup.object().shape({
//       firstName: Yup.string().required("First Name is required"),
//       lastName: Yup.string().required("Last Name is required"),
//       dateOfBirth: Yup.date().required("Date of Birth is required"),
//     })
//   ),
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
// });

// const PassengerInfo = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const { filters } = useSelector((state) => state.flight);
//   console.log(filters);

//   // React Hook Form setup
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//     setValue,
//     trigger, // This is needed to manually trigger validation
//   } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       passengers: Array.from({ length: filters.adults + filters.children }).map(
//         () => ({
//           firstName: "",
//           lastName: "",
//           dateOfBirth: "",
//         })
//       ),
//       email: "",
//     },
//   });

//   // Handle form submission
//   const onSubmit = (data) => {
//     console.log(data); // You can send this data to your server or other processing.
//     navigate(`/seatBooking/${id}`);
//   };

//   const handleContinueToSeatSelection = async () => {
//     const isValid = await trigger(); // Manually trigger validation
//     if (isValid) {
//       // If form is valid, navigate to seat booking
//       navigate(`/seatBooking/${id}`);
//     }
//   };

//   const [expandedAdults, setExpandedAdults] = useState(
//     Array.from({ length: filters.adults }).fill(false)
//   );
//   const [expandedChildren, setExpandedChildren] = useState(
//     Array.from({ length: filters.children }).fill(false)
//   );

//   const toggleAdultExpand = (index) => {
//     setExpandedAdults((prev) => {
//       const newExpanded = [...prev];
//       newExpanded[index] = !newExpanded[index];
//       return newExpanded;
//     });
//   };

//   const toggleChildExpand = (index) => {
//     setExpandedChildren((prev) => {
//       const newExpanded = [...prev];
//       newExpanded[index] = !newExpanded[index];
//       return newExpanded;
//     });
//   };

//   const generatePassengerInfo = (type, index, isAdult) => {
//     const currentDate = new Date();
//     const currentYear = currentDate.getFullYear();
//     const minYear = currentYear - 12;
//     const minDate = `${minYear}-01-01`;
//     const maxDate = currentDate.toISOString().split("T")[0];

//     return (
//       <div key={index} className="mb-8">
//         <div
//           className="flex items-center justify-between cursor-pointer"
//           onClick={() => {
//             isAdult ? toggleAdultExpand(index) : toggleChildExpand(index);
//           }}
//         >
//           <span className="mr-2 text-xl font-semibold text-gray-700">
//             {type} {index + 1} ({type === "Adult" ? "Adult" : "Child"})
//           </span>
//           <span className="text-xl">
//             {isAdult ? (
//               expandedAdults[index] ? (
//                 <FaArrowUp />
//               ) : (
//                 <FaArrowDown />
//               )
//             ) : expandedChildren[index] ? (
//               <FaArrowUp />
//             ) : (
//               <FaArrowDown />
//             )}
//           </span>
//         </div>

//         {isAdult
//           ? expandedAdults[index] && (
//               <div className="mt-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-600">
//                       First Name <span className="text-red-500">*</span>
//                     </label>
//                     <Controller
//                       name={`passengers[${index}].firstName`}
//                       control={control}
//                       render={({ field }) => (
//                         <input
//                           {...field}
//                           type="text"
//                           placeholder="Enter first name"
//                           className={`mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
//                             errors?.passengers?.[index]?.firstName
//                               ? "border-red-500"
//                               : "border-gray-300"
//                           }`}
//                         />
//                       )}
//                     />
//                     {errors?.passengers?.[index]?.firstName && (
//                       <p className="text-red-500 text-sm mt-1">
//                         {errors?.passengers?.[index]?.firstName?.message}
//                       </p>
//                     )}
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-600">
//                       Last Name <span className="text-red-500">*</span>
//                     </label>
//                     <Controller
//                       name={`passengers[${index}].lastName`}
//                       control={control}
//                       render={({ field }) => (
//                         <input
//                           {...field}
//                           type="text"
//                           placeholder="Enter last name"
//                           className={`mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
//                             errors?.passengers?.[index]?.lastName
//                               ? "border-red-500"
//                               : "border-gray-300"
//                           }`}
//                         />
//                       )}
//                     />
//                     {errors?.passengers?.[index]?.lastName && (
//                       <p className="text-red-500 text-sm mt-1">
//                         {errors?.passengers?.[index]?.lastName?.message}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-600">
//                       Date of Birth <span className="text-red-500">*</span>
//                     </label>
//                     <Controller
//                       name={`passengers[${index}].dateOfBirth`}
//                       control={control}
//                       render={({ field }) => (
//                         <input
//                           {...field}
//                           type="date"
//                           min={minDate}
//                           max={maxDate}
//                           className={`mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
//                             errors?.passengers?.[index]?.dateOfBirth
//                               ? "border-red-500"
//                               : "border-gray-300"
//                           }`}
//                         />
//                       )}
//                     />
//                     {errors?.passengers?.[index]?.dateOfBirth && (
//                       <p className="text-red-500 text-sm mt-1">
//                         {errors?.passengers?.[index]?.dateOfBirth?.message}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             )
//           : expandedChildren[index] && (
//               <div className="mt-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-600">
//                       First Name <span className="text-red-500">*</span>
//                     </label>
//                     <Controller
//                       name={`passengers[${index}].firstName`}
//                       control={control}
//                       render={({ field }) => (
//                         <input
//                           {...field}
//                           type="text"
//                           placeholder="Enter first name"
//                           className={`mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
//                             errors?.passengers?.[index]?.firstName
//                               ? "border-red-500"
//                               : "border-gray-300"
//                           }`}
//                         />
//                       )}
//                     />
//                     {errors?.passengers?.[index]?.firstName && (
//                       <p className="text-red-500 text-sm mt-1">
//                         {errors?.passengers?.[index]?.firstName?.message}
//                       </p>
//                     )}
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-600">
//                       Last Name <span className="text-red-500">*</span>
//                     </label>
//                     <Controller
//                       name={`passengers[${index}].lastName`}
//                       control={control}
//                       render={({ field }) => (
//                         <input
//                           {...field}
//                           type="text"
//                           placeholder="Enter last name"
//                           className={`mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
//                             errors?.passengers?.[index]?.lastName
//                               ? "border-red-500"
//                               : "border-gray-300"
//                           }`}
//                         />
//                       )}
//                     />
//                     {errors?.passengers?.[index]?.lastName && (
//                       <p className="text-red-500 text-sm mt-1">
//                         {errors?.passengers?.[index]?.lastName?.message}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-600">
//                       Date of Birth <span className="text-red-500">*</span>
//                     </label>
//                     <Controller
//                       name={`passengers[${index}].dateOfBirth`}
//                       control={control}
//                       render={({ field }) => (
//                         <input
//                           {...field}
//                           type="date"
//                           min={minDate}
//                           max={maxDate}
//                           className={`mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
//                             errors?.passengers?.[index]?.dateOfBirth
//                               ? "border-red-500"
//                               : "border-gray-300"
//                           }`}
//                         />
//                       )}
//                     />
//                     {errors?.passengers?.[index]?.dateOfBirth && (
//                       <p className="text-red-500 text-sm mt-1">
//                         {errors?.passengers?.[index]?.dateOfBirth?.message}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             )}
//       </div>
//     );
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
//       <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//         Passenger Details
//       </h2>

//       <h3>
//         Total Passengers: {Number(filters.adults) + Number(filters.children)}
//       </h3>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         {/* Generate form fields for adults */}
//         {Array.from({ length: filters.adults }).map((_, index) =>
//           generatePassengerInfo("Adult", index, true)
//         )}

//         {/* Generate form fields for children */}
//         {Array.from({ length: filters.children }).map((_, index) =>
//           generatePassengerInfo("Child", index, false)
//         )}

//         {/* Email field */}
//         <div>
//           <label className="block text-sm font-medium text-gray-600">
//             Email <span className="text-red-500">*</span>
//           </label>
//           <Controller
//             name="email"
//             control={control}
//             render={({ field }) => (
//               <input
//                 {...field}
//                 type="email"
//                 placeholder="Enter email address"
//                 className={`mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
//                   errors?.email ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//             )}
//           />
//           {errors?.email && (
//             <p className="text-red-500 text-sm mt-1">
//               {errors?.email?.message}
//             </p>
//           )}
//         </div>

//         {/* Continue Button */}
//         <div className="mt-8 text-center">
//           <button
//             type="button"
//             onClick={handleContinueToSeatSelection} // Custom onClick handler to check validation
//             className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200"
//           >
//             Continue to Seat Selection
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PassengerInfo;

//with redux

// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams, useNavigate } from "react-router-dom";
// import { FaArrowDown, FaArrowUp } from "react-icons/fa";
// import { useForm, Controller } from "react-hook-form";
// import * as Yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import {
//   setPassengerDetails,
//   updatePassenger,
//   setEmail,
//   resetPassengerData,
// } from "../store/passengerReducer";

// // Validation Schema using Yup
// const schema = Yup.object().shape({
//   passengers: Yup.array().of(
//     Yup.object().shape({
//       firstName: Yup.string().required("First Name is required"),
//       lastName: Yup.string().required("Last Name is required"),
//       dateOfBirth: Yup.date().required("Date of Birth is required"),
//     })
//   ),
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
// });

// const PassengerInfo = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { filters } = useSelector((state) => state.flight); // Assuming this is coming from the flightSlice
//   const passengersInRedux = useSelector((state) => state.passenger.passengers); // Select passengers from Redux state
//   const emailInRedux = useSelector((state) => state.passenger.email); // Select email from Redux state

//   const [expandedAdults, setExpandedAdults] = useState([]);
//   const [expandedChildren, setExpandedChildren] = useState([]);

//   // React Hook Form setup
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//     setValue,
//     trigger,
//     getValues,
//     reset, // Added reset function for form reset
//   } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       passengers: Array.from({ length: filters.adults + filters.children }).map(
//         () => ({
//           firstName: "",
//           lastName: "",
//           dateOfBirth: "",
//         })
//       ),
//       email: emailInRedux || "", // If email is already in Redux, prefill
//     },
//   });

//   useEffect(() => {
//     // If passengers are available in Redux, set them to the form
//     if (passengersInRedux.length > 0) {
//       setValue("passengers", passengersInRedux);
//     }
//   }, [passengersInRedux, setValue]);

//   // Handle form submission
//   const onSubmit = (data) => {
//     // Save passenger details and email to Redux
//     dispatch(setPassengerDetails(data.passengers));
//     dispatch(setEmail(data.email));

//     // Update localStorage with passenger data and email
//     localStorage.setItem("passengers", JSON.stringify(data.passengers));
//     localStorage.setItem("email", data.email);

//     // Navigate to the seat booking page
//     navigate(`/seatBooking/${id}`);
//   };

//   const handleContinueToSeatSelection = async () => {
//     const isValid = await trigger(); // Manually trigger validation
//     if (isValid) {
//       const formData = getValues(); // Get current form data
//       dispatch(setPassengerDetails(formData.passengers)); // Save passenger details to Redux
//       dispatch(setEmail(formData.email)); // Save email to Redux

//       // Update localStorage with form data
//       localStorage.setItem("passengers", JSON.stringify(formData.passengers));
//       localStorage.setItem("email", formData.email);

//       // Navigate to the seat booking page
//       navigate(`/seatBooking/${id}`);
//     }
//   };

//   const handleReset = () => {
//     // Reset the form values and clear Redux state
//     reset(); // This will reset the form to its default state
//     dispatch(resetPassengerData()); // Reset the Redux state for passengers and email
//     localStorage.removeItem("passengers"); // Clear passenger data from localStorage
//     localStorage.removeItem("email"); // Clear email from localStorage
//   };

//   const toggleAdultExpand = (index) => {
//     setExpandedAdults((prev) => {
//       const newExpanded = [...prev];
//       newExpanded[index] = !newExpanded[index];
//       return newExpanded;
//     });
//   };

//   const toggleChildExpand = (index) => {
//     setExpandedChildren((prev) => {
//       const newExpanded = [...prev];
//       newExpanded[index] = !newExpanded[index];
//       return newExpanded;
//     });
//   };

//   const generatePassengerInfo = (type, index, isAdult) => {
//     const currentDate = new Date();
//     const currentYear = currentDate.getFullYear();
//     const minYear = currentYear - 12;
//     const minDate = `${minYear}-01-01`;
//     const maxDate = currentDate.toISOString().split("T")[0];

//     return (
//       <div key={index} className="mb-8">
//         <div
//           className="flex items-center justify-between cursor-pointer"
//           onClick={() =>
//             isAdult ? toggleAdultExpand(index) : toggleChildExpand(index)
//           }
//         >
//           <span className="mr-2 text-xl font-semibold text-gray-700">
//             {type} {index + 1} ({type === "Adult" ? "Adult" : "Child"})
//           </span>
//           <span className="text-xl">
//             {isAdult ? (
//               expandedAdults[index] ? (
//                 <FaArrowUp />
//               ) : (
//                 <FaArrowDown />
//               )
//             ) : expandedChildren[index] ? (
//               <FaArrowUp />
//             ) : (
//               <FaArrowDown />
//             )}
//           </span>
//         </div>

//         {(isAdult ? expandedAdults[index] : expandedChildren[index]) && (
//           <div className="mt-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-600">
//                   First Name <span className="text-red-500">*</span>
//                 </label>
//                 <Controller
//                   name={`passengers[${index}].firstName`}
//                   control={control}
//                   render={({ field }) => (
//                     <input
//                       {...field}
//                       type="text"
//                       placeholder="Enter first name"
//                       className={`mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
//                         errors?.passengers?.[index]?.firstName
//                           ? "border-red-500"
//                           : "border-gray-300"
//                       }`}
//                     />
//                   )}
//                 />
//                 {errors?.passengers?.[index]?.firstName && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors?.passengers?.[index]?.firstName?.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-600">
//                   Last Name <span className="text-red-500">*</span>
//                 </label>
//                 <Controller
//                   name={`passengers[${index}].lastName`}
//                   control={control}
//                   render={({ field }) => (
//                     <input
//                       {...field}
//                       type="text"
//                       placeholder="Enter last name"
//                       className={`mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
//                         errors?.passengers?.[index]?.lastName
//                           ? "border-red-500"
//                           : "border-gray-300"
//                       }`}
//                     />
//                   )}
//                 />
//                 {errors?.passengers?.[index]?.lastName && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors?.passengers?.[index]?.lastName?.message}
//                   </p>
//                 )}
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-600">
//                   Date of Birth <span className="text-red-500">*</span>
//                 </label>
//                 <Controller
//                   name={`passengers[${index}].dateOfBirth`}
//                   control={control}
//                   render={({ field }) => (
//                     <input
//                       {...field}
//                       type="date"
//                       min={minDate}
//                       max={maxDate}
//                       className={`mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
//                         errors?.passengers?.[index]?.dateOfBirth
//                           ? "border-red-500"
//                           : "border-gray-300"
//                       }`}
//                     />
//                   )}
//                 />
//                 {errors?.passengers?.[index]?.dateOfBirth && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors?.passengers?.[index]?.dateOfBirth?.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
//       <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//         Passenger Details
//       </h2>
//       <h3>Total Passengers: {filters.adults + filters.children}</h3>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         {/* Generate form fields for adults */}
//         {Array.from({ length: filters.adults }).map((_, index) =>
//           generatePassengerInfo("Adult", index, true)
//         )}

//         {/* Generate form fields for children */}
//         {Array.from({ length: filters.children }).map((_, index) =>
//           generatePassengerInfo("Child", index, false)
//         )}

//         {/* Email field */}
//         <div>
//           <label className="block text-sm font-medium text-gray-600">
//             Email <span className="text-red-500">*</span>
//           </label>
//           <Controller
//             name="email"
//             control={control}
//             render={({ field }) => (
//               <input
//                 {...field}
//                 type="email"
//                 placeholder="Enter email address"
//                 className={`mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
//                   errors?.email ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//             )}
//           />
//           {errors?.email && (
//             <p className="text-red-500 text-sm mt-1">
//               {errors?.email?.message}
//             </p>
//           )}
//         </div>

//         {/* Continue Button */}
//         <div className="mt-8 text-center">
//           <button
//             type="button"
//             onClick={handleContinueToSeatSelection} // Custom onClick handler to check validation
//             className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200"
//           >
//             Continue to Seat Selection
//           </button>
//         </div>

//         {/* Reset Button */}
//         <div className="mt-4 text-center">
//           <button
//             type="button"
//             onClick={handleReset} // Reset form and Redux data
//             className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200"
//           >
//             Reset All Passenger Data
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PassengerInfo;

//with adult nd children data fixed

// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams, useNavigate } from "react-router-dom";
// import { FaArrowDown, FaArrowUp } from "react-icons/fa";
// import { useForm, Controller } from "react-hook-form";
// import * as Yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import {
//   setPassengerDetails,
//   setEmail,
//   resetPassengerData,
// } from "../store/passengerReducer";

// // Validation Schema using Yup
// const schema = Yup.object().shape({
//   adults: Yup.array().of(
//     Yup.object().shape({
//       firstName: Yup.string().required("First Name is required"),
//       lastName: Yup.string().required("Last Name is required"),
//       dateOfBirth: Yup.date().required("Date of Birth is required"),
//     })
//   ),
//   children: Yup.array().of(
//     Yup.object().shape({
//       firstName: Yup.string().required("First Name is required"),
//       lastName: Yup.string().required("Last Name is required"),
//       dateOfBirth: Yup.date().required("Date of Birth is required"),
//     })
//   ),
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
// });

// const PassengerInfo = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { filters } = useSelector((state) => state.flight); // Assuming this is coming from the flightSlice
//   const passengersInRedux = useSelector((state) => state.passenger.passengers); // Select passengers from Redux state
//   const emailInRedux = useSelector((state) => state.passenger.email); // Select email from Redux state

//   const [expandedAdults, setExpandedAdults] = useState([]);
//   const [expandedChildren, setExpandedChildren] = useState([]);

//   // React Hook Form setup
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//     setValue,
//     trigger,
//     getValues,
//     reset, // Added reset function for form reset
//   } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       adults: Array.from({ length: filters.adults }).map(() => ({
//         firstName: "",
//         lastName: "",
//         dateOfBirth: "",
//       })),
//       children: Array.from({ length: filters.children }).map(() => ({
//         firstName: "",
//         lastName: "",
//         dateOfBirth: "",
//       })),
//       email: emailInRedux || "", // If email is already in Redux, prefill
//     },
//   });

//   useEffect(() => {
//     // If passengers are available in Redux, set them to the form
//     if (passengersInRedux.length > 0) {
//       setValue(
//         "adults",
//         passengersInRedux.filter((p) => p.isAdult)
//       );
//       setValue(
//         "children",
//         passengersInRedux.filter((p) => !p.isAdult)
//       );
//     }
//   }, [passengersInRedux, setValue]);

//   // Handle form submission
//   const onSubmit = (data) => {
//     // Save passenger details and email to Redux
//     dispatch(setPassengerDetails([...data.adults, ...data.children]));
//     dispatch(setEmail(data.email));

//     // Update localStorage with passenger data and email
//     localStorage.setItem(
//       "passengers",
//       JSON.stringify([...data.adults, ...data.children])
//     );
//     localStorage.setItem("email", data.email);

//     // Navigate to the seat booking page
//     navigate(`/seatBooking/${id}`);
//   };

//   const handleContinueToSeatSelection = async () => {
//     const isValid = await trigger(); // Manually trigger validation
//     if (isValid) {
//       const formData = getValues(); // Get current form data
//       dispatch(setPassengerDetails([...formData.adults, ...formData.children])); // Save passenger details to Redux
//       dispatch(setEmail(formData.email)); // Save email to Redux

//       // Update localStorage with form data
//       localStorage.setItem(
//         "passengers",
//         JSON.stringify([...formData.adults, ...formData.children])
//       );
//       localStorage.setItem("email", formData.email);

//       // Navigate to the seat booking page
//       navigate(`/seatBooking/${id}`);
//     }
//   };

//   const handleReset = () => {
//     // Reset the form values and clear Redux state
//     reset(); // This will reset the form to its default state
//     dispatch(resetPassengerData()); // Reset the Redux state for passengers and email
//     localStorage.removeItem("passengers"); // Clear passenger data from localStorage
//     localStorage.removeItem("email"); // Clear email from localStorage
//   };

//   const toggleAdultExpand = (index) => {
//     setExpandedAdults((prev) => {
//       const newExpanded = [...prev];
//       newExpanded[index] = !newExpanded[index];
//       return newExpanded;
//     });
//   };

//   const toggleChildExpand = (index) => {
//     setExpandedChildren((prev) => {
//       const newExpanded = [...prev];
//       newExpanded[index] = !newExpanded[index];
//       return newExpanded;
//     });
//   };

//   const generatePassengerInfo = (type, index, isAdult) => {
//     const currentDate = new Date();
//     const currentYear = currentDate.getFullYear();
//     const minYear = currentYear - 12;
//     const minDate = `${minYear}-01-01`;
//     const maxDate = currentDate.toISOString().split("T")[0];

//     return (
//       <div key={index} className="mb-8">
//         <div
//           className="flex items-center justify-between cursor-pointer"
//           onClick={() =>
//             isAdult ? toggleAdultExpand(index) : toggleChildExpand(index)
//           }
//         >
//           <span className="mr-2 text-xl font-semibold text-gray-700">
//             {type} {index + 1} ({type === "Adult" ? "Adult" : "Child"})
//           </span>
//           <span className="text-xl">
//             {isAdult ? (
//               expandedAdults[index] ? (
//                 <FaArrowUp />
//               ) : (
//                 <FaArrowDown />
//               )
//             ) : expandedChildren[index] ? (
//               <FaArrowUp />
//             ) : (
//               <FaArrowDown />
//             )}
//           </span>
//         </div>

//         {(isAdult ? expandedAdults[index] : expandedChildren[index]) && (
//           <div className="mt-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-600">
//                   First Name <span className="text-red-500">*</span>
//                 </label>
//                 <Controller
//                   name={`${
//                     isAdult ? "adults" : "children"
//                   }[${index}].firstName`}
//                   control={control}
//                   render={({ field }) => (
//                     <input
//                       {...field}
//                       type="text"
//                       placeholder="Enter first name"
//                       className={`mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
//                         errors?.[isAdult ? "adults" : "children"]?.[index]
//                           ?.firstName
//                           ? "border-red-500"
//                           : "border-gray-300"
//                       }`}
//                     />
//                   )}
//                 />
//                 {errors?.[isAdult ? "adults" : "children"]?.[index]
//                   ?.firstName && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {
//                       errors?.[isAdult ? "adults" : "children"]?.[index]
//                         ?.firstName?.message
//                     }
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-600">
//                   Last Name <span className="text-red-500">*</span>
//                 </label>
//                 <Controller
//                   name={`${isAdult ? "adults" : "children"}[${index}].lastName`}
//                   control={control}
//                   render={({ field }) => (
//                     <input
//                       {...field}
//                       type="text"
//                       placeholder="Enter last name"
//                       className={`mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
//                         errors?.[isAdult ? "adults" : "children"]?.[index]
//                           ?.lastName
//                           ? "border-red-500"
//                           : "border-gray-300"
//                       }`}
//                     />
//                   )}
//                 />
//                 {errors?.[isAdult ? "adults" : "children"]?.[index]
//                   ?.lastName && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {
//                       errors?.[isAdult ? "adults" : "children"]?.[index]
//                         ?.lastName?.message
//                     }
//                   </p>
//                 )}
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-600">
//                   Date of Birth <span className="text-red-500">*</span>
//                 </label>
//                 <Controller
//                   name={`${
//                     isAdult ? "adults" : "children"
//                   }[${index}].dateOfBirth`}
//                   control={control}
//                   render={({ field }) => (
//                     <input
//                       {...field}
//                       type="date"
//                       min={minDate}
//                       max={maxDate}
//                       className={`mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
//                         errors?.[isAdult ? "adults" : "children"]?.[index]
//                           ?.dateOfBirth
//                           ? "border-red-500"
//                           : "border-gray-300"
//                       }`}
//                     />
//                   )}
//                 />
//                 {errors?.[isAdult ? "adults" : "children"]?.[index]
//                   ?.dateOfBirth && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {
//                       errors?.[isAdult ? "adults" : "children"]?.[index]
//                         ?.dateOfBirth?.message
//                     }
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
//       <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//         Passenger Details
//       </h2>
//       <h3>
//         Total Passengers: {Number(filters.adults) + Number(filters.children)}
//       </h3>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         {/* Generate form fields for adults */}
//         {Array.from({ length: filters.adults }).map((_, index) =>
//           generatePassengerInfo("Adult", index, true)
//         )}

//         {/* Generate form fields for children */}
//         {Array.from({ length: filters.children }).map((_, index) =>
//           generatePassengerInfo("Child", index, false)
//         )}

//         {/* Email field */}
//         <div>
//           <label className="block text-sm font-medium text-gray-600">
//             Email <span className="text-red-500">*</span>
//           </label>
//           <Controller
//             name="email"
//             control={control}
//             render={({ field }) => (
//               <input
//                 {...field}
//                 type="email"
//                 placeholder="Enter email address"
//                 className={`mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
//                   errors?.email ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//             )}
//           />
//           {errors?.email && (
//             <p className="text-red-500 text-sm mt-1">
//               {errors?.email?.message}
//             </p>
//           )}
//         </div>

//         {/* Continue Button */}
//         <div className="mt-8 text-center">
//           <button
//             type="button"
//             onClick={handleContinueToSeatSelection} // Custom onClick handler to check validation
//             className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200"
//           >
//             Continue to Seat Selection
//           </button>
//         </div>

//         {/* Reset Button */}
//         <div className="mt-4 text-center">
//           <button
//             type="button"
//             onClick={handleReset} // Reset form and Redux data
//             className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200"
//           >
//             Reset All Passenger Data
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PassengerInfo;

//fixed on navigating with best ui and intial load

// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import {
//   setPassengerDetails,
//   setEmail,
//   resetPassengerData,
//   updatePassenger,
// } from "../store/passengerReducer";

// const PassengerInfo = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Get the number of adults/children and email from Redux state
//   const { adults, children, email } = useSelector((state) => state.passenger);
//   const { filters } = useSelector((state) => state.flight); // Assuming flight filter info for adults/children count

//   // Initialize form data state for adults and children
//   const [formData, setFormData] = useState({
//     adults: adults.length
//       ? adults
//       : [{ firstName: "", lastName: "", dateOfBirth: "" }],
//     children: children.length
//       ? children
//       : [{ firstName: "", lastName: "", dateOfBirth: "" }],
//     email: email || "",
//   });

//   useEffect(() => {
//     // On page load or when adults/children change, reset form to match the latest data
//     if (
//       adults.length !== formData.adults.length ||
//       children.length !== formData.children.length
//     ) {
//       setFormData({
//         adults: adults.length
//           ? adults
//           : [{ firstName: "", lastName: "", dateOfBirth: "" }],
//         children: children.length
//           ? children
//           : [{ firstName: "", lastName: "", dateOfBirth: "" }],
//         email: email || "",
//       });
//     }
//   }, [adults, children, email]); // Dependency on adults/children in Redux

//   // Handle input changes
//   const handleInputChange = (type, index, field, value) => {
//     const updatedData = { ...formData };
//     updatedData[type][index][field] = value;
//     setFormData(updatedData);

//     // Update Redux
//     dispatch(updatePassenger({ type, index, field, value }));

//     // Update localStorage
//     localStorage.setItem("adults", JSON.stringify(updatedData.adults));
//     localStorage.setItem("children", JSON.stringify(updatedData.children));
//     localStorage.setItem("email", updatedData.email);
//   };

//   // Handle form submit (continue to seat selection)
//   const handleSubmit = () => {
//     // Save passenger details and email to Redux
//     dispatch(
//       setPassengerDetails({
//         adults: formData.adults,
//         children: formData.children,
//         email: formData.email,
//       })
//     );

//     // Save to localStorage
//     localStorage.setItem("adults", JSON.stringify(formData.adults));
//     localStorage.setItem("children", JSON.stringify(formData.children));
//     localStorage.setItem("email", formData.email);

//     // Navigate to seat booking page
//     navigate(`/seatBooking`);
//   };

//   // Reset all data
//   const handleReset = () => {
//     setFormData({
//       adults: [{ firstName: "", lastName: "", dateOfBirth: "" }],
//       children: [{ firstName: "", lastName: "", dateOfBirth: "" }],
//       email: "",
//     });
//     dispatch(resetPassengerData());
//     localStorage.removeItem("adults");
//     localStorage.removeItem("children");
//     localStorage.removeItem("email");
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
//       <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//         Passenger Details
//       </h2>

//       {/* Render Adults */}
//       {formData.adults.map((adult, index) => (
//         <div key={index} className="mb-8">
//           <h3 className="text-xl">Adult {index + 1}</h3>
//           <input
//             type="text"
//             placeholder="First Name"
//             value={adult.firstName}
//             onChange={(e) =>
//               handleInputChange("adults", index, "firstName", e.target.value)
//             }
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             value={adult.lastName}
//             onChange={(e) =>
//               handleInputChange("adults", index, "lastName", e.target.value)
//             }
//           />
//           <input
//             type="date"
//             value={adult.dateOfBirth}
//             onChange={(e) =>
//               handleInputChange("adults", index, "dateOfBirth", e.target.value)
//             }
//           />
//         </div>
//       ))}

//       {/* Render Children */}
//       {formData.children.map((child, index) => (
//         <div key={index} className="mb-8">
//           <h3 className="text-xl">Child {index + 1}</h3>
//           <input
//             type="text"
//             placeholder="First Name"
//             value={child.firstName}
//             onChange={(e) =>
//               handleInputChange("children", index, "firstName", e.target.value)
//             }
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             value={child.lastName}
//             onChange={(e) =>
//               handleInputChange("children", index, "lastName", e.target.value)
//             }
//           />
//           <input
//             type="date"
//             value={child.dateOfBirth}
//             onChange={(e) =>
//               handleInputChange(
//                 "children",
//                 index,
//                 "dateOfBirth",
//                 e.target.value
//               )
//             }
//           />
//         </div>
//       ))}

//       {/* Email Input */}
//       <input
//         type="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//       />

//       {/* Submit and Reset Buttons */}
//       <div>
//         <button
//           onClick={handleSubmit}
//           className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg mt-4"
//         >
//           Continue
//         </button>

//         <button
//           onClick={handleReset}
//           className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-lg mt-4"
//         >
//           Reset All
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PassengerInfo;

//fixed ui localstorage but not second seach updated

// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import {
//   setPassengerDetails,
//   setEmail,
//   resetPassengerData,
//   updatePassenger,
// } from "../store/passengerReducer";

// const PassengerInfo = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { email } = useSelector((state) => state.passenger);
//   const { filters } = useSelector((state) => state.flight); // Assuming flight filter info for adults/children count

//   // Initialize form state
//   const [formData, setFormData] = useState({
//     adults: [],
//     children: [],
//     email: email || "",
//   });

//   useEffect(() => {
//     // Load data from localStorage if it exists on component mount
//     const storedAdults = JSON.parse(localStorage.getItem("adults")) || [];
//     const storedChildren = JSON.parse(localStorage.getItem("children")) || [];
//     const storedEmail = localStorage.getItem("email") || email;

//     if (storedAdults.length > 0 || storedChildren.length > 0 || storedEmail) {
//       // If there's data in localStorage, use it
//       setFormData({
//         adults: storedAdults,
//         children: storedChildren,
//         email: storedEmail,
//       });
//     } else {
//       // If no data in localStorage, fall back to the filters
//       setFormData({
//         adults: Array.from({ length: filters.adults }).map(() => ({
//           firstName: "",
//           lastName: "",
//           dateOfBirth: "",
//         })),
//         children: Array.from({ length: filters.children }).map(() => ({
//           firstName: "",
//           lastName: "",
//           dateOfBirth: "",
//         })),
//         email: email || "",
//       });
//     }
//   }, [filters, email]); // Dependency on filters and email

//   // Handle input changes
//   const handleInputChange = (type, index, field, value) => {
//     const updatedData = { ...formData };
//     updatedData[type][index][field] = value;
//     setFormData(updatedData);

//     // Update Redux
//     dispatch(updatePassenger({ type, index, field, value }));

//     // Update localStorage
//     localStorage.setItem("adults", JSON.stringify(updatedData.adults));
//     localStorage.setItem("children", JSON.stringify(updatedData.children));
//     localStorage.setItem("email", updatedData.email);
//   };

//   // Handle form submit (continue to seat selection)
//   const handleSubmit = () => {
//     // Save passenger details and email to Redux
//     dispatch(
//       setPassengerDetails({
//         adults: formData.adults,
//         children: formData.children,
//         email: formData.email,
//       })
//     );

//     // Save to localStorage
//     localStorage.setItem("adults", JSON.stringify(formData.adults));
//     localStorage.setItem("children", JSON.stringify(formData.children));
//     localStorage.setItem("email", formData.email);

//     // Navigate to seat booking page
//     navigate(`/seatBooking`);
//   };

//   // Reset all data
//   const handleReset = () => {
//     setFormData({
//       adults: Array.from({ length: filters.adults }).map(() => ({
//         firstName: "",
//         lastName: "",
//         dateOfBirth: "",
//       })),
//       children: Array.from({ length: filters.children }).map(() => ({
//         firstName: "",
//         lastName: "",
//         dateOfBirth: "",
//       })),
//       email: "",
//     });
//     dispatch(resetPassengerData());
//     localStorage.removeItem("adults");
//     localStorage.removeItem("children");
//     localStorage.removeItem("email");
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
//       <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//         Passenger Details
//       </h2>

//       {/* Render Adults */}
//       {formData.adults.map((adult, index) => (
//         <div key={index} className="mb-8">
//           <h3 className="text-xl">Adult {index + 1}</h3>
//           <input
//             type="text"
//             placeholder="First Name"
//             value={adult.firstName}
//             onChange={(e) =>
//               handleInputChange("adults", index, "firstName", e.target.value)
//             }
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             value={adult.lastName}
//             onChange={(e) =>
//               handleInputChange("adults", index, "lastName", e.target.value)
//             }
//           />
//           <input
//             type="date"
//             value={adult.dateOfBirth}
//             onChange={(e) =>
//               handleInputChange("adults", index, "dateOfBirth", e.target.value)
//             }
//           />
//         </div>
//       ))}

//       {/* Render Children */}
//       {formData.children.map((child, index) => (
//         <div key={index} className="mb-8">
//           <h3 className="text-xl">Child {index + 1}</h3>
//           <input
//             type="text"
//             placeholder="First Name"
//             value={child.firstName}
//             onChange={(e) =>
//               handleInputChange("children", index, "firstName", e.target.value)
//             }
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             value={child.lastName}
//             onChange={(e) =>
//               handleInputChange("children", index, "lastName", e.target.value)
//             }
//           />
//           <input
//             type="date"
//             value={child.dateOfBirth}
//             onChange={(e) =>
//               handleInputChange(
//                 "children",
//                 index,
//                 "dateOfBirth",
//                 e.target.value
//               )
//             }
//           />
//         </div>
//       ))}

//       {/* Email Input */}
//       <input
//         type="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//       />

//       {/* Submit and Reset Buttons */}
//       <div>
//         <button
//           onClick={handleSubmit}
//           className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg mt-4"
//         >
//           Continue
//         </button>

//         <button
//           onClick={handleReset}
//           className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-lg mt-4"
//         >
//           Reset All
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PassengerInfo;

//localstorage working best best ui nd funcnality

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import {
//   resetPassengerData,
//   setPassengerDetails,
//   updatePassenger,
// } from "../store/passengerReducer";

// const PassengerInfo = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { email } = useSelector((state) => state.passenger);
//   const { filters } = useSelector((state) => state.flight); // Assuming flight filter info for adults/children count

//   // Initialize form state
//   const [formData, setFormData] = useState({
//     adults: [],
//     children: [],
//     email: email || "",
//   });

//   useEffect(() => {
//     // Load data from localStorage if it exists on component mount
//     const filtersfromlocal =
//       JSON.parse(localStorage.getItem("persist:root")) || {};

//     const storedAdults = JSON.parse(localStorage.getItem("adults")) || [];
//     const storedChildren = JSON.parse(localStorage.getItem("children")) || [];
//     const storedEmail = localStorage.getItem("email") || email;

//     if (storedAdults.length > 0 || storedChildren.length > 0 || storedEmail) {
//       // If there's data in localStorage, use it
//       setFormData({
//         adults: storedAdults,
//         children: storedChildren,
//         email: storedEmail,
//       });
//     } else {
//       // If no data in localStorage, fall back to the filters
//       setFormData({
//         adults: Array.from({ length: filters.adults }).map(() => ({
//           firstName: "",
//           lastName: "",
//           dateOfBirth: "",
//         })),
//         children: Array.from({ length: filters.children }).map(() => ({
//           firstName: "",
//           lastName: "",
//           dateOfBirth: "",
//         })),
//         email: email || "",
//       });
//     }
//   }, [filters, email]); // Dependency on filters and email

//   // Handle input changes
//   const handleInputChange = (type, index, field, value) => {
//     const updatedData = { ...formData };
//     updatedData[type][index][field] = value;
//     setFormData(updatedData);

//     // Update Redux
//     dispatch(updatePassenger({ type, index, field, value }));

//     // Clear previous localStorage and update with new values
//     localStorage.removeItem("adults");
//     localStorage.removeItem("children");
//     localStorage.removeItem("email");

//     // Save updated data to localStorage
//     localStorage.setItem("adults", JSON.stringify(updatedData.adults));
//     localStorage.setItem("children", JSON.stringify(updatedData.children));
//     localStorage.setItem("email", updatedData.email);
//   };

//   // Handle form submit (continue to seat selection)
//   const handleSubmit = () => {
//     // Save passenger details and email to Redux
//     dispatch(
//       setPassengerDetails({
//         adults: formData.adults,
//         children: formData.children,
//         email: formData.email,
//       })
//     );

//     // Save to localStorage
//     localStorage.setItem("adults", JSON.stringify(formData.adults));
//     localStorage.setItem("children", JSON.stringify(formData.children));
//     localStorage.setItem("email", formData.email);

//     // Navigate to seat booking page
//     navigate(`/seatBooking`);
//   };

//   // Reset all data
//   const handleReset = () => {
//     setFormData({
//       adults: Array.from({ length: filters.adults }).map(() => ({
//         firstName: "",
//         lastName: "",
//         dateOfBirth: "",
//       })),
//       children: Array.from({ length: filters.children }).map(() => ({
//         firstName: "",
//         lastName: "",
//         dateOfBirth: "",
//       })),
//       email: "",
//     });
//     dispatch(resetPassengerData());
//     localStorage.removeItem("adults");
//     localStorage.removeItem("children");
//     localStorage.removeItem("email");
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
//       <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//         Passenger Details
//       </h2>

//       {/* Render Adults */}
//       {formData.adults.map((adult, index) => (
//         <div key={index} className="mb-8">
//           <h3 className="text-xl">Adult {index + 1}</h3>
//           <input
//             type="text"
//             placeholder="First Name"
//             value={adult.firstName}
//             onChange={(e) =>
//               handleInputChange("adults", index, "firstName", e.target.value)
//             }
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             value={adult.lastName}
//             onChange={(e) =>
//               handleInputChange("adults", index, "lastName", e.target.value)
//             }
//           />
//           <input
//             type="date"
//             value={adult.dateOfBirth}
//             onChange={(e) =>
//               handleInputChange("adults", index, "dateOfBirth", e.target.value)
//             }
//           />
//         </div>
//       ))}

//       {/* Render Children */}
//       {formData.children.map((child, index) => (
//         <div key={index} className="mb-8">
//           <h3 className="text-xl">Child {index + 1}</h3>
//           <input
//             type="text"
//             placeholder="First Name"
//             value={child.firstName}
//             onChange={(e) =>
//               handleInputChange("children", index, "firstName", e.target.value)
//             }
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             value={child.lastName}
//             onChange={(e) =>
//               handleInputChange("children", index, "lastName", e.target.value)
//             }
//           />
//           <input
//             type="date"
//             value={child.dateOfBirth}
//             onChange={(e) =>
//               handleInputChange(
//                 "children",
//                 index,
//                 "dateOfBirth",
//                 e.target.value
//               )
//             }
//           />
//         </div>
//       ))}

//       {/* Email Input */}
//       <input
//         type="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//       />

//       {/* Submit and Reset Buttons */}
//       <div>
//         <button
//           onClick={handleSubmit}
//           className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg mt-4"
//         >
//           Continue
//         </button>

//         <button
//           onClick={handleReset}
//           className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-lg mt-4"
//         >
//           Reset All
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PassengerInfo;

//from persist root not working

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import {
//   resetPassengerData,
//   setPassengerDetails,
//   updatePassenger,
// } from "../store/passengerReducer";

// const PassengerInfo = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { email } = useSelector((state) => state.passenger);
//   const { filters } = useSelector((state) => state.flight); // Assuming flight filter info for adults/children count

//   // Initialize form state
//   const [formData, setFormData] = useState({
//     adults: [],
//     children: [],
//     email: email || "",
//   });

//   // Add loading state to prevent empty form render before data is loaded
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const filtersfromlocal =
//       JSON.parse(localStorage.getItem("persist:root")) || {};

//     const storedAdults = JSON.parse(localStorage.getItem("adults")) || [];
//     const storedChildren = JSON.parse(localStorage.getItem("children")) || [];
//     const storedEmail = localStorage.getItem("email") || email;

//     if (storedAdults.length > 0 || storedChildren.length > 0 || storedEmail) {
//       // If there's data in localStorage, use it
//       setFormData({
//         adults: storedAdults,
//         children: storedChildren,
//         email: storedEmail,
//       });
//     } else {
//       // If no data in localStorage, fall back to the filters
//       setFormData({
//         adults: Array.from({ length: filters.adults }).map(() => ({
//           firstName: "",
//           lastName: "",
//           dateOfBirth: "",
//         })),
//         children: Array.from({ length: filters.children }).map(() => ({
//           firstName: "",
//           lastName: "",
//           dateOfBirth: "",
//         })),
//         email: email || "",
//       });
//     }

//     setIsLoading(false); // Set loading to false after formData is updated
//   }, [filters, email]);

//   if (isLoading) {
//     return <div>Loading...</div>; // You can show a loading spinner here
//   }

//   // Handle input changes
//   const handleInputChange = (type, index, field, value) => {
//     const updatedData = { ...formData };
//     updatedData[type][index][field] = value;
//     setFormData(updatedData);

//     // Update Redux
//     dispatch(updatePassenger({ type, index, field, value }));

//     // // Clear previous localStorage and update with new values
//     // localStorage.removeItem("adults");
//     // localStorage.removeItem("children");
//     // localStorage.removeItem("email");

//     // // Save updated data to localStorage
//     // localStorage.setItem("adults", JSON.stringify(updatedData.adults));
//     // localStorage.setItem("children", JSON.stringify(updatedData.children));
//     // localStorage.setItem("email", updatedData.email);
//   };

//   // Handle form submit (continue to seat selection)
//   const handleSubmit = () => {
//     // Save passenger details and email to Redux
//     dispatch(
//       setPassengerDetails({
//         adults: formData.adults,
//         children: formData.children,
//         email: formData.email,
//       })
//     );

//     // // Save to localStorage
//     // localStorage.setItem("adults", JSON.stringify(formData.adults));
//     // localStorage.setItem("children", JSON.stringify(formData.children));
//     // localStorage.setItem("email", formData.email);

//     // Navigate to seat booking page
//     navigate(`/seatBooking`);
//   };

//   // Reset all data
//   const handleReset = () => {
//     setFormData({
//       adults: Array.from({ length: filters.adults }).map(() => ({
//         firstName: "",
//         lastName: "",
//         dateOfBirth: "",
//       })),
//       children: Array.from({ length: filters.children }).map(() => ({
//         firstName: "",
//         lastName: "",
//         dateOfBirth: "",
//       })),
//       email: "",
//     });
//     dispatch(resetPassengerData());
//     localStorage.removeItem("adults");
//     localStorage.removeItem("children");
//     localStorage.removeItem("email");
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
//       <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//         Passenger Details
//       </h2>

//       {/* Render Adults */}
//       {formData.adults.map((adult, index) => (
//         <div key={index} className="mb-8">
//           <h3 className="text-xl">Adult {index + 1}</h3>
//           <input
//             type="text"
//             placeholder="First Name"
//             value={adult.firstName}
//             onChange={(e) =>
//               handleInputChange("adults", index, "firstName", e.target.value)
//             }
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             value={adult.lastName}
//             onChange={(e) =>
//               handleInputChange("adults", index, "lastName", e.target.value)
//             }
//           />
//           <input
//             type="date"
//             value={adult.dateOfBirth}
//             onChange={(e) =>
//               handleInputChange("adults", index, "dateOfBirth", e.target.value)
//             }
//           />
//         </div>
//       ))}

//       {/* Render Children */}
//       {formData.children.map((child, index) => (
//         <div key={index} className="mb-8">
//           <h3 className="text-xl">Child {index + 1}</h3>
//           <input
//             type="text"
//             placeholder="First Name"
//             value={child.firstName}
//             onChange={(e) =>
//               handleInputChange("children", index, "firstName", e.target.value)
//             }
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             value={child.lastName}
//             onChange={(e) =>
//               handleInputChange("children", index, "lastName", e.target.value)
//             }
//           />
//           <input
//             type="date"
//             value={child.dateOfBirth}
//             onChange={(e) =>
//               handleInputChange(
//                 "children",
//                 index,
//                 "dateOfBirth",
//                 e.target.value
//               )
//             }
//           />
//         </div>
//       ))}

//       {/* Email Input */}
//       <input
//         type="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//       />

//       {/* Submit and Reset Buttons */}
//       <div>
//         <button
//           onClick={handleSubmit}
//           className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg mt-4"
//         >
//           Continue
//         </button>

//         <button
//           onClick={handleReset}
//           className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-lg mt-4"
//         >
//           Reset All
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PassengerInfo;

//best from persist root

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import {
//   resetPassengerData,
//   setPassengerDetails,
//   updatePassenger,
// } from "../store/passengerReducer";

// const PassengerInfo = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { id } = useParams();

//   const { email } = useSelector((state) => state.passenger);
//   const { filters } = useSelector((state) => state.flight); // Assuming flight filter info for adults/children count

//   // Initialize form state
//   const [formData, setFormData] = useState({
//     adults: [],
//     children: [],
//     email: email || "",
//   });

//   // Add loading state to prevent empty form render before data is loaded
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Parse the persisted data from localStorage
//     const persistedData =
//       JSON.parse(localStorage.getItem("persist:root")) || {};

//     // Get the adults, children, and email from the persisted data
//     const storedAdults = persistedData.adults
//       ? JSON.parse(persistedData.adults)
//       : [];
//     const storedChildren = persistedData.children
//       ? JSON.parse(persistedData.children)
//       : [];
//     const storedEmail = persistedData.email
//       ? JSON.parse(persistedData.email)
//       : email;

//     if (storedAdults.length > 0 || storedChildren.length > 0 || storedEmail) {
//       // If there's data in localStorage, use it
//       setFormData({
//         adults: storedAdults,
//         children: storedChildren,
//         email: storedEmail,
//       });
//     } else {
//       // If no data in localStorage, fall back to the filters
//       setFormData({
//         adults: Array.from({ length: filters.adults }).map(() => ({
//           firstName: "",
//           lastName: "",
//           dateOfBirth: "",
//         })),
//         children: Array.from({ length: filters.children }).map(() => ({
//           firstName: "",
//           lastName: "",
//           dateOfBirth: "",
//         })),
//         email: email || "",
//       });
//     }

//     setIsLoading(false); // Set loading to false after formData is updated
//   }, [filters, email]);

//   if (isLoading) {
//     return <div>Loading...</div>; // You can show a loading spinner here
//   }

//   // Handle input changes
//   const handleInputChange = (type, index, field, value) => {
//     const updatedData = { ...formData };
//     updatedData[type][index][field] = value;
//     setFormData(updatedData);

//     // Update Redux
//     dispatch(updatePassenger({ type, index, field, value }));

//     // Save updated data to localStorage
//     localStorage.setItem(
//       "persist:root",
//       JSON.stringify({
//         ...JSON.parse(localStorage.getItem("persist:root") || "{}"),
//         adults: JSON.stringify(updatedData.adults),
//         children: JSON.stringify(updatedData.children),
//         email: JSON.stringify(updatedData.email),
//       })
//     );
//   };

//   // Handle form submit (continue to seat selection)
//   const handleSubmit = () => {
//     // Save passenger details and email to Redux
//     dispatch(
//       setPassengerDetails({
//         adults: formData.adults,
//         children: formData.children,
//         email: formData.email,
//       })
//     );

//     // Navigate to seat booking page
//     navigate(`/seatBooking/${id}`);
//   };

//   // Reset all data
//   const handleReset = () => {
//     setFormData({
//       adults: Array.from({ length: filters.adults }).map(() => ({
//         firstName: "",
//         lastName: "",
//         dateOfBirth: "",
//       })),
//       children: Array.from({ length: filters.children }).map(() => ({
//         firstName: "",
//         lastName: "",
//         dateOfBirth: "",
//       })),
//       email: "",
//     });
//     dispatch(resetPassengerData());
//     localStorage.removeItem("adults");
//     localStorage.removeItem("children");
//     localStorage.removeItem("email");
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
//       <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//         Passenger Details
//       </h2>

//       {/* Render Adults */}
//       {formData.adults.map((adult, index) => (
//         <div key={index} className="mb-8">
//           <h3 className="text-xl">Adult {index + 1}</h3>
//           <input
//             type="text"
//             placeholder="First Name"
//             value={adult.firstName}
//             onChange={(e) =>
//               handleInputChange("adults", index, "firstName", e.target.value)
//             }
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             value={adult.lastName}
//             onChange={(e) =>
//               handleInputChange("adults", index, "lastName", e.target.value)
//             }
//           />
//           <input
//             type="date"
//             value={adult.dateOfBirth}
//             onChange={(e) =>
//               handleInputChange("adults", index, "dateOfBirth", e.target.value)
//             }
//           />
//         </div>
//       ))}

//       {/* Render Children */}
//       {formData.children.map((child, index) => (
//         <div key={index} className="mb-8">
//           <h3 className="text-xl">Child {index + 1}</h3>
//           <input
//             type="text"
//             placeholder="First Name"
//             value={child.firstName}
//             onChange={(e) =>
//               handleInputChange("children", index, "firstName", e.target.value)
//             }
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             value={child.lastName}
//             onChange={(e) =>
//               handleInputChange("children", index, "lastName", e.target.value)
//             }
//           />
//           <input
//             type="date"
//             value={child.dateOfBirth}
//             onChange={(e) =>
//               handleInputChange(
//                 "children",
//                 index,
//                 "dateOfBirth",
//                 e.target.value
//               )
//             }
//           />
//         </div>
//       ))}

//       {/* Email Input */}
//       <input
//         type="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={(e) => {
//           setFormData({ ...formData, email: e.target.value });
//           // Save updated email to localStorage
//           localStorage.setItem(
//             "persist:root",
//             JSON.stringify({
//               ...JSON.parse(localStorage.getItem("persist:root") || "{}"),
//               email: JSON.stringify(e.target.value),
//             })
//           );
//         }}
//       />

//       {/* Submit and Reset Buttons */}
//       <div>
//         <button
//           onClick={handleSubmit}
//           className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg mt-4"
//         >
//           Continue
//         </button>

//         <button
//           onClick={handleReset}
//           className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-lg mt-4"
//         >
//           Reset All
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PassengerInfo;
