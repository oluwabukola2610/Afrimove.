import { authApi } from "@/services/auth";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
    
    ),
});
