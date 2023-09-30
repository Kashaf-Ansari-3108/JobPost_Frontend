import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosconfig from './axios';

const STATUSES = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};

const getUserSlice = createSlice({
  name: "getUser",
  initialState: {
    data: null,
    status: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.status = STATUSES.IDLE;
      state.data = action.payload; 
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});

const getUser = createAsyncThunk("getUser", async (obj) => {
  try {
    const {uId, token} = obj;
    // console.log(uId,"Item id");
    // console.log(token,"token");
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    };

    const response = await axiosconfig.get(`user/getuser/${uId}`, axiosConfig);
    return response.data; 
  } catch (error) {
    throw error;
  }
});

const { reducer } = getUserSlice;

export { getUser, reducer as getUserSlice  };
