// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { setUser } from "../store/authReducer"; // Redux action to clear user data
// import { FaSignOutAlt } from "react-icons/fa"; // Sign out icon
// import { useRegisterMutation } from "../store/authSlice";

// const Navbar = () => {
//   const dispatch = useDispatch();

//   const { data } = useRegisterMutation();

//   const handleSignOut = () => {
//     // Clear user data from Redux and remove token from localStorage
//     localStorage.removeItem("token");
//     dispatch(setUser(null)); // Reset the user state in Redux
//   };

//   return (
//     <nav className="bg-blue-600 text-white shadow-md p-4">
//       <div className="max-w-screen-xl mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-2xl font-bold">
//           <Link to="/" className="hover:text-gray-300">
//             Tourista
//           </Link>
//         </div>

//         {/* Menu Items */}
//         <div className="space-x-6 flex items-center">
//           <Link to="/flightSearch" className="hover:text-gray-300">
//             Flights
//           </Link>
//           <Link to="/hotels" className="hover:text-gray-300">
//             Hotels
//           </Link>
//           <Link to="/about" className="hover:text-gray-300">
//             About Us
//           </Link>

//           <div className="flex items-center space-x-4">
//             <img
//               src={user.photo || "default-profile-pic-url"} // Fallback if no photo
//               alt="User"
//               className="w-8 h-8 rounded-full"
//             />
//             <div className="text-sm">
//               <div>{user.name}</div>
//               <div>{user.email}</div>
//             </div>
//             <button
//               onClick={handleSignOut}
//               className="bg-red-500 text-white p-2 rounded-lg flex items-center"
//             >
//               <FaSignOutAlt className="mr-2" />
//               Sign Out
//             </button>
//           </div>
//           <Link to="/signin" className="hover:text-gray-300">
//             Sign In
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { FaSignOutAlt } from "react-icons/fa"; // Sign out icon
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../store/authReducer"; // Redux action to clear user data
// import { persistor } from "../store/store";

const Navbar = () => {
  const dispatch = useDispatch();

  // Use useSelector to get the user data from Redux store
  const user = useSelector((state) => state.auth.user);

  const handleSignOut = () => {
    dispatch(logOut()); // Clears the user from Redux
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    // persistor.purge(); // Clears RTK Query cache from localStorage
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-300">
            Tourista
          </Link>
        </div>

        {/* Menu Items */}
        <div className="space-x-6 flex items-center">
          <Link to="/flightSearch" className="hover:text-gray-300">
            Flights
          </Link>
          <Link to="/hotels" className="hover:text-gray-300">
            Hotels
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About Us
          </Link>

          {/* Show user info or Sign In link */}
          {user ? (
            <div className="flex items-center space-x-4">
              <img
                src={user.photoURL || "default-profile-pic-url"} // Fallback if no photo
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <div className="text-sm">
                <div>{user.displayName}</div>
                <div>{user.email}</div>
              </div>
              <button
                onClick={handleSignOut}
                className="bg-red-500 text-white p-2 rounded-lg flex items-center"
              >
                <FaSignOutAlt className="mr-2" />
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="/signin" className="hover:text-gray-300">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
