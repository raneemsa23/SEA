import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../utils/network";
// import axiosInstance from "../utils/network";
// const baseUrl = "https://526a240a-e089-435e-b087-188e5cf83341.mock.pstmn.io/";

export const login = createAsyncThunk("login/user", async (userData) => {
  const response = await axiosInstance.post(`/auth/login`, userData);

  localStorage.setItem("token", JSON.stringify(response.data.token));
  return response.data;
});
export const fetchUsers = createAsyncThunk("fetch/users", async () => {
  const response = await axiosInstance.get(`/client`);
  console.log("r", response.data);
  return response.data;
});
export const deleteUser = createAsyncThunk("Delete/user", async (id) => {
  const response = await axiosInstance.delete(`/client/${id}`, id);
  return response.data;
});
export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: false,
    success: false,
  },
  reducers: {
    //  getUsers:(state,action)=>{
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
    [fetchUsers.pending]: (state) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = action.payload.clients;
      state.loading = false;
    },
    [fetchUsers.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
    [deleteUser.pending]: (state) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      //   state.Data = action.payload;
      state.loading = false;
    },
    [deleteUser.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      //   state.Data = action.payload;
      state.loading = false;
      state.success = true;
    },
    [login.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;
