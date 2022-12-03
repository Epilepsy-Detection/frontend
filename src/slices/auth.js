import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import AuthService from "../services/auth_service";
import createUserFromJson from "../models/user";

const user = localStorage.getItem("user");

export const register = createAsyncThunk(
  "auth/register",
  async ({ email, password, firstName, lastName }, thunkAPI) => {
    const response = await AuthService.register(
      email,
      password,
      firstName,
      lastName
    );

    localStorage.setItem("user", createUserFromJson(response.data, email));
    return { user: createUserFromJson(response.data, email) };
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    const response = await AuthService.login(email, password);

    localStorage.setItem("user", createUserFromJson(response.data, email));
    return { user: createUserFromJson(response.data, email) };
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [register.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;
