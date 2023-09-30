import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosconfig from './axios';

const STATUSES = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};

const CreateJobSlice = createSlice({
  name: "createjobs",
  initialState: {
    data: null,
    status: "",
  },
  extraReducers: (builder) => {
    builder.addCase(CreateJob.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(CreateJob.fulfilled, (state, action) => {
      state.status = STATUSES.IDLE;
      state.data = action.payload; 
    });
    builder.addCase(CreateJob.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});

const CreateJob = createAsyncThunk("CreateJob", async (obj) => {
  try {
    const {data, token} = obj;
    // console.log(data,"data");
    // console.log(token,"token");
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    };

    const response = await axiosconfig.post('job/createjob', data, axiosConfig);
    return response.data; 
  } catch (error) {
    throw error;
  }
});

const { reducer } = CreateJobSlice;

export { CreateJob, reducer as CreateJobSlice  };
