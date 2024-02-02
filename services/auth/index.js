import { constant } from "@/constant";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${constant.API_URL}` }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
    validateOtp: builder.mutation({
      query: (body) => ({
        url: "/otp",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const { useRegisterMutation,useValidateOtpMutation } = authApi;
