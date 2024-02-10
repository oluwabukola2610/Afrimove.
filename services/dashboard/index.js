import { constant } from "@/constant";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const busApi = createApi({
  reducerPath: "busApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${constant.API_URL}` }),
  endpoints: (builder) => ({
    getBus: builder.query({
      query: () => ({
        url: "/user/bus",
        method: "GET",
        credentials: "include",
      }),
      transformResponse: (response) => {
        return response?.data;
      },
    }),
    getBusDetails: builder.mutation({
      query: (body) => ({
        url: "/user/bus-data",
        method: "POST",
        credentials: "include",
        body,
      }),
      transformResponse: (response) => {
        return response?.data;
      },
    }),
  }),
});
export const { useGetBusQuery ,useGetBusDetailsMutation} = busApi;
