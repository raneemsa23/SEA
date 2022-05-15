import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/network";
import axios from "axios";

// const baseUrl = "https://526a240a-e089-435e-b087-188e5cf83341.mock.pstmn.io/";

export const fetchCourses = createAsyncThunk("fetch/courses", async () => {
  const response = await axiosInstance.get(`/items?type=course`);
  return response.data;
});
export const addCourse = createAsyncThunk("add/course", async (userData) => {
  const response = await axiosInstance.post(`/items?type=course`, userData);
  return response.data;
});
export const deleteCourse = createAsyncThunk("Delete/course", async (id) => {
  const response = await axiosInstance.delete(`/items?type=course/${id}`, id);
  return response.data;
});
export const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
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
    [fetchCourses.pending]: (state) => {
      state.loading = true;
    },
    [fetchCourses.fulfilled]: (state, action) => {
      state.courses = action.payload.items;
      state.loading = false;
    },
    [fetchCourses.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
    [deleteCourse.pending]: (state) => {
      state.loading = true;
    },
    [deleteCourse.fulfilled]: (state, action) => {
      //   state.Data = action.payload;
      state.loading = false;
    },
    [deleteCourse.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
    [addCourse.pending]: (state) => {
      state.loading = true;
    },
    [addCourse.fulfilled]: (state, action) => {
      //   state.Data = action.payload;
      state.loading = false;
    },
    [addCourse.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const {} = coursesSlice.actions;

export default coursesSlice.reducer;
