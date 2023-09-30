import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosconfig from './axios';

const STATUSES = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    data: null,
    status: "",
  },
  extraReducers: (builder) => {
    builder.addCase(signupUser.pending, (state, action) => {
      state.status = STATUSES.LOADING;
      
    });
    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.status = STATUSES.IDLE;
      state.data = action.payload; 
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});

const signupUser = createAsyncThunk("signupUser", async (obj) => {
  try {
    console.log(obj);
    const response = await axiosconfig.post('user/signup', obj);
    return response.data; 
  } catch (error) {
    throw error;
  }
});

const { reducer } = signupSlice;

export { signupUser, reducer as signupSlice };
