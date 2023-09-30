import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosconfig from './axios';

const STATUSES = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};

const editJobSlice = createSlice({
  name: "editjob",
  initialState: {
    data: null,
    status: "",
  },
  extraReducers: (builder) => {
    builder.addCase(editJob.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(editJob.fulfilled, (state, action) => {
      state.status = STATUSES.IDLE;
      state.data = action.payload; 
    });
    builder.addCase(editJob.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});

const editJob = createAsyncThunk("editJob", async (obj) => {
  try {
    const {data, token, itemId} = obj;
    // console.log(data,"data");
    // console.log(token,"token");
    // console.log(itemId,"item id");
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    };

    const response = await axiosconfig.put(`job/updatejob/${itemId}`, data ,axiosConfig);
    return response.data; 
  } catch (error) {
    throw error;
  }
});

const { reducer } = editJobSlice;

export { editJob, reducer as editJobSlice  };
