import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axiosInstance from 'axiosInstance'
// const baseUrl = "http://localhost:5000/api";
import axiosInstance from "../utils/network";

export const fetchServices = createAsyncThunk(" fetch/service", async () => {
  const response = await axiosInstance.get(`/items?type=service`);
  return response.data;
});
export const addService = createAsyncThunk("add/service", async (userData) => {
  const response = await axiosInstance.post(`/items?type=service`, userData);
  return response.data;
});
export const deleteService = createAsyncThunk("delete/service", async (id) => {
  const response = await axiosInstance.delete(`/items?type=service/${id}`, id);
  return response.data;
});
export const servicesSlice = createSlice({
  name: "services",
  initialState: {
    services: [],
    loading: false,
    error: false,
  },
  reducers: {
    //  addUser:(state,action)=>{
    //      console.log(state);
    //      console.log(action);
    //      state.name=action.payload.name
    //      state.email=action.payload.email
    //  },
    //  startUser:(state)=>{
    //  state.loading=true
    //  },
    //  successUser:(state,action)=>{
    //    state.userData=action.payload;
    //    state.loading=false
    //  },
    //  errorUser:(state)=>{
    //   state.error=true;
    //   state.loading=false
    //  },
  },
  extraReducers: {
    [fetchServices.pending]: (state) => {
      state.loading = true;
    },
    [fetchServices.fulfilled]: (state, action) => {
      state.services = action.payload.items;
      state.loading = false;
    },
    [fetchServices.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
    [deleteService.pending]: (state) => {
      state.loading = true;
    },
    [deleteService.fulfilled]: (state, action) => {
      //   state.Data = action.payload;
      state.loading = false;
    },
    [deleteService.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
    [addService.pending]: (state) => {
      state.loading = true;
    },
    [addService.fulfilled]: (state, action) => {
      //   state.Data = action.payload;
      state.loading = false;
    },
    [addService.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const {} = servicesSlice.actions;

export default servicesSlice.reducer;
