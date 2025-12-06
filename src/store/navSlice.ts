import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type NavState = { activeSection: string | null };
const initialState: NavState = { activeSection: null };

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setActiveSection(state, action: PayloadAction<string | null>) {
      state.activeSection = action.payload;
    },
  },
});

export const { setActiveSection } = navSlice.actions;
export default navSlice.reducer;
