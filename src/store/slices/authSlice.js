import flightApi from "./flightSlice";

const authApi = flightApi.injectEndpoints({
  reducerPath: "authSlice",
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useRegisterMutation } = authApi;
export default authApi;
