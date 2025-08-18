import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "./viewSlice";

export const store = configureStore({
  reducer: {
    view: viewReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
