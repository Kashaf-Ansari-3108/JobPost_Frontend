import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosconfig from './axios';

const STATUSES = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};

const getUserJobSlice = createSlice({
  name: "createjobs",
  initialState: {
    data: null,
    status: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getUserJob.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(getUserJob.fulfilled, (state, action) => {
      state.status = STATUSES.IDLE;
      state.data = action.payload; 
    });
    builder.addCase(getUserJob.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});

const getUserJob = createAsyncThunk("getUserJob", async (obj) => {
  try {
    const {uId, token} = obj;
    // console.log(uId,"uId");
    // console.log(token,"token");
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    };

    const response = await axiosconfig.get(`job/yourjobs/${uId}`, axiosConfig);
    return response.data; 
  } catch (error) {
    throw error;
  }
});

const { reducer } = getUserJobSlice;

export { getUserJob, reducer as getUserJobSlice  };
