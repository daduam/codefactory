import { configureStore } from "@reduxjs/toolkit";

import onboardingReducer from "../features/onboarding/onboardingSlice";

export const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
