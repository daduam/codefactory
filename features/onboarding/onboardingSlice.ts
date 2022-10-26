import { createSlice } from "@reduxjs/toolkit";

interface OnboardingState {
  isOnboarded: boolean;
}

const initialState: OnboardingState = {
  isOnboarded: false,
};

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    onboardUser(state) {
      state.isOnboarded = true;
    },
    resetUserOnboarded(state) {
      state.isOnboarded = false;
    },
  },
});

export const { onboardUser, resetUserOnboarded } = onboardingSlice.actions;

export default onboardingSlice.reducer;
