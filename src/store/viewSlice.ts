import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screenType: "desktop",
  width: typeof window !== "undefined" ? window.innerWidth : 1200,
};

const viewSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    setScreenType: (state, action) => {
      state.screenType = action.payload.screenType;
      state.width = action.payload.width;
    },
  },
});

export const { setScreenType } = viewSlice.actions;
export default viewSlice.reducer;

export const getScreenType = (width: number) => {
  if (width < 536) return "mobile";
  if (width < 768) return "tablet";
  if (width < 1400) return "medium";
  return "desktop";
};
