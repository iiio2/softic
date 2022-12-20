import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "../slices/postApiSlice";

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
