import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosconfig from './axios';

const STATUSES = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};

const otpSlice = createSlice({
  name: "otp",
  initialState: {
    data: null,
    status: "",
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.status = STATUSES.IDLE;
      state.data = action.payload; 
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});

const registerUser = createAsyncThunk("registerUser", async (obj) => {
  try {
    const response = await axiosconfig.post('user/sendOTP', obj);
    return response.data; 
  } catch (error) {
    throw error;
  }
});

const { reducer } = otpSlice;

export { registerUser, reducer as otpSlice };
