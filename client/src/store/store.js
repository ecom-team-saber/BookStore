import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import productsSlice from "./slices/productsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    products: productsSlice,
  },
});
