import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// const baseUrl = "http://localhost:5000/api";
import axiosInstance from "../utils/network";

export const fetchBooks = createAsyncThunk(" fetch/book", async () => {
  const response = await axiosInstance.get(`/items?type=book`);
  return response.data;
});
export const addBook = createAsyncThunk("add/book", async (userData) => {
  const response = await axiosInstance.post(`/items?type=book`, userData);
  return response.data;
});
export const deleteBook = createAsyncThunk("delete/book", async (id) => {
  const response = await axiosInstance.delete(`/items?type=book/${id}`, id);
  return response.data;
});
export const librarySlice = createSlice({
  name: "library",
  initialState: {
    books: [],
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
    [fetchBooks.pending]: (state) => {
      state.loading = true;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.books = action.payload.items;
      state.loading = false;
    },
    [fetchBooks.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
    [deleteBook.pending]: (state) => {
      state.loading = true;
    },
    [deleteBook.fulfilled]: (state, action) => {
      //   state.Data = action.payload;
      state.loading = false;
    },
    [deleteBook.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
    [addBook.pending]: (state) => {
      state.loading = true;
    },
    [addBook.fulfilled]: (state, action) => {
      //   state.Data = action.payload;
      state.loading = false;
    },
    [addBook.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const {} = librarySlice.actions;

export default librarySlice.reducer;
