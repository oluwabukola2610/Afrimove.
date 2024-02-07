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
        url: "/auth/otp",
        method: "POST",
        body,
      }),
    }),
    Login: builder.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        credentials: "include",
        body,
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: "/user/data",
        method: "GET",
        credentials: "include",
      }),
      transformResponse: (response) => {
        return response?.userData;
      },
    }),
    forgetPass: builder.mutation({
      query: (body) => ({
        url: "/auth/forgot_pass",
        method: "POST",
        body,
      }),
    }),
    resetPass: builder.mutation({
      query: (body) => ({
        url: "/auth/pass_reset",
        method: "POST",
        body,
      }),
    }),
    Logout: builder.query({
      query: () => ({
        url: "/auth/logout",
        method: "DELETE",
        credentials: "include",
      }),
    }),
  }),
});
export const {
  useRegisterMutation,
  useValidateOtpMutation,
  useLoginMutation,
  useGetUserQuery,
  useForgetPassMutation,
  useResetPassMutation,
} = authApi;
