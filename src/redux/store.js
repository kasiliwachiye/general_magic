import { configureStore } from "@reduxjs/toolkit";
import likedSlice from "./likedSlice";

export const store = configureStore({
  reducer: {
    likedChecker: likedSlice,
  },
});
