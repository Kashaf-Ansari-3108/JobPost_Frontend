import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosconfig from './axios';

const STATUSES = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};

const loginSlice = createSlice({
  name: "login",
  initialState: {
    data: null,
    status: "",
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.status = STATUSES.LOADING;
      
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.status = STATUSES.IDLE;
      state.data = action.payload; 
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});

const loginUser = createAsyncThunk("loginUser", async (obj) => {
  try {
    console.log(obj);
    const response = await axiosconfig.post('user/login', obj);
    return response.data; 
  } catch (error) {
    throw error;
  }
});

const { reducer } = loginSlice;

export { loginUser, reducer as loginSlice };
