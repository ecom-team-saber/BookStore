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
    throw e;
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
export const checkoutFunction = createAsyncThunk(
  "user/checkout",
  async (params) => {
    try {
      await instance.put("/api/users/address", params[0]);
      await instance.put("/api/cart/submit");
      const response = await instance.get("/api/users/profile");
      return response.data;
    } catch (e) {
      throw e;
    }
  }
);
export const logIn = createAsyncThunk("user/login", async (userInfo) => {
  try {
    const { data } = await instance.post("/api/users/login", userInfo.info);
    if (userInfo.vals.length > 0 && data.name) {
      try {
        await Promise.all(
          userInfo.vals.map(async (e) => {
            const res = await instance.post("/api/cart", e);
          })
        );

        document.cookie =
          "guest-cart=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      } catch (e) {
        throw e;
      }
    }

    return data;
  } catch (e) {
    console.error(e);
  }
});
export const signUp = createAsyncThunk("user/signup", async (userInfo) => {
  try {
    const { data } = await instance.post("/api/users/signup", userInfo.info);
    if (data.name && userInfo.vals.length > 0) {
      try {
        await Promise.all(
          userInfo.vals.map(async (e) => {
            const res = await instance.post("/api/cart", e);
          })
        );

        document.cookie =
          "guest-cart=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      } catch (e) {
        throw e;
      }
    }
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
    throw e;
  }
});
export const editQuantity = createAsyncThunk("user/editQuantity", async () => {
  try {
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
        state.status = "finished";
      })
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.rejected, (state) => {
        state.status = "error";
        state.user = {};
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
      })
      .addCase(fetchCart.rejected, (state) => {
        state.status = "error";
      });
    builder.addCase(logOut.fulfilled, (state) => {
      state.user = {};
      state.orders = [];
      state.status = null;
      state.cart = {};
    });
    builder.addCase(checkoutFunction.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = null;
    });
    builder
      .addCase(editUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.status = "finished";
      })
      .addCase(editUser.pending, (state, { payload }) => {
        state.status = "loading";
      });
  },
});

export default userSlice.reducer;
