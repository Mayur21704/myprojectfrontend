// // import { useNavigate } from "react-router-dom";
// // import { useDispatch } from "react-redux";
// // import { setUser } from "../store/authReducer.js"; // Redux action to store user data
// // import { useRegisterMutation } from "../store/authSlice.js"; // RTK Query hook for registration
// // import { FaGoogle } from "react-icons/fa"; // Google Icon
// // import { signInWithPopup } from "firebase/auth";
// // import { auth, provider } from "../utils/firebase.js";

// // const SignIn = () => {
// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();
// //   const [register, { isLoading, error }] = useRegisterMutation(); // RTK Query hook for registration

// //   const handleGoogleSignIn = async () => {
// //     try {
// //       // Simulating Google sign-in process
// //       // Normally, you'll use Firebase or another provider for Google authentication
// //       const result = await signInWithPopup(auth, provider);

// //       const uid = result.user.uid;
// //       const name = result.displayName;
// //       const email = result.user.email;
// //       const photo = result.photoURL;
// //       console.log(uid);
// //       console.log(name);
// //       console.log(email);
// //       console.log(photo);

// //       // Call the register mutation for the backend
// //       const { data } = await register({ uid, email });
// //       console.log(data);

// //       if (data) {
// //         // Store the token in localStorage
// //         localStorage.setItem("token", data.token);

// //         // Dispatch to Redux
// //         dispatch(
// //           setUser({
// //             user: { uid, email, name, photo },
// //             token: data.token,
// //           })
// //         );

// //         // Navigate to the homepage or dashboard
// //         navigate("/");
// //       }
// //     } catch (err) {
// //       console.error(err);
// //       alert("Error during Google sign-in: " + err.message);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 p-8">
// //       <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
// //         <h2 className="text-3xl font-bold text-center mb-4">Sign In</h2>

// //         <form>
// //           {/* Email Input */}
// //           <div className="mb-4">
// //             <label
// //               htmlFor="email"
// //               className="block text-sm font-medium text-gray-700"
// //             >
// //               Email Address
// //             </label>
// //             <input
// //               type="email"
// //               id="email"
// //               className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// //               required
// //             />
// //           </div>

// //           {/* Password Input */}
// //           <div className="mb-4">
// //             <label
// //               htmlFor="password"
// //               className="block text-sm font-medium text-gray-700"
// //             >
// //               Password
// //             </label>
// //             <input
// //               type="password"
// //               id="password"
// //               className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// //               required
// //             />
// //           </div>

// //           {/* Sign In Button */}
// //           <button
// //             type="submit"
// //             className="w-full p-3 mt-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
// //           >
// //             Sign In
// //           </button>
// //         </form>

// //         {/* Google Sign-In Button */}
// //         <button
// //           onClick={handleGoogleSignIn}
// //           className="w-full mt-4 p-3 flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100 transition duration-200"
// //         >
// //           <FaGoogle className="mr-2 text-xl text-red-500" />
// //           <span className="text-sm text-gray-700">Sign in with Google</span>
// //         </button>

// //         {/* Show error if any */}
// //         {error && <p className="text-red-500 text-sm mt-4">{error.message}</p>}

// //         {/* Toggle between Login and Register */}
// //         <div className="flex justify-center items-center text-sm text-gray-500 mt-4">
// //           <p>Don't have an account?</p>
// //           <button
// //             onClick={() => alert("Switch to Register")}
// //             className="text-blue-500 ml-1 font-medium"
// //           >
// //             Register
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SignIn;

// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setUser } from "../store/authReducer"; // Redux action to store user data
// import { useRegisterMutation } from "../store/slices/authSlice"; // RTK Query hook for registration
// import { FaGoogle } from "react-icons/fa"; // Google Icon
// import { signInWithPopup } from "firebase/auth";
// import { auth, provider } from "../utils/firebase"; // Firebase configuration

// const SignIn = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [register, { isLoading, error }] = useRegisterMutation(); // RTK Query hook for registration

//   // Handle Google Sign-In
//   const handleGoogleSignIn = async () => {
//     try {
//       // Firebase Google Sign-In
//       const result = await signInWithPopup(auth, provider);

//       // Extract user details
//       const { uid, displayName, email, photoURL } = result.user;

//       // Call the register mutation to create a new user on the backend
//       const { data } = await register({ uid, email, displayName, photoURL });

//       if (data) {
//         // Store token in localStorage
//         localStorage.setItem(
//           "user",
//           JSON.stringify({ uid, displayName, email, photoURL })
//         );
//         localStorage.setItem("token", data.token);

//         // Dispatch user data to Redux
//         dispatch(
//           setUser({
//             user: data.user,
//             token: data.token,
//           })
//         );

//         // Navigate to the homepage or dashboard after successful login
//         navigate("/");
//       }
//     } catch (err) {
//       console.error("Error during Google sign-in: ", err);
//       alert("Error during Google sign-in: " + err.message);
//     }
//   };

//   // Handle form submission (if you want to use email and password)
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission for email and password login here.
//     alert("Form submitted!");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
//         <h2 className="text-3xl font-bold text-center mb-4">Sign In</h2>

//         {/* Sign-in Form */}
//         <form onSubmit={handleFormSubmit}>
//           {/* Email Input */}
//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Password Input */}
//           <div className="mb-4">
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Sign In Button */}
//           <button
//             type="submit"
//             className="w-full p-3 mt-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
//             disabled={isLoading}
//           >
//             {isLoading ? "Signing In..." : "Sign In"}
//           </button>
//         </form>

//         {/* Google Sign-In Button */}
//         <button
//           onClick={handleGoogleSignIn}
//           className="w-full mt-4 p-3 flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100 transition duration-200"
//         >
//           <FaGoogle className="mr-2 text-xl text-red-500" />
//           <span className="text-sm text-gray-700">Sign in with Google</span>
//         </button>

//         {/* Show error message if any */}
//         {error && <p className="text-red-500 text-sm mt-4">{error.message}</p>}

//         {/* Toggle between Login and Register */}
//         <div className="flex justify-center items-center text-sm text-gray-500 mt-4">
//           <p>Don't have an account?</p>
//           <button
//             onClick={() => alert("Switch to Register")}
//             className="text-blue-500 ml-1 font-medium"
//           >
//             Register
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
  
// export default SignIn;














import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/authReducer";
import { useRegisterMutation } from "../store/slices/authSlice";
import { FaGoogle } from "react-icons/fa";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../utils/firebase";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [register, { isLoading, error }] = useRegisterMutation();

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const { uid, displayName, email, photoURL } = result.user;

      const { data } = await register({ uid, email, displayName, photoURL });

      if (data) {
        localStorage.setItem(
          "user",
          JSON.stringify({ uid, displayName, email, photoURL })
        );
        localStorage.setItem("token", data.token);

        dispatch(setUser({ user: data.user, token: data.token }));

        navigate("/");
      }
    } catch (err) {
      console.error("Error during Google sign-in: ", err);
      alert("Error during Google sign-in: " + err.message);
    }
  };

  // Handle form submission for email/password
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const { uid, displayName, email: userEmail, photoURL } = result.user;

      const { data } = await register({
        uid,
        email: userEmail,
        displayName,
        photoURL,
      });

      if (data) {
        localStorage.setItem(
          "user",
          JSON.stringify({ uid, displayName, userEmail, photoURL })
        );
        localStorage.setItem("token", data.token);

        dispatch(setUser({ user: data.user, token: data.token }));

        navigate("/");
      }
    } catch (err) {
      console.error("Error during sign-in: ", err);
      alert("Error during sign-in: " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-4">Sign In</h2>

        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 mt-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="w-full mt-4 p-3 flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100 transition duration-200"
        >
          <FaGoogle className="mr-2 text-xl text-red-500" />
          <span className="text-sm text-gray-700">Sign in with Google</span>
        </button>

        {error && <p className="text-red-500 text-sm mt-4">{error.message}</p>}

        <div className="flex justify-center items-center text-sm text-gray-500 mt-4">
          <p>Don't have an account?</p>
          <button
            onClick={() => alert("Switch to Register")}
            className="text-blue-500 ml-1 font-medium"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
