// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { lazy } from "react";
// const Search = lazy(() => import("./components/Search"));
// const FlightResult = lazy(() => import("./components/FlightResult"));
// const FlightDetails = lazy(() => import("./components/FlightDetails"));
// const SeatBooking = lazy(() => import("./components/seatBooking"));

// import "react-toastify/dist/ReactToastify.css"; // Make sure to import the CSS
// import { ToastContainer } from "react-toastify";

// const App = () => {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-100">
//         <Routes>
//           <Route path="/" element={<Search />} />
//           <Route path="/flights" element={<FlightResult />} />
//           <Route path="/flights" element={<FlightResult />} />
//           <Route path="/flightDetails/:id" element={<FlightDetails />} />
//           <Route path="/seatBooking/:id" element={<SeatBooking />} />
//           {/* New Route */}
//         </Routes>
//         <ToastContainer
//           position="top-right"
//           autoClose={1000}
//           closeButton={false}
//         />
//       </div>
//     </Router>
//   );
// };

// export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { lazy } from "react";
// import Navbar from "./components/Navbar"; // Import the Navbar component

// const Search = lazy(() => import("./components/Search"));
// const FlightResult = lazy(() => import("./components/FlightResult"));
// const FlightDetails = lazy(() => import("./components/FlightDetails"));
// const SeatBooking = lazy(() => import("./components/SeatBooking"));
// const Home = lazy(() => import("./components/Home"));
// const SignIn = lazy(() => import("./components/SignIn"));
// const PassengerInfo = lazy(() => import("./components/PassengerInfo"));

// import "react-toastify/dist/ReactToastify.css"; // Make sure to import the CSS
// import { ToastContainer } from "react-toastify";

// const App = () => {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-100">
//         <Navbar />

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/signin" element={<SignIn />} />
//           <Route path="/flightSearch" element={<Search />} />
//           <Route path="/flights" element={<FlightResult />} />
//           <Route path="/flightDetails/:id" element={<FlightDetails />} />
//           <Route path="/passenger/:id" element={<PassengerInfo />} />
//           <Route path="/seatBooking/:id" element={<SeatBooking />} />
//         </Routes>

//         <ToastContainer
//           position="top-right"
//           autoClose={1000}
//           closeButton={false}
//         />
//       </div>
//     </Router>
//   );
// };

// export default App;

//using redux persist

import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import the Navbar component

const Search = lazy(() => import("./components/Search"));
const FlightResult = lazy(() => import("./components/FlightResult"));
const FlightDetails = lazy(() => import("./components/FlightDetails"));
const SeatBooking = lazy(() => import("./components/SeatBooking"));
const Home = lazy(() => import("./components/Home"));
const SignIn = lazy(() => import("./components/SignIn"));
const PassengerInfo = lazy(() => import("./components/PassengerInfo"));

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Make sure to import the CSS
import Loader from "./components/Loader";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />

        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/flightSearch" element={<Search />} />
            <Route path="/flights" element={<FlightResult />} />
            <Route path="/flightDetails/:id" element={<FlightDetails />} />
            <Route path="/passenger/:id" element={<PassengerInfo />} />
            <Route path="/seatBooking/:id" element={<SeatBooking />} />
          </Routes>
        </Suspense>

        <ToastContainer
          position="top-right"
          autoClose={1000}
          closeButton={false}
        />
      </div>
    </Router>
  );
};

export default App;
