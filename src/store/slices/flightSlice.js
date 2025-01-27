// // src/features/flightApi.js
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { airlines } from "../airline";

// export const flightApi = createApi({
//   reducerPath: "flightApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }), // This is your backend API base URL
//   endpoints: (builder) => ({
//     getSignleFlights: builder.query({
//       query: (params) => {
//         return `flightOffers?originLocationCode=${params.origin}&destinationLocationCode=${params.destination}&departureDate=${params.date}&adults=1`;
//       },
//       transformResponse: (response) => {
//         const flightsWithAirlines = response.data.map((flight) => {
//           // Randomly pick an airline from the list
//           const randomAirline =
//             airlines[Math.floor(Math.random() * airlines.length)];

//           return {
//             ...flight,
//             airlineName: randomAirline.name,
//             airlineLogo: randomAirline.logo,
//           };
//         });

//         return { ...response, data: flightsWithAirlines };
//       },
//     }),
//     getRoundFlights: builder.query({
//       query: (params) => {
//         return `flightOffers?originLocationCode=${params.origin}&destinationLocationCode=${params.destination}&departureDate=${params.date}&returnDate=${params.returnDate}&adults=1`;
//       },
//     }),
//   }),
// });

// export const { useLazyGetSignleFlightsQuery, useLazyGetRoundFlightsQuery } =
//   flightApi;

// updated ChatGPT response

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { airlines } from "../airline"; // Assuming this is a list of available airlines with their names and logos

// export const flightApi = createApi({
//   reducerPath: "flightApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }), // This is your backend API base URL
//   tagTypes: [""],
//   endpoints: (builder) => ({
//     getAirports: builder.query({
//       query: (params) => {
//         return `searchCity?keyword=${params.keyword}`;
//       },
//     }),
//     getSignleFlights: builder.query({
//       query: (params) => {
//         return `flightOffers?originLocationCode=${params.origin}&destinationLocationCode=${params.destination}&departureDate=${params.date}&adults=1`;
//       },
//       transformResponse: (response) => {
//         // Attach airline name and logo to each flight in the response
//         const flightsWithAirlines = response.data.map((flight) => {
//           // Randomly pick an airline from the list
//           const randomAirline =
//             airlines[Math.floor(Math.random() * airlines.length)];

//           return {
//             ...flight,
//             airlineName: randomAirline.name,
//             airlineLogo: randomAirline.logo,
//           };
//         });

//         return { ...response, data: flightsWithAirlines };
//       },
//     }),

//     getRoundFlights: builder.query({
//       query: (params) => {
//         return `flightOffers?originLocationCode=${params.origin}&destinationLocationCode=${params.destination}&departureDate=${params.date}&returnDate=${params.returnDate}&adults=1`;
//       },
//       transformResponse: (response) => {
//         // Attach airline name and logo to each flight segment (both outbound and return)
//         const roundTripsWithAirlines = response.data.map((flight) => {
//           // Randomly pick an airline for both outbound and return flights
//           const randomAirline =
//             airlines[Math.floor(Math.random() * airlines.length)];

//           // Attach the airline name and logo to both the segments (departure and return)
//           const updatedItineraries = flight.itineraries.map((itinerary) => {
//             const updatedSegments = itinerary.segments.map((segment) => ({
//               ...segment,
//               airlineName: randomAirline.name,
//               airlineLogo: randomAirline.logo,
//             }));

//             return {
//               ...itinerary,
//               segments: updatedSegments,
//             };
//           });

//           return {
//             ...flight,
//             itineraries: updatedItineraries,
//             airlineName: randomAirline.name, // Optional: add airline to the main flight object too
//             airlineLogo: randomAirline.logo, // Optional: add logo to the main flight object
//           };
//         });

//         return { ...response, data: roundTripsWithAirlines };
//       },
//     }),
//   }),
// });

// export const {
//   useLazyGetSignleFlightsQuery,
//   useLazyGetRoundFlightsQuery,
//   useLazyGetAirportsQuery,
// } = flightApi;

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { airlines } from "../airline"; // Assuming this is a list of available airlines with their names and logos

// export const flightApi = createApi({
//   reducerPath: "flightApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }), // This is your backend API base URL
//   tagTypes: [""],
//   endpoints: (builder) => ({
//     getAirports: builder.query({
//       query: (params) => {
//         return `searchCity?keyword=${params.keyword}`;
//       },
//     }),

//     // Modify this endpoint to accept `travelClass` as a parameter
//     getSignleFlights: builder.query({
//       query: (params) => {
//         return `flightOffers?originLocationCode=${
//           params.origin
//         }&destinationLocationCode=${params.destination}&departureDate=${
//           params.date
//         }&adults=1&travelClass=${params.travelClass || "ECONOMY"}`;
//       },
//       transformResponse: (response) => {
//         // Attach airline name and logo to each flight in the response
//         const flightsWithAirlines = response.data.map((flight) => {
//           const randomAirline =
//             airlines[Math.floor(Math.random() * airlines.length)];
//           return {
//             ...flight,
//             airlineName: randomAirline.name,
//             airlineLogo: randomAirline.logo,
//           };
//         });
//         return { ...response, data: flightsWithAirlines };
//       },
//     }),

//     getRoundFlights: builder.query({
//       query: (params) => {
//         return `flightOffers?originLocationCode=${
//           params.origin
//         }&destinationLocationCode=${params.destination}&departureDate=${
//           params.date
//         }&returnDate=${params.returnDate}&adults=1&travelClass=${
//           params.travelClass || "ECONOMY"
//         }`;
//       },
//       transformResponse: (response) => {
//         const roundTripsWithAirlines = response.data.map((flight) => {
//           const randomAirline =
//             airlines[Math.floor(Math.random() * airlines.length)];
//           const updatedItineraries = flight.itineraries.map((itinerary) => {
//             const updatedSegments = itinerary.segments.map((segment) => ({
//               ...segment,
//               airlineName: randomAirline.name,
//               airlineLogo: randomAirline.logo,
//             }));
//             return {
//               ...itinerary,
//               segments: updatedSegments,
//             };
//           });
//           return {
//             ...flight,
//             itineraries: updatedItineraries,
//             airlineName: randomAirline.name,
//             airlineLogo: randomAirline.logo,
//           };
//         });
//         return { ...response, data: roundTripsWithAirlines };
//       },
//     }),
//   }),
// });

// export const {
//   useLazyGetSignleFlightsQuery,
//   useLazyGetRoundFlightsQuery,
//   useLazyGetAirportsQuery,
// } = flightApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { airlines } from "../../airline"; // Assuming this is a list of available airlines with their names and logos

  const flightApi = createApi({
  reducerPath: "flightSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api/v1" }), // Your backend API URL
  tagTypes: ["Flight", "Airports"],
  endpoints: (builder) => ({
    // Endpoint to get airports based on keyword (search functionality)
    getAirports: builder.query({
      query: (params) => {
        return `/searchCity?keyword=${params.keyword}`;
      },
      providesTags: ["Airports"],
    }),

    // Endpoint to get single flights (one-way)
    getSingleFlights: builder.query({
      query: (params) => {
        const {
          origin,
          destination,
          date,
          adults,
          children,
          travelClass,
          currencyCode,
        } = params;

        let queryUrl = `/flightOffers?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${date}&adults=${adults}&travelClass=${
          travelClass || "ECONOMY"
        }&currencyCode=${currencyCode}`;

        // Only add 'children' if it's greater than 0
        if (children > 0) {
          queryUrl += `&children=${children}`;
        }

        return queryUrl;
      },
      // transformResponse: (response) => {
      //   // Attach airline name and logo to each flight in the response
      //   const flightsWithAirlines = response.data.map((flight) => {
      //     const randomAirline =
      //       airlines[Math.floor(Math.random() * airlines.length)];
      //     return {
      //       ...flight,
      //       airlineName: randomAirline.name,
      //       airlineLogo: randomAirline.logo,
      //     };
      //   });

      //   return { ...response, data: flightsWithAirlines };
      // },

      transformResponse: (response) => {
        const flightsWithAirlines = [];
        const addedPrices = new Set(); // This will store unique flight prices

        response.data.forEach((flight) => {
          const randomAirline =
            airlines[Math.floor(Math.random() * airlines.length)];
          const flightPrice = flight.price.total;

          // Only add the flight if its price is unique (i.e., not already in the addedPrices set)
          // Randomly decide whether to add the flight
          const shouldAddFlight = Math.round(Math.random()) < 0.1; // 50% chance to add the flight

          if (shouldAddFlight) {
            flightsWithAirlines.push({
              ...flight,
              airlineName: randomAirline.name,
              airlineLogo: randomAirline.logo,
            });
            addedPrices.add(flightPrice); // Add the price to the set to avoid duplicates
          }
        });

        return { ...response, data: flightsWithAirlines };
      },

      // transformResponse: (response) => {
      //   const flightsWithAirlines = [];
      //   const addedPrices = new Set(); // This will store unique flight prices

      //   // Function to shuffle the last 3 digits of a string (price)
      //   const shuffleLastThree = (price) => {
      //     const priceStr = price.toString();
      //     if (priceStr.length > 3) {
      //       const lastThree = priceStr.slice(-4, -1); // Get last 3 digits
      //       const shuffled = lastThree
      //         .split("")
      //         .sort(() => Math.random() - 0.5) // Shuffle the digits
      //         .join("");
      //       return priceStr.slice(0, -4) + shuffled + priceStr.slice(-1); // Reassemble with shuffled digits
      //     }
      //     return priceStr; // If not enough digits, return as is
      //   };

      //   response.data.forEach((flight) => {
      //     const randomAirline =
      //       airlines[Math.floor(Math.random() * airlines.length)];
      //     const flightPrice = parseFloat(flight.price.total).toString();

      //     // Check if the price has already been added
      //     if (addedPrices.has(flightPrice)) {
      //       // Randomly decide whether to add the flight (10% chance)
      //       const shouldAddFlight = Math.random() < 0.1; // 10% chance to add the flight

      //       if (shouldAddFlight) {
      //         flightsWithAirlines.push({
      //           ...flight,
      //           airlineName: randomAirline.name,
      //           airlineLogo: randomAirline.logo,
      //         });
      //         addedPrices.add(flightPrice); // Add the price to the set to avoid duplicates
      //       }
      //     } else {
      //       // If the price is a duplicate, shuffle the last 3 digits of the price
      //       const shuffledPrice = shuffleLastThree(flightPrice);

      //       // Create a new object for the flight, but modify the price only (no spread operator on the whole object)
      //       const modifiedFlight = { ...flight };
      //       modifiedFlight.price.total = shuffledPrice; // Update only the total price, keep the rest unchanged

      //       flightsWithAirlines.push({
      //         ...modifiedFlight,
      //         airlineName: randomAirline.name,
      //         airlineLogo: randomAirline.logo,
      //       });
      //     }
      //   });

      //   // Return the modified response without changing the structure
      //   return { ...response, data: flightsWithAirlines };
      // },
    }),

    // Endpoint to get round-trip flights
    getRoundFlights: builder.query({
      query: (params) => {
        const {
          origin,
          destination,
          date,
          adults,
          children,
          travelClass,
          returnDate,
          currencyCode,
        } = params;
        // Construct the query URL for round-trip flights

        let queryUrl = `/flightOffers?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${date}&returnDate=${returnDate}&adults=${adults}&travelClass=${
          travelClass || "ECONOMY"
        }&currencyCode=${currencyCode}`;

        if (children > 0) {
          queryUrl += `&children=${children}`;
        }

        return queryUrl;
      },
      transformResponse: (response) => {
        // Attach airline name and logo to each flight in the response
        const roundTripsWithAirlines = response.data.map((flight) => {
          const randomAirline =
            airlines[Math.floor(Math.random() * airlines.length)];
          const updatedItineraries = flight.itineraries.map((itinerary) => {
            const updatedSegments = itinerary.segments.map((segment) => ({
              ...segment,
              airlineName: randomAirline.name,
              airlineLogo: randomAirline.logo,
            }));
            return {
              ...itinerary,
              segments: updatedSegments,
            };
          });
          return {
            ...flight,
            itineraries: updatedItineraries,
            airlineName: randomAirline.name,
            airlineLogo: randomAirline.logo,
          };
        });
        return { ...response, data: roundTripsWithAirlines };
      },
      providesTags: ["Flight"],
    }),
  }),
});

export const {
  useLazyGetSingleFlightsQuery,
  useLazyGetRoundFlightsQuery,
  useLazyGetAirportsQuery,
} = flightApi;
export default flightApi;
