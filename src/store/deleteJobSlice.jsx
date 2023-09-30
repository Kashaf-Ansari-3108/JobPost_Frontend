import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosconfig from './axios';

const STATUSES = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};

const deleteJobSlice = createSlice({
  name: "deletejob",
  initialState: {
    data: null,
    status: "",
  },
  extraReducers: (builder) => {
    builder.addCase(deleteJob.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(deleteJob.fulfilled, (state, action) => {
      state.status = STATUSES.IDLE;
      state.data = action.payload; 
    });
    builder.addCase(deleteJob.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});

const deleteJob = createAsyncThunk("deleteJob", async (obj) => {
  try {
    const {itemId, token} = obj;
    console.log(itemId,"Item id");
    console.log(token,"token");
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    };

    const response = await axiosconfig.delete(`job/deletejob/${itemId}`, axiosConfig);
    return response.data; 
  } catch (error) {
    throw error;
  }
});

const { reducer } = deleteJobSlice;

export { deleteJob, reducer as deleteJobSlice  };
