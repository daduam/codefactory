import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthParams, UserData } from "../../types";
import { mockApiLogin, mockApiSignup } from "./user-api";

interface UserState {
  status: "idle" | "loading" | "failed";
  data: UserData;
  isOnboarded: boolean | null;
}

const initialState: UserState = {
  status: "idle",
  data: {
    name: null,
    email: null,
    token: null,
    hasNotifications: null,
  },
  isOnboarded: null,
};

export const login = createAsyncThunk(
  "user/LOGIN",
  async (params: AuthParams) => {
    const { data } = await mockApiLogin(params);

    return data;
  }
);

export const signup = createAsyncThunk(
  "user/SIGNUP",
  async (params: AuthParams) => {
    const { data } = await mockApiSignup(params);

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
    logout() {
      return initialState;
    },
    setHasNotifications(state, action: PayloadAction<boolean>) {
      state.data.hasNotifications = action.payload;
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
      })
      .addCase(signup.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(signup.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { onboardUser, logout, setHasNotifications } = userSlice.actions;

export default userSlice.reducer;
