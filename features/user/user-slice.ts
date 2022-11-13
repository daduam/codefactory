import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserData } from "../../types";
import { mockApiLogin } from "./user-api";

interface UserState {
  status: "idle" | "loading" | "failed";
  data: UserData;
  isOnboarded: boolean | null;
}

const initialState: UserState = {
  status: "idle",
  data: {
    email: null,
    token: null,
  },
  isOnboarded: null,
};

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }: { email: string; password: string }) => {
    const { data } = await mockApiLogin(email, password);

    return data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    onboardUser(state) {
      state.isOnboarded = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { onboardUser } = userSlice.actions;

export default userSlice.reducer;
