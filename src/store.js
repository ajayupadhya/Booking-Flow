import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookingSlice from "./slice/bookingSlice";

const rootReducer = combineReducers({
  bookingSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
