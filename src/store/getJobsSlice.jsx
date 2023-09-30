import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosconfig from './axios';

const STATUSES = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};

const getjobsSlice = createSlice({
  name: "getjobs",
  initialState: {
    data: null,
    status: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getJobs.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(getJobs.fulfilled, (state, action) => {
      state.status = STATUSES.IDLE;
      state.data = action.payload; 
    });
    builder.addCase(getJobs.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});

const getJobs = createAsyncThunk("getJobs", async () => {
  try {
    const response = await axiosconfig.get('job/alljobs');
    return response.data; 
  } catch (error) {
    throw error;
  }
});

const { reducer } = getjobsSlice;

export { getJobs, reducer as getjobsSlice };
