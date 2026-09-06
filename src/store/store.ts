import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import postApiSlice from "./postSliceApi";

export const store = configureStore({
  reducer: {
    product: productReducer,
    [postApiSlice.reducerPath]: postApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
