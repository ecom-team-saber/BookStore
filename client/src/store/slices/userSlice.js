import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const instance = axios.create({
  baseURL: "http://localhost:1347",
  withCredentials: true,
});

export const fetchUser = createAsyncThunk("user/fetch", async () => {
  try {
    const { data } = await instance.get("/api/users/profile");
    return data;
  } catch (e) {
    console.error(e);
  }
});
export const logIn = createAsyncThunk("user/login", async (userInfo) => {
  try {
    const { data } = await instance.post("/api/users/login", userInfo);
    return data;
  } catch (e) {
    console.error(e);
  }
});
export const signUp = createAsyncThunk("user/signup", async (userInfo) => {
  try {
    const { data } = await instance.post("/api/users/signup", userInfo);
    return data;
  } catch (e) {
    console.error(e);
  }
});
export const fetchOrders = createAsyncThunk("user/fetchOrders", async () => {
  try {
    const { data } = await instance.get("/api/orders");
    return data;
  } catch (e) {
    console.error(e);
  }
});
export const fetchCart = createAsyncThunk("user/fetchCart", async () => {
  try {
    const { data } = await instance.get("/api/cart");
    return data;
  } catch (e) {
    console.error(e);
  }
});
export const editUser = createAsyncThunk("user/editUser", async (arr) => {
  try {
    const { data } = await instance.put("/api/users/profile", arr);
    return data;
  } catch (e) {
    console.error(e);
  }
});
export const logOut = createAsyncThunk("user/logout", async () => {
  try {
    const { data } = await instance.get("/api/users/logout");
    return data;
  } catch (e) {
    throw e;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    status: null,
    user: {},
    orders: [],
    cart: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.status = null;
      })
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      });
    builder
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.status = null;
      })
      .addCase(logIn.pending, (state) => {
        state.status = "loading";
      });
    builder
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.status = null;
      })
      .addCase(signUp.pending, (state) => {
        state.status = "loading";
      });
    builder
      .addCase(fetchOrders.fulfilled, (state, { payload }) => {
        state.orders = payload;
        state.status = null;
      })
      .addCase(fetchOrders.pending, (state) => {
        state.status = "loading";
      });
    builder
      .addCase(fetchCart.fulfilled, (state, { payload }) => {
        state.cart = payload;
        state.status = null;
      })
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
      });
    builder
      .addCase(editUser.fulfilled, (state, { payload }) => {
        state.user = payload;
      })
      .addCase(editUser.pending, (state, { payload }) => {
        state.status = "loading";
      });
  },
});

export default userSlice.reducer;
