import themeReducer from "./themeSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
