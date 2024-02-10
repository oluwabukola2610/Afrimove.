import { authApi } from "@/services/auth";
import { busApi } from "@/services/dashboard";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [busApi.reducerPath]: busApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, busApi.middleware),
});
