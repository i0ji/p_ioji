import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ViewStateModel = {
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  screenWidth: 1920,
  screenHeight: 1080,
};

const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    },
    setScreenDimensions: (
      state,
      action: PayloadAction<{ width: number; height: number }>,
    ) => {
      const { width, height } = action.payload;
      state.screenWidth = width;
      state.screenHeight = height;

      state.isMobile = width < 768;
      state.isTablet = width >= 768 && width < 1024;
      state.isDesktop = width >= 1024;
    },
  },
});

export const { setIsMobile, setScreenDimensions } = viewSlice.actions;
export default viewSlice.reducer;
